import React from 'react'
import rope from './rope.png'
import './mainContent.scss'

const blockName = 'MainContent'
export default class MainContent extends React.Component {
    render() {
        return (<div className={blockName}>
            <img className={`${blockName}__rope`} src={rope} alt={'rope'} />
        </div>)
    }
}