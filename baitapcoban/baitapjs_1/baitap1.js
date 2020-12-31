function tangDan(event){
    event.preventDefault();
    /**
     * đầu vào
     */
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = document.getElementById("number3").value;
    console.log(a,b,c);
    /**
     * xử lý
     */
    if ( a > b && a > c && b > c) {
        var soLonNhat = a;
        var soTrungBinh = b;
        var soNhoNhat = c;
        
    } else if (a > b && a > c && b < c) {
        soLonNhat = a;
        soTrungBinh = c;
        soNhoNhat = b;   
        
    } else if (a < b && b > c && a > c) {
        soLonNhat = b;
        soTrungBinh = a;
        soNhoNhat = c;   
    }   
    else if (a < b && b > c && a < c) {
        soLonNhat = b;
        soTrungBinh = c;
        soNhoNhat = a;   
    }   
    else if (a < b && b < c && a < c) {
        soLonNhat = c;
        soTrungBinh = b;
        soNhoNhat = a;   
    }   
    else  {
        soLonNhat = c;
        soTrungBinh = a;
        soNhoNhat = b;   
    }   

    /**
     * đầu ra
     */
    
    document.getElementById("cardFooter").innerHTML = "Các số nguyên theo thứ tự tăng dần là " + " "  +soNhoNhat + " " +soTrungBinh + " "+ soLonNhat;
}