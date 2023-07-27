import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 45;

  get copitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string {
    return `${ this.name} - ${ this.age }` ;
  }

  changeHero():void{
    this.name = 'spiderman';
  }

  changeAge():void{
     this.age = 30;
  }

}