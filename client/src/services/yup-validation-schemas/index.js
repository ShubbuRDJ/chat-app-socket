import * as Yup from "yup";

export const signUpSchema = Yup.object({
  userName: Yup.string().min(3,'UserName should be greater than 3 characters')
    .required("Please enter UserName")
    .matches(/^[A-Za-z0-9]+$/, "UserName sholud be contain only alphabets and numbers"),
  email: Yup.string().email().required("Please enter Email"),
  password: Yup.string()
    .min(8)
    .max(30)
    .required("Please enter Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      "Password must have length of at least 8 characters including at least one uppercase letter, one lowercase, one numeric value and one special character"
    ),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password should be matched"),
});
