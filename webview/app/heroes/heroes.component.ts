import { Component, OnInit } from '@angular/core'
import { Hero } from './list/Hero'
import { Heroes } from './list/listofHero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = Heroes
  selectedHero: Hero

  constructor() {
    this.selectedHero = {
      id: 0,
      name: 'Undefined'
    }
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  ngOnInit() {
  }

}
