import { Button, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useGroups } from "../contexts/GroupsContext";

export default function AddGroupModal({ show, handleClose }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const { addGroup } = useGroups();

  function handleSubmit(e) {
    e.preventDefault();
    addGroup({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              ref={descriptionRef}
              type="text"
              required
            ></Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
