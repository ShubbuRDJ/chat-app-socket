# TableCustom Component
The TableCustom component is a reusable React component that allows you to create customizable tables in your web application. This component is built using Material-UI components and provides options for defining table columns, displaying data, and adding action buttons.

## Installation
To use the TableCustom component, you'll need to have React and Material-UI installed in your project. You can install it using npm or yarn:
```bash
npm install @mui/material @mui/icons-material react-router-dom
```
## Usage
Here's how you can use the TableCustom component in your React application:

1. Import the TableCustom component:
```bash
import TableCustom from './TableCustom'; // Update the path as per your project structure
```
2. Create an array of columns that define the table structure. Each column should have an id, label, and minWidth property:
```bash
const columns = [
  { id: 'column1', label: 'Column 1', minWidth: 100 },
  { id: 'column2', label: 'Column 2', minWidth: 150 },
  // Add more columns as needed
];
```
3. Prepare your data as an array of objects. Each object should represent a row in the table. You can specify which keys from the data objects should be displayed in each column using the dataKey prop:
```bash
const data = [
  { Id: 1, column1: 'Data 1', column2: 'Data 2', status: true },
  { Id: 2, column1: 'Data 3', column2: 'Data 4', status: false },
  // Add more data objects as needed
];

const dataKey = ['column1', 'column2', 'status']; // Specify which keys to display in each column
```
4. Optionally, specify action buttons that can be displayed for each row in the table. You can use the actionKey prop to define which actions to include ('edit', 'delete', 'view'):
```bash
const actionKey = ['edit', 'delete', 'view']; // Specify the actions you want to include
```
5. Use the TableCustom component in your JSX:
```bash
<TableCustom
  columns={columns}
  datas={data}
  dataKey={dataKey}
  editRouteAddress="/edit" // Specify the edit route address
  actionKey={actionKey}
  align="center" // Align table content horizontally ('center', 'left', or 'right')
/>
```
6. Make sure to include the necessary styles by importing your tableCustom.scss file.

## Props
1. columns (Array of Objects): Defines the table columns with id, label, and minWidth.

2. datas (Array of Objects): Represents the data to display in the table.

3. dataKey (Array of Strings): Specifies which keys from the data objects should be displayed in each column.

4. editRouteAddress (String): Route address for editing data.

5. actionKey (Array of Strings): Specifies which actions to include in the table (optional).

6. align (String): Sets the horizontal alignment of table content ('center', 'left', or 'right').

## Example
Here's a complete example of using the TableCustom component:
```bash
import React from 'react';
import TableCustom from './TableCustom'; // Update the path as per your project structure

const columns = [
  { id: 'column1', label: 'Column 1', minWidth: 100 },
  { id: 'column2', label: 'Column 2', minWidth: 150 },
  { id: 'status', label: 'Status', minWidth: 100 },
];

const data = [
  { Id: 1, column1: 'Data 1', column2: 'Data 2', status: true },
  { Id: 2, column1: 'Data 3', column2: 'Data 4', status: false },
];

const dataKey = ['column1', 'column2', 'status'];
const actionKey = ['edit', 'delete', 'view'];

function App() {
  return (
    <div>
      <TableCustom
        columns={columns}
        datas={data}
        dataKey={dataKey}
        editRouteAddress="/edit"
        actionKey={actionKey}
        align="center"
      />
    </div>
  );
}

export default App;
```
That's it! You now have a customizable table component in your React application.


Feel free to customize the README further based on your project's specific requirements and add any additional information or usage instructions as needed.
