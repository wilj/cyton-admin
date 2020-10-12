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
} from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { useForm } from 'react-hook-form'
import { useMutation } from 'urql'
import { useProxySettingsQuery, useAddProxyRouteMutation } from '../generated/graphql'

function ProxySettingsList() {
    const [page, setPage] = useState(1)

    const [result] = useProxySettingsQuery()

    const { data, fetching, error } = result

    const routes = data?.proxyRoutes?.nodes

    // pagination setup
    const resultsPerPage = 10
    const totalResults = routes?.length || 0

    // pagination change control
    function onPageChange(p: number) {
        setPage(p)
    }

    if (fetching) {
        return <div>...</div>
    }
    if (error) {
        return <div>{JSON.stringify(error)}</div>
    }

    const rows = routes?.slice((page - 1) * resultsPerPage, page * resultsPerPage)

    return (
        <>
            <PageTitle>Proxy Settings</PageTitle>
            <SectionTitle>Routes</SectionTitle>
            <TableContainer>
                <Table>
                    <TableHeader>
                        <tr>
                            <TableCell>External Host</TableCell>
                            <TableCell>Internal Host</TableCell>
                            <TableCell>Internal Port</TableCell>
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {rows ? (
                            rows.map((route, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <span className="text-sm">{route?.externalHostName}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">{route?.internalHostName}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="text-sm">{route?.internalPort}</span>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colspan="3">No records found</TableCell>
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
                        <Link to="/app/proxy/addroute">
                            <Button>
                                Add route
                                <span className="ml-2" aria-hidden="true">
                                    +
                                </span>
                            </Button>
                        </Link>
                        <Button>Reload</Button>
                    </span>
                </TableFooter>
            </TableContainer>
        </>
    )
}

type AddRouteFormData = {
    externalHost: string
    internalHost: string
    internalPort: number
}

function AddProxyRoute() {
    const { register, setValue, handleSubmit, errors } = useForm<AddRouteFormData>()
    const [addRouteResult, addRoute] = useAddProxyRouteMutation()

    
    const onSubmit = handleSubmit(async ({ externalHost, internalHost, internalPort }) => {
        const result = await addRoute({
            input: {
                proxyRoute: {
                    externalHostName: externalHost,
                    internalHostName: internalHost,
                    internalPort
                },
            },
        })
        alert(`addRoute result: ${JSON.stringify(result)}`)
    })

    console.log(`addRouteResult: ${JSON.stringify(addRouteResult)}`)

    return (
        <div className="px-4 py-3 mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <form onSubmit={onSubmit}>
                <Label className="mt-4">
                    <span>External host</span>
                    <Input
                        name="externalHost"
                        className="mt-1"
                        placeholder="example.com"
                        ref={register({ required: true })}
                    />
                </Label>
                <Label className="mt-4">
                    <span>Internal host</span>
                    <Input
                        name="internalHost"
                        className="mt-1"
                        placeholder="my-api-container"
                        ref={register({ required: true })}
                    />
                </Label>
                <Label className="mt-4">
                    <span>Internal port</span>
                    <Input
                        name="internalPort"
                        className="mt-1"
                        placeholder="3000"
                        type="number"
                        ref={register({ required: true, min: 1, max: 65536 })}
                    />
                </Label>
                <div className="mt-2 space-x-2 space-y-2">
                    <Button type="submit">Add route</Button>
                    <Link to="/app/proxy">
                        <Button className="bg-transparent">Cancel</Button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

function ProxySettings() {
    return (
        <Switch>
            <Route path={`/app/proxy/addroute`} component={AddProxyRoute} />
            <Route component={ProxySettingsList} />
        </Switch>
    )
}

export default ProxySettings
