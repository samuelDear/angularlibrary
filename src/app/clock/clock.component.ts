import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  option = 1;
  clock = new Date();
  isStartedChrono = false;
  hours = '00';
  minutes = '00';
  seconds = '00';
  interval: any;

  hoursCount = '00';
  minutesCount = '00';
  secondsCount = '00';
  isStartedCount = false;
  intervalCount: any;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.clock = new Date();
    }, 1000);
  }

  startChrono() {
    this.isStartedChrono = true;
    this.interval = setInterval(() =>{
      this.countChrono(parseInt(this.seconds),parseInt(this.minutes), parseInt(this.hours))
    },1000);
  }

  countChrono (seconds: number, minutes: number, hours: number) {

    seconds++;
    if (seconds>59){
      minutes++;
      seconds=0;
    }
    if (minutes>59){
      hours++;
      minutes=0;
    }

    if (hours>24){
      hours=0;
    }

    if (seconds<10){
      this.seconds="0"+seconds;
    }else{
      this.seconds=`${seconds}`;
    }

    if (minutes<10){
      this.minutes="0"+minutes;
    }else{
      this.minutes=`${minutes}`;
    }

    if (hours<10){
      this.hours="0"+hours;
    }else{
      this.hours=`${hours}`;
    }
  }

  stopChrono(){
    clearInterval(this.interval);
    this.isStartedChrono = false;
  }

  resetChrono(){
    clearInterval(this.interval);
    this.isStartedChrono = false;
    this.hours = '00';
    this.minutes = '00';
    this.seconds = '00';
  }

  /*
  Funcion para subir los tiempos
  */
  addTime(time: string){
    let timeTmp = 0;
    
    switch(time){
      case 'hours':
        timeTmp = parseInt(this.hoursCount);
        timeTmp++;
        if(timeTmp >= 60){
          this.hoursCount="00";
        }else{
          if (timeTmp<10){
            this.hoursCount="0"+timeTmp;
          }else{
            this.hoursCount=`${timeTmp}`;
          }
        }
        
        break;
      case 'minutes':
        timeTmp = parseInt(this.minutesCount);
        timeTmp++;
        if(timeTmp >= 60){
          this.minutesCount="00";
        }else{
          if (timeTmp<10){
            this.minutesCount="0"+timeTmp;
          }else{
            this.minutesCount=`${timeTmp}`;
          }
        }
        
        break;
      case 'seconds':
        timeTmp = parseInt(this.secondsCount);
        timeTmp++;

        if(timeTmp >= 60){
          this.secondsCount="00";
        }else{
          if (timeTmp<10){
            this.secondsCount="0"+timeTmp;
          }else{
            this.secondsCount=`${timeTmp}`;
          }
        }
        
      break;
    }
  }

  lessTime(time: string){
    let timeTmp = 0;
    
    switch(time){
      case 'hours':
        timeTmp = parseInt(this.hoursCount);
        timeTmp--;
        if (timeTmp<0){
          this.hoursCount="59";
        }else{
          if(timeTmp<10){
            this.hoursCount=`0${timeTmp}`;
          }else{
            this.hoursCount=`${timeTmp}`;
          }
          
        }
        break;
      case 'minutes':
        timeTmp = parseInt(this.minutesCount);
        timeTmp--;
        if(timeTmp<0){
          this.minutesCount = '59';
        }else{
          if (timeTmp<10){
            this.minutesCount="0"+timeTmp;
          }else{
            this.minutesCount=`${timeTmp}`;
          }
        }
        break;
      case 'seconds':
        timeTmp = parseInt(this.secondsCount);
        timeTmp--;

        if(timeTmp<0){
          this.secondsCount = '59';
        }else{
          if (timeTmp<10){
            this.secondsCount="0"+timeTmp;
          }else{
            this.secondsCount=`${timeTmp}`;
          }
        }
      break;
    }
  }



  startCount() {
    this.isStartedCount = true;
    this.intervalCount = setInterval(() =>{
      this.countCount(parseInt(this.secondsCount),parseInt(this.minutesCount), parseInt(this.hoursCount))
    },1000);
  }

  countCount (seconds: number, minutes: number, hours: number) {

    console.log(seconds);
    seconds--;
    if (seconds<=0){

      if(minutes!=0){
        minutes--;
        seconds=59;
      }else if(minutes <= 0 && hours != 0){
        seconds=59;
        hours--;
        minutes=59;
      }else{
        seconds = 0;
        this.stopCount();
        console.log('chao');
      }
      
    }

    if (seconds<10){
      this.secondsCount="0"+seconds;
    }else{
      this.secondsCount=`${seconds}`;
    }

    if (minutes<10){
      this.minutesCount="0"+minutes;
    }else{
      this.minutesCount=`${minutes}`;
    }

    if (hours<10){
      this.hoursCount="0"+hours;
    }else{
      this.hoursCount=`${hours}`;
    }
  }

  stopCount(){
    clearInterval(this.intervalCount);
    this.isStartedCount = false;
  }

  resetCount(){
    clearInterval(this.intervalCount);
    this.isStartedCount = false;
    this.hoursCount = '00';
    this.minutesCount = '00';
    this.secondsCount = '00';
  }

}
