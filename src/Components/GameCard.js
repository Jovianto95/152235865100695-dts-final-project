import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const baseImageURL = "https://api.rawg.io/api";

const GameCard = ({ game }) => {
  let navigate = useNavigate();

  const toDetail = (game) => {
    navigate(`/games/${JSON.parse(game.data).id}`)
  };
  return (
    <Card id={game.id} sx={{ display: 'flex', width: 400, margin: 5 }} onClick={() => toDetail(game)}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={`${baseImageURL}${JSON.parse(game.data).background_image}`}
        alt="Game poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {JSON.parse(game.data).name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(JSON.parse(game.data).released)}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" precision={0.1} value={game.rating} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{JSON.parse(game.data).rating.toFixed(1)}</Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default GameCard;