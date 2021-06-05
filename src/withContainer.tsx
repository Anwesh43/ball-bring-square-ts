import React from 'react'
import {useDimension, useAnimatedScale} from './hooks'
const withContainer = (MainComponent : React.FC<any>) : React.FC<any> => {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            scale, 
            w, 
            h,
            onClick 
        }
        return (
            <MainComponent {...props}></MainComponent>
        )
    }
}

export default withContainer