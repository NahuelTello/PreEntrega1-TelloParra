import './CardWidget.css'
import img from '../../assets/img/shopping_cart_white_24dp.svg'

const CardWidget = () =>{
    return (
        <>
            <div className="card-widget">
                <img src={img} alt="cart" />
                <p>
                    <span>2</span>
                </p>
            </div>
        </>
    )
}

export default CardWidget;