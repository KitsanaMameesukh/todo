import React, { useContext, useEffect, useState } from "react";
import inst_axios from "./../services/api";
import { AuthContext } from "../auth/context";
import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Row,
  Input,
} from "reactstrap";
import EditModal from "./editmodal";
import AddModal from "./addmodal";

export default function Todo() {
  let authTokens = useContext(AuthContext);
  const [Data, setData] = useState([]);
  async function getdata() {
    await inst_axios
      .get(`api/home/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access_token),
        },
      })
      .then((res: any) => {
        setData(res.data);
        // console.log("Bearer " + String(authTokens.access_token));
      })
      .catch((err: any) => new Error(err));
    // console.log(Data);
  }
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <section>
        <div className="card-todo text-center">
          <Card
            className="card-dok"
            // style={{
            //   width: "800px",
            // }}
          >
            <CardHeader>
              <CardTitle tag="h5">Todo List</CardTitle>
            </CardHeader>
            <CardBody className="card-body">
              <CardText>
                <Row>
                  <Col lg={1} md={1} xs={1}>
                    <strong>Status</strong>
                  </Col>
                  <Col lg={4} md={4} xs={4}>
                    <strong>Task</strong>
                  </Col>
                  <Col lg={2} md={2} xs={2}>
                    <strong>Start Date</strong>
                  </Col>
                  <Col lg={2} md={2} xs={2}>
                    <strong>End Date</strong>
                  </Col>
                  <Col lg={3} md={3} xs={3}>
                    <strong>Manage</strong>
                  </Col>
                </Row>
                {Data.map((data: any) => (
                  <Row
                    className="mt-2 col-tolits"
                    // style={{ backgroundColor: "rgb(123,123,123,0.3)" }}
                  >
                    <Col lg={1} md={1} xs={1} id="text-list">
                      <Input
                        type="checkbox"
                        defaultChecked={data.stat === true ? true : false}
                      ></Input>
                    </Col>
                    <Col lg={4} md={4} xs={4} id="text-list">
                      {data.task}
                    </Col>
                    <Col lg={2} md={2} xs={2} id="text-list">
                      {new Date(data.start_date).toLocaleDateString("th-TH", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </Col>
                    <Col lg={2} md={2} xs={2} id="text-list">
                      {new Date(data.end_date).toLocaleDateString("th-TH", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </Col>
                    <Col lg={3} md={3} xs={3} id="text-list  ">
                      <div className="btn-man d-flex justify-content-center">
                        <EditModal data={data} />
                        <Button className="m-1">Delete</Button>
                      </div>
                    </Col>
                  </Row>
                ))}
              </CardText>
            </CardBody>
            <CardFooter>
              <AddModal />
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}

// export default Todo;
