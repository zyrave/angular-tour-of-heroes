import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  template: '<br><button>{{label}}</button>'
})
export class HeroButtonComponent implements OnInit {
  @Input() label: string;
  @Output() change = new EventEmitter<any>();

  ngOnInit() {
    console.log('The component is initialized');
  }
}
