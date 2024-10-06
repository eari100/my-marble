'use client'

import '../in_game.css'
import {useEffect, useState} from "react";
import Tile from "@/app/components/Tile";
import {PlayerInterface} from "@/app/interface/PlayerInterface";
import {useSearchParams} from "next/navigation";
import {TileEnums, TileInterface} from "@/app/interface/TileInterface";

export default function InGame() {
    const searchParams = useSearchParams()
    console.log('searchParams', searchParams.get('p1'))
    console.log('searchParams', searchParams.get('p2'))
    console.log('searchParams', searchParams.get('p3'))
    console.log('searchParams', searchParams.get('p4'))

    const tileData: TileInterface[] = [
        {
            index: 0,
            title: '<< 시작',
            type: TileEnums.Start,
            metaData: {
                salary: 200_000
            }
        },
        {
            index: 1,
            title: '타이베이',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 2,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 3,
            title: '베이징',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 4,
            title: '마닐라',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 5,
            title: '제주도',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 6,
            title: '싱가포르',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 7,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 8,
            title: '카이로',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 9,
            title: '이스탄불',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 10,
            title: '무인도',
            type: TileEnums.DesertIsland,
        },
        {
            index: 11,
            title: '아테네',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 12,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 13,
            title: '코펜하겐',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 14,
            title: '스톡홀름',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 15,
            title: '콩고드 여객기',
            type: TileEnums.Foreign, //
        },
        {
            index: 16,
            title: '베른',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 17,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 18,
            title: '베를린',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 19,
            title: '오타와',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 20,
            title: '사회복지기금 수령처',
            type: TileEnums.Foreign, //
        },
        {
            index: 21,
            title: '부에노스아이레스',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 22,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 23,
            title: '상파울로',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 24,
            title: '시드니',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 25,
            title: '부산',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 26,
            title: '하와이',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 27,
            title: '리스본',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 28,
            title: '퀸 엘리자베스 호', //
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 29,
            title: '마드리드',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 30,
            title: '우주여행',
            type: TileEnums.Foreign, //
        },
        {
            index: 31,
            title: '도쿄',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 32,
            title: '컬럼비아호',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 33,
            title: '파리',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 34,
            title: '로마',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 35,
            title: '황금열쇠',
            type: TileEnums.GoldenKey,
        },
        {
            index: 36,
            title: '런던',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 37,
            title: '뉴욕',
            type: TileEnums.Foreign,
            metaData: {
                landPrice: 1,
                villaPrice: 1,
                buildingPrice: 1,
                hotelPrice: 1,
                landToll: 1,
                villaToll: 1,
                buildingToll: 1,
                hotelToll: 1
            }
        },
        {
            index: 38,
            title: '사회복지기금 접수처', //
            type: TileEnums.Korea,
            metaData: {
                landPrice: 1,
            }
        },
        {
            index: 39,
            title: '서울',
            type: TileEnums.Korea,
            metaData: {
                landPrice: 1,
            }
        },
    ]

    const [playersData, setPlayersData] = useState<PlayerInterface[]>([
        { name: '제드', location: 0, money: 0, isDead: false },
        { name: '가렌', location: 0, money: 0, isDead: false },
        { name: '티모', location: 0, money: 0, isDead: false },
        { name: '애쉬', location: 0, money: 0, isDead: false }
    ])

    console.log('playersData ', playersData)
    const [turn, setTurn] = useState<number>(0)

    const rollingDice = () => {
        const dice = Math.floor(Math.random() * 12) + 1

        setPlayersData(prev => {
            const newPlayersData = [...prev]
            const newLocation = (newPlayersData[turn].location + dice) % tileData.length

            newPlayersData[turn] = {
                ...newPlayersData[turn],
                location: newLocation
            }

            return newPlayersData
        })

        // 턴 체인지 테스트 추후 제거
        setTurn(prev => {
            let index = prev + 1

            while(true) {
                if(index == 4) {
                    index = 0
                }

                if(!playersData[index].isDead) {
                    break
                }

                ++index
            }

            return index
        })
    }

    useEffect(() => {

    }, [])

    return (
        <>
            <div className="board">
                <Tile
                    tileData={tileData[20]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[21]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[22]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[23]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[24]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[25]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[26]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[27]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[28]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[29]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[30]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[19]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[31]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[18]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[32]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[17]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[33]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[16]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[34]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[15]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[35]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[14]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[36]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[13]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[37]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[12]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[38]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[11]}
                    players={playersData}
                />

                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>
                <div className="empty"/>

                <Tile
                    tileData={tileData[39]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[10]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[9]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[8]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[7]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[6]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[5]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[4]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[3]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[2]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[1]}
                    players={playersData}
                />

                <Tile
                    tileData={tileData[0]}
                    players={playersData}
                />

            </div>

            <div className="roll-button-container">
                <button
                    onClick={rollingDice}
                >
                    Roll
                </button>
            </div>

            <div className="player-info player1-info">
                <p>Player 1</p>

            </div>
            <div className="player-info player2-info">
                <p>Player 2</p>

            </div>
            <div className="player-info player3-info">
                <p>Player 3</p>

            </div>
            <div className="player-info player4-info">
                <p>Player 4</p>

            </div>
        </>

    )
}
