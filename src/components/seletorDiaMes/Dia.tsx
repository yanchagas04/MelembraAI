"use client"

export default function Dia(props: {num: number, isSelected: boolean, onSelect: () => void}) {
    return (
        <button 
            name="dias" 
            className={`${props.isSelected ? "bg-blue-500 hover:bg-blue-800 text-white " : "bg-white text-blue-500 hover:bg-gray-400"} font-bold rounded-md h-12 aspect-[2/3] flex justify-center items-center  transition-all ease-in-out duration-150`} 
            onClick={props.onSelect}
        >
            {props.num}
        </button>
    )
}