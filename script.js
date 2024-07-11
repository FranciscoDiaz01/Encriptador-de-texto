function normalizar_texto(texto) {
  texto = texto.toLowerCase();

  texto = texto.normalize("NFD").replace(/[”\u0300-\u036f]/g, "");

  return texto;
}
document.getElementById("texto_entrada").addEventListener("input", function () {
  this.value = normalizar_texto(this.value);
});

function mostrar_resultado(texto) {
  document.getElementById("texto_salida").value = texto;
  document.getElementById("texto_salida").style.display = "block";
  document.getElementById("container_resultado").style.display = "block";
  document.getElementById("placeholder").style.display = "none";
}

function encriptar() {
  let texto = document.getElementById("texto_entrada").value;
  let textoEncriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  mostrar_resultado(textoEncriptado);
}

function desencriptar() {
  let texto = document.getElementById("texto_entrada").value;
  let textoDesencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  mostrar_resultado(textoDesencriptado);
}

function copiarTexto() {
  let texto = document.getElementById("texto_salida");
  texto.select();
  texto.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  alert("Texto copiado: " + texto.value);
}
