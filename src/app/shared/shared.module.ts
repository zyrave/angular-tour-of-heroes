import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterTextService } from './filter-text/filter-text.service';
import { HighlightDirective } from './highlight.directive';
import { InitCapsPipe } from './init-caps.pipe';
import { ValidatorDirective } from './validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    FilterTextComponent,
    InitCapsPipe,
    HighlightDirective,
    ValidatorDirective
  ],
  providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    HighlightDirective,
    InitCapsPipe,
    ValidatorDirective
  ]
})
export class SharedModule { }
