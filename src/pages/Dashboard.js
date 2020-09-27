import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'

import {useQuery, initClient} from 'urql'
import gql from 'graphql-tag'

// initClient({url})

function Dashboard() {
  const [page, setPage] = useState(1)
  const [migrations, setMigrations] = useState([])

  const [result, rexecuteQuery] = useQuery({query: gql`
    query DashboardQuery {
      migrations(orderBy: CREATED_TS_ASC) {
        nodes {
          name
          createdTs
        }
      }
    }
  `})
  const {data, fetching, error} = result

  const response = data?.migrations?.nodes || []

  
  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setMigrations(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Migration Name</TableCell>
              <TableCell>Timestamp</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {migrations.map((mig, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span className="text-sm">{mig.name}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{mig.createdTs}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>
    </>
  )
}

export default Dashboard
