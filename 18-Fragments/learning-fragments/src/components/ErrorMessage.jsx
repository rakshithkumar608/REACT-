const ErrorMessage = () =>{
    let Fooditems = ["Orange","Carrot","Apple","Beetroot","Cabage","PineApple"];

    return <>{Fooditems.length === 0 && <h3>I am still hungry.</h3>}</>;
}

export default ErrorMessage;