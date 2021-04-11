var sum = 0
var act = 0

function calculator(Num) {
    var temp = document.getElementById('resultall').innerHTML
    bowl = Num.value
    act = 0
    if (bowl == 1 || bowl == 2 || bowl == 3 || bowl == 4 || bowl == 5 || bowl == 6 || bowl == 7 || bowl == 8 || bowl == 9 || bowl == 0) {
        temp = bowl
        document.getElementById('resultall').innerHTML = temp


    } else if (bowl == "+") {

        temp = eval(temp)
        sum = eval(sum)
        sum = sum + temp
        document.getElementById('memory').innerHTML += "+" + temp
        document.getElementById('resultall').innerHTML = temp
        act = 1
        alert(act)
    } else if (bowl == "×") {
        if (sum == 0) {
            document.getElementById('memory').innerHTML = "*" + temp
            document.getElementById('resultall').innerHTML = temp
        } else {
            temp = eval(temp)
            sum = eval(sum)
            sum = sum * temp
            document.getElementById('memory').innerHTML = temp + "*" + sum
            document.getElementById('resultall').innerHTML = sum
        }
    } else if (bowl == "=") {
        if (act == 0) {
            temp = eval(temp)
            sum = eval(sum)
            sum = sum + temp
            document.getElementById('memory').innerHTML = sum
            document.getElementById('resultall').innerHTML = sum
            alert(act)
        }
    }


}