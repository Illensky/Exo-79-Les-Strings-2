let pomme = "Elle est belle ma pomme !";

document.querySelector("#index-pomme").innerHTML = pomme.indexOf("pomme");

document.querySelector('#last-index-m').innerHTML = pomme.lastIndexOf('m');

if (pomme.startsWith("Elle")){
    console.log(pomme + ' Commence par elle')
}

if (pomme.endsWith("!")){
    console.log(pomme +  "Se termine par un point d'exclamation")
}

document.querySelector('#pomme').innerHTML = pomme.substring(18, 23)

for (let i = 0; i < pomme.length ; i++) {
    document.querySelector("#one-line").innerHTML += pomme[i] + "<br>"
}

console.log(pomme.lastIndexOf('m'));