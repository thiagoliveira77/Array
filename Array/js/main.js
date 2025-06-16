let rafh = new Array();
let trein = document.getElementById('bt');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let infoDiv = document.getElementById('informacoes');

trein.onclick = function () {
    rafh.push({
        nome: nome.value,
        email: email
    }
    );

    rafh.forEach(element => {
    });

    let p = document.createElement('p');
    let texto = document.createTextNode(`O nome é: "${nome.value}" e o e-mail é: "${email.value}"`);
    p.appendChild(texto);

    infoDiv.appendChild(p);

    console.log(rafh);
}