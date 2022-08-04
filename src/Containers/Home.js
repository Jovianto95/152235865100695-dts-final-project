
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import React from 'react';
import games from '../apis/games';
import GameCard from '../Components/GameCard';


const Home = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [moviesReady, setMoviesReady] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await games.get("/games");
                setMovies(fetchedMovies.data);
                setMoviesReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    useEffect(() => {
        if (!moviesReady) return;
        const sortMovies = (type) => {
            if (type === 'asc') {
                const sorted = [...movies].sort((a, b) => a.rating - b.rating);
                setMovies(sorted);
            }
            if (type === 'desc') {
                const sorted = [...movies].sort((a, b) => b.rating - a.rating);
                setMovies(sorted);
            }
        }

        sortMovies(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, moviesReady]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    movies.map(game => (
                        <GameCard key={JSON.parse(game.data).name} movie={game}></GameCard>
                    ))
                }
            </Box>
        </Box>
    );
}

export default Home;