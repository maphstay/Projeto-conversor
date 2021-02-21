function converter() {
    let m1 = document.getElementById('moeda1').value;
    let m2 = document.getElementById('moeda2').value;    
    let val1 = document.getElementById('value1').value;
    let val2 = document.getElementById('value2').value;
    let de_para = m1 + "-" + m2;
                    
    if (m1 == m2) {
        return alert("Erro, escolha moedas diferentes!")
    }
    if (val1 <= 0) {
        return alert("Erro, digite um valor!")
    }

    let url = "https://economia.awesomeapi.com.br/all/" + de_para;
                    
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
        let cotacao = json[m1].ask;
        val2 = (cotacao * parseFloat(val1)).toFixed(2);
        document.getElementById('value2').value = val2;
        })
}
         
function muda_titulo() {
    let m1 = document.getElementById('moeda1').value;
    let m2 = document.getElementById('moeda2').value;
    let h1 = document.getElementById("titulo");
    h1.innerHTML = `Converter ${m1} para ${m2}`;
    document.getElementById('value1').placeholder = m1;
    document.getElementById('value2').placeholder = m2;
    document.getElementById('value1').value = "";
    document.getElementById('value2').value = "";
} 
            
function limpa_campos() {
    document.getElementById('value1').value = "";
    document.getElementById('value2').value = "";
}
            
function troca_bandeira1 () {
    let fotousd = "moeda-8.webp"
    let fotoeur = "moeda-11.webp"
    let fotogbp = "moeda-15.webp"
    let fotobrl = "moeda-26.webp"
    let value1 = document.getElementById('moeda1').value;
    if (value1 == "USD") {
        return document.getElementById('img_moeda1').src = fotousd;
    } else if (value1 == "EUR") {
        return document.getElementById('img_moeda1').src = fotoeur;
    } else if (value1 == "GBP") {
        return document.getElementById('img_moeda1').src = fotogbp;
    } else if (value1 == "BRL") {
        return document.getElementById('img_moeda1').src = fotobrl;
    }    
} 
 
function troca_bandeira2 () {
    let fotousd = "moeda-8.webp"
    let fotoeur = "moeda-11.webp"
    let fotobrl = "moeda-26.webp"
    let value2 = document.getElementById('moeda2').value;
    if (value2 == "USD") {
        return document.getElementById('img_moeda2').src = fotousd;
    } else if (value2 == "EUR") {
        return document.getElementById('img_moeda2').src = fotoeur;
    } else if (value2 == "BRL") {
        return document.getElementById('img_moeda2').src = fotobrl;
    }    
} 