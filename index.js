var arrNumber = []

function addToArray() {
    var numberInput = +document.getElementById("numberInput").value;
    arrNumber.push(numberInput);

    document.getElementById("arrayDisplay").innerHTML = arrNumber + " ";

    // #1 tổng số dương
    function sumArray() {
        let sum = 0;
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] > 0) {
                sum += arrNumber[i];
            }
        }
        document.getElementById("sumArrayResult").innerHTML = sum;
    }
    document.getElementById("sumArray").onclick = sumArray;

    // #2 đếm số dương
    function coutPositiveNumb() {
        let cout = 0;
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] > 0) {
                cout++;
            }
        }
        document.getElementById("countArrayResult").innerHTML = cout;
    }
    document.getElementById("countArray").onclick = coutPositiveNumb;

    
}
document.getElementById("addNum").onclick = addToArray;
