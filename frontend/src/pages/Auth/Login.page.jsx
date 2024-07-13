import { useEffect } from "react";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";

import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';


const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    // let email = e.target.email?.value;
    // let password = e.target.password?.value;

    console.log(email)
    console.log(password)


    if (!email || !password) return;
    loginService(email, password);
  };

  // return (
  //   <div style={{ display: "flex", justifyContent: "center" }}>
  //   <form onSubmit={onLogin}>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         gridGap: "20px",
  //         background: "#d3d3d3",
  //         padding: "50px",
  //       }}
  //     >
  //       <h1>This is the login page</h1>
  //       <input
  //         placeholder="email"
  //         name="email"
  //         type="email"
  //         required
  //         style={{ minWidth: "320px", height: "26px" }}
  //       />
  //       <input
  //         placeholder="password"
  //         name="password"
  //         type="password"
  //         required
  //         style={{ minWidth: "320px", height: "26px" }}
  //       />
  //       <button type="submit">login</button>
  //       {authLoading ? <h2>Loading...</h2> : null}
  //     </div>
  //   </form>
  // </div>
  // )
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput onChange={(e)=>{setEmail(e.target.value)}} label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput onChange={(e)=>{setPassword(e.target.value)}} label="Password" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
        </Group>
        <Button fullWidth mt="xl" onClick={onLogin}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
