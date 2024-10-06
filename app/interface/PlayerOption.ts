import {PlayerOptionEnums} from "@/app/enum/PlayerOptionEnums";

export interface PlayerOptionProps {
    playerNumber: number
    option: PlayerOptionEnums
    changeOption: (playerNumber: number, playerOption: PlayerOptionEnums) => void
}