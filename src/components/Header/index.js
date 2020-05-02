import React from 'react'
import './header.scss'
import logo from './ropenflash.png'

const blockName = 'Header'
export default class Header extends React.Component {
    render() {
        return (
            <div className={blockName}>
                <nav className={`${blockName}__navbar`}>
                    <div className={`${blockName}__home`}>
                        <img className={`${blockName}__logo`} src={logo} alt="logo" />
                        <div className={`${blockName}__title`}><a href={'#'}>ROPENFLASH</a></div>
                    </div>
                    <ul className={`${blockName}__nav-links`}>
                        <div className={`${blockName}__nav-item`}><a href='#'>Home</a></div>
                        <div className={`${blockName}__nav-item`}><a href='#'>Calisthenics</a></div>
                        <div className={`${blockName}__nav-item`}><a href='#'>Rope Jumping</a></div>
                    </ul>
                </nav>
            </div>)
    }
}