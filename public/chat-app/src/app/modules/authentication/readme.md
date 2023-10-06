# Authentication-pages 
This readme file provides an overview of a set of authentication pages commonly used in web applications, such as login, registration, and password reset pages. The readme outlines their purpose, features, and considerations for implementation.

## 1. Login Page

## Purpose:
The login page is designed for users to authenticate themselves by entering their credentials (typically email and password). Upon successful authentication, users gain access to protected areas of the application.
React component for a login page using Material-UI, React-Toastify for notifications, and React Router for navigation.

## Features:
Input fields for email and password.
"Remember Me" option for persistent sessions.
"Forgot Password" link for password reset.
Validation and error handling for incorrect credentials.
Registration link for new users.

## Implementation Considerations:
Session Management: cookies to manage user sessions.

## Usages:
To use this component, you can integrate it into your React application by importing it and rendering it within your application's routing structure. Ensure that you have the necessary dependencies installed, including Material-UI, React-Toastify, and React Router.

## Code Structure:
The code consists of the following sections:

1. Import Statements: This section imports the necessary components, libraries, and styles for the login page, including Material-UI components, React-Toastify, and React Router.

2. Component Declaration: The Login function component is declared. It uses React Hooks (useState and useEffect) to manage component state and side effects.

3. State Management: The component manages several states, including showPassword for toggling password visibility, email and password for storing user input, and rememberMe for handling the "Remember Me" checkbox.

4. Predefined Login Credentials: Predefined login credentials are provided in the loginCredentials object for demonstration purposes.
You can delete this portion when you manage check credentials using API calls.

5. Event Handlers: The component defines event handler functions such as handleClickShowPassword, handleMouseDownPassword, and handleSubmit to manage form submission, password visibility, and error handling.

6. UseEffect for Cookie Handling: The useEffect hook is used to check for and retrieve stored user data from cookies, enabling auto-filling of the email and password fields.

7. Render Method: The render method returns JSX, representing the login form. Material-UI components like TextField, FormControl, and IconButton are used to structure the form. It includes fields for email and password, a "Remember Me" checkbox, a "Forgot Password" link, and a login button.

8. Toast Notifications: React-Toastify is used to display toast notifications for login success or failure.

## How to Run
To run the code:

1. Make sure you have a React project set up with the required dependencies.

2. Copy and paste the provided Login component code into a new or existing React component file.

3. Import any necessary dependencies mentioned in the code (e.g., Material-UI, React-Toastify, React Router).

4. Include the Login component in your application's routing system or within the desired part of your application.

5. Run your React application using npm start or a similar command.

6. Access the login page in your application and test its functionality.

## Dependencies
The code relies on the following dependencies:

1. React
2. Material-UI
3. React-Toastify
4. React Router (for the useNavigate hook)
5. Ensure you have these dependencies installed in your project using npm or yarn.

## Contribution
If you wish to contribute or make improvements to this component, feel free to fork the code, make your changes, and submit a pull request.

## License
This code is provided without a specific license. You can choose to use it and modify it as needed in your own projects.


## 2. Sign-Up Page

## Purpose:
The registration page allows new users to create an account by providing their personal information and choosing a password. After registration, users can log in.
React component for a sign-up form using Material-UI, yup for validation, formik for form control in react and React-Toastify for displaying notifications.

## Features:
Input fields for user details (e.g., first name, last name, email, password).
Password and confirm password fields.
Validation for all field using yup and formik .

## Code Structure
The code consists of the following sections:

1. Import Statements: This section imports the necessary components, libraries, and styles for the sign-up form.

2. Component Declaration: The SignUp function component is declared. It takes advantage of React Hooks (useState) and React Router (useNavigate) for handling form state and navigation.

3. State Management: The component uses useState to manage the state of various elements, such as showPassword, showConfirmPassword, and credentials.

4. Event Handlers: Several event handler functions are defined. These include functions to toggle password visibility (handleClickShowPassword, handleClickShowConfirmPassword), prevent mouse down events (handleMouseDownPassword), and handle form input changes (handleChange). There's also a handleSubmit function for form submission.

5. Render Method: The render method returns JSX, which represents the sign-up form. It includes form fields for first name, last name, email, password, and confirm password. The form also has buttons for submitting the form and a link to the login page. Material-UI components like TextField, FormControl, and IconButton are used to structure the form.

6. Toast Notifications: The code utilizes React-Toastify for displaying toast notifications. A ToastContainer is placed at the top of the component to render notifications for successful sign-up or password mismatch.

## Usage
To use this component, you can integrate it into your React application by importing it and rendering it within your application's routing structure. Ensure that you have the necessary dependencies installed, including Material-UI and React-Toastify.

## How to Run
To run the code:

1. Make sure you have a React project set up with the required dependencies.

2. Copy and paste the provided SignUp component code into a new or existing React component file.

3. Import any necessary dependencies mentioned in the code (e.g., Material-UI, React-Toastify).

4. Include the SignUp component in your application's routing system or within the desired part of your application.

5. Run your React application using npm start or a similar command.

6. Access the sign-up form in your application and test its functionality.

## Dependencies
The code relies on the following dependencies:

1. React
2. Material-UI
3. React-Toastify
4. React Router (for the useNavigate hook)
5. yup (for validation)
6. formik (for form control)
7. Ensure you have these dependencies installed in your project using npm or yarn.

## Contribution
If you wish to contribute or make improvements to this component, feel free to fork the code, make your changes, and submit a pull request.

## License
This code is provided without a specific license. You can choose to use it and modify it as needed in your own projects.



## 3. Forgot Password Page 
React component for a password reset request page using Material-UI and React-Toastify for notifications.

## Code Structure
The code consists of the following sections:

1. Import Statements: This section imports the necessary components, libraries, and styles for the forgot password page, including Material-UI components, React-Toastify, and React Router.

2. Component Declaration: The ForgotPassword function component is declared. It uses React Hooks (useState) to manage component state.

3. State Management: The component manages the email state to store the user's email input.

4. Event Handlers: The component defines an event handler function, handleSubmit, to manage the form submission when the user requests a password reset. It also includes navigation to the login page and displaying a success toast notification.

5. Render Method: The render method returns JSX, representing the forgot password request form. Material-UI components like TextField and Button are used to structure the form. It includes a field for the user to enter their email and a button to trigger the password reset request. Additionally, there is a "Back to Login" link.

6. Toast Notifications: React-Toastify is used to display a toast notification for the successful email submission.

## Usage
To use this component, you can integrate it into your React application by importing it and rendering it within your application's routing structure. Ensure that you have the necessary dependencies installed, including Material-UI, React-Toastify, and React Router.

## How to Run
To run the code:

1. Make sure you have a React project set up with the required dependencies.

2. Copy and paste the provided ForgotPassword component code into a new or existing React component file.

3. Import any necessary dependencies mentioned in the code (e.g., Material-UI, React-Toastify, React Router).

4. Include the ForgotPassword component in your application's routing system or within the desired part of your application.

5. Run your React application using npm start or a similar command.

6. Access the forgot password page in your application and test its functionality.

## Dependencies
The code relies on the following dependencies:

1. React
2. Material-UI
3. React-Toastify
4. React Router (for the useNavigate hook)
5. Ensure you have these dependencies installed in your project using npm or yarn.

## Contribution
If you wish to contribute or make improvements to this component, feel free to fork the code, make your changes, and submit a pull request.

## License
This code is provided without a specific license. You can choose to use it and modify it as needed in your own projects.