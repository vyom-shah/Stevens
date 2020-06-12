function primechecker(){
    var number=$("#input1").val()
    if(!number){
        alert("Enter a number!")
    }else{
        var check=checkPrimeNumber(number)
        if(!check)
        {
            $("#attempts").append("<li class='not-prime'>"+number+" is not a prime number</li>")       
        }
        else{
            $("#attempts").append("<li class='is-prime'>"+number+" is a prime number</li>")
        }
    }
    return false;
}
function checkPrimeNumber(number){
    if(number<2){
        return false
    }
    else{
        for(var i=2;i<number;i++){
            if(number % i == 0){
                return false
            }
        }
    }
    return true
}