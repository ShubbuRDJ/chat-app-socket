# FilterCustom Component
The FilterCustom component is a reusable React component that allows you to create a filter dropdown for selecting options from a list. This component is built using Material-UI components and provides options for selecting and filtering data based on user preferences.

## Installation
To use the FilterCustom component, you'll need to have React and Material-UI installed in your project. You can install it using npm or yarn:
```bash
npm install @mui/material
```

## Usage
Here's how you can use the FilterCustom component in your React application:
1. Import the FilterCustom component:
```bash
import FilterCustom from './FilterCustom'; // Update the path as per your project structure
```
2. Create an array of filter options that you want to display in the dropdown. Also, create an array of corresponding filter keys, which are values used for filtering:
```bash
const filterListArray = ["Option 1", "Option 2", "Option 3"];
const filterKeysArray = ["option1", "option2", "option3"];
```
3. Define a state variable to store the selected filter key and a setter method to update it. You can use React's useState hook for this:
```bash
import React, { useState } from 'react';

// ...

function YourComponent() {
  const [filterKey, setFilterKey] = useState('');
  
  // ...
}
```
4. Use the FilterCustom component in your JSX:
```bash
<FilterCustom
  filterListArray={filterListArray}
  filterKeysArray={filterKeysArray}
  filterKey={filterKey}
  setFilterKey={setFilterKey}
  label="Filter by Option"
/>
```
## Props
1. filterListArray (Array): An array of all possible filter options to display on the user interface.

2. filterKeysArray (Array): An array of all possible filter keys corresponding to the filter options.

3. filterKey (String): A state variable of the parent component to receive and store the selected filter key.

4. setFilterKey (Function): A setter method of the state variable of the parent component to update the selected filter key.

5. label (String): A label for the filter component.

## Example
Here's a complete example of using the FilterCustom component:
```bash
import React, { useState } from 'react';
import FilterCustom from './FilterCustom';

const filterListArray = ["Option 1", "Option 2", "Option 3"];
const filterKeysArray = ["option1", "option2", "option3"];

function YourComponent() {
  const [filterKey, setFilterKey] = useState('');

  return (
    <div>
      <FilterCustom
        filterListArray={filterListArray}
        filterKeysArray={filterKeysArray}
        filterKey={filterKey}
        setFilterKey={setFilterKey}
        label="Filter by Option"
      />
      {/* Rest of your component */}
    </div>
  );
}

export default YourComponent;
```

That's it! You now have a customizable filter component in your React application that allows users to select options from a dropdown.



Feel free to customize the README further based on your project's specific requirements and add any additional information or usage instructions as needed.
