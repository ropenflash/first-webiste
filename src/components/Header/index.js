import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import SideDrawer from './../../components/SideDrawer'
import Small from './../../responsive/Small'
import logo from './ropenflash.png'
import BackDrop from './../BackDrop'

const blockName = 'Header'
export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sideDrawer: true,
        }

    }

    toggleSideDrawer = () => {
        this.setState({ sideDrawer: !this.state.sideDrawer })
    }

    render() {
        const { sideDrawer } = this.state
        const right = sideDrawer ? '-500px' : '0px'
        return (
            <div className={blockName}>
                <nav className={`${blockName}__navbar`}>
                    <div className={`${blockName}__home`}>
                        <img className={`${blockName}__logo mobile`} src={logo} alt="logo" />
                        <div className={`${blockName}__title`}><Link to='/home'>ROPENFLASH</Link></div>
                        <div className={`${blockName}__hamburger desktop`} onClick={this.toggleSideDrawer}>{sideDrawer ? '|||' : 'X'}</div>
                    </div>
                    <ul className={`${blockName}__nav-links mobile`}>
                        <div className={`${blockName}__nav-item`}><Link to='/home'>Home</Link></div>
                        <div className={`${blockName}__nav-item`}><Link to='/calisthenics'>Calisthenics</Link></div>
                        <div className={`${blockName}__nav-item`}><Link to='/rope-jumping'>Rope Jumping</Link></div>
                    </ul>
                </nav>
                {!sideDrawer ? (<Small><BackDrop onclick={this.toggleSideDrawer} /></Small>) : null}
                <Small>
                    <SideDrawer right={right} onclick={this.toggleSideDrawer} />
                </Small>
            </div>)
    }
}