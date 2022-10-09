let fano = document.querySelector('#txtano');
let res = document.querySelector('#res');
let fsex = document.getElementsByName('radsex');
let genero = ''


function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let idade = ano - Number(fano.value);
    let img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fano.value.length == 0 || fano.value > ano || fano.value <= 1900 ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}