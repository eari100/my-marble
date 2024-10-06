import {TileProps} from "@/app/interface/TileProps";
import Player from "@/app/components/Player";
import {PlayerInterface} from "@/app/interface/PlayerInterface";

export default function Tile({ tileData, players }: TileProps) {
    return (
        <div className="tile">
            <div className="tile-number">{tileData.index}</div>
            <div className="tile-strip">
                <div className="section1">
                    <span>별장</span>
                </div>
                <div className="section2">
                    <span>빌딩</span>
                </div>
                <div className="section3">
                    <span>호텔</span>
                </div>
            </div>

            <div className="tile-title">
                {tileData.title}
            </div>

            {players.map((player: PlayerInterface, pIndex: number) => {
                const {name, location, isDead} = player

                if (!isDead && location == tileData.index) {
                    return (
                        <Player
                            key={pIndex}
                            playerOrder={pIndex + 1}
                            playerName={name}
                        />
                    )
                }
            })}
        </div>
    )
}