import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoggerService } from './logger.service';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { throwIfAlreadyLoaded } from './module-import.guard';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule
  ],
  declarations: [
    NavComponent,
    SpinnerComponent
  ],
  providers: [
    LoggerService,
    SpinnerService
  ],
  exports: [
    NavComponent,
    SpinnerComponent
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
