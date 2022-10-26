import * as Yup from "yup";

export const SchemaLogin = Yup.object().shape({
  username: Yup.string()
    .min(6, "Username must be at least 6 characters")
    .max(32, "Username must have a maximum of 32 characters.")
    .required("Required"),
  password: Yup.string()
    .min(8, "Username must be at least 8 characters")
    .max(32, "Username must have a maximum of 32 characters.")
    .required("Required"),
});
