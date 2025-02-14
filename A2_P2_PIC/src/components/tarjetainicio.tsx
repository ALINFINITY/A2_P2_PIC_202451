import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Alerta } from "./alertainicio";

export const TarjetaI: React.FC<{
  title: string;
  content: string;
  image: string;
  protip: string;
}> = ({ title, content, image, protip }) => {
  return (
    <Card elevation={20} sx={{ }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Alerta title={title} message={protip}></Alerta>
    </Card>
  );
};
