function executa($tamanhoVetor) {
    var vetor = [];
    for (i = 0; i < $tamanhoVetor; i++) {
        vetor.push(Math.floor(Math.random() * 10000));
    }
    const vetorBubblesort = vetor.slice();
    const vetorSelecaoDireta = vetor.slice();
    const vetorInsercaoDireta = vetor.slice();
    const vetorQuickSort = vetor.slice();
    const vetorShellSort = vetor.slice();

    var inputBubble = document.getElementById("Bubblesort");
    var inputSD = document.getElementById("Selecao_Direta");
    var inputID = document.getElementById("Insercao_Direta");
    var inputQS = document.getElementById("Quick_Sort");
    var inputSS = document.getElementById("ShellSort");
    
    
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

    console.log("QuickSort");
    const inicio4 = performance.now();
    QuickSort(vetorQuickSort);
    const fim4 = performance.now();
    console.log(fim4 - inicio4);
    inputQS.value = (fim4 - inicio4)/1000 + " s"

    console.log("ShellSort");
    const inicio5 = performance.now();
    ShellSort(vetorShellSort, $tamanhoVetor);
    const fim5 = performance.now();
    console.log(fim5 - inicio5);
    inputSS.value = (fim5 - inicio5)/1000 + " s"
    console.log(vetorShellSort);

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

    function QuickSort(array, left, right){
        var i = left;
        var j = right;
        var tmp;
        var pivotidx = (left + right) / 2;
        var pivot = parseInt(array[pivotidx.toFixed()]); 
        
        while (i <= j){
            while (parseInt(array[i]) < pivot)
                i++;
            while (parseInt(array[j]) > pivot)
                j--;
            if (i <= j){
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
                i++;
                j--;
            }
        }
        // RECURSAO
        if (left < j)
            quicksort(array, left, j);
        if (i < right)
            quicksort(array, i, right);
        return array;
    }

    function ShellSort(vetor, tam){
        var i, j, value;
        var gap = 1;
        while(gap < tam){
            gap=3*gap+1;
        }
        while(gap > 1){
            gap = parseInt(gap/3);
            for(i = gap; i< tam; i++){
                value= vetor[i];
                j=i-gap;
                while((j >=0) && (value <vetor[j])) {
                    vetor[j+gap]=vetor[j];
                    j=j-gap;
                }
                vetor[j+gap]=value;
            }
        }
        console.log(vetor)
    }
}