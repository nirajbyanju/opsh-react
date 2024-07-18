import * as yup from "yup";

export const registrationValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  userName: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
  cPassword: yup.string().required("Confirm Password is required"),
});