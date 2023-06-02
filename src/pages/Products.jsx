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
                <div className="card d-flex">
                    <img
                    width={320}
                    height={360}
                    alt="turtleneckBlack"
                    className={"turtleneckBlack"}
                    src="/img/turtleneck(BLACK).png"
                    />
                    <div className={"MiniDecription align-center d-flex"}>
                        <p className={"viewThis"}>view this &gt;</p>
                        <div>
                            <p className={"name"}>turtleneck (BLACK)</p>
                        </div>
                        <div className="d-flex justify-between">
                            <p className={"price"}>2 700 ₽</p>
                            <select className="size">
                                <option>S(44)</option>
                                <option>M(46)</option>
                                <option>L(48)</option>
                                <option>XL(50)</option>
                                <option>XXL(52)</option>
                            </select>
                        </div>
                        <div className={"flexWrapper"}>
                            <button className={"buyButton cu-p"}>
                                <p className={"addToCart"}>add to cart</p>
                            </button>
                            <img alt="like" src={"/img/Like.svg"} className="like cu-p"/>
                        </div>
                    </div>
                </div>
                <div className="card d-flex">
                    <img
                    width={320}
                    height={360}
                    alt="turtleneckBlack"
                    className={"turtleneckBlack"}
                    src="/img/turtleneck(BLACK).png"
                    />
                    <div className={"MiniDecription align-center d-flex"}>
                        <p className={"viewThis"}>view this &gt;</p>
                        <div>
                            <p className={"name"}>turtleneck (BLACK)</p>
                        </div>
                        <div className="d-flex justify-between">
                            <p className={"price"}>2 700 ₽</p>
                            <select className="size">
                                <option>S(44)</option>
                                <option>M(46)</option>
                                <option>L(48)</option>
                                <option>XL(50)</option>
                                <option>XXL(52)</option>
                            </select>
                        </div>
                        <div className={"flexWrapper"}>
                            <button className={"buyButton cu-p"}>
                                <p className={"addToCart"}>add to cart</p>
                            </button>
                            <img alt="like" src={"/img/Like.svg"} className="like cu-p"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card d-flex">
                    <img
                    width={320}
                    height={360}
                    alt="turtleneckBlack"
                    className={"turtleneckBlack"}
                    src="/img/turtleneck(BLACK).png"
                    />
                    <div className={"MiniDecription align-center d-flex"}>
                        <p className={"viewThis"}>view this &gt;</p>
                        <div>
                            <p className={"name"}>turtleneck (BLACK)</p>
                        </div>
                        <div className="d-flex justify-between">
                            <p className={"price"}>2 700 ₽</p>
                            <select className="size">
                                <option>S(44)</option>
                                <option>M(46)</option>
                                <option>L(48)</option>
                                <option>XL(50)</option>
                                <option>XXL(52)</option>
                            </select>
                        </div>
                        <div className={"flexWrapper"}>
                            <button className={"buyButton cu-p"}>
                                <p className={"addToCart"}>add to cart</p>
                            </button>
                            <img alt="like" src={"/img/Like.svg"} className="like cu-p"/>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Products;