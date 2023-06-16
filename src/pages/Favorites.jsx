import CardFavorites from '../components/CardFavorites'
import { Link } from 'react-router-dom';
import React from 'react'
import axios from 'axios'

//Используем map т.к. он автоматически преобразует в реакт компонент
function Favorites() {
    const [favoriteItems, setFavoriteItems] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites').then(res =>  {
            setFavoriteItems(res.data);
        })
    }, []);

    const onAddToFavorite = (obj) => {
        axios.post('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites', obj);
        setFavoriteItems((prev) => [...prev, obj]);
    };
    
    const onRemoveFavorite = (product_id) => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/favorites/${product_id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.product_id !== product_id));
    };

    return (
        //ахтунг со стилями (стоит сортировать по папкам)
        <div className='favoritesPage'>
            <Link to="/products">
                <div className="backToShop d-flex align-center">
                <img alt="arrowLeft" src="/img/ArrowLeft.svg" />
                <p>Back to shopping</p>
                </div>
            </Link>
            <h1>Favourites</h1>
            {favoriteItems.length > 0 ? (
            <div className="d-flex flex-wrap justify-between">
                {favoriteItems.map((item) => (
                    <CardFavorites 
                        key={item.product_id}
                        product_id={item.product_id}
                        product_name={item.product_name} 
                        product_size={item.product_size}
                        product_price={item.product_price} 
                        product_image={item.product_image}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickBuy={() => console.log("Click on buy!")}
                        onRemove={() => onRemoveFavorite(item.product_id)}
                        favorite={!item.favorites}
                    /> 
                ))}
            </div>
            ) : (
                <div className="favoritesIsEmpty">
                  <img alt="favoritesIsEmpty" src="/img/favoritesIsEmpty.svg" />
                  <p>You don't have any favorites yet</p>
                </div>
            )}
        </div>
    );
}

export default Favorites;