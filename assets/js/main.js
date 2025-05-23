//coletar todos os itens do meu HTML

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
let expression = '';


function pressButton(valor){
    if(valor === '='){
        calculate();
    }else if(valor === 'C'){
        clean();
    }else {
        expression += valor;
        atualziarDisplay(expression);
    };
}

function calculate() {
    // let resultado = eval(expression);// forma mais fácil apra realizar o calculo
        if(!/^[0-9+\-*/(). ]+$/.test(expression)){//Regex que valida apenas caracteres seguros, usado para cirar um padrão de dados válidos 
            alert('Espressão inválida!');
            return;
        }
        try{
            let resultado = new Function('return ' + expression)();// Cria uma função e executa — avalia a conta
            atualziarDisplay(resultado);
                console.log("FOIIIII");
        } catch (e) {
            atualziarDisplay('Erro');
        }
    expression = '';
};

function clean(){
    expression = '';
    atualziarDisplay('');
}

function atualziarDisplay(texto){
    display.value = texto;
}

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        pressButton(this.value);//aqui utilizamos o this.value por que queremos pegar o valor que esta no html do botão 
    });
});

// button.addEventListener('click', function() {
//     expression += this.value;
//     console.log(expression);
// });


