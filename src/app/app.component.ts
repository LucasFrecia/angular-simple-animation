import { interval } from 'rxjs'
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-animation-example',
  templateUrl: './animation-example.component.html',
  styleUrls: ['./animation-example.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
          backgroundColor: 'green',
          transform: 'scale(0.5)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('state2=>state1', animate('2000ms')),
      transition('state1=>state2', animate('2000ms'))
    ])
  ]
})
export class AnimationExampleComponent implements OnInit {

  currentState: string;

  constructor() { }

  ngOnInit() {
    this.currentState = "state1";
  }

  changeState() {
    this.currentState = "state2";
  }

  endState() {
      console.log('End state executed!');
      this.currentState = "state1";
  }

}