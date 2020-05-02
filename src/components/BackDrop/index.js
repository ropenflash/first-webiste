import React from 'react'
import './backdrop.scss'

const blockName = 'BackDrop'

export default class BackDrop extends React.Component {
    render() {
        return <div className={blockName} onClick={this.props.onclick}>

        </div>
    }
}