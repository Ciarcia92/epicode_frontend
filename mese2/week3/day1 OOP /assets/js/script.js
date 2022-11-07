let people = [];
let table = document.getElementById('tableBody');

const Person = function (name, lastName, age) {
  this.fullName = name + ' ' + lastName;
  this.age = age;
};

window.addEventListener("DOMContentLoaded", init);

function init() {
    if(localStorage.getItem('people')) {
        people = JSON.parse(localStorage.getItem("people"));
        printPeople();
    }
}

var submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let lastName = document.getElementById('lastName').value;
  let birthYear = document.getElementById('birthYear').value;

  const today = new Date();
  let dateEntered = new Date(birthYear);
  const getAge = (dateEntered) =>
    Math.floor((today - dateEntered.getTime()) / 31557600000);
  let age = getAge(dateEntered);

  if (!!name && !!lastName && !!birthYear) {
    name = new Person(name, lastName, age);
    people.push(name);
    localStorage.setItem("people", JSON.stringify(people));
    printPeople()
  } else {
    alert('Please fill all the inputs');
  }

  document.getElementById('name').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('birthYear').value = '';
});

var printPeople = () => {
    table.innerHTML = "";
    people.forEach((person) => {
    table.innerHTML += `<tr><td> ${person.fullName} </td><td> ${person.age} </td> <td class='w-100 text-center material-symbols-outlined' style="cursor: pointer;" id='cancel' onclick='return this.parentNode.remove()'>delete</td></tr>`;
    
    let cancel = document.getElementById('cancel');

    cancel.addEventListener('click', () => {
        cancel.parentNode.remove();
        let i = people.indexOf(person);
        people.splice(i, 1);
        localStorage.setItem("people", JSON.stringify(people));
        printPeople()
    })
})
}
