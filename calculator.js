/**
 * Created by postyly on 28.06.2017.
 */
/*
 Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

 Эта задача состоит из двух частей, которые можно решать одна за другой.

 Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2»,
 с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат.
 Понимает плюс + и минус -.

 Пример использования:

 var calc = new Calculator;

 alert( calc.calculate("3 + 7") ); // 10
 Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции.
 Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

 Например, добавим операции умножить *, поделить / и возвести в степень **:

 var powerCalc = new Calculator;
 powerCalc.addMethod("*", function(a, b) {
 return a * b;
 });
 powerCalc.addMethod("/", function(a, b) {
 return a / b;
 });
 powerCalc.addMethod("**", function(a, b) {
 return Math.pow(a, b);
 });

 var result = powerCalc.calculate("2 ** 3");
 alert( result ); // 8
 Поддержка скобок и сложных математических выражений в этой задаче не требуется.
 Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
 Предусмотрите обработку ошибок. Какая она должна быть – решите сами.

 */
(function () {

    'use strict';
    function Calculator() {

        //объект с методами выполнения операций
        var operations = {
            '-': function (val1, val2) {
                return val1 - val2;
            }
            ,
            '+': function (val1, val2) {
                return val1 + val2;
            }
        };


        //добавляет объекту operations новый метод метод
        this.addMethod = function (sign, func) {
            operations[sign] = func;
        };

        //производит вычисления
        this.calculate = function (str) {

            var arr = str.split(' ');
            var val1 = +arr[0];
            var sign = arr[1];
            var val2 = +arr[2];

            if (sign in operations && !isNaN(val1) && !isNaN(val2)){
                return operations[sign](val1, val2);
            }
            else return "неизвестная операция";
        };
    }

    var calc = new Calculator;
    alert(calc.calculate("3 + 7")); // 10

    var powerCalc = new Calculator;
    powerCalc.addMethod("*", function (a, b) {
        return a * b;
    });
    powerCalc.addMethod("/", function (a, b) {
        return a / b;
    });
    powerCalc.addMethod("**", function (a, b) {
        return Math.pow(a, b);
    });

    var result = powerCalc.calculate("2 ** 3");
    alert(result); // 8
    result = powerCalc.calculate("2 * 3");
    alert(result); // 8
    result = powerCalc.calculate("10 / 7");
    alert(result); // 8

})();

