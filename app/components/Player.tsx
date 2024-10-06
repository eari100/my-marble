interface PlayerProps {
    playerOrder: number
    playerName: string
}

export default function Player({ playerOrder, playerName }: PlayerProps ) {
    const playerStyle = `piece-container player${playerOrder}`

    return (
        <div className={playerStyle}>

            <div className="piece">{playerName}</div>
        </div>
    )
}