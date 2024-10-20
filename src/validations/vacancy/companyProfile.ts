import * as yup from "yup";
import { AnyObjectSchema } from "yup";

export const companyProfileValidationSchema: AnyObjectSchema = yup.object().shape({
  companyName: yup.string().required("Company Name is required"),
  // categoryId: yup.string().required("Category is required"),
  email: yup
    .string()
    .nullable()
    .email("Invalid email format")
    .test("emailOrPhone", "Email or phone number is required", function (value) {
      return value || this.parent.phoneNumber;
    }),
  phoneNumber: yup
    .string()
    .nullable()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .test("phoneOrEmail", "Phone number or email is required", function (value) {
      return value || this.parent.email;
    }),
  // website: yup.string().url("Invalid URL format").required("Website is required"),
  // location: yup.string().required("Location is required"),
  // established: yup.date().required("Est. Since is required"),
  // description: yup.string().required("Description is required"),
});

