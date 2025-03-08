function Hello(){

    var myName = 'Rakshith';
    let number = 456;
    let fullName = () => {
        return 'Rakshith Kumar'
    }
    return <p>
        MessageNo: {number} this is the master {myName}
        </p>
}

export default Hello;