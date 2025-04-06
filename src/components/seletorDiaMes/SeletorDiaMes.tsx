"use client"
import SeletorDia from "./SeletorDia";

const dias = (mes: number) => {
    let days = [];
    let i;
    if (mes === 2)
        i = 28;
    else if (mes % 2 === 0)
        i = 30;
    else
        i = 31;
    for (let index = 1; index <= i; index++) {
        days.push(index);
    }
    return days;
        
}

export default function SeletorDiaMes() {
    return (
        <form className="w-fit flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
            <SeletorDia dias={dias(new Date().getMonth())} />
        </form>
    )
}