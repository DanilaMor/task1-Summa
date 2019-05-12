function summa(){
    var A = document.forms["form"].elements["A"].value;
    var B = document.forms["form"].elements["B"].value;

    // calculate the number of decimal places
    var text;
    var numberOfSimbols = 0;
    if (A.indexOf(".") != -1){
        text = A.split(".")[1];
        numberOfSimbols = text.length
    }

    if (B.indexOf(".") != -1){
        text = A.split(".")[1];
        if (numberOfSimbols < text.length){
            numberOfSimbols = text.length
        }
    }

    A = parseFloat(A);
    B = parseFloat(B);


    var summaAB = A + B;
    alert("Результат: \n " + summaAB.toFixed(numberOfSimbols));
}