import { Component } from '@angular/core';

import { Hero } from './../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  template: `
    <section>
      Our list of heroes:
      <app-hero *ngFor="let hero of heroes" [hero]="hero">
      </app-hero>
      Total powers: {{totalPowers}}<br>
      Average power: {{avgPower}}
    </section>
  `
})
export class HeroListComponent {
  heroes: Hero[];
  totalPowers: number;

  get avgPower() {
    return this.totalPowers / this.heroes.length;
  }
}
