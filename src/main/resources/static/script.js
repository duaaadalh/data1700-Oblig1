const billettArray = [];

function filmer() {
    let valgtFilm = document.getElementById('velg-billett').value;
    let antallBilletter = document.getElementById('mytext').value;
    let fornavn = document.getElementById('fornavn').value;
    let etternavn = document.getElementById('etternavn').value;
    let epost = document.getElementById('e-post').value;
    let telefonnummer = document.getElementById('tlfnummer').value;

    if (valgtFilm == "") {
        alert("Velg en film");
        return;
    }
    if (fornavn == "") {
        alert("Skriv inn gyldig fornavn");
        return;
    }
    if (etternavn == "") {
        alert("Skriv inn gyldig etternavn");
        return;
    }
    if (!telefonnummer.match("^[0-9]*$")) {
        alert("Skriv inn gyldig telefonnummer");
        return;
    }
    if (!epost.match("@")) {
        alert("Skriv inn gyldig e-post");
        return;
    }

    const nyBillett = {
        film: valgtFilm,
        antall: antallBilletter,
        fornavn: fornavn,
        etternavn: etternavn,
        epost: epost,
        telefonnummer: telefonnummer
    };

    billettArray.push(nyBillett);

    // Tøm inputfeltene
    document.getElementById('velg-billett').value = "";
    document.getElementById('mytext').value = "";
    document.getElementById('fornavn').value = "";
    document.getElementById('etternavn').value = "";
    document.getElementById('e-post').value = "";
    document.getElementById('tlfnummer').value = "";

    oppdaterBillettListe();
}

// Funksjon for å oppdatere billett-listen
function oppdaterBillettListe() {
    let billettListe = document.getElementById("billett-liste");
    billettListe.innerHTML = "";

    for (let billett of billettArray) {
        let rad = "<tr><td>" + billett.film + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td><td>" + billett.telefonnummer + "</td><td>" + billett.epost + "</td><td>" + billett.antall + "</td></tr>";
        billettListe.innerHTML += rad;
    }
}

// Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billettArray.length = 0; // Tøm arrayet
    oppdaterBillettListe(); // Oppdater billett-listen
}