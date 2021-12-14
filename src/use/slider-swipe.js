import { swipeCord } from '../utils/swipeCord'
let startCoord = 0
let endCoord = 0

function touchstart(e){
    startCoord = swipeCord(e)
}
function touchmove(e){
    endCoord = swipeCord(e)
}
function touchend  (next,prev)  {
    return () => {
        if(!startCoord 
            || !endCoord 
            || Math.abs(startCoord - endCoord) < 50){
            return
        }
        if(startCoord - endCoord > 0){
            next()
        }else{
            prev()
        }
        startCoord = 0
        endCoord = 0
    }
}
export function useSwipeSlider(slider,next,prev){
    slider.addEventListener('touchstart',touchstart)
    slider.addEventListener('touchmove',touchmove)
    slider.addEventListener('touchend', touchend(next,prev))
}

export function removeSwipeSlider(slider,next,prev){
    slider.removeEventListener('touchstart',touchstart)
    slider.removeEventListener('touchmove',touchmove)
    slider.removeEventListener('touchend', touchend(next,prev))
}