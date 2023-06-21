import CardProducts from '../components/CardProducts'
import { Link } from 'react-router-dom';
import React from 'react'
import axios from 'axios'

function Favorites() {
    const [favoriteItems, setFavoriteItems] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
          axios.get("https://localhost:7256/Products"),
          axios.get("https://localhost:7256/Favorite")
        ]).then(([productsRes, favoritesRes]) => {
          const filteredProducts = productsRes.data.map((product) => {
            const favorite = favoritesRes.data.find(
              (favorite) => favorite.product_idf === product.product_id
            );
            return { 
                ...product, 
                favorite,
                favorites_id: product.favorites_id
            };
          });

          const sortedFavorites = filteredProducts.filter(product => product.favorite).sort((a,b) => a.favorite.product_idf - b.favorite.product_idf);
    
          setFavoriteItems(sortedFavorites);
        });
    }, []);

    const handleRemoveFavoriteItem = (id) => {
        const newFavoriteItems = favoriteItems.filter(item => item.favorite.favorites_id !== id);
        setFavoriteItems(newFavoriteItems);
    }

    return (
        <div className='favoritesPage'>
        <Link to="/products">
            <div className="backToShop d-flex align-center">
            <img alt="arrowLeft" src="/img/ArrowLeft.svg" />
            <p>Back to shopping</p>
            </div>
        </Link>
        <h1>Favourites</h1>
        {
        favoriteItems.length > 0 ? (
            <div className="d-flex flex-wrap justify-between">
            {favoriteItems ? favoriteItems.map((item) => (
                <CardProducts 
                    key={item.favorite.favorites_id}
                    favorites_id = {item.favorite.favorites_id}
                    product_id={item.product_id}
                    product_name={item.product_name}
                    product_price={item.product_price}
                    product_image={item.product_image}
                    favoriteItems = {favoriteItems}
                    setFavoriteItems = {setFavoriteItems}
                    handleRemoveFavoriteItem = {handleRemoveFavoriteItem}
                /> 
            )) : 'No favorite items'}
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