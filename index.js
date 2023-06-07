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
            if (arrNumber[i] < minPositive && arrNumber[i] > 0) {
                minPositive = arrNumber[i];
            }
        }
        document.getElementById("minPositiveArrayResult").innerHTML = minPositive;
    }
    document.getElementById("minPositiveArray").onclick = minPositiveNumb;

    // #5 tìm số chẵn cuối cùng
    function lastEvenNumb() {
        let lastEven = arrNumber[0];
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] % 2 == 0) {
                lastEven = arrNumber[i];
            }
        }
        // console.log(lastEven);
        document.getElementById("lastEvenResult").innerHTML = lastEven;
    }
    document.getElementById("findLastEven").onclick = lastEvenNumb;

    // #6: Đổi chỗ 
    function swapPosition() {

        var index1 = +document.getElementById("inputFirstPosition").value;
        var index2 = +document.getElementById("inputSecondPosition").value;

        var temp = arrNumber[index1];
        arrNumber[index1] = arrNumber[index2];
        arrNumber[index2] = temp;

        document.getElementById("afterSwap").innerHTML = arrNumber;
    }
    document.getElementById("btnSwap").onclick = swapPosition;

    // #7: Sắp xếp tăng dần
    function sortUp() {        
        for (var i = 0; i < arrNumber.length-1; i++) {
            for (var j = i + 1; j < arrNumber.length; j++) {
                if (arrNumber[i] > arrNumber[j]) {
                    var temp = arrNumber[i];
                    arrNumber[i] = arrNumber[j];
                    arrNumber[j] = temp;
                }
            }
        }
        document.querySelector("#afterSort").innerHTML = arrNumber;

    }
    document.getElementById("btnSort").onclick = sortUp;


}
document.getElementById("addNum").onclick = addToArray;
