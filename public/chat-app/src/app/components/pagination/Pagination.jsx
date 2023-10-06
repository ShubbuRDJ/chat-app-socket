import { TablePagination } from '@mui/material'
import React from 'react'

export default function Pagination({ totalRecords, page, setPage, rowsPerPage, setRowsPerPage }) {
    // *****************************about props***************************************
    // 1. totalRecords => this is a variable to store the totalRecords. 
    // 2. page => this is a state variable to handle the page number.
    // 3. setPage => this is a setter method of state variable to handle the page number.
    // 4. rowsPerPage => this is a state variable to handle the rows per page.
    // 5. setRowsPerPage => this is a setter method of state variable to handle the rows per page.
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={totalRecords}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}
