import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const baseImageURL = "https://api.rawg.io/api";

const GameCard = ({ game }) => {
  let navigate = useNavigate();

  const toDetail = (movie) => {
    navigate(`/games/${game.id}`)
  };
  return (
    <Card id={game.id} sx={{ display: 'flex', width: 400, margin: 5 }} onClick={() => toDetail(game)}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${baseImageURL}${game.background_image}`}
        alt="Game poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {game.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(game.released)}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" precision={0.1} value={game.rating} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{game.rating.toFixed(1)}</Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default GameCard;