import React, {useEffect, useMemo, useState} from "react";
import { Box, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import games from "../apis/games";
import GameCard from "../Components/GameCard";


const sortRatingAsc = (a,b) => a.rating - b.rating;
const sortRatingDesc = (a,b) => sortRatingAsc (b,a);

const sortRating = (sort = 'asc') =>
    sort === 'asc' ? sortRatingAsc : sortRatingDesc ;

const GamesList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [game, setGames] = useState ([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const fetchedGames = await games.get('/games');
                setGames(fetchedGames.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchGames()
    }, []);

const setSortParam = (type) => {
    queryParams.set('sort', type);
    setQueryParams(queryParams);
};

const sort = queryParams.get('sort');

const sortedGames = useMemo(()=> {
    return game.slice().sort(sortRating(sort));
}, [game, sort]);

return (
    <Box sx = {{
        display:'flex',
        flexDirection: 'column',
        mt: 5
    }}>
        <Box sx = {{
            mt:5,
            display:'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            Sort by Rating
            <Button variant="contained" sx={{ml:2}} onClick={()=>setSortParam('asc')}>
                Asc
            </Button>
            <Button variant="contained" sx={{ml:2}} onClick={()=>setSortParam('desc')}>
                Desc
            </Button>
        </Box>
        <Box>
            {sortedGames.map((games) => {
                <GameCard key={JSON.parse(games.data).name} game = {games} />
            })}
        </Box>
    </Box>
)
};

export default GamesList;