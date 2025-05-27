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

function calculate(e) {
    // let resultado = eval(expression);// forma mais fácil apra realizar o calculo
        if(!/^[0-9+\-*/(). ]+$/.test(expression)){//Regex que valida apenas caracteres seguros, usado para cirar um padrão de dados válidos 
            alert('Espressão inválida!');
            return;
        }
        try{
            let resultado = new Function('return ' + expression)();// Cria uma função e executa — avalia a conta
            atualziarDisplay(resultado);
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

//Capture event on keyboard
document.addEventListener("keydown", function(event){
    const key = event.key;
    
    if((key >= '0' && key <= '9') || ['+','-','*','/','.','=','Enter','c','C'].includes(key)){
        if(key === 'Enter'){
            pressButton('=');
        }else if(key === 'c' || key === 'C'){
            pressButton('C');
        }else {
            pressButton(key);
        }
    }
});

// button.addEventListener('click', function() {
//     expression += this.value;
//     console.log(expression);
// });


