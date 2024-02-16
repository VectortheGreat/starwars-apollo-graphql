import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PageCard = ({
  path,
  title,
  description,
  image,
}: {
  path: string;
  title: string;
  description: string;
  image: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 200 }}>
      <CardActionArea onClick={() => navigate(path)}>
        <CardMedia component="img" height="140" image={image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
