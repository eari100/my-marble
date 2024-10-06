'use client'

import './main.css'
import {useState} from "react";
import PlayerOption from "@/app/components/PlayerOption";
import {PlayerOptionEnums} from "@/app/enum/PlayerOptionEnums";

interface PlayersOption {
    player1: PlayerOptionEnums
    player2: PlayerOptionEnums
    player3: PlayerOptionEnums
    player4: PlayerOptionEnums
}

export default function Page() {
    const [playersOption, setPlayerOption] = useState<PlayersOption>({
        player1: PlayerOptionEnums.Human,
        player2: PlayerOptionEnums.Human,
        player3: PlayerOptionEnums.None,
        player4: PlayerOptionEnums.None
    } as PlayersOption)

    const changePlayerOption = (playerNumber: number, playerOption: PlayerOptionEnums) => {
        setPlayerOption((prev) => ({
            ...prev,
            [`player${playerNumber}`]: playerOption
        }))
    }

    const goInGame = () => {
        location.href = `/in-game?p1=${playersOption.player1}&p2=${playersOption.player2}&p3=${playersOption.player3}&p4=${playersOption.player4}`
    }

    return (
        <>
            <h1>마이마블</h1>

            {Object.entries(playersOption).map(([key, option], index) => (
                <PlayerOption
                    key={key}
                    playerNumber={index + 1}
                    option={option}
                    changeOption={changePlayerOption}
                />
            ))}

            <button
                onClick={goInGame}
            >
                게임 시작
            </button>
        </>
    )
}