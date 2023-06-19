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
      
        axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites').then(res =>  {
          setFavoriteItems(res.data);
        });
    }, [selectedFilter]);

    const onAddToFavorite = (obj) => {
        console.log(obj);
        if (favoriteItems.find((item) => Number(item.product_id) === Number(obj.product_id))) {
            setFavoriteItems((prev) => prev.filter((item) => Number(item.product_id) !== Number(obj.product_id)))
        } else {
            axios.post('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites', obj);
            setFavoriteItems((prev) => [...prev, obj]);
        }
    };
    const onRemoveFavorite = (product_id) => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/favorites/${product_id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.product_id !== product_id));
    };

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
                {products.map((item) => (
                    <CardProducts 
                        key={item.product_id}
                        product_id={item.product_id}
                        product_name={item.product_name} 
                        product_size={item.product_size}
                        product_price={item.product_price} 
                        product_image={item.product_image}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickBuy={() => console.log("Click on buy!")}
                        onRemove={() => onRemoveFavorite(item.product_id)}
                    /> 
                ))}
            </div>
        </div>
    );
}

export default Products;