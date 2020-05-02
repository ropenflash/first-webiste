import React from 'react'
import { Link } from 'react-router-dom'
import './sideDrawer.scss'

const blockName = 'SideDrawer'
export default class SideDrawer extends React.Component {
    render() {
        console.log(this.props.right)
        return <div className={`${blockName}`} style={{ right: this.props.right }}>

            <div className={`${blockName}__title`}>ROPENFLASH</div>

            <nav className={`${blockName}__navbar`}>
                <ul className={`${blockName}__nav-links`}>
                    <li className={`${blockName}__nav-item`}><Link to="/home">Home</Link></li>
                    <li className={`${blockName}__nav-item`}><Link to="/calisthenics">Calisthenics</Link></li>
                    <li className={`${blockName}__nav-item`}><Link to="/rope-jumping">Rope Jumping</Link></li>
                    <li className={`${blockName}__nav-item`}><Link to="/qa">QA</Link></li>
                    <li className={`${blockName}__nav-item`}><Link to="/about">About Us</Link></li>
                </ul>
            </nav>
        </div>
    }
}