import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './../shared/in-memory-data.service';

import { SharedModule } from './../shared/shared.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HeroButtonComponent } from './shared/hero-button/hero-button.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroHighlightDirective } from './shared/hero-button/hero-highlight.directive';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './shared/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    HeroesRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule
  ],
  declarations: [
    HeroButtonComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroHighlightDirective,
    HeroListComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],
  exports: [
    HeroButtonComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroHighlightDirective,
    HeroListComponent,
    HeroSearchComponent
  ]
})
export class HeroesModule { }

