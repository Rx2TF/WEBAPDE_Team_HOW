function doc(name, spec){
    this.name = name;
    this.spec = spec;
}

var docs = [new doc("Margarita Agdamag", "Obstetrics and Gynecology"), new doc("Angela Aguilar", "Obstetrics and Gynecology - Reproductive Endocrinology & Infertility")]

function print(){
    var x = document.getElementById("dropdown").value;
    var table = document.getElementById("table");
    
    console.log(x);
    if(x == "any"){
        for(var i = 0; i < docs.length; i++){
            var row = table.insertRow(i + 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);

            cell1.innerHTML = docs[i].name;
            cell2.innerHTML = docs[i].spec;
        }
    }
    else{

    }
}

function delete() {
    for(i = 1; i < document.getElementById("table").rows.length; i++){
        document.getElementById("table").deleteRow(i);
    }
    print
}