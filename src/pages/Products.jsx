import CardProducts from '../components/CardProducts'

// Массив товаров взять из БД (когда же она уже появится...)
const items = [
    { title: "turtleneck (BLACK)", price: 2700, imgURL: "/img/turtleneck(BLACK).png"},
    { title: "bomber jacket (SPRING)", price: 4900, imgURL: "/img/bomber_jacket(SPRING).png"},
];

//Используем map т.к. он автоматически преобразует в реакт компонент
function Products() {
    return (
        <div>
            <div className={"catalog"}>
                <p className={"new"}>new</p>
                <p className={"exclusiveCollection"}>exclusive collection</p>
                <p className={"basicClothing"}>basic clothing</p>
                <p className={"basicClothing"}>outerwear</p>
                <p className={"exclusiveCollection"}> accessories</p>
                <p className={"new"}>sales</p>
            </div>
            <div className="d-flex">
                {items.map((obj) => (
                    <CardProducts 
                    title={obj.title} 
                    price={new Intl.NumberFormat('ru-RU').format(obj.price)} 
                    imgURL={obj.imgURL}
                    onClick={() => console.log(obj)}
                /> 
                ))}
            </div>
        </div>
    );
}

export default Products;