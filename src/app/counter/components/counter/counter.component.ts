import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Hola Counter {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {

  public title: string = 'Mi primera app de angular';
  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }
  reset(){
    this.counter = 10
  }
}
