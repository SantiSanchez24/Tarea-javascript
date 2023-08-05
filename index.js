// ciclos, bucles, Programacion iterativa
// los ciclos o bucles son instrucciones que me permiten repetir N veces un bloque de codigo dependiendo de una CONDICION
// for, while, do while
// bucle infinito
// for (let index = 0; index < 10; index++) {
//     console.log("hola mundo")
//     console.log("")
// }

//let a = 0
// a++ ; incrementa el valor de la variable de 1 en 1
 //variable--condicion-se suma 1 por cada vez q se ejecuta
//  console.log("Antes del For");
// for (let index = 1; index < 10; index++) {
//     //todo el codigo que se encuentre aca se repetira N veces
//     // Siendo N = mientras la condicion sea true
// }
// for(let i = 0; i < 15; i++){
//     if(i % 2 === 0){
//         console.log("Es par " + i);
//     } else{
//         console.log("Es impar " + i);
//     }
// }console.log("Salio del for");

// --> bucle infinito

let continuar = true
while(continuar){
   let carrito = prompt("ingrese el valor del carrito")
    carrito = parseInt(carrito)
    const formaPago = prompt("ingrese su forma de pago")

    switch(formaPago){
        case "Efectivo":
            console.log("El precio total es: " + carrito);
        break
        case "Tarjeta":
            let cuotas = prompt("Por favor ingrese el numero de cuotas")

            if(+cuotas >= 3 && +cuotas <= 6){
                let resultado = carrito
                console.log("el precio de lista es: " + resultado)
                 resultado = carrito * 1.2
                console.log("el monto total de 3 a 6 cuotas es: " + resultado)
                console.log("el resultado total de la cuota es :" + (resultado - +carrito));
            }
          else  if(+cuotas > 6 && +cuotas <= 11){
                resultado = resultado * 1.25
                console.log("el monto total en 9 a  cuotas es: " + resultado)
                console.log("el resultado total de la cuota es :" + (resultado - +carrito));
            } else if(+cuotas == 12){
                resultado = resultado + 1.30
                console.log("El monto total en 12 cuotas es: " + resultado)
                console.log("el resultado total de la cuota es: " + (resultado - +carrito))
            } 
            else if(+cuotas > 12 || +cuotas === 8 || 7 || 2 || 1 || 0){
                console.log("solo cuotas de 3 a 6, 9 o 12 meses")
            }
            else{
                console.log("el total de la compra es: " + resultado)
                console.log("se puede realizar en 3 a 5 cuotas sin interes")
            }
            break
            case "Mercado pago":
                let cuotasMercado = prompt("Indique numero de cuotas:")
                if(+cuotasMercado >= 3 && +cuotasMercado <= 6){
                    let resultado = carrito
                    console.log("el precio de lista es: " + resultado)
                     resultado = carrito * 1.25
                    console.log("el monto total de 3 a 6 cuotas es: " + resultado)
                    console.log("el resultado total de la cuota es :" + (resultado - +carrito));
                }
              else  if(+cuotasMercado > 6 && +cuotasMercado <= 11){
                    resultado = resultado * 1.3
                    console.log("el monto total en 9 a  cuotas es: " + resultado)
                    console.log("el resultado total de la cuota es :" + (resultado - +carrito));
                } else if(+cuotasMercado == 12){
                    resultado = resultado + 1.4
                    console.log("El monto total en 12 cuotas es: " + resultado)
                    console.log("el resultado total de la cuota es: " + (resultado - +carrito))
                } 
                else if(+cuotasMercado > 12 || +cuotasMercado === 8 || 7 || 2 || 1 || 0){
                    console.log("solo cuotas de 3 a 6, 9 o 12 meses")
                }
                else{
                    console.log("el total de la compra es: " + resultado)
                    console.log("se puede realizar en 3 a 5 cuotas sin interes")
                }
            break
            case "Obra Social":
                    let resultado = carrito
                    let obraSocial = prompt("Ingrese si hara pago parcial o total")
                    if(obraSocial === "total"){
                         console.log("El pago total es: " + resultado)
                    }
                    else if(obraSocial === "parcial"){
                        let porcentajeTotal = prompt("Ingrese el porcentaje a abonar")
                        if(porcentajeTotal === 100 || porcentajeTotal < 100){
                        let porcentaje = carrito * (porcentajeTotal / 100)
                        console.log("el total a abonar es: " + porcentaje)}
                        else{
                            console.log("Ingrese un valor valido")
                        }
                    }
                    else{
                        console.log("ingrese total o parcial por favor")
                    }
 
            break
            default:
                console.log("seleccione una forma de pago valida")
            break
    }
    let desicion = prompt("desea cobrar otro producto 1-si 2-no")
    if (desicion == 2){
        alert("que tenga un buen dia")
        continuar = false
    }
}

let altura = 10

for (let index = 0; index < altura; index++) {
    let piso = "";
    for (let i = 0; i < index + 1; i++) {
        piso = piso + "*"
    }
    console.log(piso);
}

for (let i = 1; i <= 5; i++) {
    let linea = '******************************';
    if (linea.length > 0) {
        console.log(linea);
    }
    console.log(linea);
  }

