import React, { useEffect, useState} from "react";
import games from "../apis/games";
import { Box, Typography, CardContent, CardMedia, Container, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';

const ListGames = () => {
    const [games, setGames] = useState([]);
    const baseUrlForGame = "https://api.rawg.io/api";
    const id = url.split("/games/")[1];
    useEffect(() => {
      const fetchDataGames = async () => {
        try {
          // Gunakan instance tmdb di sini
          const responseRAWG = await games.get(
            // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
            `/games/${id}`
          );
          // Jangan lupa set statenya
          // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
          setGames(responseRAWG.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchDataGames();
    }, []);
  
    return (
      <>
        <Typography
          sx={{
            padding: "1em",
            textAlign: "center",
            backgroundColor: "#3E065F",
            color: "white",
            margin: "1em",
          }}
        >
          TV
        </Typography>
        <Swiper
          breakpoints={{
  
          0: {
            slidesPerView: 2,
          },
          
          600: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 7,
          },
          1000: {
            slidesPerView: 9,
          }
          }}
          spaceBetween={5}
          autoplay
  
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {games.map((game) => {
            return (
              <SwiperSlide key={games.id}>
                <Card className="boxy" sx={{ margin: "5px" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/DetailFilm/${movie.id}`}
                  >
                    <Box className="boxy" sx={{ width: "10em" }}>
                      <CardMedia
                        component="img"
                        image={`${baseUrlForGame}${game.background_image}`}
                        alt={game.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography component="div" variant="body1">
                          {game.name}
                        </Typography>
                        <Rating
                          value={game.rating}
                          precision={0.1}
                          readOnly
                        />
                      </CardContent>
                    </Box>
                  </Link>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };

export default ListGames;