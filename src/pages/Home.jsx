import { Link } from 'react-router-dom';

// Метод обработки нажатия на кнопку "Contact"
const handleContactClick = () => {
    // Добавьте свою логику обработки нажатия на кнопку "Contact" здесь
    console.log("Contact button clicked");
};
  
// Метод обработки нажатия на кнопку "About us"
const handleAboutClick = () => {
    // Добавьте свою логику обработки нажатия на кнопку "About us" здесь
    console.log("About us button clicked");
};

function Home(){
    return (
    <div>
        <div className="d-flex">
            <div className="contentWrapper d-flex justify-between">
                <div className="content">
                    <h1>Luna Nascente</h1>
                    <p>Every man wants to dress decently, and 
                    therefore the clothes themselves should be
                    comfortable, practical, and also reflect the taste
                    of the owner. Our brand will try to cover these
                    and other needs and provide its own version.</p>
                    <div className="d-flex mt-50">
                        <Link to="/contacts">
                            <button className="cu-p" onClick={handleContactClick}>
                                Contact
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="cu-p" onClick={handleAboutClick}>
                                About us
                            </button>
                        </Link>
                    </div>
                </div>
                <img src="/img/man_in_center.png" alt="man_in_center" />
            </div>
            <img width={444} height={638} src="/img/korean_man.png" alt="korean_man"/>
        </div>
        <div className="d-flex">
            <img width={772} height={510} src="/img/arabian_man.png" alt="russian_man"/>
            <img width={532} height={510} src="/img/russian_man.png" alt="russian_man"/>
        </div>
    </div>
    );
}

export default Home;