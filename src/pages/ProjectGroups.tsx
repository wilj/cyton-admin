import {
    Button,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHeader,
    TableRow,
    Input,
    HelperText,
    Label,
    Select,
    Textarea,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { useForm } from 'react-hook-form'
import {
    useProjectGroupListQuery,
    useDefineProjectGroupMutation,
    useInitProjectGroupMutation,
} from '../generated/graphql'
import { TrashIcon } from '../icons'
import LoadingIcon from '../components/LoadingIcon'
import Alert from '../components/Alert'

function ProjectGroupList() {
    const [page, setPage] = useState(1)

    const [{ data, fetching, error }, refreshResults] = useProjectGroupListQuery()

    const rows = data?.projectGroups?.nodes

    // pagination setup
    const resultsPerPage = 10
    const totalResults = rows?.length || 0

    // pagination change control
    function onPageChange(p: number) {
        setPage(p)
    }

    if (fetching) {
        return <LoadingIcon />
    }
    if (error) {
        return <div>{JSON.stringify(error)}</div>
    }

    const pageRows = rows?.slice((page - 1) * resultsPerPage, page * resultsPerPage)

    return (
        <>
            <PageTitle>Project Groups</PageTitle>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>Group Name</TableCell>
                            <TableCell>Base Domain</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {pageRows ? (
                            pageRows.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <span className="text-sm">{row?.name}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">{row?.baseDomain}</span>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colspan="2">No project groups found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TableFooter>
                    <Pagination
                        totalResults={totalResults}
                        resultsPerPage={resultsPerPage}
                        label="Table navigation"
                        onChange={onPageChange}
                    />
                    <span className="space-x-2">
                        <Link to="/app/projectgroups/add">
                            <Button>
                                Create new project group
                                <span className="ml-2" aria-hidden="true">
                                    +
                                </span>
                            </Button>
                        </Link>
                    </span>
                </TableFooter>
            </TableContainer>
        </>
    )
}

type AddProjectGroupFormData = {
    name: string
    subdomain: string
    description: string
    adminAccountName: string
    adminInitialPassword: string
}

function AddProjectGroup() {
    const {
        register,
        setValue,
        handleSubmit,
        errors,
        formState: { isSubmitted },
        getValues,
        watch,
    } = useForm<AddProjectGroupFormData>()

    // TODO FIXME add cyton env vars like baseDomain to cyton hook or something
    const hostDomain = `.home.cyton.org`

    const [{ fetching: defineFetching }, defineProjectGroup] = useDefineProjectGroupMutation()
    const [{ fetching: initFetching, data: initProjectGroupData }, initProjectGroup] = useInitProjectGroupMutation()

    const createIsRunning = defineFetching || initFetching

    const onSubmit = handleSubmit(async ({ name, subdomain, description, adminAccountName, adminInitialPassword }) => {
        const baseDomain = subdomain + hostDomain
        const { data: defineData } = await defineProjectGroup({
            input: {
                name,
                baseDomain,
                description,
            },
        })
        console.log(`defineProjectGroup result`, defineData)

        const projectGroupId = defineData?.defineProjectGroup?.projectGroupId
        if (!projectGroupId) {
            throw `defineProjectGroup did not return a projectGroupId`
        }

        const { data: initData } = await initProjectGroup({
            input: { projectGroupId, adminAccountName, adminInitialPassword },
        })
        console.log(`initProjectGroup result`, initData)
    })

    if (initProjectGroupData?.initProjectGroup?.status) {
        return <Redirect to="/app/projectgroups" />
    }

    const isValid = (key: keyof AddProjectGroupFormData) => (isSubmitted ? !errors[key] : undefined)
    const formSubdomain = watch(`subdomain`)
    return (
        <div className="px-4 py-3 mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <form onSubmit={onSubmit}>
                <Label className="mt-4">
                    <span>Project group name</span>
                    <Input
                        name="name"
                        className="mt-1"
                        placeholder="My Project Group"
                        ref={register({ required: true })}
                        valid={isValid(`name`)}
                    />
                    <HelperText valid={isValid(`name`)}>Project group name is required</HelperText>
                </Label>
                <Label className="mt-4">
                    <span>Sub-domain</span>
                    <Input
                        name="subdomain"
                        className="mt-1"
                        placeholder="myprojectgroup or my-project-group"
                        ref={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9\-]*$/,
                            maxLength: 50,
                        })}
                        valid={isValid(`subdomain`)}
                    />
                    <HelperText valid={isValid(`subdomain`)}>
                        {formSubdomain ? `${formSubdomain}${hostDomain}` : `Subdomain is required.`}
                    </HelperText>
                </Label>
                <Label className="mt-4">
                    <span>Description</span>
                    <Input
                        name="description"
                        className="mt-1"
                        placeholder="Optional description"
                        ref={register}
                        valid={isValid(`description`)}
                    />
                </Label>
                <Label className="mt-4">
                    <span>Admin account name</span>
                    <Input
                        name="adminAccountName"
                        className="mt-1"
                        placeholder="admin"
                        ref={register({
                            required: true,
                        })}
                        valid={isValid(`adminAccountName`)}
                    />
                    <HelperText valid={isValid(`adminAccountName`)}>
                        The project group administrator account name
                    </HelperText>
                </Label>
                <Label className="mt-4">
                    <span>Admin password</span>
                    <Input
                        name="adminInitialPassword"
                        type="password"
                        className="mt-1"
                        placeholder="**********"
                        ref={register({
                            required: true,
                        })}
                        valid={isValid(`adminInitialPassword`)}
                    />
                    <HelperText valid={isValid(`adminInitialPassword`)}>
                        The initial password for the admin account
                    </HelperText>
                </Label>
                <div className="mt-2 space-x-2 space-y-2">
                    {createIsRunning ? (
                        <>
                            <Button disabled>
                                Creating project group...&nbsp;&nbsp;
                                <LoadingIcon />
                            </Button>
                            <Button disabled className="bg-transparent">
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button type="submit">Create project group</Button>
                            <Link to="/app/projectgroups">
                                <Button className="bg-transparent">Cancel</Button>
                            </Link>
                        </>
                    )}
                </div>
            </form>
        </div>
    )
}

function ProjectGroups() {
    return (
        <Switch>
            <Route path={`/app/projectgroups/add`} component={AddProjectGroup} />
            <Route component={ProjectGroupList} />
        </Switch>
    )
}

export default ProjectGroups
