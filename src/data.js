module.exports = {
    "calendar": [
        {
            "time": "8:00",
            "events": [
                {
                    "id": "1.1",
                    "nome": "Colazione",
                    "inizio": "8:00",
                    "fine": "8:30",
                },
                {
                    "id": "1.2",
                    "nome": "Post Colazione",
                    "inizio": "8:30",
                    "fine": "9:00",
                },
            ],
   
        },
        {
            "time": "9:00",
            "events": [
                {
                    "id": "1.3",
                    "nome": "Andare in bagno",
                    "inizio": "9:00",
                    "fine": "9:10",
                },
                {
                    "id": "1.4",
                    "nome": "Giocare con la wii",
                    "inizio": "9:10",
                    "fine": "9:45",
                },
                {
                    "id": "1.5",
                    "nome": "Fare merenda",
                    "inizio": "9:45",
                    "fine": "10:00",
                }
            ]
        },
        {
            "time": "10:00",
            "events": [
                {
                    "id": "1.6",
                    "nome": "Pausa",
                    "inizio": "10:00",
                    "fine": "10:10",
                },
                {
                    "id": "1.7",
                    "nome": "Usare Whatsapp",
                    "inizio": "10:10",
                    "fine": "10:30",
                },
                {
                    "id": "1.8",
                    "nome": "Mettere like alle tipe su Instagram",
                    "inizio": "10:30",
                    "fine": "10:40",
                },
                {
                    "id": "1.9",
                    "nome": "Giocare a Pokemon GO",
                    "inizio": "10:40",
                    "fine": "10:50",
                },
                {
                    "id": "1.10",
                    "nome": "Guardare la TV",
                    "inizio": "10:50",
                    "fine": "11:00",
                }
            ]
        }
    ],
    "speaker": [
        {
            "id": "2.1",
            "nome": "Mario Rossi",
            "img": "https://pngimage.net/wp-content/uploads/2018/06/mario-hat-png-2-300x200.png",
            "intervento": "Colazione",
            "orario": "8:00 - 8:30",
            "descrizione": "Direzione presso il caffettino dal bar Amici, puntuale!"
        },
        {
            "id": "2.2",
            "nome": "Luigi Verdi",
            "img": "https://www.clipartmax.com/png/middle/254-2541876_pin-mario-hat-clipart-luigi-hat-transparent-background.png",
            "intervento": "Caccia ai fantasmi",
            "orario": "23:00 - 00:30",
            "descrizione": "Andare nella casa dei fantasmi e prendere molta paura"
        },
        {
            "id": "2.2",
            "nome": "Bowser",
            "img": "https://webstockreview.net/images/fireball-clipart-bowser-9.png",
            "intervento": "Rubare la principessa",
            "orario": "10:00 - 22:30",
            "descrizione": "Attuare il piano progettato in precedenza in 6,5 secondi, senza farsi sgammare da Mario"
        }
    ],
    "map": {
        "geojson": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {
                "evento": "colazione"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.762092590332031,
                  45.649268385921395
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
              "evento": "Inizio"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.759925365447998,
                  45.646283314737836
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "evento": "fine"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.764474391937254,
                  45.64815837802974
                ]
              }
            }
          ]
        }
    }
}