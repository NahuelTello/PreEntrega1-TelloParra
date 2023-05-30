import './ItemListContainer.css';

// eslint-disable-next-line react/prop-types
function ItemListContainer({greeting}) {
    return (
        <div className='Greeting'>
            <p>
                Hola, {greeting}!
            </p>
        </div>
    );
}

export default ItemListContainer;