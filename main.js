$(document).ready(function() {
    // quando clicco sul tag button la classe .intro, inizialmente con display block, grazie al fade out, diventa diplay none con un effetto di fade
    $('button').click(function() {
        $('.intro').fadeOut();
        // allo stesso tempo parte il mio intervallo di riproduzione automatica delle immagini
        var automatic = setInterval(function () {
            // funzione creata per racchiudere la logica dello scorrimento automatico delle immagini
            scorrimentoImmagini();
        }, 2000) //il 2000 indica i milli secondi, in questo caso ogni foto rimarrà due secondi e poi passerà all'altrà
        // quando clicco si le classi selezionate il mio intervallo si interrompe, quindi da automatico passa a manuale
        $('.right, .left, i').click(function() {
            clearInterval(automatic);
        })
    })

    // aggancio una funzione di click alla classe .right
    $('.right').click(function() {
        // creo una variabile per richiamare l'immagine con la classe .active
        var imgCorrente = $('img.active');
        // creo una variabile per richiamare il bullet con la classe .active
        var dotCorrente = $('i.active');
        // creo una variabile per l'immagine successiva, usando .next sull'immagine che aveva già la classe .active (imgCorrente)
        var imgSuccessiva = imgCorrente.next('img');
        // creo una variabile per il bullet successivo, usando .next sul bullet che aveva già la classe .active (dotCorrente)
        var dotSuccessivo = dotCorrente.next('i');
        // per creare un ciclo di immagini quando arrivo all'ultima img, uso .lenght. Se la lunghezza della imgSuccessiva è uguale a zero (quindi vuota, avendo il diplay none), ridefinisco la variabile "imgSuccessiva" con la classe  .first inserita nella prima immagine
        if(imgSuccessiva.length == 0) {
            imgSuccessiva = $('img.first');
        };
        // per creare un ciclo di bullet quando arrivo all'ultima bullet, uso .lenght. Se la lunghezza della dotSuccessivo è uguale a zero (quindi vuota, avendo il diplay none), ridefinisco la variabile "dotSuccessivo" con la classe .primo inserita nel primo dot.
        if(dotSuccessivo.length == 0) {
            dotSuccessivo = $('i.primo');
        };
        // rimovo la classe .active dal immagine corrente
        imgCorrente.removeClass('active');
        // rimovo la classe .active dal dot corrente
        dotCorrente.removeClass('active');
        // aggiungo la classe .active all'immagine successiva
        imgSuccessiva.addClass('active');
        // aggiungo la classe .active al dot successivo
        dotSuccessivo.addClass('active');
        // $('img.active').removeClass('active');
        // $('img.active').next('img').addClass('active');
    })

    // aggancio una funzione di click alla classe .left
    $('.left').click(function() {
        // creo una variabile per richiamare l'immagine con la classe .active
        var imgCorrente = $('img.active');
        // creo una variabile per richiamare il bullet con la classe .active
        var dotCorrente = $('i.active');
        // creo una variabile per l'immagine precedente, usando .prev sull'immagine che aveva già la classe .active (imgCorrente)
        var imgPrecedente = imgCorrente.prev('img');
        // creo una variabile per il bullet precedente, usando .prev sul bullet che aveva già la classe .active (dotCorrente)
        var dotPrecedente = dotCorrente.prev('i');
        // per creare un ciclo, quindi cliccando indietro sulla prima immagine visualizzo l'ultima, uso .lenght. Se la lunghezza della imgPrecedente è uguale a zero (quindi vuota, avendo il diplay none), ridefinisco la variabile "imgPrecedente" con la classe .last inserita nell'ultima immagine
        if(imgPrecedente.length == 0) {
            imgPrecedente = $('img.last');
        };
        // per creare un ciclo di bullet quando arrivo all'ultimo bullet, uso .lenght. Se la lunghezza della dotPrecedente è uguale a zero (quindi vuota, avendo il diplay none), ridefinisco la variabile "dotPrecedente" con la classe .ultimo inserita nel ultimo dot.
        if(dotPrecedente.length == 0) {
            dotPrecedente = $('i.ultimo');
        };
        // rimovo la classe .active dal immagine corrente
        imgCorrente.removeClass('active');
        // rimovo la classe .active dal dot corrente
        dotCorrente.removeClass('active');
        // aggiungo la classe .active all'immagine precedente
        imgPrecedente.addClass('active');
        // aggiungo la classe .active al dot precedente
        dotPrecedente.addClass('active');
    })
    // cliccando sui bullet voglio ottenere lo spostamento del colore e collegare la sua relativa immagine
    $('.bullets i').click(function () {
        // creo una funzione per capire l'indice del dot attivo, in questo caso lo seleziono con this, così da selezionarlo singolarmente e uso l'azione .index che mi restituisce l'index dell'elemento
        var indexDot = $(this).index();
        // creo una variabile del dot corrente e gli assegno l'icona del bullet con la classe active
        var dotCorrente = $ ('i.active');
        // gli rimuovo la classe active
        dotCorrente.removeClass('active');
        // e a solo quello che io selezionerò darò la classe active, cosi da prenderlo singolarmente, se avessi scritto .bullets i a posto di this, mi si sarebbero colari tutti i bullets invece che uno solo
        $(this).addClass('active');

        // COLLEGAMENTO DEL DOT ALL'immagine
        // creo una variabile per l'immagine corrente, quella con la classe active
        var imgCorrente = $('img.active');
        // gli rimuovo la classe, perchè se no rimarrebbe con display block e quando andrei a selezionare le altre mi si accavallerebbero
        imgCorrente.removeClass('active');
        // creo una variabile per l'immagine che corrisponde al dot. La selezione con '.container-img img' e con l'azione .eq la vado ad associare all'alla variabile con l'index del this
        var imgCorrisp = $('.container-img img').eq(indexDot);
        // e infine gli aggiungo la classe active
        imgCorrisp.addClass('active');

    })
    // creo una funzione per racchiudere tutto il ragionamento dello scorrimento manuale dele immagini
    function scorrimentoImmagini() {
        var imgCorrente = $('img.active');

        var dotCorrente = $('i.active');

        var imgSuccessiva = imgCorrente.next('img');

        var dotSuccessivo = dotCorrente.next('i');

        if(imgSuccessiva.length == 0) {
            imgSuccessiva = $('img.first');
        };

        if(dotSuccessivo.length == 0) {
            dotSuccessivo = $('i.primo');
        };

        imgCorrente.removeClass('active');

        dotCorrente.removeClass('active');

        imgSuccessiva.addClass('active');

        dotSuccessivo.addClass('active');
    }
});
