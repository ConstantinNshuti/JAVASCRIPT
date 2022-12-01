let version : string = "04";
let exchange_rate : number = undefined;
let fixed_number : number = undefined;

let firts_Currency : string ;
let second_Currency : string;
let secNumber : number;
let change_number:number = undefined;
let comma : number = 2;
//function

function start(event){
    document.getElementById("version").innerText = "Currency Calculator V-"+  version;
}

function calculate( event  ){
    event.preventDefault();
    fixed_number  =  Number((document.getElementById("wert") as HTMLInputElement).value);
    exchange_rate = fixed_number
    firts_Currency = (document.getElementById("currency_1") as HTMLInputElement).value;
    second_Currency = (document.getElementById("currency_2")as HTMLInputElement).value;
    document.getElementById("output").innerText =  "Exchange rate " + firts_Currency +"/"+ second_Currency
        +" = " +  exchange_rate ;
    table_calculate(event);


}
function remove(event){
    let select = document.getElementById("list");
    if (select.childNodes.length > 0)
        select.removeChild(select.lastChild);
}
function add(event) {
    event.preventDefault();
    let list =(document.getElementById("list")as HTMLInputElement);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("das ist ein element"))

    list.appendChild(li);
}
function  table_calculate(event){
    event.preventDefault()
    let table : string = '<table>' + '<tr class="as-t-head">'+ '<td >'+ firts_Currency  +'</td>'+'<td>'+second_Currency
        +'</td>' + '</tr>';
    let i = 0;

    while (i < 1000){
        if (i < 10){
            i++;
            secNumber = exchange_rate *i
            let rounded = secNumber.toFixed(comma) ;
            table +='<tr class="as-t-first"  >'+ '<td ">'+i +'</td>'+'<td >' +rounded+'</td>'+'</tr>' ;

        }else if (i < 100){
            i +=10;
            secNumber = exchange_rate*i
            let   rounded = secNumber.toFixed(comma);
            table +='<tr class="as-t-second" >'+ '<td>'+i+'</td>'+'<td>'+rounded
                +'</td>'+'</tr>' ;
        }else{
            i +=  100;
            secNumber = exchange_rate*i
            let rounded = secNumber.toFixed(comma);
            table +='<tr class="as-t-third">'+ '<td>'+i+'</td>'+'<td>'+rounded+'</td>'+'</tr>' ;

        }
    }
    table += '</table>';
    document.getElementById("table_Output").innerHTML = table;

}
function swap_currency(event){
    event.preventDefault();
    let temp:string = firts_Currency;
    firts_Currency = second_Currency;
    change_number = 1 / exchange_rate;
    let temp_n : number = change_number;
    change_number = exchange_rate;
    exchange_rate = temp_n;



    second_Currency = temp;
    document.getElementById("output").innerText =  "Exchange rate " +firts_Currency +"/"+second_Currency
        +" = " +  exchange_rate ;
    if (comma == 2){
        comma = 4;
    }else{
        comma = 2;
    }
    table_calculate(event);
}


document.addEventListener("DOMContentLoaded", (event) =>{
    start(event);
    document.getElementById("From_input").addEventListener("submit" ,event =>{
        calculate(event );
    })
    document.getElementById("swap").addEventListener("click",event=>{
        swap_currency(event);
    })
    document.getElementById("add").addEventListener("click",(event) =>{
        add(event);
    })
    document.getElementById("remove").addEventListener("click",event =>{
        remove(event);
    })

})