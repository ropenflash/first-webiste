import React from 'react'
import { Link } from 'react-router-dom'
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
                        <div className={`${blockName}__title`}><Link to='/home'>ROPENFLASH</Link></div>
                    </div>
                    <ul className={`${blockName}__nav-links`}>
                        <div className={`${blockName}__nav-item`}><Link to='/home'>Home</Link></div>
                        <div className={`${blockName}__nav-item`}><Link to='/calisthenics'>Calisthenics</Link></div>
                        <div className={`${blockName}__nav-item`}><Link to='/rope-jumping'>Rope Jumping</Link></div>
                    </ul>
                </nav>
            </div>)
    }
}