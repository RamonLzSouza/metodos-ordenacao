function executa(tamanhoVetor) {
    var vetor = [];
    var vetorCrescente =[];
    var vetorDecrescente=[];
    for (i = 0; i < tamanhoVetor; i++) {
        vetor.push(Math.floor(Math.random() * 10000));
    }
    for  (i = 0; i < tamanhoVetor; i++) {
        vetorCrescente.push(i);
    }
    for (i = tamanhoVetor; i > 0; i--) {
        vetorDecrescente.push(i);
    }
    console.log(vetor);
    console.log(vetorCrescente);
    console.log(vetorDecrescente);
    // copia vetores
    const vetorBubblesort = vetor.slice();
    const vetorBubblesortCrescente = vetorCrescente.slice();
    const vetorBubblesortDecrescente = vetorDecrescente.slice();

    const vetorSelecaoDireta = vetor.slice();
    const vetorSelecaoDiretaCrescente = vetorCrescente.slice();
    const vetorSelecaoDiretaDecrescente = vetorDecrescente.slice();

    const vetorInsercaoDireta = vetor.slice();
    const vetorInsercaoDiretaCrescente = vetorCrescente.slice();
    const vetorInsercaoDiretaDecrescente = vetorDecrescente.slice();

    const vetorQuickSort = vetor.slice();
    const vetorQuickSortCrescente = vetorCrescente.slice();
    const vetorQuickSortDecrescente = vetorDecrescente.slice();

    const vetorShellSort = vetor.slice();
    const vetorShellSortCrescente = vetorCrescente.slice();
    const vetorShellSortDecrescente = vetorDecrescente.slice();

    const vetorHeapSort = vetor.slice();
    const vetorHeapSortCrescente = vetorCrescente.slice();
    const vetorHeapSortDecrescente = vetorDecrescente.slice();
    // fim copia vetores

    // nomeia variaveis
    // aleatorio
    var inputBubble = document.getElementById("Bubblesort");
    var inputSD = document.getElementById("Selecao_Direta");
    var inputID = document.getElementById("Insercao_Direta");
    var inputQS = document.getElementById("Quick_Sort");
    var inputSS = document.getElementById("ShellSort");
    var inputHS = document.getElementById("HeapSort");
    // crescente
    var inputCrescenteBubble = document.getElementById("crescenteBubblesort");
    var inputCrescenteSD = document.getElementById("crescenteSelecao_Direta");
    var inputCrescenteID = document.getElementById("crescenteInsercao_Direta");
    var inputCrescenteQS = document.getElementById("crescenteQuick_Sort");
    var inputCrescenteSS = document.getElementById("crescenteShellSort");
    var inputCrescenteHS = document.getElementById("crescenteHeapSort");
    // Decrescente
    var inputDecrescenteBubble = document.getElementById("decrescenteBubblesort");
    var inputDecrescenteSD = document.getElementById("decrescenteSelecao_Direta");
    var inputDecrescenteID = document.getElementById("decrescenteInsercao_Direta");
    var inputDecrescenteQS = document.getElementById("decrescenteQuick_Sort");
    var inputDecrescenteSS = document.getElementById("decrescenteShellSort");
    var inputDecrescenteHS = document.getElementById("decrescenteHeapSort");
    // fim nomeia variaveis

    // executa ordenação
    console.log("bubblesort");
    // aleatorio
    var inicio1 = performance.now();
    Bubblesort(vetorBubblesort);
    var fim1 = performance.now();
    console.log(fim1 - inicio1);
    inputBubble.value = (fim1 - inicio1) / 1000 + " s";
    // crescente
    var inicioCres1 = performance.now();
    Bubblesort(vetorBubblesortCrescente);
    var fimCres1 = performance.now();
    console.log(fimCres1 - inicioCres1);
    inputCrescenteBubble.value = (fimCres1 - inicioCres1) / 1000 + " s";
    // decrescente
    var inicioDcres1 = performance.now();
    Bubblesort(vetorBubblesortDecrescente);
    var fimDcres1 = performance.now();
    console.log(fimDcres1 - inicioDcres1);
    inputDecrescenteBubble.value = (fimDcres1 - inicioDcres1) / 1000 + " s";


    console.log("SelecaoDireta");
    // ale
    const inicio2 = performance.now();
    SelecaoDireta(vetorSelecaoDireta);
    const fim2 = performance.now();
    console.log(fim2 - inicio2);
    inputSD.value = (fim2 - inicio2) / 1000 + " s";
    // cres
    const inicioCres2 = performance.now();
    SelecaoDireta(vetorSelecaoDiretaCrescente);
    const fimCres2 = performance.now();
    console.log(fimCres2 - inicioCres2);
    inputCrescenteSD.value = (fimCres2 - inicioCres2) / 1000 + " s";
    // dec
    const inicioDcre2 = performance.now();
    SelecaoDireta(vetorSelecaoDiretaDecrescente);
    const fimDcre2 = performance.now();
    console.log(fimDcre2 - inicioDcre2);
    inputDecrescenteSD.value = (fimDcre2 - inicioDcre2) / 1000 + " s";


    console.log("InsercaoDireta");
    const inicio3 = performance.now();
    InsercaoDireta(vetorInsercaoDireta);
    const fim3 = performance.now();
    console.log(fim3 - inicio3);
    inputID.value = (fim3 - inicio3) / 1000 + " s"

    const inicioCres3 = performance.now();
    InsercaoDireta(vetorInsercaoDiretaCrescente);
    const fimCres3 = performance.now();
    console.log(fimCres3 - inicioCres3);
    inputCrescenteID.value = (fimCres3 - inicioCres3) / 1000 + " s"
    
    const inicioDcre3 = performance.now();
    InsercaoDireta(vetorInsercaoDireta);
    const fimDcre3 = performance.now();
    console.log(fimDcre3 - inicioDcre3);
    inputDecrescenteID.value = (fimDcre3 - inicioDcre3) / 1000 + " s"

    console.log("QuickSort");
    const inicio4 = performance.now();
    QuickSort(vetorQuickSort, 0, tamanhoVetor - 1);
    const fim4 = performance.now();
    console.log(fim4 - inicio4);
    inputQS.value = (fim4 - inicio4) / 1000 + " s"

    const inicioCres4 = performance.now();
    QuickSort(vetorQuickSortCrescente, 0, tamanhoVetor - 1);
    const fimCres4 = performance.now();
    console.log(fimCres4 - inicioCres4);
    inputCrescenteQS.value = (fimCres4 - inicioCres4) / 1000 + " s"
    
    const inicioDcre4 = performance.now();
    QuickSort(vetorQuickSortDecrescente, 0, tamanhoVetor - 1);
    const fimDcre4 = performance.now();
    console.log(fimDcre4 - inicioDcre4);
    inputDecrescenteQS.value = (fimDcre4 - inicioDcre4) / 1000 + " s"
    // console.log(vetorQuickSort);

    console.log("ShellSort");
    const inicio5 = performance.now();
    ShellSort(vetorShellSort, tamanhoVetor);
    const fim5 = performance.now();
    console.log(fim5 - inicio5);
    inputSS.value = (fim5 - inicio5) / 1000 + " s"

    const inicioCre5 = performance.now();
    ShellSort(vetorShellSortCrescente, tamanhoVetor);
    const fimCre5 = performance.now();
    console.log(fimCre5 - inicioCre5);
    inputCrescenteSS.value = (fimCre5 - inicioCre5) / 1000 + " s"
    
    const inicioDcre5 = performance.now();
    ShellSort(vetorShellSortDecrescente, tamanhoVetor);
    const fimDcre5 = performance.now();
    console.log(fimDcre5 - inicioDcre5);
    inputDecrescenteSS.value = (fimDcre5 - inicioDcre5) / 1000 + " s"
    // console.log(vetorShellSort);

    console.log("HeapSort");
    const inicio6 = performance.now();
    HeapSort(vetorHeapSort, tamanhoVetor);
    const fim6 = performance.now();
    console.log(fim6 - inicio6);
    inputHS.value = (fim6 - inicio6) / 1000 + " s"

    const inicioCre6 = performance.now();
    HeapSort(vetorHeapSortCrescente, tamanhoVetor);
    const fimCre6 = performance.now();
    console.log(fimCre6 - inicioCre6);
    inputCrescenteHS.value = (fimCre6 - inicioCre6) / 1000 + " s"

    const inicioDcre6 = performance.now();
    HeapSort(vetorHeapSortDecrescente, tamanhoVetor);
    const fimDcre6 = performance.now();
    console.log(fimDcre6 - inicioDcre6);
    inputDecrescenteHS.value = (fimDcre6 - inicioDcre6) / 1000 + " s"
    //console.log(vetorHeapSort);

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

    function QuickSort(array, left, right) {
        var i = left;
        var j = right;
        var tmp;
        pivotidx = (left + right) / 2;
        var pivot = parseInt(array[pivotidx.toFixed()]);

        while (i <= j) {
            while (parseInt(array[i]) < pivot)
                i++;
            while (parseInt(array[j]) > pivot)
                j--;
            if (i <= j) {
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
                i++;
                j--;
            }
        }

        if (left < j)
            QuickSort(array, left, j);
        if (i < right)
            QuickSort(array, i, right);
        return array;
    }

    function ShellSort(vetor, tam) {
        var i, j, value;
        var gap = 1;
        while (gap < tam) {
            gap = 3 * gap + 1;
        }
        while (gap > 1) {
            gap = parseInt(gap / 3);
            for (i = gap; i < tam; i++) {
                value = vetor[i];
                j = i - gap;
                while ((j >= 0) && (value < vetor[j])) {
                    vetor[j + gap] = vetor[j];
                    j = j - gap;
                }
                vetor[j + gap] = value;
            }
        }
    }

    function HeapSort(vetor, tam) {
        var i = parseInt(tam / 2), pai, filho, t;
        for (; ;) {
            if (i > 0) {
                i--;
                t = vetor[i];
            }
            else {
                tam--;
                if (tam == 0)
                    return;
                t = vetor[tam];
                vetor[tam] = vetor[0];
            }
            pai = i;
            filho = i * 2 + 1;
            while (filho < tam) {
                if ((filho + 1 < tam) && (vetor[filho + 1] > vetor[filho]))
                    filho++;
                if (vetor[filho] > t) {
                    vetor[pai] = vetor[filho];
                    pai = filho;
                    filho = pai * 2 + 1;
                }
                else
                    break;
            }
            vetor[pai] = t;
        }
    }

}