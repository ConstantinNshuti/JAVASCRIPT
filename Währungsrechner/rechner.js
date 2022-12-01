var version = "04";
var exchange_rate = undefined;
var fixed_number = undefined;
var firts_Currency;
var second_Currency;
var secNumber;
var change_number = undefined;
var comma = 2;
//function
function start(event) {
    document.getElementById("version").innerText = "Currency Calculator V-" + version;
}
function calculate(event) {
    event.preventDefault();
    fixed_number = Number(document.getElementById("wert").value);
    exchange_rate = fixed_number;
    firts_Currency = document.getElementById("currency_1").value;
    second_Currency = document.getElementById("currency_2").value;
    document.getElementById("output").innerText = "Exchange rate " + firts_Currency + "/" + second_Currency
        + " = " + exchange_rate;
    table_calculate(event);
}
function remove(event) {
    var select = document.getElementById("list");
    if (select.childNodes.length > 0)
        select.removeChild(select.lastChild);
}
function add(event) {
    event.preventDefault();
    var list = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("das ist ein element"));
    list.appendChild(li);
}
function table_calculate(event) {
    event.preventDefault();
    var table = '<table>' + '<tr class="as-t-head">' + '<td >' + firts_Currency + '</td>' + '<td>' + second_Currency
        + '</td>' + '</tr>';
    var i = 0;
    while (i < 1000) {
        if (i < 10) {
            i++;
            secNumber = exchange_rate * i;
            var rounded = secNumber.toFixed(comma);
            table += '<tr class="as-t-first"  >' + '<td ">' + i + '</td>' + '<td >' + rounded + '</td>' + '</tr>';
        }
        else if (i < 100) {
            i += 10;
            secNumber = exchange_rate * i;
            var rounded = secNumber.toFixed(comma);
            table += '<tr class="as-t-second" >' + '<td>' + i + '</td>' + '<td>' + rounded
                + '</td>' + '</tr>';
        }
        else {
            i += 100;
            secNumber = exchange_rate * i;
            var rounded = secNumber.toFixed(comma);
            table += '<tr class="as-t-third">' + '<td>' + i + '</td>' + '<td>' + rounded + '</td>' + '</tr>';
        }
    }
    table += '</table>';
    document.getElementById("table_Output").innerHTML = table;
}
function swap_currency(event) {
    event.preventDefault();
    var temp = firts_Currency;
    firts_Currency = second_Currency;
    change_number = 1 / exchange_rate;
    var temp_n = change_number;
    change_number = exchange_rate;
    exchange_rate = temp_n;
    second_Currency = temp;
    document.getElementById("output").innerText = "Exchange rate " + firts_Currency + "/" + second_Currency
        + " = " + exchange_rate;
    if (comma == 2) {
        comma = 4;
    }
    else {
        comma = 2;
    }
    table_calculate(event);
}
document.addEventListener("DOMContentLoaded", function (event) {
    start(event);
    document.getElementById("From_input").addEventListener("submit", function (event) {
        calculate(event);
    });
    document.getElementById("swap").addEventListener("click", function (event) {
        swap_currency(event);
    });
    document.getElementById("add").addEventListener("click", function (event) {
        add(event);
    });
    document.getElementById("remove").addEventListener("click", function (event) {
        remove(event);
    });
});
