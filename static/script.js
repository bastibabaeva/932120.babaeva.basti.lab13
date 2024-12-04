function generateRandomExpression() {
    const firstValue = Math.floor(Math.random() * 10);
    const secondValue = Math.floor(Math.random() * 10);

    const sign = Math.floor(Math.random() * 2) ? '+' : '-';

    const expression = `${firstValue} ${sign} ${secondValue} =`;

    document.querySelector('.example').value=expression;
    document.querySelector('.finish').onlick=function(){
        document.querySelector('.check').value='1';
        console.log(document.querySelector('.check').value);
    };
}
document.querySelector('DOMContentLoaded', generateRandomExpression)