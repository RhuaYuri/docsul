texto = [
    'instrumento de escriptura de ven', //6
    'da de escravo ou como em direito milhor nome tenha virem', //7
    'que no anno de Nascimento de Nosso Senhor Jesus Christo de mil', //8
    'oitocentos setenta e sete, aos trinta dias do mez de Maio do dito', //9
    'anno, neta cidade e Comarca da Carolina, da província do Mara', //10
    'nhão, em meu escriptorio forão presentes partes justas e contrata',//11
    'das a saber',//12
    'te nesta cidade, ambos do primeiro distrito e de mim reconhe',//15
    'cidos do que dou fé',//16
    'um escravo de nome Francisco, cabra',//19
    'com idade hoje de trinta e quatro annos, solteiro, vaqueiro',//20
    'natural desta Provincia',//21
    'Joaquim Antonio Nogueira, Collector das rendas geraes',//24
    'desta Cidade - A requerimento verbal do Capitão João',//25
    'Baptista Mascarenhas, certifico que revendo o livro de ma',//26
    'do livro, verifiquei achar-se matiulado sob os números',//28
    'quartorze da matricula e trez da relação apresentada em',//29
    'dezenove de Junho de mil oitocentos setenta e dois, perten',//30
    'de, n`aquelle tempo, solteiro, filho de Maria, vaqueiro'//32
]

ids = [
    'line6',
    'line7',
    'line8',
    'line9',
    'line10',
    'line11',
    'line12',
    'line15',
    'line16',
    'line19',
    'line20',
    'line21',
    'line24',
    'line25',
    'line26',
    'line28',
    'line29',
    'line30',
    'line32']

re = [
    're6',
    're7',
    're8',
    're9',
    're10',
    're11',
    're12',
    're15',
    're16',
    're19',
    're20',
    're21',
    're24',
    're25',
    're26',
    're28',
    're29',
    're30',
    're32']



function analisarTexto(){
    var string 
    for(var i = 0; i < texto.length; i++ ){
        string = document.getElementById(ids[i])
        reDiv = document.getElementById(re[i])        
        try {
            if (string.value.replace(/^\s+|\s+$/g, '') === texto[i]){
                reDiv.innerHTML = '<i style="background-color: rgb(5, 218, 33);" class="gg-check"></i>'
            }else{
                reDiv.innerHTML = '<i style="background-color: red;" class="bi bi-x"></i>'
    
            }
         }
         catch (e) {
            reDiv.innerHTML = '<i style="background-color: red;" class="bi bi-x"></i>'
         }
    }

}
