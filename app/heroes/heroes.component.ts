import { Component, OnInit } from '@angular/core';

import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'toh-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroComponent],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);

    // this.heroes = this.heroService.getHeroes();

    // this.heroes = [
    //   { 'id': 11, 'name': 'Chewbacca' },
    //   { 'id': 12, 'name': 'Rey' },
    //   { 'id': 13, 'name': 'Finn (FN2187)' },
    //   { 'id': 14, 'name': 'Han Solo' },
    //   { 'id': 15, 'name': 'Leia Organa' }
    // ];
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

}


