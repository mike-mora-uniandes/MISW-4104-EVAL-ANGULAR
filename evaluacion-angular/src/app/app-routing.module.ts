// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryDetailComponent } from './repositories/repository-detail/repository-detail.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'repositories/:id', component: RepositoryDetailComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
