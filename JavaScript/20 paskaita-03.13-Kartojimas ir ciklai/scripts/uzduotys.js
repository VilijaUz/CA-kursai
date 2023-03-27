/* 1 uzduotis  -Parašyti ciklą, kuris išspausdintų kiekvieną masyvo elementą.*/
let skaiciuMasyvas = [10, 18, 33, 105, -25, 98, 17, 49, -3, 16, 2.5, 88, 56, 60, 1005, 2023];
console.groupCollapsed('uzduotis1');
for (let i = 0; i < skaiciuMasyvas.length; i++) {
    console.log(skaiciuMasyvas[i])
};
console.groupEnd();
/* 2 uzduotis - Parašyti ciklą, kuris išspausdintų kas trečią masyvo elementą.*/
console.groupCollapsed('uzduotis2');
for (let i = 0; i < skaiciuMasyvas.length; i += 3) {
    console.log(skaiciuMasyvas[i]);
}
console.groupEnd();
/* 3 uzduotis -Parašyti ciklą, kuris išspausdintų kas antrą masyvo elementą nuo galo(-1) */
console.groupCollapsed('uzduotis3');
for (let i = skaiciuMasyvas.length - 1; i >= 0; i -= 2) {
    console.log(skaiciuMasyvas[i]);
}
console.groupEnd();
/* 4 uzduotis- Parašyti ciklą, kuris iš masyvo išspausdintų tik elementus,
 kurių reikšmė didesnė negu 54.*/
console.groupCollapsed('uzduotis4');
for (let i = 0; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] > 54) {
        console.log(skaiciuMasyvas[i]);
    }
}
console.groupEnd();



/* 5 uzduotis -Parašyti ciklą, kuris iš masyvo išspausdintų 
tik lyginius/nelyginius skaičius. (2ciklai)*/
console.groupCollapsed('uzduotis5');
let lyginiai =[];
let nelyginiai=[];

for (let i = 0; i < skaiciuMasyvas.length;  i++) {
    if (skaiciuMasyvas[i] % 2 === 0 ) {
        console.log(`Skaicius ${skaiciuMasyvas[i]} yra lyginis`);
        lyginiai.push(skaiciuMasyvas[i]);
    }
}
for (let i = 0; i < skaiciuMasyvas.length; i++) {
    if (skaiciuMasyvas[i] % 2 !== 0) {
        console.log(`Skaicius ${skaiciuMasyvas[i]} yra nelyginis`);
        nelyginiai.push(skaiciuMasyvas[i]);
    }

}
console.groupEnd();

//kitas var
console.log('lyginiai')
for (let i=0;i<skaiciuMasyvas.length;i++){
    if(skaiciuMasyvas[i]%2===0 && skaiciuMasyvas[i] !==0){
        console.log(skaiciuMasyvas[i]);
    }
}
console.log('nelyginiai')
for (let i=0;i<skaiciuMasyvas.length;i++){
    if(skaiciuMasyvas[i]%2===1 && skaiciuMasyvas[i] !==0){
        console.log(skaiciuMasyvas[i]);
    }
}
/* extra 1) Parašyti ciklą, kuris atlieka Fizz Buzz testą nuo 0 iki 100.
Fizz - jeigu skaičius yra 3 kartotinis/daliklis/dalijasi iš 3 be liekanos.
Buzz - jeigu skaičius yra 5 kartotinis/daliklis/dalijasi iš 5 be liekanos.
FizzBuzz - jeigu skaičius yra 3 ir 5 kartotinis/daliklis/dalijasi iš 3 ir 5 be liekanos.
skaičius - kitais atvejais.*/
console.groupCollapsed('uzduotisExtra1');
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.groupEnd();
/* EXTRA 2) Parašyti ciklą, kuris atrinktų ir į konsolę išspausdintų 
tik pirminius skaičius intervale nuo 0 iki 100.
Pirminis skaičius - dalinasi TIK iš savęs paties ir iš 1 be liekanos.
pvz(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
  61, 67, 71, 73, 79, 83, 89, 97, 101)*/
  console.groupCollapsed('uzduotisExtra2');
 
for (let i = 2; i <= 100; i++) {
     /* prielaida,kad i yra pirminis 
  irodai,kad i nera pirminis sukdamas dar viena cikla ir tikrindamas ar 
  i dalinasi be liekanos bent is vieno iki jo einanciu skaiciu */
    let yraPirminis = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            yraPirminis = false;
            break;
        }
    }
    if (yraPirminis) {
        console.log(i);
    }
}
console.groupEnd();

/* vardas */
console.groupCollapsed('vardas');
let vardas = ' Ona ';

if (10 > 0) {
  for (let i = 0; i < 10; i++) {
    vardas += ' Ona ';
  }
} else {
    vardas += ' Ona ';
}
console.log( vardas);
console.groupEnd();

console.groupCollapsed('vardas1');
let combo1 = ' Ona ';
let times1 = 10;
if (times1 > 11) {
  for (let i = 0; i < times1; i++) {
    combo1 += ' Ona ';
  }
} else {
    combo1 += ' Ona ';
  }
console.log(combo1);
console.groupEnd();