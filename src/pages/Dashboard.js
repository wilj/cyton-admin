import {
  Pagination, Table, TableBody,



  TableCell, TableContainer,




  TableFooter, TableHeader,

  TableRow
} from '@windmill/react-ui'
import gql from 'graphql-tag'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'urql'
import PageTitle from '../components/Typography/PageTitle'




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

  console.log(`migrations response`, response)
  
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
  }, [page, response.length])

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
