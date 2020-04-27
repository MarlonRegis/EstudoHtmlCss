function calc_total() {
    var valoroculos;
    var quant;
    quant = parseInt(document.getElementById('iQuant').value);
    valoroculos = 1500;
    total = valoroculos * quant;

    document.getElementById('iPreco').value = total;
}