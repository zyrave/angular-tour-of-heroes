import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilterTextComponent } from './../shared/filter-text/filter-text.component';
import { FilterTextService } from './../shared/filter-text/filter-text.service';
import { Hero } from './shared/hero.model';
import { HeroService } from './shared/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  filteredHeroes = this.heroes;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private filterService: FilterTextService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  filterChanged(searchText: string) {
    this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/heroes', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /* Promises */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.filteredHeroes = this.heroes;
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .then(heroes => {
        this.heroes = heroes;
        this.filteredHeroes = this.heroes;
      });
  }
}
