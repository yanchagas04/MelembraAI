"use client"
import { useState } from "react";

export default function Dia(props: {num: number, isSelected: boolean, onSelect: () => void}) {
    return (
        <button 
            name="dias" 
            className={`${props.isSelected ? "bg-blue-500 text-white" : "bg-white text-blue-500"} font-bold rounded-md h-12 aspect-[2/3] flex justify-center items-center`} 
            onClick={props.onSelect}
        >
            {props.num}
        </button>
    )
}