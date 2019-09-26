let precioSinIva = 4;
let tipoIVA = prompt("Tipo de iva (normal o reducido): ","");

const calcularIVA = (precioProd = 3, tipoIVA = "normal") => {
	if (tipoIVA == "normal") {
		let precioFinal = precioProd * 0.21;
		return precioFinal + precioProd;
	} else if (tipoIVA == "reducido"){
		let precioFinal = precioProd * 0.10;
		return precioFinal + precioProd;
	} else 
	return "(Introduce normal o reducido)"
}
let precioConIva = calcularIVA(precioSinIva, tipoIVA);

alert("El valor del producto con IVA es " + precioConIva);