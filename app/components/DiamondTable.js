import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function createData(carat, clarity, price, rarity, rating) {
  return { carat, clarity, price, rarity, rating }
}

const rows = [
  createData("Blue Diamond", 159, 6.0, 24, 4.0),
  createData("Red Diamond", 237, 9.0, 37, 4.3),
  createData("Green Diamond", 262, 16.0, 24, 6.0),
  createData("Black Diamond", 305, 3.7, 67, 4.3),
]

export default function DiamondTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, maxWidth: 800 }}
        className="bg-slate-800 "
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell className="text-white">Diamond Name</TableCell>

            <TableCell className="text-white" align="right">
              clarity
            </TableCell>
            <TableCell className="text-white" align="right">
              price
            </TableCell>
            <TableCell className="text-white" align="right">
              rarity
            </TableCell>
            <TableCell className="text-white" align="right">
              rating
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.carat}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="text-white" component="th" scope="row">
                {row.carat}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.clarity}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.price}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.rarity}
              </TableCell>
              <TableCell className="text-white" align="right">
                {row.rating}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
