'use client'

import {PlayerOptionProps} from "@/app/interface/PlayerOption";
import {PlayerOptionEnums} from "@/app/enum/PlayerOptionEnums";
import {useState} from "react";

export default function PlayerOption({playerNumber, option, changeOption}: PlayerOptionProps) {
    const [tempOption, setTempOption] = useState<PlayerOptionEnums>(option === PlayerOptionEnums.None ? PlayerOptionEnums.Human : option)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked

        if(isChecked) {
            changeOption(playerNumber, tempOption)
        } else {
            changeOption(playerNumber, PlayerOptionEnums.None)
        }
    }

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOption = event.target.value as PlayerOptionEnums
        changeOption(playerNumber, newOption)
        setTempOption(newOption)
    }

    return (
        <div className="player">
            <input
                type="checkbox"
                id={`player${playerNumber}Checkbox`}
                checked={option !== PlayerOptionEnums.None}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={`player${playerNumber}Checkbox`}>
                {playerNumber}player:
            </label>
            <select
                id={`player${playerNumber}Select`}
                disabled={option === PlayerOptionEnums.None}
                onChange={handleSelectChange}
            >
                <option value={PlayerOptionEnums.Human}>Human</option>
                <option value={PlayerOptionEnums.Com}>Com</option>
            </select>
        </div>
    )
}