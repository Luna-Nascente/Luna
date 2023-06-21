import React from 'react'
import axios from 'axios'
import CardProducts from '../components/CardProducts'

//Используем map т.к. он автоматически преобразует в реакт компонент
function Products() {
    const [products, setProducts] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    const [selectedFilter, setSelectedFilter] = React.useState(null);
    console.log(favoriteItems);

    const clearFilters = () => {
        setSelectedFilter(null);
    };

    React.useEffect(() => { 
        axios.get('https://localhost:7256/Products')
          .then(res => {
            axios.get('https://localhost:7256/Categories').then(categoriesRes => {
              const filteredProducts = res.data.map(product => {
                const category = categoriesRes.data.find(category => category.Category_id === product.Category_of_product);
                return { ...product, category_name: category.Category_name };
              }).filter(
                product => (selectedFilter 
                    ? product.category_of_product === selectedFilter 
                    : true) && product);
              setProducts(filteredProducts);
            });
          });
    }, [selectedFilter]);

    const handleRemoveFavoriteItem = (id) => {
        const newFavoriteItems = favoriteItems.filter(item => item.favorite.favorites_id !== id);
        setFavoriteItems(newFavoriteItems);
    }

    return (
        <div>
            <div className={"catalog"}>
                <p className={"cu-p"} onClick={() => setSelectedFilter(1)}>new</p>
                <p className={"cu-p"} onClick={() => setSelectedFilter(2)}>exclusive collection</p>
                <p className={"cu-p"} onClick={() => setSelectedFilter(3)}>basic clothing</p>
                <p className={"cu-p"} onClick={() => setSelectedFilter(4)}>outerwear</p>
                <p className={"cu-p"} onClick={() => setSelectedFilter(5)}>accessories</p>
                <p className={"cu-p"} onClick={() => setSelectedFilter(6)}>sales</p>
                <p className={"cu-p"} onClick={clearFilters}>clear</p>
            </div>
            <div className="d-flex flex-wrap justify-between">
                {products.map((item, index) => (
                    <CardProducts 
                        key={index}
                        product_id={item.product_id}
                        product_name={item.product_name}
                        product_price={item.product_price} 
                        product_image={item.product_image}
                        favoriteItems = {favoriteItems}
                        setFavoriteItems = {setFavoriteItems}
                        handleRemoveFavoriteItem = {handleRemoveFavoriteItem}
                    /> 
                ))}
            </div>
        </div>
    );
}

export default Products;