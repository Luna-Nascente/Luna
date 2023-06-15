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
    const onRemoveFavorite = (id) => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/favorites/${id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
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
            <div className={"catalog"}>
                <p className={"cu-p"}>new</p>
                <p className={"cu-p"}>exclusive collection</p>
                <p className={"cu-p"}>basic clothing</p>
                <p className={"cu-p"}>outerwear</p>
                <p className={"cu-p"}> accessories</p>
                <p className={"cu-p"}>sales</p>
            </div>
            {favoriteItems.length > 0 ? (
            <div className="d-flex flex-wrap justify-between">
                {favoriteItems.map((item) => (
                    <CardFavorites 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        size={item.size}
                        price={item.price} 
                        imgURL={item.imgURL}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickBuy={() => console.log("Click on buy!")}
                        onRemove={() => onRemoveFavorite(item.id)}
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