import {Component, OnInit} from '@angular/core';

import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroList!: Hero [];
  selectedHero?: Hero
  constructor(private heroService: HeroService, private messageService: MessageService) {
    // this.heroList = heroService.getHeroes(); MAL CONSTRUCTOR TIENE QUE SER PARA INICIALIZACIÓN BÁSICA
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroList.push(hero);
      });
  }
  getHeroes(): void
  {
    this.heroService.getHeroes().subscribe(heroes => this.heroList = heroes);
  }

  delete(hero: Hero): void {
    this.heroList = this.heroList.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
