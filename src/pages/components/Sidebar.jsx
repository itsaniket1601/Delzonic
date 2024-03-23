import React, { useState } from 'react'
import './Sidebar.css';
import logo from "../../assets/img/icon.svg";
import profile from "../../assets/img/profile.png";
import dashboard from "../../assets/img/dashboard.svg";


const Sidebar = () => {
    const [closeMenu, setCloseMenu] = useState(true);
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    }
    return (
        <div className={closeMenu === false ? 'sidebar' : 'sidebar active'}>
            <div className={closeMenu === false ? 'logoContainer' : 'logoContainer active'}>
                <img src={logo} alt='icon' className='logo' />
                <h2 className='title'>DelZonic</h2>
            </div>
            <div className={closeMenu === false ? 'burgerContainer' : 'burgerContainer active'}>
                <div className='burgerTrigger' onClick={() => { handleCloseMenu() }}></div>
                <div className='burgerMenu'></div>
            </div>

            <div className={closeMenu === false ? 'contentsContainer' : 'contentsContainer active'}>
                <ul>
                    <li className='active'><img src={dashboard} alt='Search icon' /><a href='#'>Research Tools</a></li>
                    <li><img src={dashboard} alt='Star icon' /><a href='#'>Features</a></li>
                    <li><img src={dashboard} alt='Person icon' /><a href='#'>User</a></li>
                    <li><img src={dashboard} alt='Pricing icon' /><a href='#'>Pricing</a></li>
                    <li><img src={dashboard} alt='Extension icon' /><a href='#'>Integration</a></li>
                    <li><img src={dashboard} alt='Settings icon' /><a href='#'>Settings</a></li>
                </ul>
            </div>
            <div className={closeMenu === false ? 'profileContainer' : 'profileContainer active'}>
                <img src={profile} alt='Profile' className='profile' />
                <div className='profileContents'>
                    <p className='name'>Hello, Akash</p>
                    <p>hello@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar