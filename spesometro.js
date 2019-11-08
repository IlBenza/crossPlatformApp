const motivoSpesa = document.querySelector('#motivo-spesa')
const importoSpesa = document.querySelector('#importo-spesa')
const cancellaBtn = document.querySelector('#btn-cancella')
const aggiungiBtn = document.querySelector('#btn-aggiungi')
const speseList = document.querySelector('#list-spese')

//Funzione di cancellazione delle stringhe
const cancella = () => {
    motivoSpesa.value = ''
    importoSpesa.value = ''
}

//Do la funzione "cancella" assegnata al button cancella
cancellaBtn.addEventListener('click', cancella)

//Do e creo una funzione assegnata al button aggiungi
aggiungiBtn.addEventListener('click', () => {

    const motivoInserito = motivoSpesa.value
    const importoInserito = importoSpesa.value

    //Se l'importo è 0, oppure i campi sono vuoti, esco dalla funzione
    if(importoInserito <= 0 || importoInserito.trim().length <= 0 || motivoInserito.trim().length <= 0){
        return
    }
    console.log('SPESA: ', motivoInserito, ' €: ', importoInserito)

    //Metto i dati sulla lista
    const nuovoElemento = document.createElement('ion-item')
    nuovoElemento.textContent = motivoInserito + ' €: ' + importoInserito
    speseList.appendChild(nuovoElemento)

    cancella()
})