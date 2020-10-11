import {
  Button,
  Pagination, Table, TableBody,
  TableCell, TableContainer,
  TableFooter, TableHeader,
  TableRow
} from '@windmill/react-ui'
import React, { useEffect, useState } from 'react'
import { Link, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import {useProxySettingsQuery} from '../generated/graphql'


function ProxySettingsList() {
  const [page, setPage] = useState(1)

  const [result] = useProxySettingsQuery()
  
  const {data, fetching, error} = result

  const routes = data?.proxyRoutes?.nodes
  
  
  // pagination setup
  const resultsPerPage = 10
  const totalResults = routes?.length || 0

  // pagination change control
  function onPageChange(p:number) {
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
            {rows ? rows.map((route, i) => (
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
            )) :
              <TableRow>
                  <TableCell colspan="3">
                      No records found
                  </TableCell>
              </TableRow>
            }
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
            <Button>
              Reload
            </Button>
          </span>
          
        </TableFooter>
      </TableContainer>
    </>
  )
}

function AddProxyRoute() {
  return <div>TODO add proxy route screen</div>
}

function ProxySettings() {
  return <Switch>
    <Route
      path={`/app/proxy/addroute`}
      component={AddProxyRoute}
    />
    <Route component={ProxySettingsList} />
  </Switch>

}

export default ProxySettings
