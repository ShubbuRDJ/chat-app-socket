import { Grid } from '@mui/material'
import React, { useState } from 'react'
import TableCustom from '../../components/table-custom/TableCustom'
import FilterCustom from '../../components/filter-custom/FilterCustom';
import SearchCustom from '../../components/search-custom/SearchCustom';
import Pagination from '../../components/pagination/Pagination';

const columns = [
  {
    id: "col2",
    label: "First Name",
    minWidth: 170,
  },
  {
    id: "col3",
    label: "Last Name",
    minWidth: 170,
  },
  {
    id: "col4",
    label: "Email",
    minWidth: 170,
  },
  {
    id: "col6",
    label: "Phone No.",
    minWidth: 170,
  },
  {
    id: "col8",
    label: "Status",
    minWidth: 170,
  },
];

const dataKey = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "status",
];

const dummyData = [
  {
    firstName:'Shubham',
    lastName:'Singh',
    email:'ss@123.com',
    phone:'1233132323',
    status:1,
  },
  {
    firstName:'Shubham',
    lastName:'Singh',
    email:'ss@123.com',
    phone:'1233132323',
    status:1,
  },
  {
    firstName:'Shubham',
    lastName:'Singh',
    email:'ss@123.com',
    phone:'1233132323',
    status:1,
  },
  {
    firstName:'Shubham',
    lastName:'Singh',
    email:'ss@123.com',
    phone:'1233132323',
    status:1,
  },
  {
    firstName:'Shubham',
    lastName:'Singh',
    email:'ss@123.com',
    phone:'1233132323',
    status:1,
  },
];
const actionKey = ['edit','delete']

const filterListArray = [
  "All",
  "First Name",
  "Last Name",
  "Email",
  "Phone No",
  "Status",
];
const filterKeysArray = [
  "All",
  "fName",
  "lName",
  "email",
  "phone",
  "status",
];
export default function Dashboard() {
  const [filterKey, setFilterKey] = useState('');
  const [searchKey, setSearchKey] = useState('');
  // state variable for pagination 
  const totalRecords = 100;  // This value should be set based on data fetched from the backend.
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  console.log(filterKey,'filter key');
  console.log(searchKey,'search key');
  console.log(page,'page number');
  console.log(rowsPerPage,'row per page');
  return (
    <>
    <Grid style={{display:"flex",justifyContent:"center"}}>
      <span style={{marginTop:"4rem", fontSize:"2rem"}}>This is a Dashboard page</span>
    </Grid>
    <FilterCustom label={'filter-label'} filterListArray={filterListArray} filterKey={filterKey} setFilterKey={setFilterKey} filterKeysArray={filterKeysArray} />
    <SearchCustom setSearchKey={setSearchKey}/>
      <TableCustom columns={columns} dataKey={dataKey} datas={dummyData} align={'center'} actionKey={actionKey} />
      <Pagination totalRecords={totalRecords} page={page} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage}/>
      </>
  )
}
