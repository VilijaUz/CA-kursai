let zodinis = `Tekstinio tipo kintamasis rasomas kabutese ir vadinamas string'u`;
let skaicius = 5;//paprastas skaicius arba matematine israiska
let loginis = true;//true arba false
let masyvas = ['labas', 'ate', 1, 2, false];//konteineris,kurio viduje vardinami duomenys
let objektas = { vardas: 'Rokas', lytis: 'vyras' };//konteineris,kurio viduje uzvadinami duomenys

console.groupCollapsed('back-tikas');
let vardas = 'Rokas';
let miestas = 'Kaunas';

console.log("Labas " + vardas + " .Esi is " + miestas + " miesto.Tai yra labai grazus miestas.");
console.log(`Labas ${vardas}.Esi is ${miestas} miesto.Tai yra labai grazus miestas ${5 + 5}.`);
console.log(`Mano vardas yra ${vardas}. `);
console.groupEnd();

/*let filmas = {
    pavadinimas: 'Rambo',
    leidimoMetai: 2008,
    rezisierius: 'Sylvester Stallone',
    movieLengh: '91 minutes',
    aktoriai: [
        {
            aktorius: 'Sylvester Stallone',
            personazas:'John Rambo'
        },{
            aktorius: 'Jullie Benz',
            personazas:'Sarah Miller'
        }, { 
            aktorius: 'Paul Schulze ',
            personazas:'Michael Burnett'
        },{ 
            aktorius:'Matthew Marsden ',
            personazas:'School Boy'
        }]
};*/
console.groupCollapsed('filmu masyvas');
let filmai = [
    {
        pavadinimas: 'Rambo',
        leidimoMetai: 2008,
        rezisierius: 'Sylvester Stallone',
        movieLengh: '91 minutes',
        aktoriai: [
            {
                aktorius: 'Sylvester Stallone',
                personazas: 'John Rambo'
            }, {
                aktorius: 'Jullie Benz',
                personazas: 'Sarah Miller'
            }, {
                aktorius: 'Paul Schulze ',
                personazas: 'Michael Burnett'
            }, {
                aktorius: 'Matthew Marsden ',
                personazas: 'School Boy'
            }]
    }, {
        pavadinimas: 'Pulp fiction',
        leidimoMetai: 2012,
        rezisierius: 'ar',
        movieLengh: '95 minutes',
        aktoriai: [
            {
                aktorius: 'ss',
                personazas: 'ss1'
            }, {
                aktorius: 'bb',
                personazas: 'bb1'
            }, {
                aktorius: 'pp ',
                personazas: 'pp1'
            }, {
                aktorius: 'mm ',
                personazas: 'mm1'
            }]
    }
]
console.log(filmai);
console.log(filmai[1].aktoriai[0]);/*pirmo filmo ,nulintasis aktorius */



console.groupEnd();

//   Salygos
console.groupCollapsed('kada vyksta salygose ribose esantys veiksmai');
let salygosSkaicius = 10;
if (5 > salygosSkaicius) {

    console.log('vyksta');
    console.log('veiksmas');
    console.log('jeigu');
    console.log(`if'as `);
    console.log('tiesa');

} else if (5 < salygosSkaicius) {
    console.log('vyksta');
    console.log('veiksmas');
    console.log('jeigu');
    console.log(`else if'as `);
    console.log('tiesa');
    console.log('o');
    console.log(`if'as `);
    console.log('melas');
} else {
    onsole.log('vyksta');
    console.log('veiksmas');
    console.log('jeigu');
    console.log('jvisi');
    console.log(`if'ai ir else if'ai `);
    console.log('melai');
}
console.groupEnd();

/*let didelisSkaicius = '500 l';
if(didelisSkaicius >= 100){
    console.log('Skaicius tikrai yra didelis');
}else if(didelisSkaicius <100){
    console.log('Skaicius ne toks ir didelis');
} else{
    console.log('Ne skaicius is vis wtf...');
}*/

let didelisSkaicius = 49;
if (didelisSkaicius >= 100) {
    console.log('Skaicius tikrai yra didelis');
    if (didelisSkaicius >= 1000) {
        console.log('ok,labai didelis skaicius');
    } else {
        console.log('na 1000 nesiekia,tai dar meh...');
    }
} else if (didelisSkaicius < 100 && didelisSkaicius % 2 === 0) {
    console.log('Skaicius ne toks ir didelis,bet jau lyginis..');
} else if (didelisSkaicius < 100 && didelisSkaicius % 2 !== 0) {
    console.log('Skaicius ne toks ir didelis,bet jau nelyginis..');
} else {
    console.log('Ne skaicius is vis wtf...');
}

