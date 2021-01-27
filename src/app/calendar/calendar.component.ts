import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  msg = '';
  today = new Date();
  qtyDays = 0;
  currentMonth = '';
  currentYear = '';
  startedDay = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.today.setDate(1);
    this.qtyDays = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0).getDate();
    this.currentMonth = (this.today.toLocaleString('default', { month: 'long' })).toUpperCase();
    this.currentYear = this.today.getFullYear().toString();
    this.startedDay = this.today.getDay();
  }

  changeMonth(direction: number) {
    // Si es 1, sumamos un mes, si es -1 restamos un mes
    this.today.setDate(1);
    if(direction == 1){
      this.today.setMonth(this.today.getMonth()+1);
    }else{
      this.today.setMonth(this.today.getMonth()-1);
    }

    this.currentMonth = (this.today.toLocaleString('default', { month: 'long' })).toUpperCase();
    this.currentYear = this.today.getFullYear().toString();
    this.qtyDays = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0).getDate();
    this.startedDay = this.today.getDay();

    console.log(this.startedDay + this.qtyDays);

    this.msg = "Cambio de fecha!";

    setTimeout(() => {
      this.msg = '';
    },2000)
  }

  selectedDay(day: any){
    if(this.startedDay < day+1){
      alert(`Selecciono el dia ${day - this.startedDay + 1}!!`);
    }
  }
}
