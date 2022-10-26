import {
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import inst_axios from "./../services/api";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwt_decode from "jwt-decode";

export default function Login() {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      inst_axios
        .post("login/", {
          username: values.username,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access);
          // localStorage.setItem("refresh_token", res.data.refresh);
          inst_axios.defaults.headers.common["Authorization"] =
            "JWT " + localStorage.getItem("access_token");
          window.location.href = "/";
        });
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .max(32, "Username must have a maximum of 32 characters.")
        .required("Required"),
      password: Yup.string()
        .min(8, "Username must be at least 8 characters")
        .max(32, "Username must have a maximum of 32 characters.")
        .required("Required"),
    }),
  });
  return (
    <form className="form-login d-flex" onSubmit={formik.handleSubmit}>
      <div className="mx-auto text-center">
        <FormGroup>
          <div className="my-4">
            <i
              className="fa-solid fa-user"
              style={{
                fontSize: "100px",
                padding: "15px",
                border: "1px solid #333",
              }}
            ></i>
          </div>
          <h4>
            <strong>Login</strong>
          </h4>
          <Row>
            <InputGroup>
              <InputGroupText style={{ width: "100px" }}>
                Username :{" "}
              </InputGroupText>
              <Input
                placeholder="Username"
                id="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
          </Row>
        </FormGroup>{" "}
        <FormGroup>
          <Row>
            <InputGroup>
              <InputGroupText
                style={{
                  width: "100px",
                }}
              >
                Password :{" "}
              </InputGroupText>
              <Input
                placeholder="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </InputGroup>
          </Row>
        </FormGroup>{" "}
        <div className="d-flex justify-content-center">
          <div className="mx-2">
            <Button className="mt-3" type="submit">
              Login
            </Button>
          </div>
          <div className="mx-2">
            <Button className="mt-3">Register</Button>
          </div>
        </div>
      </div>
    </form>
  );
}
