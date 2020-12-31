function xinChao(event) {
    event.preventDefault();
    /***
     * đầu vào
     */
    var name = document.getElementById("name").value;
    
    
    /***
     * xử lý
     */

    /**
     * đầu ra
     */
    document.getElementById("cardFooter").innerHTML = "Xin chào " +name ;
}   

