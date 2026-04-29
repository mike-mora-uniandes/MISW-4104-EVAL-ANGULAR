import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersComponent, UserDetailComponent],
  exports: [UsersComponent]  
  
})
export class UsersModule { }
