import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className='header-container'>
            <div className='header-inner'>
                <Link to="/" className="logo-link">
                    <img 
                        className='logo' 
                        src="https://image.similarpng.com/very-thumbnail/2021/08/Travel-agency-logo-design-template-on-transparent-background-PNG.png" 
                        alt="Travel Agency Logo"
                    />
                </Link>
                
                {/* Search container */}
                <div className='flex flex-1 justify-center items-center'>
                    <Link to="/search">
                        <div className='search-box' onClick={() => setShowSearch(!showSearch)}>
                            <input 
                                className='search-input' 
                                type="text" 
                                disabled 
                                placeholder='Explore travel destinations' 
                            />
                            <IconButton><SearchIcon /></IconButton>   
                        </div>
                    </Link>
                </div>
            
                {/* Navigation Links */}
                <div className='hidden md:flex items-center space-x-3 p-1 ml-2'>
                    <Link to='/discover-place' className='nav-link'>Discover Place</Link>
                    <Link to='/wishlist' className='nav-link'>Wishlist</Link>
                    <Link to='/travel-diary' className='nav-link'>Travel Diary</Link>
                    <Link to='/recommendations' className='nav-link'>Recommendations</Link>

                    <IconButton><LanguageIcon/></IconButton>

                    {/* Dropdown for Arrow Icon */}
                    <div className='relative'>
                        <IconButton 
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <ExpandMoreIcon className='hover:scale-110 transition-transform duration-200'/>
                        </IconButton>
                        {showDropdown && (
                            <div 
                                className={`dropdown-container ${showDropdown ? 'show' : ''}`}
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <Link to='/coupons-deals' className='dropdown-item'>Coupons and Deals</Link>
                                <Link to='/activities' className='dropdown-item'>Activities</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/profile"><IconButton><Avatar className='scale-100'/></IconButton> </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;