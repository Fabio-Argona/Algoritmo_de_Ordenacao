const livros = require('./listaLivros');

function insertSort(lista){
    for (let atual = 0; atual < lista.length; atual++){
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){
            let itemAnalise = lista[analise];
            //console.log(`Posição atual`, atual);
            //console.log(`livro atual`, livros[atual]);
            let itemAnterior = lista[analise - 1];
            //console.log(`livro menor preço`, livros[menor]);
            lista[analise] = itemAnterior
            lista[analise -1] = itemAnalise
            analise--
        }
    }
    console.log(lista);
}
insertSort(livros);