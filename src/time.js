'use strict';
console.log('time.js');

export class CountDownTimer {
    
    
    startCount;
    remain = 0;

    constructor (duration, display, bar){
        this.duration = duration;
        this.display = display;
        this.running = false;
        this.bar = bar;
    }

    start () {
        if (this.running ) {
        clearInterval(this.startCount);
          return;
        }

        this.running = true;
        this.startCount = setInterval(this.timer.bind(this), 1000);

    }

    timer(){ 
        let diff = --this.duration;
        
        if(diff < 0){
            clearInterval(this.startCount); 
            return;
        }
        let time = this.parse(diff);

        console.log(diff);
        let value = Math.round(100 - ((diff*100)/1500));
        console.log(value);
        this.bar.style.width=`${value}%`;
        this.display.innerHTML = time;
        this.remain = this.duration;
        
    }

    pause () {
        clearInterval(this.startCount);
        this.running = false; 
    }

    parse (timer) {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return minutes + ":" + seconds;
    }
}
  

  

  
  
  
 
  
 

 