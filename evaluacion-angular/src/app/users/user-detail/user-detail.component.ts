import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../users.model';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  @Input() user!: User;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
