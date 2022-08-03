import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {Box, Button} from '@mui/material';
import games from '../apis/games';
import GameCard from '../Components/GameCard';

const Home = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [game, setGames] = useState([]);
    const [gamesReady, setGamesReady] = useState(false);

    useEffect(()=> {
        const fetchGames = async () => {
            try {
                const fetchedGames = await games.get('/games/popular')
                setGames(fetchedGames.data.results);
                setGamesReady(true);
            } catch (error) {
                console.log(error);
            }
        }; fetchGames()
    }, []);

    useEffect (() => {
        if (!gamesReady) return;
        const sortGames = (type) => {
            if (type === 'asc') {
                const sorted = [...game].sort((a,b) => a.rating - b.rating);
                setGames(sorted);
            }
        }
        sortGames(queryParams.get('sort'));
    }, [queryParams, gamesReady]);

    const setSortParam = (type) => {
        queryParams.set('sort', type);
        setQueryParams(queryParams);
    };

    return (
        <Box sx = {{
            display:'flex',
            flexDirection: 'column',
            mt: 5
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center', 
            }}>
                Sort by Rating
                <Button variant='contained'
                        sx={{ml:2}}
                        onClick={()=> setSortParam('asc')}>
                    Asc
                </Button>
                <Button variant='contained'
                        sx={{ml:2}}
                        onClick={()=> setSortParam('desc')}>
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {game.map(game=>{
                    <GameCard key={game.name} game={game} />
                })}
            </Box>
        </Box>
    )
};

export default Home;