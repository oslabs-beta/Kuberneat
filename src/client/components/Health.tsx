// @ts-nocheck
import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column { 
  id: 'Name' | 'Status' | 'Message' | "Error";
  label: string;
  minWidth?: number;
  algin?: 'right';
  format?: (value: string) => string;
}

const podColumns: readonly Column[] = [
  { id: 'Name', label: 'Name', minWidth: 170 },
  { id: 'Status', label: 'Status', minWidth: 100 },
  { id: 'Message', label: 'Message', minWidth: 170 },
  {id: 'Error', label: 'Error', minWidth: 170},
];

interface Data { 
  Name: string;
  Status: string;
  Message: string;
  Error: string;
}

function createData(
  Name: string,
  Status: string,
  Message: string,
  Error: string,
): Data {
  return { Name, Status, Message, Error };
}

const Health = () => {
  const [podsData, setPodsData] = useState<Data[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  }
  const handleChangeRowPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  useEffect(() => {
    fetch('/health', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
       const rows = data.map((pod: any) => createData(pod.Pod, pod.Status, pod.Message, pod.Error));
        setPodsData(rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
      <h1>Node Status</h1>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {podColumns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.algin}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {podsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return(
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.Name}>
                    {podColumns.map((column) => {
                      const value = row[column.id];
                      return(
                        <TableCell key={column.id} align={column.algin}>
                          {column.format && typeof value === 'string' ? column.format(value) : value}
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
          rowsPerPageOptions={[10]}
          component="div"
          count={podsData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowPerPage}
        />
      </Paper>
    </div>
  );
};

export default Health;
