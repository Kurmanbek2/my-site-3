/*console.log("JavaScript подключен");
console.log(typeof "Начало");
console.log(typeof 2 + 3);
console.log(typeof "Конец");
const studentName = "Аида";
let projectCount = 2;
projectCount = projectCount + 1;
console.log(typeof studentName);
console.log(typeof projectCount);
console.log(typeof 0);
console.log(typeof "");
const htmlScore = 80;
const cssScore = 90;
const average = (htmlScore + cssScore) / 2;
const b = (htmlScore + cssScore);
const c = (htmlScore * cssScore);
const d = (htmlScore ** cssScore);
const e = (htmlScore % cssScore);
const f = (htmlScore / cssScore);
console.log(average);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(7 % 3);
console.log(7 * 3);
console.log(7 - 3);
console.log(7 ** 3);
console.log("2" + "3");
console.log("2" + 3);
/*const j = 2;
const l = 3;
const o = Number(j);
const p = Number(l);
console.log(Number(o));
console.log(Number(p));
console.log(o + p);
console.log(3 >= 3);
console.log(2 >= 3);
console.log(3 === "3");
console.log(3 !== "3");
console.log(3 >= 3);
console.log(3 <= 3);
const hasAbout = true;
const hasContact = false;
console.log(hasAbout && hasContact);
console.log(hasAbout || hasContact);
console.log(!hasContact);
const projectCount = 4;
if(projectCount >= 5){
    console.log("Портфолио готово")
}
else if(projectCount >=3){
    console.log("готово")
}
else{
    console.log("не готово")
}
    95 отлично >=85 50 прошел
const a = 75;
if(a >=75){
    console.log("отлично")
}
else if(a >= 65){
    console.log("хорошо")
}
else if(a >= 50){
    console.log("прошел")
}
else{
    console.log("пересдача")
}
console.info("данные загружены");
console.warn("контакты не заполнены");
console.error("не удалось загрузить файл");
console.debug("промежуточное значение: ", 3);
const user = 'Olia';
const points = 100;
const msg = `Привет, ${user}! У тебя ${points} очков.`;
console.log(msg);
score = 100;
const result = score >= 60 ? 'зачёт' : 'незачёт';
console.log(result);*/
// function sayHello() {
//     console.log('Привет, мир!');
//     console.log('Я Айзат');
// }
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// function sum(a, b) {
//  return a * b;
//  }
//  console.log(sum(3, 5));
//   console.log(sum(20, 5));
//    console.log(sum(40, 3));
//     console.log(sum(20, 40));
//  document.getElementById('title');
//  document.querySelector('p');
//  document.createElement('div');
// const el = document.getElementById('msg');
//  el.textContent = 'Привет, меня зовут Курманбек';
//  el.style.color = 'blue';
const div =
document.getElementById('content');
 const p = document.createElement('p');
 p.textContent = 'Создано через JS!';
 div.appendChild(p);
 p.style.color = 'blue';
 p.style.background = 'yellow';
 p.classList.add('highlight');