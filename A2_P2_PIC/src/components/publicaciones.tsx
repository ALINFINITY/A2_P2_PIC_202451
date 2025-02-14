import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

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

interface PropsPublicaciones {
  posts: post[];
  setposts: Dispatch<SetStateAction<post[]>>;
  currentuser: string;
  isadmin: boolean;
}

export const Publicaciones: React.FC<PropsPublicaciones> = ({
  posts,
  setposts,
  currentuser,
  isadmin,
}) => {
  //Campos del Post
  const [title, settitle] = useState<string>("");
  const [content, setcontent] = useState<string>("");
  const fecha = new Date().toLocaleString();

  // Manejo del Submit - Se registran los post
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      setposts([
        ...posts,
        {
          id: posts.length + 1 + Math.floor(Math.random()*1000000),
          author: currentuser,
          title: title,
          content: content,
          comments: [],
          fecha: fecha,
        },
      ]);
      alert("Publicación exitosa");
      settitle("");
      setcontent("");
    } else {
      alert("Llena los campos correctamente");
    }
  };

  //Manejo de inputs
  const change_title = (e: React.ChangeEvent<HTMLInputElement>) =>
    settitle(e.target.value);
  const change_content = (e: React.ChangeEvent<HTMLInputElement>) =>
    setcontent(e.target.value);

  return (
    <>
      <h1>Publicaciones</h1>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Paper
          elevation={10}
          sx={{ padding: 4, textAlign: "center", width: 300 }}
        >
          <Typography variant="h4">Publicación</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Titulo..."
              type="text"
              name="titulo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={title}
              onChange={change_title}
            />
            <TextField
              label="Contenido..."
              type="text"
              name="contenido"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              minRows={2}
              maxRows={3}
              value={content}
              onChange={change_content}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ border: 1, borderColor: "black" }}
            >
              Publicar
            </Button>
          </form>
        </Paper>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        sx={{ mt: 10 }}
      >
        {posts.map((ps) => (
          <Post
            key={ps.id}
            id={ps.id}
            author={ps.author}
            title={ps.title}
            content={ps.content}
            currentuser={currentuser}
            isadmin={isadmin}
            fecha={ps.fecha}
            posts={posts}
            setposts={setposts}
          />
        ))}
      </Box>
    </>
  );
};

//Propiedades del render de Posts
interface PropsPost {
  id: number;
  author: string;
  title: string;
  content: string;
  currentuser: string;
  isadmin: boolean;
  fecha: string;
  posts: post[];
  setposts: Dispatch<SetStateAction<post[]>>;
}

//Componente para rendererizar los Post
const Post: React.FC<PropsPost> = ({
  id,
  author,
  title,
  content,
  currentuser,
  isadmin,
  fecha,
  posts,
  setposts,
}) => {
  //Color dinámico del follow
  const [color, setcolor] = useState<string>("");
  const handlecolor = () => setcolor("error");

  //Función para eliminar un Post
  const post_delete = () => {
    setposts(posts.filter((ps) => ps.id !== id));
  };

  //Variables para crear un comentario
  const [comments, setcomments] = useState<comment[]>([]);
  const [commentx, setcommentx] = useState<string>("");

  //Se inicializan los comentarios del post
  useEffect(() => {
    posts.map((ps) => (ps.id === id ? setcomments(ps.comments) : ps));
  }, []);

  //Cada vez que se agregue o elimine un comentario el post recibirá esas actualizaciones
  useEffect(() => {
    setposts((prev) =>
      prev.map((ps) => (ps.id === id ? { ...ps, comments: comments } : ps))
    );
  }, [comments]);

  //Función para registrar comentarios
  const add_comment = () => {
    if (commentx.trim()) {
      setcomments([
        ...comments,
        {
          id: comments.length + 1 + Math.floor(Math.random()*1000000),
          postid: id,
          author: currentuser,
          content: commentx,
        },
      ]);
      setcommentx("");
    } else {
      alert("Ingresa un comentario...");
    }
  };

  //Función de control del input comentario
  const change_commentx = (e: React.ChangeEvent<HTMLInputElement>) =>
    setcommentx(e.target.value);

  //Función para eliminar comentarios
  const comment_delete = (id: Number) =>
    setcomments(comments.filter((cm) => cm.id !== id));

  return (
    <Card sx={{ width: "80vw", margin: 5, padding: 1 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>{author.slice(0, 2)}</Avatar>}
        title={title}
        subheader={author+" - "+fecha}
      />
      <CardContent>
        <p className="text_content">{content}</p>
      </CardContent>
      <CardActions>
        <IconButton onClick={handlecolor} color={color as any}>
          <FavoriteIcon />
        </IconButton>
        <TextField
          label="Comentar..."
          type="text"
          name="comentario"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          minRows={2}
          maxRows={3}
          value={commentx}
          onChange={change_commentx}
        />
        <Button
          onClick={add_comment}
          variant="contained"
          sx={{ padding: "10px 20px" }}
        >
          Comentar
        </Button>
        {(author === currentuser || isadmin) && (
          <Button
            onClick={post_delete}
            variant="contained"
            color="error"
            sx={{ padding: "10px 20px" }}
          >
            Eliminar
          </Button>
        )}
      </CardActions>

      <Divider />

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <Box width={"100%"}>
          <Typography variant="h6" fontFamily={"cursive"}>
            Comentarios
          </Typography>
        </Box>
        <Box width={"100%"}>
          {comments.map((cm) => (
            <Box
              key={cm.id}
              display={"flex"}
              flexDirection={"column"}
              sx={{
                margin: 4,
                border: 1,
                borderStyle: "dashed",
                padding: 2,
              }}
            >
              <Box
                key={cm.id}
                display={"flex"}
                flexDirection={"row"}
                sx={{
                  justifyContent: "space-around",
                  mb: 2,
                }}
              >
                <Avatar sx={{ bgcolor: "red" }}>{cm.author.slice(0, 2)}</Avatar>
                <Typography variant="subtitle2">
                  {cm.author}  
                </Typography>
                {(cm.author === currentuser || isadmin) && (
                  <Button
                    onClick={() => comment_delete(cm.id)}
                    sx={{ fontSize: 10 }}
                    color="error"
                    variant="contained"
                  >
                    Eliminar
                  </Button>
                )}
              </Box>
              <Divider />
              <Box>
                <p>{cm.content}</p>
              </Box>
            </Box>
          ))}
        </Box>
      </CardActions>
    </Card>
  );
};
