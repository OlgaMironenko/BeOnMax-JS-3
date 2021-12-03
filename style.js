'use strict';

/**Практическое задание 3
 Дополнить нашу программу по видео
 1) Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget)
 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)
 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):
 - Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
 - Записать ответы в объект optionalExpenses в формате Номер - Ответ
 optionalExpenses: {
1 : “ответ на вопрос”
}
 Вызывать функции не обязательно.
 4) Добавить папку с третьим уроком на GitHub*/

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", "");
            if (typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("Отлично");
                appData.expenses[a] = b;
            } else {
                console.log("Плохо");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет:" + appData.moneyPerDay + "грн.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Маленький достаток");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний достаток");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Большой достаток");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита :" + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", '');

        if (typeof (items) != 'string' || items == '' || typeof (items) == null) {
            console.log("Вы ввели не корректные данны или что-то еще");

        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function (itemmassive, i) {
            console.log('Способы доп. заработка: ' + (i + 1) + ' - ' + itemmassive);

        });
    }

};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

//chooseExpenses();

// Расчет дневного бюджета
// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert("Бюджет на 1 день составляет:" + appData.moneyPerDay + "грн.");
// }

//detectDayBudget();

// Расчет уровня достатка

// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("Маленький достаток");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний достаток");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Большой достаток");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
//
// detectLevel();

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накопления?"),
//             percent = +prompt("Под какой процент?");
//
//         appData.monthIncome = save / 100 / 12 * percent;
//         alert("Доход в месяц с вашего депозита :" + appData.monthIncome);
//
//     }
// }
//
// checkSavings();

// Функция для определения необязательных расходов

// function chooseOptExpenses() {
//     for (let i = 1; i <= 3; i++) {
//         let questionOptExpenses = prompt("Статья необязательных расходов?");
//         appData.optionalExpenses[i] = questionOptExpenses;
//         console.log(appData.optionalExpenses);
//     }
// }
//
// chooseOptExpenses();