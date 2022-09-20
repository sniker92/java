// function pegarItem(item, valor){
//     //alert ("peguei o item"+item);
//     if((item != "arroz") || (valor == 10)) {
//      console.log(item + "valor: "+ valor);  
//     }    
// }

$("#btOk").click(
    function(){ 
        turma =
        [
            {"nome": "Hugo", "idade": 29},
            {"nome": "Aline", "idade": 19},
            {"nome": "Rafael", "idade": 20},
            {"nome": "Diego", "idade": 18},
            {"nome": "ernani", "idade": 19},
        ];

        console.log(turma[3].nome);
        console.log(turma[0].idade);


        // aluno = {"nome": "Hugo", "idade": 29};
        // aluno2 = {"nome": "Aline", "idade": 19};

        // ads = [aluno, aluno2]

        // console.log(aluno.nome);
        // console.log(aluno2.nome);

        // console.log(ads[0].nome);
        // console.log(ads[1].idade);
        
        // listaCompras = ["arroz", "arroz", "feijão", "ovo"]
        // valorProduto = [10, 12, 10, 1];

        // for (i = 0; i<=listaCompras.length+1; i++) {
        //     //alert("item: "+listaCompras[i]);
        //     pegarItem(listaCompras[i], valorProduto[i]);
        // }

       }
)
