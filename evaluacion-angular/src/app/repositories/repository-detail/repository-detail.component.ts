import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../repository.model';
import { RepositoriesService } from '../repositories.service';

@Component({
  selector: 'app-repository-detail',
  standalone: false,
  templateUrl: './repository-detail.component.html',
  styleUrl: './repository-detail.component.css'
})
export class RepositoryDetailComponent implements OnInit {

  public repository: Repository | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _repositoryService: RepositoriesService
  ) { }
  
  ngOnInit(): void {
    const idParam = this._route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    this._repositoryService.getRepositoryById(id).subscribe({
      next: (data) => {
        this.repository = data;
      },
      error: (err) => {
        console.error('Error al obtener el repositorio', err);
      }
    });
  }

}
