function chanLe(event){
    event.preventDefault();
    /***
     * đầu ra
     */
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    console.log(number1,number2,number3);
    
    /***
     * xử lý
     */
    var so1 =  timChanLe(number1);
    var so2 =  timChanLe(number2);
    var so3 =  timChanLe(number3);
    console.log(so1,so2,so3);
     
    /**
     * đầu ra
     */
    document.getElementById("footer").innerHTML = number1 + " là " +so1 +"<br/ >"+ number2 + " là " +so2 +"<br/ >"+number3 + " là " +so3 +"<br/ >";
}

function timChanLe(a){
    if (a % 2 ===0){
        return "số chẵn";
    }else 
        return "số lẻ"; 
    }
