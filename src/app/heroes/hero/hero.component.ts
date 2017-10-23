import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from './../shared/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() hero: Hero;
  @Output() savedTheDay = new EventEmitter<boolean>();
}
