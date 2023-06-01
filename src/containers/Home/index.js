import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from '../..//components/Title';
import ContainerItems from '../..//components/ContainerItems';
import Button from '../../components/Button'

import {
  Container,
  Image,
  InputLabel,
  Input,
  } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate('/users')
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Register <img alt="arrow" src={Arrow} />
        </Button>

        

      </ContainerItems>
    </Container>
  );
}

export default App;
