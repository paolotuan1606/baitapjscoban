function tamGiac(event){
    event.preventDefault();
    
    /**
     * đầu vào
     */
    var a = document.getElementById("canh1").value;
    var b = document.getElementById("canh2").value;
    var c = document.getElementById("canh3").value;
    var ketQua;
    console.log(a,b,c);
    /**
     * xử lý
     */
    if (a==b && b!=c || b==c && a!=c||c==a && a!=b){
        ketQua = "tam giác cân";
    }
    else if(a==b&&a==c&&b==c){
        ketQua = "tam giác đều";
    }
    else if (a*a==b*b+c*c || b*b == a*a+c*c||c*c==a*a+b*b){
        ketQua = "tam giác vuông";
    }
    else ketQua = "tam giác"
    /**
     * đầu ra
     */
    document.getElementById("cardFooter").innerHTML = ketQua;
}