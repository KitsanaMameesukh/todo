import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

export default function AddModal(args: any) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Add Task</Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add Todo</ModalHeader>
        <ModalBody>
          <div>
            <label htmlFor="list">Task :</label>
            <Input id="list" className="mt-1" type="text"></Input>
          </div>
          <div className="mt-2">
            <label htmlFor="enddate">End Date :</label>
            <Input id="enddate" className="mt-1" type="date"></Input>
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
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
