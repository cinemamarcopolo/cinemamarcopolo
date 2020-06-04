var film=new Vue({
    el: '#film',
    data:{
        selectedVariant: 0, /*inizialmente sto sul film 0*/
        pellicola:[
            {id:0, titolo: '007 No Time To Die', descrizione: 'Dopo aver lasciato i servizi segreti, Bond si gode una vita tranquilla in Giamaica. Tuttavia, la pace conquistata si rivela di breve durata quando il suo vecchio amico Felix Leiter gli chiede aiuto.',
                trailer: 'https://www.youtube.com/embed/BIhNsAtPbPI', locandina: "img/jamesbond-playbill.jpg" },
            {id:1, titolo: 'Parasite', descrizione: 'Ki Woo viene da una famiglia povera e, tuttavia, molto unita. Quando un suo amico gli propone di sostituirlo come tutore del figlio di un ricco magnate, il ragazzo riesce a procurare un lavoro anche alla sorella usando la propria arguzia.', 
                trailer: 'https://www.youtube.com/embed/5xH0HfJHsaY', locandina: "img/parasite-playbill.jpg"},
            {id:2, titolo: 'Odio l\'Estate', descrizione: 'Le famiglie di Aldo, Giovanni e Giacomo, che non si conoscono e sono molto diverse tra loro, partono per una vacanza in Puglia e si ritrovano, a causa di un disguido, a dover condividere l\'abitazione.',
                trailer: 'https://www.youtube.com/embed/GxKcPDgzjIw', locandina: "img/odiolestate-playbill.jpg"},
            {id:3, titolo: 'Joker', descrizione: 'Arthur Fleck, attore comico fallito ed ignorato dalla società, vaga per le strade di Gotham City iniziando una lenta e progressiva discesa negli abissi della follia, sino a divenire una delle peggiori menti criminali della storia.', 
                trailer: 'https://www.youtube.com/embed/o7nkJDjuSp4', locandina: "img/joker-playbill.jpg"},
            {id:4, titolo: 'In Time', descrizione: 'Per la rassegna I GRANDI CLASSICI: In un futuro non troppo lontano, il gene dell\'invecchiamento è stato isolato e sconfitto. Per evitare la sovrappopolazione, il tempo è diventato la moneta con cui la gente paga per acquistare i beni.',
                trailer: 'https://www.youtube.com/embed/4D3rfKEBxuA', locandina: "img/intime-playbill.jpg"},
            {id:5, titolo: 'Avengers: Endgame', descrizione: 'Alla deriva nello spazio senza cibo o acqua, Tony Stark vede la propria scorta di ossigeno diminuire di minuto in minuto. Nel frattempo, i restanti Vendicatori affrontano un epico scontro con Thanos.', 
                trailer: 'https://www.youtube.com/embed/TcMBFSGVi1c', locandina: "img/endgame-playbill.jpg"},
            {id:6, titolo: 'The Truman Show', descrizione: 'Per la rassegna I GRANDI CLASSICI: Truman Burbank scopre che i primi trent\'anni della propria vita non sono stati altro che una messinscena. Inizia così a desiderare di fuggire da una realtà alienante che però sembra essere stata costruita su misura per lui.',
                trailer: 'https://www.youtube.com/embed/loTIzXAS7v4', locandina: "img/truman-playbill.jpg"},
            {id:7, titolo: 'Il Buono, il Brutto, il Cattivo', descrizione: 'Per la rassegna I GRANDI CLASSICI: Mentre infuria la Guerra di Secessione, tre uomini dall\'oscuro passato si battono per impossessarsi di un tesoro nascosto in un cimitero.',
                trailer: 'https://www.youtube.com/embed/byCVQDkIMks', locandina: "img/buonobruttocattivo-playbill.jpg"}
        ]

    },
    methods:{
        updatePellicola: function(i){
            this.selectedVariant=i;
            window.scrollTo(0, 130);
        },

        locandinaFilm: function(i) {
            return this.pellicola[i].locandina;
        }
    },

    computed:{
        trailerFilm: function() {
            return this.pellicola[this.selectedVariant].trailer;
        },
        nomeFilm: function() {
            return this.pellicola[this.selectedVariant].titolo;
        },
        descrizioneFilm: function() {
            return this.pellicola[this.selectedVariant].descrizione;
        },
    }
});