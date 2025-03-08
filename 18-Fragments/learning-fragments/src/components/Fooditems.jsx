import Item from  "./item";

const Fooditems = () =>{
    let foodItems = ["Orange","Carrot","Apple","Beetroot","Cabage","PineApple"];


    return (
    <ul className="list-group">
    {Fooditems.map((item) => (<li key={item}className="list-group-item">{item}

    </li>

   ))}
    </ul>
    );
};


export default Fooditems;