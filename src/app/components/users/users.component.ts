import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = true;
  enableAdd = true;
  currentClasses = {};
  currentStyles = {};

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: '50 Main Str.',
          city: 'Monash',
          state: 'VIC',
        },
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 School Str.',
          city: 'Mildura',
          state: 'VIC',
        },
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '35 Mill Str.',
          city: 'Geelong',
          state: 'VIC',
        },
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
      },
    ];

    this.setCurrentClasses();
    this.setCurrentStyles();
    // this.addUser({
    //   firstName: 'David',
    //   lastName: 'Jackson',
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    };
  }
}
