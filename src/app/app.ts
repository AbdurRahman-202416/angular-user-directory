import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatProgressBarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-user-directory');

  public loadingService = inject(LoadingService);
}
