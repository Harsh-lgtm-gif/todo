let paymentConfirmation = true;

function makePaymentFlipkart(data){
    console.log("Start");
    if(data){
        setTimeout(function() {
            console.log("data is correct");
            setTimeout(function() {
                console.log("data is correct");
                setTimeout(function(){ 
                    console.log("payment is confirmed");
                },2000);
            },2000);
        },2000);
    }else{
        console.log("payment Failed -- Details Not Found");
    }
    console.log("End");
}
makePaymentFlipkart(6260628735);
