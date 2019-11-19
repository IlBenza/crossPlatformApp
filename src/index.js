const Data = require('./data.js')

//Calendario
const calendarData = require('./calendar.js')
const oggettoCalendar = Data.calendar

//Stampo la funzione del calendar.js
calendarData.run()

calendarData.dom.innerHTML = `
${oggettoCalendar.map(item => `
    <ion-item-group>
        <ion-item-divider sticky>
            <ion-label>${item.time}</ion-label>
        </ion-item-divider>
        ${item.events.map(events => `
        <ion-item>
            <ion-label>
                <h3>${events.nome}</h3>
                <p>${events.inizio} &mdash; ${events.fine}</p>
            </ion-label>   
        </ion-item>
        `).join('\n')}
    </ion-item-group>`
).join('\n')}`

//Speakers
const speakersData = require('./speakers.js')
const oggettoSpeakers = Data.speaker

speakersData.dom.innerHTML = `
${oggettoSpeakers.map(item => `
    <ion-card>
        <ion-card-header>
            <ion-item>    
                <ion-thumbnail slot="start">  
                    <ion-img src="${item.img}"/>   
                </ion-thumbnail>
            <ion-card-title>${item.nome}</ion-card-title> 
            </ion-item>
        </ion-card-header>  
        <ion-card-content>
            <ion-card-title>${item.intervento}</ion-card-title>
            <ion-card-subtitle>${item.orario}</ion-card-subtitle>
            <p>${item.descrizione}</p>
        </ion-card-content>
    </ion-card> `
).join('\n')}`

//Map
const MyMap = require('./map.js')
MyMap.render()
    