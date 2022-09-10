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
    'de, n aquelle tempo, solteiro, filho de Maria, vaqueiro',//32
    'e sete - O Collector Joaquim Antonio Nogueira',//36
    'dor que o escravo a cima referido se acha quite do impos',//46
    'to de treze annual como do conhecimento seguinte',//47
    'vo - Recebido do Capitão João Baptista Mascarenhas',//51
    'mil – Em trinta de Maio de mil oitocentos setenta e',//55
    'sete – O Collector, Nogueira – Disse ainda, que pelo',//56
    'presente instrumento vende, como de facto vendido tem o',//57
    'escravo acima referido à Dona Juliana Moreira Perei',//58
    'ra, pela quantia de oitocentos mil reis moeda correnta',//59
    'que meste acto recebeu, pelo que dá a compradora plena e',//60
    'geral quitação de paga, e lhe transfere toda a posse, jus e do',//61
    'minio que no mesmo escravo tenha, para que o possa',//62
    'dispor como sue que desde já fica sendo, pois ao assigna',//63
    'rem este contracto fica logo amparada dele: assim',//64
    'sempre bôa, de paz, firme. Valeria tanto em juiso como',//66
    'compradora Dona Juliana Moreira Pereira foi dito',//68
    'que aceita a presente escriptura, sempre, digo, escriptura',//69
    'nos termos expressado; e me presentou o conhecimen',//70
    '[ilegível] e de taxa annul, ficão também [ilegível]',//75
    'cartorio, e bem assim uma estupilha do valor de oito con',//76
    'tos reis, proporcional ao mesmo contracto que vai no',//77
    'fim deste instrumento devidamente inutilizado [ilegível]',//78
    '[ilegível], ouvirão ler e assigna o vendedor fazendo. E',//79
    'rogo da compradora por declarara não saber escrever al',//80
    'feres Herminio Ayres da Silva, com as testemunhas a este',//81
    'acto presente - Capitão Benedicto Montriel e Alferes Joa',//82
    'quim Antonio Nogueira, que também são reconhecidos',//83
    'que o escrevy por me ser pedido'//85
]

ids = ['line6',
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
    'line32',
    'line36',
    'line46',
    'line47',
    'line51',
    'line55',
    'line56',
    'line57',
    'line58',
    'line59',
    'line60',
    'line61',
    'line62',
    'line63',
    'line64',
    'line66',
    'line68',
    'line69',
    'line70',
    'line75',
    'line76',
    'line77',
    'line78',
    'line79',
    'line80',
    'line81',
    'line82',
    'line83',
    'line85']

re = ['re6',
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
    're32',
    're36',
    're46',
    're47',
    're51',
    're55',
    're56',
    're57',
    're58',
    're59',
    're60',
    're61',
    're62',
    're63',
    're64',
    're66',
    're68',
    're69',
    're70',
    're75',
    're76',
    're77',
    're78',
    're79',
    're80',
    're81',
    're82',
    're83',
    're85']


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



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
