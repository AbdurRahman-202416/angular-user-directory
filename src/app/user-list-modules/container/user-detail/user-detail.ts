import { UserListService } from './../../services/user-list-service';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserType } from '../../types/user.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  isLoading = signal(true);
  constructor(
    private route: ActivatedRoute,
    private UserListService: UserListService,
  ) {}
  UserData: UserType | null = null;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('User ID:', id);
    if (id) {
      this.isLoading.set(true);
      this.UserListService.getUserById(Number(id))
        .subscribe({
          next: (data: UserType) => {
            console.log('User Details Received:', data);
            this.UserData = data;
            this.isLoading.set(false);
          },
          error: (err) => {
            console.error('Error fetching user:', err);
            this.isLoading.set(false);
          }
        });
    }
  }
}
