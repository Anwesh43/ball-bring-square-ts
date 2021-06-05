import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position = 'absolute'
    const size : number = Math.min(w, h) / 10
    const sf : number = Math.sin(scale * Math.PI)
    const fixedX : number = w / 2 
    const fixedY : number = h / 2
    const x : number = fixedX + (w / 2 - size / 2) * (1 - sf)
    const y : number = fixedY - (h / 2 - size / 2) * sf 
    const width = `${size}px`
    const height = `${size}px`
    const background = '#00C853'
    return {
        blockStyle() : CSSProperties {
            const left = `${x - size / 2}px`
            const top = `${fixedY - size / 2}px`
            return {
                left, 
                top, 
                position, 
                width, 
                height,
                background  
            }
        },
        circleStyle() : CSSProperties {
            const left = `${fixedX - size / 2}px`
            const top = `${y - size / 2}px`
            const borderRadius = '50%'
            return {
                position, 
                left, 
                top, 
                borderRadius, 
                width, 
                height,
                background 
            }
        }
    }
}