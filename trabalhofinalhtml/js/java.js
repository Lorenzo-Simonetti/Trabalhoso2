function calcular(){

    var valorProduto = document.getElementById("valorproduto").value;
    var quantidade = document.getElementById("quantidade").value;
    var total;

    switch (valorProduto){
        case "1":
        total = 30.5*quantidade;
            break;
        case "2":
        total = 44.5*quantidade;
            break;
        case "3":
        total = 38.5*quantidade;
            break;
        case "4":
        total = 20.5*quantidade;
            break;
        case "5":
        total = 14.8*quantidade;
            break;
        case "6":
        total = 22.7*quantidade;
            break;
        case "7":
        total = 28.5*quantidade;
            break;
        case "8":
        total = 19.5*quantidade;
            break;
        case "9":
        total = 45.5*quantidade;
            break;
        default:
        total = 0;
            break;
    }

    document.getElementById("resultado").value = total;
}

function confirmar(){

  alert("Compra realizada com Sucesso!")

}