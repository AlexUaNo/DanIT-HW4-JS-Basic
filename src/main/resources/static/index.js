/* Отримати за допомогою модального вікна браузера два числа.
Отримати за допомогою модального вікна браузера математичну операцію, яку потрібно виконати. Сюди може бути введено +, -, *, /.
Створити функцію, в яку передати два значення та операцію.
Вивести у консоль результат виконання функції. */

/* Після введення даних додати перевірку їхньої коректності.
Якщо користувач не ввів числа, або при вводі вказав не числа, - запитати обидва числа знову
(при цьому значенням за замовчуванням для кожної зі змінних має бути введена інформація раніше).*/

function operationData() {
    let number1 = Number(prompt("Write number 1: ", ""));
    let number2 = Number(prompt("Write number 2: ", ""));
    let operation = prompt("Which mathematical operation do you want to do: +, -, *, /  ?", "");

    while (!parseInt(number1)){         // as an option: while (typeof (number1) != 'number'){
        number1 = Number(prompt("You should write a number1 here: ", ""));
    }
    while (!parseInt(number2)){
        number2 = Number(prompt("You should write a number2 here: ", ""));
    }
    while (!(operation)){
        operation = prompt("You forgot to write a mathematical operation: +, -, *, /  ?", "");
    }

    switch(operation){
        case '+':
            let add = number1 + number2;
            console.log(`The sum of ${number1} and ${number2} is ${add}.`);
            break;
        case '-':
            let minus = number1 - number2;
            console.log(`The subtraction of ${number1} and ${number2} is ${minus}.`);
            break;
        case '*':
            let multi = number1 * number2;
            console.log(`The multiplication of ${number1} and ${number2} is ${multi}.`);
            break;
        case '/':
            let devis = number1 / number2;
            console.log(`The division of ${number1} and ${number2} is ${devis}.`);
            break;
    }
}
operationData();

