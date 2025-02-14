import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";

interface PopsMenu {
  noauth: () => void;
  Fnoadmin: () => void;
  isadmin: boolean;
  setcurrentus: Dispatch<SetStateAction<string>>;
  currentuser: string;
}

export const Menu: React.FC<PopsMenu> = ({
  noauth,
  Fnoadmin,
  isadmin,
  setcurrentus,
  currentuser,
}) => {
  const navigate = useNavigate();

  //Función para gestionar el cierre de sesión
  const logout = () => {
    setcurrentus("");
    noauth();
    Fnoadmin();
    navigate("/login");
  };

  return (
    <nav className="my-nav">
      <Link to={"/"}>Inicio</Link>
      <Link to={"/acerca"}>Acerca de</Link>
      <Link to={"/publicaciones"}>Publicaciones</Link>
      {isadmin && <Link to={"/administracion"}>Administración</Link>}
      <div className="user_information">
        <Button
          variant="contained"
          color="primary"
          onClick={logout}
          sx={{ border: 2, borderColor: "black" }}
        >
          Cerrar Sesión
        </Button>
        <p>{currentuser}</p>
      </div>
    </nav>
  );
};
