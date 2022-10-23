/* second page */
const data = new Date();
const day = data.getDate();
const months = ['gennaio', 'febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre']
const month = months[data.getMonth()];
const year = data.getFullYear();
const greetBtn = document.getElementById('greet-me');
const greeting = document.getElementById('hello');

document.getElementById('today').innerHTML = `${day}/${month}/${year}`
document.getElementById('full-date').innerHTML = data;
document.getElementById('day').innerHTML += day;
document.getElementById('month').innerHTML += month;
document.getElementById('year').innerHTML += `${day}-${data.getMonth()+1}-${year}`;

greetBtn.addEventListener('click', function(){
    let person = prompt("what's your name?");
    if(person!== null && person !== "") {
        greeting.innerHTML = `Hello, ${person}`
    } else {
        greeting.innerHTML = `Hello, stranger`
    }
})