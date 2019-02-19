function pesquisaUser() {
// Variaveis
var input, filter, table, tr, td, i, txtValue;
input = document.getElementById("pesquisaUser");
filter = input.value.toUpperCase();
table = document.getElementById("tableUser");
tr = table.getElementsByTagName("tr");

// Aqui ele irá buscar de acordo com o que foi digitado no input:pesquisaUser
for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
    }
}
}

// -------------
