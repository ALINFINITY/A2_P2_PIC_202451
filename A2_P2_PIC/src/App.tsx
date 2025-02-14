import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { Menu } from "./components/menu";
import { Inicio } from "./components/inicio";
import { Acerca } from "./components/acerca";
import { Publicaciones } from "./components/publicaciones";
import { Administracion } from "./components/administracion";
import { Login } from "./components/login";
import { useEffect, useState } from "react";
import { Register } from "./components/register";

interface user {
  id: number;
  email: string;
  password: string;
  rol: string;
  isAdmin: boolean;
}

interface comment {
  id: number;
  postid: number;
  author: string;
  content: string;
}

interface post {
  id: number;
  author: string;
  title: string;
  content: string;
  comments: comment[];
  fecha: string;
}

export const App: React.FC = () => {
  //Arreglo de elementos
  const [users, setusers] = useState<user[]>([]);
  const [posts, setposts] = useState<post[]>([]);

  //Datos del usuario actual
  const [currentuser, setcurrentus] = useState<string>("");
  const [auth, setauth] = useState<boolean>(false);
  const [isadmin, setisadmin] = useState<boolean>(false);

  useEffect(() => {
    const baul_users = localStorage.getItem("users");
    const baul_posts = localStorage.getItem("posts");
    const baul_cuser = localStorage.getItem("cuser");
    const baul_auth = localStorage.getItem("auth");
    const baul_isadmin = localStorage.getItem("isadmin");

    if (baul_users) setusers(JSON.parse(baul_users));
    if (baul_posts) setposts(JSON.parse(baul_posts));
    if (baul_cuser) setcurrentus(JSON.parse(baul_cuser) as string);
    if (baul_auth === "true") setauth(true);
    if (baul_isadmin === "true") setisadmin(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  useEffect(() => {
    localStorage.setItem("cuser", JSON.stringify(currentuser));
  }, [currentuser]);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("isadmin", JSON.stringify(isadmin));
  }, [isadmin]);

  //Funciones de control de Autenticación
  const isauth = () => {
    setauth(true);
  };

  const noauth = () => {
    setauth(false);
  };

  const Fisadmin = () => {
    setisadmin(true);
  };

  const Fnoadmin = () => {
    setisadmin(false);
  };

  return (
    <>
      <Router>
        {auth && (
          <Menu
            noauth={noauth}
            Fnoadmin={Fnoadmin}
            isadmin={isadmin}
            setcurrentus={setcurrentus}
            currentuser={currentuser}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={auth ? <Inicio /> : <Navigate to={"/login"} />}
          />
          <Route
            path="acerca"
            element={auth ? <Acerca /> : <Navigate to={"/login"} />}
          />
          <Route
            path="publicaciones"
            element={
              auth ? (
                <Publicaciones
                  posts={posts}
                  setposts={setposts}
                  currentuser={currentuser}
                  isadmin={isadmin}
                />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="administracion"
            element={
              auth && isadmin ? (
                <Administracion
                  users={users}
                  setusers={setusers}
                  currentuser={currentuser}
                  noauth={noauth}
                  Fnoadmin={Fnoadmin}
                  setcurrentus={setcurrentus}
                />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/login"
            element={
              auth ? (
                <Navigate to={"/"} />
              ) : (
                <Login
                  setcurrentus={setcurrentus}
                  users={users}
                  isauth={isauth}
                  Fisadmin={Fisadmin}
                />
              )
            }
          />
          <Route
            path="/register"
            element={
              auth ? (
                <Navigate to={"/"} />
              ) : (
                <Register users={users} setusers={setusers} />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
};
