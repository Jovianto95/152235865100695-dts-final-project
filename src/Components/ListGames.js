import React, { useEffect, useState} from "react";
import games from "../apis/games";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const ListGames = ()=>{
    const [search, setSearch] = useState('')
    const [games, setGames] = useState([]);
    const baseUrlGames = 'https://api.rawg.io/api';

    useEffect(()=> {
        const fetchDataGames = async (query) => {
            try {
                let response;
                if (!query.length) {
                    response = await games.get('/games');
                } else if (query.length) {
                    setGames ([]);
                    response = await games.get(`.games?seacrh=${query.toLowerCase()}`);
                }
                setGames(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataGames(search);
    }, [search]);

};

export default ListGames;