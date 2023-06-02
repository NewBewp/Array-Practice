var arrNumber = []

function addToArray() {
    //đưa số vào mảng
    var numberInput = +document.getElementById("numberInput").value;
    arrNumber.push(numberInput);

    document.getElementById("arrayDisplay").innerHTML = arrNumber;

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

    // #3 tìm số nhỏ nhất
    function minNumb() {
        let min = +arrNumber[0];
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] < min) {
                min = arrNumber[i];
            }
        }
        document.getElementById("minArrayResult").innerHTML = min;
    }
    document.getElementById("minArray").onclick = minNumb;

    // #4 tìm số dương nhỏ nhất
    function minPositiveNumb() {
        // debugger
        let minPositive = +arrNumber[0];
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] < minPositive && arrNumber[i] > 0 ) {
                minPositive = arrNumber[i];
            }
        }
        document.getElementById("minPositiveArrayResult").innerHTML = minPositive;
    }
    document.getElementById("minPositiveArray").onclick = minPositiveNumb;

    // #5 tìm số chẵn cuối cùng
    // function lastEvenNumb(){
    //     let lastEven = arrNumber[0];
    //     for
    // }

}
document.getElementById("addNum").onclick = addToArray;
