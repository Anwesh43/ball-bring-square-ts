import React from 'react'
import {useStyle} from './hooks'
import withContainer from './withContainer'

interface BBSProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}

const BallBringSquare = (props : BBSProps) => {
    const {blockStyle, circleStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <React.Fragment>
            <div style = {blockStyle()} onClick = {() => props.onClick()}></div>
            <div style = {circleStyle()}></div>
        </React.Fragment>

    )
}

export default withContainer(BallBringSquare)