var arrNumber = [] //khai báo mảng (array)

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

        for (var i = 0; i < arrNumber.length - 1; i++) {
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

    // #8: Tìm số nguyên tố
    function findPrime() {
        var arrPrime = []

        for (var i = 0; i < arrNumber.length - 1; i++) {
            var temp = 0;
            for (var j = 2; j < Math.sqrt(arrNumber[i]); j++) {
                if (arrNumber[i] % j == 0) {
                    temp++;
                    break;
                }
            }

            if (temp == 0) {
                arrPrime.push(arrNumber[i])
            }
        }

        if (arrNumber.length > 0) {
            document.getElementById("resultPrime").innerHTML = "Số nguyên tố đầu tiên: " + arrPrime[0];
        } else {
            document.getElementById("resultPrime").innerHTML = "Không có số nguyên tố";
        }
    }
    document.getElementById("btnFindPrime").onclick = findPrime;

    // #10: So sánh lượng số dương và số âm
    function compareNumber() {
        var positiveNum = 0;
        var negativeNum = 0;
        for (var i = 0; i < arrNumber.length; i++) {
            if (arrNumber[i] >= 0) {
                positiveNum++
            } else {
                negativeNum++
            }
        }

        if (positiveNum > negativeNum) {
            document.getElementById("compareResult").innerHTML = "số dương > số âm";
        } else if (positiveNum < negativeNum) {
            document.getElementById("compareResult").innerHTML = "số dương < số âm";
        } else {
            document.getElementById("compareResult").innerHTML = "số dương = số âm";
        }
    }
    document.getElementById("btnCompare").onclick = compareNumber;

}
document.getElementById("addNum").onclick = addToArray;



// #9: Đếm số nguyên
var arrInteger = [];
function putInteger() {


    var integerInput = +document.getElementById("numberIntegerInput").value;
    arrInteger.push(integerInput);

    document.getElementById("numberIntegerDisplay").innerHTML = arrInteger;

    function countInteger() {
        var count = 0;

        for (var i = 0; i < arrInteger.length; i++) {
            if (Number.isInteger(arrInteger[i])) {
                count++;
            }
        }
        document.getElementById("resultCountInt").innerHTML = "Số lượng số nguyên: " + count;
    }
    document.getElementById("btnCountInt").onclick = countInteger;

}
document.getElementById("btnNumberInteger").onclick = putInteger;