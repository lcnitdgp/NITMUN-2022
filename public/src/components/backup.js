import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div class="body-wrapper">
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Amount</h1>
            </th>
            <th>
              <h1>Paid</h1>
            </th>
            <th>
              <h1>E-mail</h1>
            </th>
            <th>
              <h1>Ph no.</h1>
            </th>
            <th>
              <h1>Institute</h1>
            </th>
            <th>
              <h1>Committee</h1>
            </th>
            <th>
              <h1>Portfolio</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
          <tr>
            <td>Soumik Biswas</td>
            <td>700</td>
            <td>Yes</td>
            <td>soumikjiswas@gmail.com</td>
            <td>6290575119</td>
            <td>National Institute Of Technology, Durgapur</td>
            <td>UNGA</td>
            <td>Republic of India</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;





import * as React from 'react';
import "./dashboard.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

const theme = createTheme({
  palette: {
    primary: blue,
  },
});

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    color: red,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    color: red,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    color: red,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    color: red,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer theme={theme} sx={{ maxHeight: 740, color:"#2caac9"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead className='table'>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}