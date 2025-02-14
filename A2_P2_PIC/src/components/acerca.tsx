import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
} from "@mui/material";

const teamMembers = [
  {
    name: "Edison Carvajal",
    email: "ehcarvajal@espe.edu.ec",
    role: "Web Developer",
    image: "/img/foto1.jpg",
  },
  {
    name: "Alan Quilumbaquin",
    email: "adquilumbaquin1@espe.edu.ec",
    role: "Project Manager",
    image: "/img/foto2.jpeg",
  },
  {
    name: "Luis López",
    email: "lalopez19@espe.edu.ec",
    role: "Front-End Developer",
    image: "/img/foto3.jpeg",
  },
];

export const Acerca: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 2,
        mb: 2,
        position: "relative",
        backgroundColor: "#c5e0dc",
        borderRadius: 2,
        padding: "20px",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Card
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "rgba(150, 210, 200, 0.9)",
          maxHeight: "85vh",
          overflow: "hidden",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            color="primary"
            sx={{ textAlign: "center" }}
          >
            Sobre EduConnect
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="textSecondary"
            sx={{ textAlign: "justify" }}
          >
            EduConnect es una plataforma innovadora diseñada para facilitar la
            conexión entre estudiantes, profesores y recursos educativos.
            Nuestra misión es proporcionar un entorno digital eficiente donde la
            educación pueda ser accesible, colaborativa y efectiva.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            color="secondary"
            sx={{ textAlign: "center" }}
          >
            Nuestro Equipo:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 1,
                    boxShadow: 2,
                    backgroundColor: "#e3f2fd",
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ margin: "auto", width: 70, height: 70 }}
                  />
                  <CardContent sx={{ padding: "8px" }}>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      sx={{ fontSize: "1rem" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ fontSize: "0.85rem" }}
                    >
                      {member.email}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="primary"
                      sx={{ fontSize: "0.9rem" }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ mt: 2, textAlign: "center" }}
          >
            © EduConnect 2025 está bajo CC BY-NC-SA 4.0 
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
