
let leituraAtiva = false; // Variável para controlar a ativação da leitura

        function ativarLeitura() {
            leituraAtiva = true;
        }

        document.getElementById("textoParaLeitura").addEventListener("click", function() {
            if (leituraAtiva) {
                var textoParaLeitura = document.getElementById("textoParaLeitura");

                // Seleciona o texto para leitura
                var texto = textoParaLeitura.textContent;

                // Configura a voz e inicia a síntese usando ResponsiveVoice
                responsiveVoice.speak(texto, "Brazilian Portuguese Female");

                // Destacar o texto selecionado
                textoParaLeitura.classList.add("selecionado");

                // Remover o destaque após um curto período
                setTimeout(function() {
                    textoParaLeitura.classList.remove("selecionado");
                }, 100); // 1000 milissegundos = 1 segundo

                leituraAtiva = false; // Desativa a leitura após a primeira execução
            }
        });