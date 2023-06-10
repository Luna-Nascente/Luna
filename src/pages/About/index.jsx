import React from 'react';
import style from './About.module.scss';

const About = () => {
    return (
        <div className={style.about_us}>
          <div className={style.about_us__content}>
            <h1 className={style.about_us__title}>About us</h1>
            <p className={style.about_us__description}>
                Dear valued customers,
            </p>
            <p className={style.about_us__description}>
                Welcome to Luna, a clothing brand that is committed to 
                providing high-quality, casual clothing for adult men aged 
                16 and above. Our brand incorporates elements from Italian, 
                Russian, and Korean styles, creating a unique fusion of fashion 
                influences that appeal to a wide range of tastes.
            </p>
            <p className={style.about_us__description}>
                At Luna, we believe that minimalism is key, which is why our 
                designs feature clean lines, simple patterns, and a neutral 
                color palette consisting of black, white, gray, navy blue, 
                and deep green. We focus on using sustainable and comfortable 
                materials such as organic cotton, linen, and recycled fabrics 
                to ensure that our clothing not only looks great but also has 
                a positive impact on the environment.
            </p>
            <p className={style.about_us__description}>
                Our logo is subtly integrated into our designs, making it nearly 
                invisible or entirely unnoticeable, in order to maintain a clean 
                and sophisticated look that aligns with our brand's minimalistic 
                approach. Our collection includes a variety of casual clothing 
                items, including T-shirts, button-up shirts, sweatshirts, hoodies, 
                trousers, jeans, shorts, jackets, and accessories like hats, 
                scarves, and belts.
            </p>
            <p className={style.about_us__description}>
                We strive to seamlessly blend Italian elegance, Russian 
                practicality, and Korean modernity in each design, creating a 
                unique collection that appeals to our target audience. Our goal 
                is to establish Luna as a leading choice for high-quality, casual 
                clothing that exudes style and sophistication.
            </p>
            <p className={style.about_us__description}>
                Thank you for choosing Luna as your preferred clothing brand. 
                Please do not hesitate to contact us if you have any questions 
                or need further information about our brand.
            </p>
            <p className={style.about_us__description}>
                Best regards, <br/>
                The Luna Team
            </p>
          </div>
          <div className={style.about_us__image_container}>
            <img width={600} heith={600} src={"./img/Beani.jpg"} alt="Brand" className={style.about_us__image} />
          </div>
        </div>
    );
};

export default About;