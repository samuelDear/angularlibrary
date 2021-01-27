import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  option = 0;
  clock = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.clock = new Date();
    }, 1000);
  }

  copyTime(time: any){
    time.select();  
50
    document.execCommand('copy');  
51
    time.setSelectionRange(0, 0);  
  }
}
