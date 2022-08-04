import React, { useEffect, useState} from "react";
import games from "../apis/games";
import { Box, Typography, CardContent, CardMedia, Container, TextField } from "@mui/material";
import {Link} from 'react-router-dom';
import {Card, Container} from 'react-bootstrap';

const ListGames = (props) => {
    const [game, setGames] = useState([]);
    const baseUrlForGame = "https://api.rawg.io/api";
    useEffect(() => {
      const fetchDataGames = async () => {
        try {
          const responseRAWG = await games.get(props.url,{
            params: props.queryParam}
          );
          setGames(responseRAWG.data.results);
        } catch (err) {
          console.log(err);
        }
      };
      fetchDataGames();
    }, [props.queryParam, props.url]);
  
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
          {game.map((game) => {
            return (
              <SwiperSlide key={game.id}>
                <Card className="boxy" sx={{ margin: "5px" }}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/${game.slug}`} key ={game.id}
                  >
                    <Box className="boxy" sx={{ width: "10em" }}>
                      <CardMedia
                        component="img"
                        image={`${game.background_image}`}
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