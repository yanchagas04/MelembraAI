"use client";
export const pegarDias = (mes: number) => {
    const days = [];
    let i;
    if (mes + 1 === 2)
        i = 28;
    else if ((mes + 1) % 2 === 0) {
        i = 30;
    }
    else
        i = 31;
    for (let index = 1; index <= i; index++) {
        days.push(index);
    }
    return days;

};

export const iniciais_meses = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

export function deslocarDias(dia: number) {
    if (dia < 8) return 0;
    else if (dia < 15) return 1;
    else if (dia < 22) return 2;
    else if (dia < 29) return 3;
    else return 4;
}