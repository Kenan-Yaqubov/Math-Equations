alert("Привет, ты обладатель этого калькулятора и этот калькулятор поддерживает только десятичные дроби.(0.5✅ 1/2❌)")

function firstEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = a ** 2 + (2 * a * b) + b ** 2;
    let solve = `Решение: ${a ** 2} + ${2 * a * b} + ${b ** 2} = ${answer}`
    alert(solve)
}

function secondEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = a ** 2 - (2 * a * b) + b ** 2;
    let solve = `Решение: ${a ** 2} - ${2 * a * b} + ${b ** 2} = ${answer}`
    alert(solve)
}

function thirdEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = a**2 - b**2;
    let solve = `Решение: ${a**2} - ${b**2} = ${answer}`
    alert(solve)
}

function fourthEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = a ** 3 + (3 * (a ** 2) * b) + (3 * a * (b ** 2)) + b ** 3;
    let solve = `Решение: ${a ** 3} + ${3 * (a ** 2) * b} + ${3 * a * (b ** 2)} + ${b ** 3} = ${answer}`
    alert(solve)
}

function fifthEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = a ** 3 - (3 * (a ** 2) * b) + (3 * a * (b ** 2)) - b ** 3;
    let solve = `Решение: ${a ** 3} - ${3 * (a ** 2) * b} + ${3 * a * (b ** 2)} - ${b ** 3} = ${answer}`
    alert(solve)
}

function eighthEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let c = Number(prompt("Введи c: "))
    let answer = a**2 + b**2 + c**2 + (2 * a * b) + (2 * a * c) + (2 * b * c);
    let solve = `Решение: ${a**2} + ${b**2} + ${c**2} + ${2 * a * b} + ${2 * a * c} + ${2 * b * c} = ${answer}`
    alert(solve)
}

function ninthEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = (a ** 2 + (2 * a * b) + b ** 2) - 2 * a * b;
    let solve = `Решение: (${a ** 2} + ${2 * a * b} + ${b ** 2}) - ${2 * a * b} = ${answer}`
    alert(solve)
}

function elevensEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = (2*a**2) - (2*b**2);
    let solve = `Решение: ${2*a**2} - ${2*b**2} = ${answer}`
    alert(solve)
}


function twelvesEquation() {
    let a = Number(prompt("Введи a: "))
    let b = Number(prompt("Введи b: "))
    let answer = 4 * a * b;
    let solve = `Решение: 4 * ${a} * ${b} = ${answer}`
    alert(solve)
}