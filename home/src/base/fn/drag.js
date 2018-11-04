export function drag(ele,cb){
    ele.addEventListener("touchstart",touchstart)
    function touchstart(e){
        e.stopPropagation();
        this.left = parseInt(window.getComputedStyle(ele).left)
        this.startX = e.touches[0].clientX;
        ele.addEventListener("touchmove",touchmove)
        ele.addEventListener("touchend",touchend)
    }
    function touchmove(e){
        this.moveX = e.touches[0].clientX - this.startX
        let move = this.moveX + this.left
        if(move>0){
            move = 0
        }else if(move<-731){
            move = -731
        }
        ele.style.left = move+"px"
    }
    function touchend(e){
        ele.removeEventListener("touchmove",touchmove)
        ele.removeEventListener("touchend",touchend)
    }
}

 