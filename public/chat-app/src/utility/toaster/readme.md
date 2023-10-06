# Toaster Utility
The toaster utility function allows you to display toast messages using the react-toastify library. It provides a convenient way to show different types of toast messages, such as errors, warnings, successes, and information messages.

## Installation
Before using the toaster utility, make sure you have react-toastify installed in your project. You can install it using npm or yarn:
```bash
npm install react-toastify
```

## Usage
To use the toaster utility, follow these steps:

1. Import toast and the CSS styles from react-toastify in your project:
```bash
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```
2. In one place throughout your project, import and render the ToastContainer component:
```bash
import { ToastContainer } from 'react-toastify';

// Render the ToastContainer component
<ToastContainer />
```
3. Now you can use the toaster function to display toast messages with different types (e.g., error, warning, success, info) as needed. Here's an example of how to use it:
```bash
import toaster from './toaster'; // Update the path as per your project structure

// Example usage
toaster('success', 'Operation was successful.');
toaster('error', 'An error occurred.');
toaster('info', 'Here's some information.');
toaster('warning', 'This is a warning.');
```

## Parameters
1. type (String): Specifies the type of toast message. It can be one of the following: 'success', 'error', 'info', or 'warning'.

2. message (String): The message you want to display in the toast.

## Important Note
To ensure the proper functioning of the toast messages, remember to import and render the ToastContainer component in one place throughout your project.

## Example
Here's a complete example of using the toaster utility:
```bash
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toaster from './toaster';

function YourComponent() {
  // Example usage
  toaster('success', 'Operation was successful.');

  return (
    <div>
      {/* Rest of your component */}
    </div>
  );
}

export default YourComponent;
```

Now you can easily display toast messages with different types using the toaster utility in your React application.


Feel free to customize the README further based on your project's specific requirements and add any additional information or usage instructions as needed.
