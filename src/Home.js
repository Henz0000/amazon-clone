import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
return (
    <div>
    <div className='home_container'>
<img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg' alt=''/>
<div className='home_row'>
    <Product
        id="12321341"
        title="Wey Gud Habesha T-Shirt Eritrea Ethiopia Gift Idea T-Shirt"
        price={21.99}
        rating= {5}
        image="https://m.media-amazon.com/images/I/A1ntnF3PJOL._CLa%7C2140%2C2000%7C61GzY4yxZ1L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
    />
<Product
        id="49538094"
        title="Ethiopian Coffee, Yirgacheffe Region, USDA Organic, Whole Bean, Kosher, Fresh Roasted, 16-ounce"
        price={239.0}
        rating= {4}
        image="https://m.media-amazon.com/images/I/71CiYcpB6JL._SX679_.jpg"
    />
</div>
<div className='home_row'>
<Product
        id="4903850"
        title="KAIU Vinyl Record Storage Holder - Stacks up to 50 Albums, 7 or 12 inch LPs - Solid Wood Organizer with Clear Acrylic Ends - Vinyl Record Accessories Gifts in Stylish Modern Portable Record Stand - Black"
        price={31.99}
        rating= {4}
        image="https://m.media-amazon.com/images/I/61KInMIpH+L._AC_SX569_.jpg"
    />
    <Product
        id="23445930"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
        price={98.99}
        rating= {5}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    />
    <Product
        id="325435"
        title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 256GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day..."
        price={1149.99}
        rating= {5}
        image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SL1500_.jpg"
    />
</div>
<div className='home_row'>
<Product
        id="9082932"
        title="Mens Tuxedo Suits Slim Fit 3 Piece Formal Skinny Tuxedo Suit Set Shawl Lapel Paisley Suits Men for Wedding Prom
"
        price={84.99}
        rating= {4}
        image="https://m.media-amazon.com/images/I/61D7l+RxpGL._AC_UX679_.jpg"
    />
</div>
    </div>
    </div>
)
}

export default Home