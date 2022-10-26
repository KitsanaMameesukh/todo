import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

export default function EditModal(props: any, args: any) {
  const [modal, setModal] = useState(false);
  const { data } = props;
  const toggle = () => setModal(!modal);
  const date_end = new Date(data.end_date).toISOString().split("T")[0];
  // const [Data, setData] = useState([]);

  // async function getdata(){
  //   await A
  // }
  return (
    <div>
      <Button onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div>
            <label htmlFor="list">Edit Task :</label>
            <Input
              id="list"
              className="mt-1"
              type="text"
              defaultValue={data.task}
            ></Input>
          </div>
          <div className="mt-2">
            <label htmlFor="enddate">Edit End Date :</label>
            <Input
              id="enddate"
              className="mt-1"
              type="date"
              defaultValue={date_end}
            ></Input>
          </div>
          <div className="mt-2">
            <label htmlFor="user">Edit End Date :</label>
            <Input id="user" className="mt-1" type="select">
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </Input>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
