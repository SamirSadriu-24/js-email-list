let url = ("https://flynn.boolean.careers/exercises/api/random/mail");

//creo una variabile per mettere le email prese dal sito, e prendo gli ementi dall'html necessari per visualizzare poi le cose in pagina
const emailList = [];
const list = document.getElementById("Lista");

//catturo per 10 volte l'email generata dall'indirizzo http che ho chiamato url per abbrevviare. 

for (i = 0; i < 10; i++) {
    emailList.push(fetch(url)
        .then(response => response.json())
        .then(data => data.response));
}

//prendo tutte le promise generate dal fetch nell'Email List e ne prendo solo il risultato. poi con un ciclo for, per ogni risultato (quindi 10 volte in questo caso) faccio in modo che esso venga pushato in un li e venga messo all'interno della lista che ho creato prima nell' html
Promise.all(emailList).then(result => {
    result
    for (j = 0; j < result.length; j++) {
        const listElement = document.createElement("li");
        listElement.textContent = result[j];
        list.appendChild(listElement);
    }
});


//bottone che ricarica la pagina, quindi genera nuove email.
const recreateButton = document.getElementById("rigenera");

recreateButton.addEventListener("click", () => {
    window.location.reload(true);
});

