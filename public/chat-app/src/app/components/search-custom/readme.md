# SearchCustom Component
The SearchCustom component is a reusable React component that provides a search input field with an icon for user interaction. This component uses Material-UI components and allows users to perform searches and filter data.

## Installation
To use the SearchCustom component, you'll need to have React and Material-UI installed in your project. You can install Material-UI using npm or yarn:
```bash
npm install @mui/material
```
## Usage
Here's how you can use the SearchCustom component in your React application:
1. Import the SearchCustom component:
```bash
import SearchCustom from './SearchCustom'; // Update the path as per your project structure
```
2. Define a state variable to store the search key and a setter method to update it. You can use React's useState hook for this:
```bash
import React, { useState } from 'react';

// ...

function YourComponent() {
  const [searchKey, setSearchKey] = useState('');

  // ...
}
```
3. Use the SearchCustom component in your JSX:
```bash
<SearchCustom setSearchKey={setSearchKey} />
```

## Props
setSearchKey (Function): A setter method of the state variable in the parent component to receive and store the search key.

## Example
Here's a complete example of using the SearchCustom component:
```bash
import React, { useState } from 'react';
import SearchCustom from './SearchCustom';

function YourComponent() {
  const [searchKey, setSearchKey] = useState('');

  return (
    <div>
      <SearchCustom setSearchKey={setSearchKey} />
      {/* Rest of your component */}
    </div>
  );
}

export default YourComponent;
```


Now you have a reusable search component that allows users to input search terms, and the search key will be available for use in your parent component.



Feel free to customize the README further based on your project's specific requirements and add any additional information or usage instructions as needed.