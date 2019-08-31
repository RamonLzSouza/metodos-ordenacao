function executa($tamanhoVetor) {
    var vetor = [];
    for (i = 0; i < $tamanhoVetor; i++) {
        vetor.push(Math.floor(Math.random() * 10000));
    }
    const vetorBubblesort = vetor.slice();
    const vetorSelecaoDireta = vetor.slice();
    const vetorInsercaoDireta = vetor.slice();

    var inputBubble = document.getElementById("Bubblesort");
    var inputSD = document.getElementById("Selecao_Direta");
    var inputID = document.getElementById("Insercao_Direta");
    
    console.log(inputBubble);
    console.log("bubblesort");
    var inicio1 = performance.now();
    Bubblesort(vetorBubblesort);
    var fim1 = performance.now();
    console.log(fim1 - inicio1);

    inputBubble.value =(fim1 - inicio1)/1000 + " s";

    console.log("SelecaoDireta");
    const inicio2 = performance.now();
    SelecaoDireta(vetorSelecaoDireta);
    const fim2 = performance.now();
    console.log(fim2 - inicio2);
    inputSD.value = (fim2 - inicio2)/1000 + " s";

    console.log("InsercaoDireta");
    const inicio3 = performance.now();
    InsercaoDireta(vetorInsercaoDireta);
    const fim3 = performance.now();
    console.log(fim3 - inicio3);
    inputID.value = (fim3 - inicio3)/1000 + " s"

    function Bubblesort(vetor) {

        var posicao = vetor.length - 1;
        do {
            trocar = false;
            for (var i = 0; i < posicao; i++) {
                if (vetor[i] > vetor[i + 1]) {
                    var temp = vetor[i];
                    vetor[i] = vetor[i + 1];
                    vetor[i + 1] = temp;
                    trocar = true;
                }
            }
            posicao--;

        } while (trocar);

    }

    function SelecaoDireta(vetor) {
        var posicao = vetor.length - 1;
        for (i = 0; i < posicao; ++i) {
            menor = i;
            for (j = i + 1; j < posicao + 1; ++j) {
                if (vetor[j] < vetor[menor]) {
                    menor = j;
                }
            }
            aux = vetor[i];
            vetor[i] = vetor[menor];
            vetor[menor] = aux;
        }
    }

    function InsercaoDireta(vetor) {
        var tamanho = vetor.length;
        for (var i = 1; i < tamanho; ++i) {
            var x = vetor[i];
            var k = 0;
            var j = i - 1;
            while (j >= 0 && k == 0) {
                if (x < vetor[j]) {
                    vetor[j + 1] = vetor[j];
                    --j;
                }
                else
                    k = j + 1;
            }
            vetor[k] = x;
        }
    }
}