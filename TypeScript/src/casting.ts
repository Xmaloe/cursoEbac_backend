
namespace casting {
    let idade: any = 25;
    (idade as number).toFixed()
}

let nome: string = 35 as unknown as string;// transforma tipo number em string