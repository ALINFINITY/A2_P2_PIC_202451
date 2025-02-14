import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface user {
  id: number;
  email: string;
  password: string;
  rol: string;
  isAdmin: boolean;
}

interface PropsLogin {
  setcurrentus: Dispatch<SetStateAction<string>>;
  users: user[];
  isauth: () => void;
  Fisadmin: () => void;
}

export const Login: React.FC<PropsLogin> = ({
  setcurrentus,
  users,
  isauth,
  Fisadmin,
}) => {
  // Credenciales
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  let mensaje_error: string = "";

  //Validación de credenciales
  const check = () => {
    const usuario = users.find(
      (us) => us.email === email && us.password === password
    );
    if (usuario) {
      if (usuario.isAdmin) {
        Fisadmin();
      }
      return true;
    }
    mensaje_error = `Credenciales erróneas para el usuario ${email}`;
    return false;
  };

  // Manejo del Submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && password.trim() && check()) {
      alert(`Entro como: ${email}`);
      setcurrentus(email);
      isauth();
      setemail("");
      setpassword("");
    } else {
      alert(
        mensaje_error ? mensaje_error : "Todos los campos son obligatorios"
      );
    }
  };

  //Manejo de cambios en los inputs
  const Change_email = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemail(e.target.value);
  };

  const Change_password = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };

  return (
    <>
      <Typography
        variant="h3"
        className="title-edu"
        sx={{ fontFamily: "cursive", fontWeight: "bold" }}
      >
        EduConnect
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Paper
          elevation={10}
          sx={{ padding: 4, width: 300, textAlign: "center" }}
        >
          <Typography variant="h5" gutterBottom>
            Iniciar sesión
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Correo electrónico"
              type="email"
              name="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={Change_email}
            />
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={Change_password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Ingresar
            </Button>
            <Typography sx={{ mt: 2 }}>
              <Link to={"/register"}>Crear cuenta</Link>
            </Typography>
          </form>
        </Paper>
      </Box>
    </>
  );
};
