function insert(number) {
  let numero = document.getElementById('result').innerText;
  document.getElementById('result').innerText = numero + number;
  }

function clean() {
  document.getElementById('result').innerText = '';
}

const lastChar = () => {
  const resultElement = document.getElementById('result');
  let resultado = resultElement.innerText;
  resultElement.innerText = resultado.slice(0, -1);
};

function calculate() {
  let resultado = document.getElementById('result').innerText;
  if (resultado) {
    document.getElementById('result').innerText = eval(porcentagem(resultado));
  } else {
    document.getElementById('result').innerText = 'NaN';
  }
}

function porcentagem(result) {
  let resultPercent = result.split('');

  for (let i = 0; i < resultPercent.length; i++) {
    if (resultPercent[i] == '%') {
      resultPercent[i] = '/100';
    }
  }
  return resultPercent.join('');
} 
