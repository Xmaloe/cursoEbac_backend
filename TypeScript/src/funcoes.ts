function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]): void {
    //numeros.reduce()
    console.log(numeros)
}

function teste(): string | number {
    return 10 > 5 ? 'dez maior que cinco' : 5;
}