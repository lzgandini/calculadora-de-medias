function calculaMedia() {
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var nota3 = parseFloat(document.getElementById("nota3").value);
  var nota4 = parseFloat(document.getElementById("nota4").value);
  
  var notaTotal = (nota1 + nota2 + nota3 + nota4) / 4;
  var notaArredondada = notaTotal.toFixed(2);
  
  var notas = document.getElementById("notas")
  
  media = 7;
  if (notaTotal > media) {
    notas.innerHTML = "Aprovade";
  } else {
    notas.innerHTML = "Reprovade";
  }
}