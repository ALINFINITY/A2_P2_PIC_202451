import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface user {
  id: number;
  email: string;
  password: string;
  rol: string;
  isAdmin: boolean;
}

interface PropsRegister {
  users: user[];
  setusers: Dispatch<SetStateAction<user[]>>;
}

export const Register: React.FC<PropsRegister> = ({ users, setusers }) => {
  // Campos de registro
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [rol, setrol] = useState<string>("");
  const navigate = useNavigate();

  //Creación de usuario administrador
  const [open, setOpen] = useState<boolean>(false);
  const [keyadmin, setkeyadmin] = useState<string>("");

  let mensaje_error:string = "";

  const handleClose = () => {
    setOpen(false);
  };

  //Función que valida que no se repitan los emails
  const validation_email = () => {
    const user = users.find(us=>us.email===email)
    if(user){
      mensaje_error=`Ya existe un usuario con el email: ${email}`
      return false
    }
    return true
  }

  //Función que crea los usuarios administradores
  const create_admin = () => {
    if (keyadmin === "azy34") {
      const admin = rol === "Admin" ? true : false;
      setusers([
        ...users,
        {
          id: users.length + 1  + Math.floor(Math.random()*1000),
          email: email,
          password: password,
          rol: rol,
          isAdmin: admin,
        },
      ]);
      alert(`Se ha creado correctamente el usuario administrador: ${email}`);
      setOpen(false);
      navigate("/login");
      setemail("");
      setpassword("");
      setrol("");
      setkeyadmin("");
    } else {
      setOpen(false);
      setkeyadmin("");
      alert("La clave ingresada es incorrecta");
    }
  };

  // Manejo del Submit - Se registran los usuarios 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && password.trim() && rol.trim() === "Admin" && validation_email()) {
      setOpen(true);
    } else if (email.trim() && password.trim() && rol.trim() && validation_email()) {
      setusers([
        ...users,
        {
          id: users.length + 1 + Math.floor(Math.random()*1000),
          email: email,
          password: password,
          rol: rol,
          isAdmin: false,
        },
      ]);
      alert(`Se ha creado correctamente el usuario: ${email}`);
      navigate("/login");
      setemail("");
      setpassword("");
      setrol("");
    } else {
      alert(mensaje_error?mensaje_error:"Datos no válidos");
    }
  };

  //Manejo inputs
  const Change_email = (e: React.ChangeEvent<HTMLInputElement>) =>
    setemail(e.target.value);

  const Change_password = (e: React.ChangeEvent<HTMLInputElement>) =>
    setpassword(e.target.value);

  const Change_rol = (e: SelectChangeEvent) => setrol(e.target.value as string);

  const Change_keyadmin = (e: React.ChangeEvent<HTMLInputElement>) =>
    setkeyadmin(e.target.value);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Clave de autorización</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Las cuentas de administrador unicamente pueden ser creadas con una clave de autorización
            generada por el administrador principal de la plataforma. Para
            entornos de producción esta clave debe ser generada cada vez que se
            vaya a crear una cuenta de administrador. Solicite al administrador
            de la plataforma una clave de autorización. Clave por defecto del entorno de desarrollo: azy34
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="clave"
            name="clave"
            label="Ingrese la clave de creación"
            type="password"
            fullWidth
            variant="standard"
            value={keyadmin}
            onChange={Change_keyadmin}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={create_admin} type="submit">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
      <Typography
        variant="h3"
        className="title-edu"
        sx={{ fontFamily: "cursive", fontWeight: "bold" }}
      >
        EduConnect
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"80vh"}
      >
        <Paper
          elevation={10}
          sx={{ padding: 4, width: 300, textAlign: "center" }}
        >
          <Typography variant="h5" gutterBottom>
            Registrarse
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
            <FormControl fullWidth>
              <InputLabel id="rol_registro">Selecciona un rol</InputLabel>
              <Select
                labelId="rol_registro"
                id="rol_seleccionado"
                value={rol}
                label="Selecciona un rol"
                onChange={Change_rol}
              >
                <MenuItem value={"Profesor"}>Profesor</MenuItem>
                <MenuItem value={"Estudiante"}>Estudiante</MenuItem>
                <MenuItem value={"Admin"}>Administrador</MenuItem>
              </Select>
            </FormControl>
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
              Crear Usuario
            </Button>
            <Typography sx={{ mt: 2 }}>
              <Link to={"/login"}>Iniciar sesión</Link>
            </Typography>
          </form>
        </Paper>
      </Box>
    </>
  );
};
