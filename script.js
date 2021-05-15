let pais = document.getElementById("txt1");
let resultado = document.getElementById("resultado");

function verificar(){
    let nacionalidade = pais.value;
    if( nacionalidade === 'Brasil' || nacionalidade ==='brasil'){   
       resultado.innerHTML = '<p>Sua Nacionalidade é Brasileira</p>';
    } else if( nacionalidade === 'Estados Unidos' || nacionalidade ==='estados unidos'){   
        resultado.innerHTML = '<p>Você é Americano!</p>';
     } else {
        resultado.innerHTML='<p>Dados incorretos ou insuficientes!</p>';
     }
    };
       
        