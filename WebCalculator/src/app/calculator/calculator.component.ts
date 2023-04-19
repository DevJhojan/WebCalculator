import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  answer : string;
  finish : boolean;
  constructor (){
    this.answer = '';
    this.finish = false;
  }

  ngOnInit(): void { }

  onAddkey($event: any) {
    if(this.finish == true){
      this.answer = $event.target.innerText;
      this.finish = false;
    }else{
      this.answer += $event.target.innerText;
    }


  }

  onAnswer(){
    this.answer = eval(this.answer);
    this.finish = true;
  }
}
