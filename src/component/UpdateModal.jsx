import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";


const UpdateModal = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const {userId} = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  let getData = async () => {
    try {
    
      let dataGotten = await axios.get(
        `https://newresapibackend.onrender.com/api/user/${userId}`
      );
      console.log(dataGotten.data.user);
      setEmail(dataGotten.data.user.email);
      setName(dataGotten.data.user.name);
      setProfession(dataGotten.data.user.profession);
      setGender(dataGotten.data.user.gender);
    } catch (error) {
      console.log(error);
    } finally {
      //   setIsLoading(false);
    }
  };

  async function handleUpdate(userId) {
    try {
        await axios.patch(`https://newresapibackend.onrender.com/api/user/${userId}`, {
          name,
          email,
          profession,
          gender
       })
      navigate('/AllUsers');
       

    } catch (error) {
      console.log(error);
      alert(error.response.data.msg.message)
    }
  }
  useEffect(() => {
    getData();
  }, [userId]);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                Name:
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Type a name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                Email:
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Type an email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                Profession:
              </Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Type a profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 fw-bold">
              <Form.Label htmlFor="disabledSelect">Gender:</Form.Label>
              <Form.Select
                id="disabledSelect"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>----</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>{handleClose; handleUpdate(userId)}}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateModal;
