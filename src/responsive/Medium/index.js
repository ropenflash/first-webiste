import React from 'react'
import './medium.scss'

const blockName = 'Medium'
export default class Medium extends React.Component {

    render() {
        return <div className={`${blockName}`}>
            {this.props.children}
        </div >
    }
}