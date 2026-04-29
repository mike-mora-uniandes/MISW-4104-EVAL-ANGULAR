import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepositoriesComponent } from './repositories.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

@NgModule({
  declarations: [
    RepositoriesComponent,
    RepositoryDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RepositoriesModule { }
