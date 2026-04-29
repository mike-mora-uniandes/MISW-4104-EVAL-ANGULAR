import { Component, OnInit } from '@angular/core';
import { User } from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: false
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Datos recibidos con éxito');
      },
      error: (err) => {
        console.error('Error al conectar con la API', err);
      }      
    })

  }

}
