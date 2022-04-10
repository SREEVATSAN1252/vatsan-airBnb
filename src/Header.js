import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { ExpandMore, LanguageOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
  return (
    <div className='header'>
        <Link to="/"><img className='header__icon' src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png' alt=''/> </Link>
        
        <div className='header__center'>
            <input type="text"/>
            <SearchIcon className='search__'/>
        </div>

        <div className='header__right'>
            <p> Become a host </p>
            <LanguageOutlined/>
            <ExpandMore/>
            <Avatar/>

        </div>






    </div>
  )
}

export default Header