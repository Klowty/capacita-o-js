var sel = null;
var dados = [];
var contador = 0;
var total = 0;

function ler() {
    dados[0] = window.document.getElementById('nome');
    dados[1] = window.document.getElementById('stacks');
    dados[2] = window.document.getElementById('valor');
    dados[3] = window.document.getElementById('dias');
    dados[4] = window.document.getElementById('devs');
    projetos = window.document.getElementById('projetos');
    faturamento = window.document.getElementById('faturamento'); console.log(dados[0].value);
    console.log(dados[1].value);
    console.log(dados[2].value);
    console.log(dados[3].value);
    console.log(dados[4].value);
}

function clicar() {
    if (sel == null) {
        cadastrar()
    } else {
        editarRow()
    }
}
function limpar(){
    for (var i = 0; i < 5; i++) {
        dados[i].value = '';
    }
}

function cadastrar() {
    ler();
    if (dados[0].value == "" || dados[1].value == "" || dados[2].value == "" || dados[3].value == "" || dados[4].value == ""){
        alert("Preencha todos os campos!");
}else{
        var table = document.getElementById('tabela');

        var linha = table.insertRow(table.rows.lenght);
        for (var i = 0; i < 5; i++) {
            var adc = linha.insertCell(i);
            adc.innerHTML = dados[i].value;
        }
        var adc = linha.insertCell(5);
        adc.innerHTML = "<tr><td><input type='submit' class='btn btn-edit' onclick='selectRow(this)' value='Editar'></td><td><input type='submit' value='Deletar' class='btn btn-del' onclick='deletar(this)'></td></tr>";
        contador++;
        projetos.innerHTML = contador + '/18';
        total = total + Number(dados[2].value);
        faturamento.innerHTML = Number((total * 100) / 27000).toFixed(2);
        limpar();
}
}

function editarRow() {
    sel.cells[0].innerHTML = document.getElementById("nome").value;
    sel.cells[1].innerHTML = document.getElementById("stacks").value;
    sel.cells[2].innerHTML = document.getElementById("valor").value;
    sel.cells[3].innerHTML = document.getElementById("dias").value;
    sel.cells[4].innerHTML = document.getElementById("devs").value;
   valor = sel.cells[2].innerHTML
   total = total + valor;
    faturamento.innerHTML = Number((total * 100) / 27000).toFixed(2);
    dados[0].value = '';
    dados[1].value = '';
    dados[2].value = '';
    dados[3].value = '';
    dados[4].value = '';
    sel = null;
}

function selectRow(td) {
    sel = td.parentElement.parentElement;
    document.getElementById("nome").value = sel.cells[0].innerHTML;
    document.getElementById("stacks").value = sel.cells[1].innerHTML;
    document.getElementById("valor").value = sel.cells[2].innerHTML;
    document.getElementById("dias").value = sel.cells[3].innerHTML;
    document.getElementById("devs").value = sel.cells[4].innerHTML;
    valor = sel.cells[2].innerText;
    total = total - valor;

}

function deletar(td) {
    row = td.parentElement.parentElement;
    row.cells[2] = document.getElementById("valor").text;
    valor = row.cells[2].innerText;
    total = total - valor;
    faturamento.innerHTML = Number((total * 100) / 27000).toFixed(2);
    if (confirm('Deseja realmente deletar?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tabela").deleteRow(row.rowIndex);
    }
    contador--;
    projetos.innerHTML = contador + '/18';
}

// function buscar(){
//     let pesquisa = document.getElementById('pesquisa').value;
//     console.log(pesquisa);
//     let table = document.getElementById('tabela');
//     for(let i = 0; i < table.rows.lenght;i++){
//         let row = table.rows[i];
//         let cell = row.cells[0];
//         console.log("row"+row);
//         if(pesquisa == cell.innetText || pesquisa == ""){
//             row.style.display = "table-cell";
//         }else{
//             row.style.display = "none";
//         }
//     }
// }
