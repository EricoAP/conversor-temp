function converterTemperatura() {
  // Obter o valor do input
  var valorInput = document.getElementById("valor").value;

  // Converter para números
  var valorNumerico = parseFloat(valorInput);

  // Verificar se é um número válido
  if (isNaN(valorNumerico)) {
    alert("Por favor, insira um número válido!");
    return;
  }

  // Obter as opções de temperatura selecionadas
  var temperaturaOrigem = document.getElementById("origem").value;
  var temperaturaDestino = document.getElementById("destino").value;

  // Verificar a opção de temperatura de origem
  var temperaturaConvertida;
  if (temperaturaOrigem === "celsius") {
    if (temperaturaDestino === "fahrenheit") {
      temperaturaConvertida = (valorNumerico * 9 / 5) + 32;
    } else if (temperaturaDestino === "kelvin") {
      temperaturaConvertida = valorNumerico + 273.15;
    } else {
      temperaturaConvertida = valorNumerico; // Mesma unidade de temperatura
    }
  } else if (temperaturaOrigem === "fahrenheit") {
    if (temperaturaDestino === "celsius") {
      temperaturaConvertida = (valorNumerico - 32) * 5 / 9;
    } else if (temperaturaDestino === "kelvin") {
      temperaturaConvertida = (valorNumerico + 459.67) * 5 / 9;
    } else {
      temperaturaConvertida = valorNumerico; // Mesma unidade de temperatura
    }
  } else if (temperaturaOrigem === "kelvin") {
    if (temperaturaDestino === "celsius") {
      temperaturaConvertida = valorNumerico - 273.15;
    } else if (temperaturaDestino === "fahrenheit") {
      temperaturaConvertida = (valorNumerico * 9 / 5) - 459.67;
    } else {
      temperaturaConvertida = valorNumerico; // Mesma unidade de temperatura
    }
  }

  // Exibir o resultado
  document.getElementById("resultado").innerHTML = temperaturaConvertida.toFixed(2);

  // Alterar a cor de fundo com base na intensidade da temperatura
  var corFundo = calcularCorFundo(temperaturaConvertida);
  document.body.style.backgroundColor = corFundo;
}

function calcularCorFundo(temperatura) {
  // Definir valores de temperatura máxima e mínima para definir a escala de cores
  var temperaturaMaxima = -100;
  var temperaturaMinima = 500;

  // Calcular a intensidade da temperatura
  var intensidade = (temperatura - temperaturaMinima) / (temperaturaMaxima - temperaturaMinima);

  // Mapear a intensidade para uma cor
  var corR = 255 - Math.round(intensidade * 500);
  var corB = Math.round(intensidade * 255);
  var corG = 0;

  // Retornar a cor no formato RGB
  return `rgb(${corR}, ${corG}, ${corB})`;
}