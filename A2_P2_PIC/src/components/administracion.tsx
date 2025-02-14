import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridDeleteIcon } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface user {
  id: number;
  email: string;
  password: string;
  rol: string;
  isAdmin: boolean;
}

interface PropsAdministracion {
  users: user[];
  setusers: Dispatch<SetStateAction<user[]>>;
  setcurrentus: Dispatch<SetStateAction<string>>;
  currentuser: string;
  noauth: () => void;
  Fnoadmin: () => void;
}

export const Administracion: React.FC<PropsAdministracion> = ({
  users,
  setusers,
  currentuser,
  Fnoadmin,
  noauth,
  setcurrentus,
}) => {
  //Columnas de la tabla
  const colums: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 1, headerClassName: "head" },
    { field: "email", headerName: "Email", flex: 1, headerClassName: "head" },
    { field: "rol", headerName: "Rol", flex: 1, headerClassName: "head" },
    {
      field: "action",
      headerName: "Acciones",
      flex: 1,
      headerClassName: "head",
      renderCell: (params: any) => (
        <Button
          variant="contained"
          startIcon={<GridDeleteIcon />}
          color={"error"}
          onClick={() => deleteuser(params.id)}
          sx={{ boxShadow: "-2px 2px 4px black" }}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  const navigate = useNavigate();

  //Función para eliminar usuarios
  const deleteuser = (id: number) => {
    const userdel = users.find((us) => us.id === id);
    if (userdel?.email === currentuser) {
      if (confirm("¿Estas seguro de eliminar tu cuenta?")) {
        setusers(users.filter((us) => us.id !== id));
        setcurrentus("");
        noauth();
        Fnoadmin();
        navigate("/login");
      }
      return
    } else {
      alert(`Se ha eliminado correctamente el usuario ${userdel?.email}`);
      setusers(users.filter((us) => us.id !== id));
    }
  };

  return (
    <>
      <h1>Administración de Usuarios</h1>

      <div className="admmin-console">
        <Box sx={{ width: "80vw" }}>
          <DataGrid
            sx={{ color: "black", fontFamily: "cursive" }}
            rows={users}
            columns={colums}
          />
        </Box>
      </div>
    </>
  );
};
