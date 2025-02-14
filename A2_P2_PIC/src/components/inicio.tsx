import { Box, Card, Grid2, Typography } from "@mui/material";
import { TarjetaI } from "./tarjetainicio";

export const Inicio: React.FC = () => {
  return (
    <>
      <Card
        elevation={14}
        sx={{
          mb: 3,
          mt: 2,
          textShadow: "-2px 2px 3px black",
        }}
      >
        <Typography sx={{ padding: 2,color:'#eb0d2a' }} fontFamily={"cursive"} variant="h3">
          Bienvenido a EduConnect
        </Typography>
      </Card>
      <Box sx={{ width: "100%" }}>
        <Grid2 container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 size={6}>
            <TarjetaI
              title="La educación para el futuro"
              content="Para EduConnect la educación es el pilar más grande de la sociedad."
              image="/public/img/EduConnect.png"
              protip="En EduConnect puedes interactuar con varias comunidades para aprender cosas nuevas."
            ></TarjetaI>
          </Grid2>
          <Grid2 size={6}>
            <TarjetaI
              title="Lanzamiento del Parche V2.0"
              content="Las nuevas actualizaciones facilitan la administración de la plataforma."
              image="/public/img/imagen4.png"
              protip="Ahora las cuentas de administrador también pueden realizar publicaciones."
            ></TarjetaI>
          </Grid2>
          <Grid2 size={6}>
            <TarjetaI
              title="Optimiza tu tiempo de trabajo"
              content="Los flujos de trabajo eficientes requieren de una buena comunicación entre las partes involucradas."
              image="/public/img/imagen7.png"
              protip="En EduConnect puedes realizar publicaciones para organizar tus proyectos."
            ></TarjetaI>
          </Grid2>
          <Grid2 size={6}>
            <TarjetaI
              title="Las redes sociales en la educación"
              content="EduConnect es una red social basada en roles utilizada ampliamente en el ámbito educativo."
              image="/public/img/imagen6.png"
              protip="Puedes solicitar la eliminación de tu cuenta a cualquier miembro administrador de la plataforma."
            ></TarjetaI>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};
