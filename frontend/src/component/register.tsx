import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Col,
  Row,
  InputGroup,
  InputGroupText,
} from "reactstrap";
// import "./login.css";
export default function Register() {
  return (
    <Form className="form-login d-flex ">
      <div className="mx-auto text-center">
        <h4>
          <strong>Register</strong>
        </h4>
        <div className="mt-4">
          <FormGroup>
            <Row>
              <InputGroup>
                <InputGroupText style={{ width: "100px" }}>
                  Username :{" "}
                </InputGroupText>
                <Input placeholder="Username" />
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
                <Input placeholder="Password" type="password" />
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
                <Input placeholder="Confirm Password" type="password" />
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
                  Full Name :{" "}
                </InputGroupText>
                <Input placeholder="Full Name" type="text" />
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
                  Email :{" "}
                </InputGroupText>
                <Input placeholder="example@email.com" type="email" />
              </InputGroup>
            </Row>
          </FormGroup>{" "}
        </div>
        <div className="d-flex justify-content-center">
          <div className="mx-2">
            <Button className="mt-3">Login</Button>
          </div>
          <div className="mx-2">
            <Button className="mt-3">Register</Button>
          </div>
        </div>
      </div>
    </Form>
  );
}
