import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: User[];
  loaded = true;
  // enableAdd = false;
  showUserForm = false;

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
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
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
        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true,
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
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true,
      },
    ];
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }
}
