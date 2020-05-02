import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

const blockName = 'Footer'
export default class Footer extends React.Component {
    render() {
        return (
            <div className={blockName}>
                <nav className={`${blockName}__navbar`}>
                    <ul className={`${blockName}__nav-links`}>
                        <li className={`${blockName}__nav-item`}><Link to='/about'>About</Link></li>
                        <li className={`${blockName}__nav-item`}><Link to='/contact'>Contact Us</Link></li>
                        <li className={`${blockName}__nav-item`}><Link to='/privacy-policy'>Privacy Policy</Link></li>
                        <li className={`${blockName}__nav-item`}><Link to='/terms-conditions'>Terms and Conditions</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}