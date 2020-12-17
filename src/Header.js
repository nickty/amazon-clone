import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{basket, user}, dispatch] = useStateValue(); 

    const handleAuthentication = () => {
        if(user) {
            auth.signOut(); 
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://flyclipart.com/thumb2/amazon-logo-transparent-pro-bono-institute-499826.png" alt="Amazon Logo"/>
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionOne">
                        Hello Guest
                    </span>
                    <span className="header__optiontwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionOne">
                        Returns
                    </span>
                    <span className="header__optiontwo">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionOne">
                        Your
                    </span>
                    <span className="header__optiontwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionlineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>

    )
}

export default Header
