import React from 'react'
import './small.scss'

const blockName = 'Small'
export default class Small extends React.Component {

    render() {
        console.log(this.props.children)
        return <div className={`${blockName}`}>
            {this.props.children}
        </div >
    }
}