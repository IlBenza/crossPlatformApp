const calendarData = require('./calendar.js')
const Data = require('./data.js')
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
    </ion-item-group>
    `).join('\n')}
`