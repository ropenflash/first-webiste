import React from 'react'
import './footer.scss'

const blockName = 'Footer'
export default class Footer extends React.Component {
    render() {
        return (
            <div className={blockName}>
                <nav className={`${blockName}__navbar`}>
                    <ul className={`${blockName}__nav-links`}>
                        <li className={`${blockName}__nav-item`}><a href='#'>About</a></li>
                        <li className={`${blockName}__nav-item`}><a href='#'>Contact Us</a></li>
                        <li className={`${blockName}__nav-item`}><a href='#'>Privacy Policy</a></li>
                        <li className={`${blockName}__nav-item`}><a href='#'>Terms and Conditions</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}