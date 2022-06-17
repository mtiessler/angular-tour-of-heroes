import {Component, Input, OnInit} from '@angular/core';

import {HeroService} from "../hero.service";
import {Hero} from "../hero";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroList!: Hero [];
  selectedHero?: Hero
  constructor(private heroService: HeroService ) {
    // this.heroList = heroService.getHeroes(); MAL CONSTRUCTOR TIENE QUE SER PARA INICIALIZACIÓN BÁSICA
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void
  {
    this.heroList = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }

}
