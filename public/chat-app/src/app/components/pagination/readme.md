# Pagination Component
The Pagination component is a reusable React component that provides pagination controls for managing large datasets displayed in a table or list. This component is built using Material-UI's TablePagination component and allows users to navigate through pages and change the number of items displayed per page.

## Installation
To use the Pagination component, you'll need to have React and Material-UI installed in your project. You can install Material-UI using npm or yarn:
```bash
npm install @mui/material
```

## Usage
Here's how you can use the Pagination component in your React application:

1. Import the Pagination component:
```bash
import Pagination from './Pagination'; // Update the path as per your project structure
```
2. Define state variables to store the following values: totalRecords, page, setPage, rowsPerPage, and setRowsPerPage. You can use React's useState hook for this:
```bash
import React, { useState } from 'react';

// ...

function YourComponent() {
  const [totalRecords, setTotalRecords] = useState(0); // Total number of records
  const [page, setPage] = useState(0); // Current page number
  const [rowsPerPage, setRowsPerPage] = useState(10); // Number of rows per page

  // ...
}
```
3. Use the Pagination component in your JSX:
```bash
<Pagination
  totalRecords={totalRecords}
  page={page}
  setPage={setPage}
  rowsPerPage={rowsPerPage}
  setRowsPerPage={setRowsPerPage}
/>
```

## Props
1. totalRecords (Number): A variable that stores the total number of records.

2. page (Number): A state variable used to handle the current page number.

3. setPage (Function): A setter method of the state variable used to handle the page number.

4. rowsPerPage (Number): A state variable used to handle the number of rows displayed per page.

5. setRowsPerPage (Function): A setter method of the state variable used to handle the number of rows displayed per page.

## Example
Here's a complete example of using the Pagination component:

```bash
import React, { useState } from 'react';
import Pagination from './Pagination';

function YourComponent() {
  const [totalRecords, setTotalRecords] = useState(100); // Example: Total number of records
  const [page, setPage] = useState(0); // Example: Current page number
  const [rowsPerPage, setRowsPerPage] = useState(10); // Example: Number of rows per page

  // ...

  return (
    <div>
      {/* Your data table or list component here */}
      <Pagination
        totalRecords={totalRecords}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </div>
  );
}

export default YourComponent;
```


Now you have a reusable pagination component that allows users to navigate through data pages and control the number of items displayed per page.


Feel free to customize the README further based on your project's specific requirements and add any additional information or usage instructions as needed.