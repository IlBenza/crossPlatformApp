const titoloCorso = document.querySelector('#titolo-corso')
const valutazioneCorso = document.querySelector('#valutazione-corso')
const cancellaBtn = document.querySelector('#btn-cancella')
const aggiungiBtn = document.querySelector('#btn-aggiungi')
const listaCorsi = document.querySelector('#lista-corsi')
const toastErrore = document.querySelector('#toast-errore')
const mediaCorsi = document.querySelector('#media-corsi')

//Funzione di cancellazione delle stringhe
const cancella = () => {
    titoloCorso.value = ''
    valutazioneCorso.value = ''
}

//Funzione di calcolo media dei corsi
const media = () => {

    // valutazione = parseInt(valutazioneString)
    // valutazione = valutazione + 1
    // console.log('valutazione: ' + valutazione)

    // for(i=0; i<listaCorsi.length; i++){
    //     console.log("EL: " + listaCorsi[i])
    // }
}

//Do la funzione "cancella" assegnata al button cancella
cancellaBtn.addEventListener('click', cancella)

//Do e creo una funzione assegnata al button aggiungi
aggiungiBtn.addEventListener('click', () => {

    const titoloInserito = titoloCorso.value
    const valutazioneInserita = valutazioneCorso.value

    //Se l'importo è 0, oppure i campi sono vuoti, esco dalla funzione
    if(titoloInserito.trim().length <= 0 || valutazioneInserita.trim().length <= 0){
        
        toastErrore.create({
            color: 'dark',
            duration: 2000,
            message: 'Compila tutti i campi',
            //showCloseButton: true
        }).then(toast => {
            toast.present();
        });

        return
    }

    if(valutazioneInserita <= 0 || valutazioneInserita > 5){
            
        toastErrore.create({
            color: 'dark',
            duration: 2000,
            message: 'La valutazione deve essere compresa tra 1 e 5',
            //showCloseButton: true
        }).then(toast => {
            toast.present();
        });

        return
    }

    //Metto i dati sulla lista
    const nuovoCorso = document.createElement('ion-item')
    nuovoCorso.textContent = titoloInserito + ': ' + valutazioneInserita + ' ⭐'
    listaCorsi.appendChild(nuovoCorso)

    media()
    cancella()
})