/*
    1.
    Операторы инкремента/декремента возвращают значение. Префиксная форма (++a, --a) возвращает новое значение, в то время как постфиксная (a++, a--) форма возвращает старое (до увеличения/уменьшения числа).
    Унарный, то есть применённый к одному значению, плюс + ничего не делает с числами. Но если операнд не число, унарный плюс преобразует его в число.
    Операторы ++/-- могут также использоваться внутри выражений. Их приоритет выше, чем у большинства других арифметических операций.

    var a = 1, b = 1, c, d;
    c = ++a; alert(c);           // 2 Префиксная форма a = 2
    d = b++; alert(d);           // 1 Постфиксная форма b = 2
    c = (2+ ++a); alert(c);      // 5 a = 2, ++a = 3 (Префиксная форма), (2+3) = 5 (приоритет ++ф выше, чем 2+) a = 3
    d = (2+ b++); alert(d);      // 4 b = 2 b++ = 2 (Постфиксная форма), (2+2) = 4 b = 3
    alert(a);                    // 3 к переменной a = 1 2 раза применялся инкримент
    alert(b);                    // 3 к переменной b = 1 2 раза применялся инкримент

    2.
    Чему будет равен x в примере ниже?
    var a = 2;
    var x = 1 + (a *= 2);
    (a*=2) = a*2 = 2*2 = 4
    x = 1 + 4 =5
*/

/*
    3. 
    Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

function task_3(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) console.log('Ошибка ввода данных');
    else if (a >= 0 && b >= 0) console.log(`${a - b}`);
    else if (a < 0 && b < 0) console.log(`${a * b}`);
    else console.log(`${a + b}`);
}

// task_3(2, 3)
// task_3(-2, -3)
// task_3(-2, 4)
// task_3(4, 1)
// task_3('hghgh', -2.5)

/*
    4.
    Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/
function task_4(a) {
    switch (a) {
        case 0: console.log(0);
        case 1: console.log(1);
        case 2: console.log(2);
        case 3: console.log(3);
        case 4: console.log(4);
        case 5: console.log(5);
        case 6: console.log(6);
        case 7: console.log(7);
        case 8: console.log(8);
        case 9: console.log(9);
        case 10: console.log(10);
        case 11: console.log(11);
        case 12: console.log(12);
        case 13: console.log(13);
        case 14: console.log(14);
        case 15: console.log(15); break;
        default: console.log('Должно быть число от 0 до 15. Вы ввели что то другое.');
    }
}

//task_4(9);
//task_4(0);
//task_4(15);
//task_4('aff');

/*
    5.
    Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}


/*
    6.
    Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
*/

function mathOperation(arg1, arg2, operation) {
    if (isNaN(+arg1) || isNaN(+arg2)) return 'Ошибка ввода данных. Введены не числовые значения';
    switch (operation) {
        case '+': return (addition(arg1, arg2));
        case '-': return (subtraction(arg1, arg2));
        case '*': return (multiplication(arg1, arg2));
        case '/': return (division(arg1, arg2));
        default: return 'Ошибка ввода данных. Неправильно введен знак операции';
    }

}

// console.log(mathOperation(6, 3, '+'))
// console.log(mathOperation(6, 3, '-'))
// console.log(mathOperation(6, 3, '*'))
// console.log(mathOperation(6, 3, '/'))
// console.log(mathOperation(6, 'hjhjh', '/'))
// console.log(mathOperation(6, 1.5, '/'))
// console.log(mathOperation(6, 1.5, '&&'))

/*
    7.
     *Сравнить null и 0. Попробуйте объяснить результат.
    null > 0; - false
    null == 0; - false
    null >= 0;  - true
    Сравнения преобразуют null в число, рассматривая его как 0 (undefined – NaN). Поэтому выражение null >= 0 истинно, а null > 0 ложно.
    Для нестрогого равенства значения undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно.

*/

/*
    8. 
    *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

*/

function power(val, pow) {
    if (pow === 0) return 1;
    return val * power(val, pow - 1)
}

// console.log(power(4, 1))
// console.log(power(4, 0))
// console.log(power(2, 5))

