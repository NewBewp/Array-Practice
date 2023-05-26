

var NumberArray = []
// thêm số vào chuỗi (array)
function addNumber() {
    var NumberArray=[];
    var numberInput = +document.getElementById("numberInput").value;
    NumberArray.push(numberInput);

    document.getElementById("arrayDisplay").innerHTML = NumberArray + ",";
}
console.log(NumberArray);
document.getElementById("addNum").onclick = addNumber;

// xóa số vừa thêm vào
function removeNumber() {
    NumberArray.pop();
    document.getElementById("arrayDisplay").innerHTML = NumberArray;
}
document.getElementById("removeNum").onclick = removeNumber;

// #1
function sumNumber() {
    let sum = 0;
    var length = NumberArray.length;

    for (var i = 1; i < length; i++) {
        
        var value = NumberArray[i];
        if (value >= 0) {
            sum += value;
        }
        return sum;
    }

    console.log(sum)
    document.getElementById("sumArrayResult").innerHTML = sum;
}
document.getElementById("sumArray").onclick = sumNumber(NumberArray);

// document.getElementById("sumArray").onclick = function(NumberArray){
//     var sum = 0;
//     var length = NumberArray.length;
//     for(var i=1; i<length; i++){
//         var value = NumberArray[i];
//         if(value>=0){
//             sum += value;
//         }
//     }
//     document.getElementById("sumArrayResult").innerHTML=sum;
// }