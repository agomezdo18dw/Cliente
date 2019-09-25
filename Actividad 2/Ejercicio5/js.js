/*
 */
let temperatura = (temp, tipoTemp) =>{ 
    if (tipoTemp == "c"){
        let tempFinal = (temp * 9 / 5) + 32
        document.write("La temperatura " + temp + "ºC son: " + tempFinal + "ºF<br>");
    }
    else {
        let tempFinal = (temp - 32) * 5 / 9;
        document.write("La temperatura " + temp + "ºF son: " + tempFinal + "ºC<br>");
    }
}
for (let i = 0; i < 3; i++){
    let temp = parseInt(prompt("¿Que temperatura hace?"));
    let tipoTemp = prompt("¿En que tipo de temperatura lo has dicho?(C o F)");
    temperatura(temp, tipoTemp);
}