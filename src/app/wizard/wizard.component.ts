import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  qtySteps = 5;
  src = "https://picsum.photos/150";
  currentStep = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addStep(){
    this.changeImg();
    this.currentStep+=1;
  }

  gobackStep(){
    this.changeImg();
    this.currentStep-=1;
  }

  goBegin(){
    this.changeImg();
    this.currentStep = 1;
  }

  changeImg(){
    this.src = "https://picsum.photos/150?random&t=" + new Date().getTime() +")";
  }
}
