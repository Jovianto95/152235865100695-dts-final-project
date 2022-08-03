import React, {useEffect, useState} from "react";
import GameDetail from "../Components/DetailGames";
import games from "../apis/games";
import { useParams } from "react-router-dom";

const DetailGames = () => {
    let params = useParams();
    const [game, setGames] = useState([]);

    const idGames = params.id;
    useEffect(()=> {
        const fetchGames = async () => {
            try {
                const fetchedGames = await games.get(`games/${idGames}`);
                setGames(fetchedGames.data)
            } catch (error) {
                console.log(error)
            }
        }; fetchGames()
    }, [idGames]);

    return (
        <>
        <GameDetail data = {game} />
        </>
    )
};

export default DetailGames;