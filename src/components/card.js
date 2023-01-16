const Card= ()=>{
    return(
        <div>
            <div className="pcard"  >
            <div className="card_item" >
                <div className="card_text" >
                    <h4>Item-1</h4>
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
            </div>
            <div className="card_item" >
                <div className="card_text" >
                    <h4>Item-1</h4>
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
            </div>
            <div className="card_item" >
                <div className="card_img" >
                <img src={require('../assets/images/signup.png')} alt='' height={100} width={100} />
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
                <div className="card_text" >
                <h4>Item-1</h4>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Card;