import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



function Header() {
return (
    <div className='header'>
<a href="/checkout">
<img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
</a>

<div className='header'>

    <LocationOnIcon className='location'/>
    <span className='Location'>Hello</span>
    <span className='Location'>Enter Address</span>
</div>

<div className='header_search'>
    <input className='header_searchInput' type="text"/>
    <SearchIcon className='header_searchIcon'/>
</div>

<div className='header_nav'></div>
<div className='header_option'>
    <span className='header_optionLineOne'>Return</span>
    <span className='header_optionLineTwo'> & Orders</span>
</div>

<div className='header_option'>
    <span className='header_optionLineOne'>Hello Guest</span>
    <span className='header_optionLineTwo'> Sign in</span>
</div>
<div className='header_option'>
<span className='header_optionLineOne'>Hello Guest</span>
    <span className='header_optionLineTwo'> Sign in</span>
    
</div>
<a href="/checkout">
<div className='header_optionBasket'>
<ShoppingCartIcon/>
    <span className='header_optionTwo header_basketCount'>
    0 
    </span>
    </div>
</a>
</div>
);
}

export default Header