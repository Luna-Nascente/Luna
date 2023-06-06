import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div className="policy">
            <Link to="/">
                <div className="backToHome d-flex align-center">
                    <img alt="arrowLeft" src="/img/ArrowLeft.svg"/>
                    <p>Back to home page</p>
                </div>
            </Link>
            <h1>Privacy Policy</h1>
            
            <div className='privacyPolicy'>
                <h3>1.Collection and Use of Personal Data</h3>
                <p>
                    We only collect the personal data that is necessary for processing 
                    and delivering orders to our customers. Such data may include name,
                    email address, phone number, and delivery address. We do not collect 
                    any other personal information without the explicit consent of our 
                    customers. <br/></p>
                <p>All personal data that we collect is used solely for the purpose 
                    of fulfilling orders and providing customer service. We do not use 
                    this data for marketing purposes or share it with third parties, 
                    except when necessary for payment processing or order delivery. <br/></p>
                <h3>2.Storage and Protection of Personal Data</h3>
                <p>
                All personal data that we receive from our customers is stored on 
                servers with a high level of security. We take all necessary measures 
                to protect this data from unauthorized access, alteration, disclosure, 
                or destruction. Our servers are protected by firewalls, encryption, 
                and other security measures to ensure the safety of our customers' 
                personal information. <br/></p>
                <h3>3. Transfer of Personal Data to Third Parties</h3>
                <p>
                    We do not transfer personal data of our customers to third parties, 
                    except when it is necessary for payment processing or order delivery. 
                    In such cases, we ensure that these third-party service providers 
                    have secure systems in place to protect our customers' personal 
                    data and comply with all applicable data protection regulations. <br/></p>
                <h3>4. Use of Cookies</h3>
                <p>
                We use cookies to optimize the performance of our website and 
                improve user experience. These files do not contain personal 
                data and cannot be used to identify users. Cookies help us 
                remember user preferences and provide personalized recommendations 
                based on browsing history. <br/></p>
                <h3>5. Changes to the Privacy Policy</h3>
                <p>
                We reserve the right to make changes to our privacy policy if necessary. 
                In case of such changes, we will notify all our customers through the 
                website or via email. It is the responsibility of our customers to review 
                the privacy policy periodically and stay updated with any changes. <br/></p>
                <br/><br/>
                <h4>(*** данная часть сайта является лишь заглушкой и не является официальным документом! ***)<br/></h4>
                <h4>(*** this part of the site is just a plug and is not an official document! ***)<br/></h4>
            </div>
        </div>
    );
}

export default Cart;