
let btn = document.getElementById('start');

btn.addEventListener('click', function(){
    let oldBudget = Number(document.getElementById('budget').value);

    let startingExpense= 0;
    let expense= 0;
    let newBudget= oldBudget;
    document.getElementById('starting-budget').innerHTML+= oldBudget;

    for(startingExpense=0; newBudget>(oldBudget/10); startingExpense++) {
        expense = Math.floor(Math.random() *  oldBudget/10);
        newBudget -= expense;
        document.getElementById('list').innerHTML+= "<li>Ammontare della spesa: €" + expense + "</li>";
        document.getElementById('list').innerHTML += "<li>Nuovo budget aggiornato: €" + newBudget + "</li>";
    }
    document.getElementById('list').innerHTML += "<h2>Hai speso abbastanza</h2>";
    document.getElementById('list').innerHTML += "<p>Totale pese effettuate: " + expense + "</p>";
    document.getElementById('list').innerHTML += "<p>Budget rimanente: €" + newBudget + "</p>";
});







