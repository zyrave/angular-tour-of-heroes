import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  title = 'Tour of Heroes';
  menuItems = [
    { name: 'Dashboard', path: 'dashboard' },
    { name: 'Heroes', path: 'heroes' },
    { name: 'Villains', path: '' },
    { name: 'Others', path: '' },
  ];

  constructor() { }

  ngOnInit() { }
}
