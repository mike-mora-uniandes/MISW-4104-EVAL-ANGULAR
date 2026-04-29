import { Component, OnInit } from '@angular/core';
import { Repository } from './repository.model';
import { RepositoriesService } from './repositories.service';

@Component({
  selector: 'app-repositories',
  standalone: false,
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})

export class RepositoriesComponent implements OnInit{
  public repositories: Repository[] = [];

  constructor(private _repositoryService: RepositoriesService) {}

ngOnInit() {
  this._repositoryService.getAllRepositories().subscribe({
    next: (data) => {
      this.repositories = data;
      console.log('Datos recibidos con éxito');
    },
    error: (err) => {
      console.error('Error al conectar con la API', err);
    }       
  })
}

}
