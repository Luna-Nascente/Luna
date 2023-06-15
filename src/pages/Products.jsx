import React from 'react'
import axios from 'axios'
import CardProducts from '../components/CardProducts'

//Используем map т.к. он автоматически преобразует в реакт компонент
function Products() {
    const [products, setProducts] = React.useState([]);
    const [favoriteItems, setFavoriteItems] = React.useState([]);
    console.log(favoriteItems);

    React.useEffect(() => {
        axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/products').then(res =>  {
            setProducts(res.data);
        });
        axios.get('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites').then(res =>  {
            setFavoriteItems(res.data);
        })
    }, []);

    const onAddToFavorite = (obj) => {
        axios.post('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites', obj);
        setFavoriteItems((prev) => [...prev, obj]);
        obj.favorite = true;

        // console.log(obj);
        // if (favoriteItems.find((item) => Number(item.id) === Number(obj.id))) {
        //     setFavoriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
        // }else{
        //     axios.post('https://647b1df4d2e5b6101db0e241.mockapi.io/favorites', obj);
        //     setFavoriteItems((prev) => [...prev, obj]);
        // }
        // obj.favorite = true;
    };
    const onRemoveFavorite = (id) => {
        axios.delete(`https://647b1df4d2e5b6101db0e241.mockapi.io/favorites/${id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div>
            <div className={"catalog"}>
                <p className={"cu-p"}>new</p>
                <p className={"cu-p"}>exclusive collection</p>
                <p className={"cu-p"}>basic clothing</p>
                <p className={"cu-p"}>outerwear</p>
                <p className={"cu-p"}> accessories</p>
                <p className={"cu-p"}>sales</p>
            </div>
            <div className="d-flex flex-wrap justify-between">
                {products.map((item) => (
                    <CardProducts 
                        key={item.id}
                        id={item.id}
                        title={item.title} 
                        size={item.size}
                        price={item.price} 
                        imgURL={item.imgURL}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickBuy={() => console.log("Click on buy!")}
                        onRemove={() => onRemoveFavorite(item.id)}
                        favorite={item.favorite}
                    /> 
                ))}
            </div>
        </div>
    );
}

export default Products;