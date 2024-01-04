function toggleInputs() {
    var chooseRumus =document.getElementById("chooseRumus").value;
    var formLuas = document.getElementById("formLuas")
    var formKeliling = document.getElementById("formKeliling")

    if (chooseRumus === "luas") {
        formLuas.style.display = "block";
        formKeliling.style.display = "none";
    }
    else {
        formLuas.style.display = "none";
        formKeliling.style.display = "block";
    }
}

function hitung() {
    var bagianResultLuas = document.getElementById("bagianResultLuas");
    var bagianResultKeliling = document.getElementById("bagianResultKeliling")
    
    var alas =parseFloat (document.getElementById("input-alas").value);
    var tinggi =parseFloat (document.getElementById("input-tinggi").value);
    var sideA =parseFloat (document.getElementById("sideA").value);
    var sideB =parseFloat (document.getElementById("sideB").value);
    var sideC =parseFloat (document.getElementById("sideC").value);

    var chooseRumus =document.getElementById("chooseRumus").value;

    if (chooseRumus === "luas") {
        var resultLuas = parseFloat(1/2) * parseInt(alas) * parseInt(tinggi);
        document.getElementById("resultLuas").innerHTML = ("Luas Segitiga =" + " " +resultLuas + " " + "cm");

        document.getElementById("hitungLuas").innerHTML = ("L = 1/2 x" + " " + alas +" " + "x " +tinggi);

        document.getElementById("rumusLuas").innerHTML = ("L = 1/2 x a x t");

        bagianResultLuas.style.display = "block";
    }
    else {
        var resultKeliling = parseFloat(sideA) + parseFloat(sideB) + parseFloat (sideC);
        document.getElementById("resultKeliling").innerHTML = ("Keliling Segitiga ="+" "+resultKeliling);

        document.getElementById("hitungKeliling").innerHTML = ("K = " +sideA + " + " + sideB+ " + " +sideC);

        document.getElementById("rumusKeliling").innerHTML = ("K = S1+S2+S3");

        bagianResultKeliling.style.display = "block";
    }    


}

function reset() {
    var chooseRumus =document.getElementById("chooseRumus").value;

    if (chooseRumus === "luas") {
    var inputAlas = document.getElementById("input-alas");
    var nilaiAlas = inputAlas.value;
    inputAlas.value=0;

    var inputTinggi = document.getElementById("input-tinggi");
    var nilaiTinggi = inputTinggi.value;
    inputTinggi.value=0;

    bagianResultLuas.style.display = "none";
    }

    else {
    var inputSideA = document.getElementById("sideA");
    var nilaiSideA = inputSideA.value;
    inputSideA.value=0;

    var inputSideB = document.getElementById("sideB");
    var nilaiSideB = inputSideB.value;
    inputSideB.value=0;

    var inputSideC = document.getElementById("sideC");
    var nilaiSideC = inputSideC.value;
    inputSideC.value=0;

    bagianResultKeliling.style.display = "none";
    }
}