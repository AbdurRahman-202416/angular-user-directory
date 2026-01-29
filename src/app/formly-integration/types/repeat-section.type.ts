import { Component } from '@angular/core';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div
      *ngFor="let field of field.fieldGroup; let i = index"
      class="row"
      style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;"
    >
      <formly-field [field]="field" style="flex-grow: 1;"></formly-field>
      <button mat-icon-button color="warn" (click)="remove(i)" type="button">
        <mat-icon>delete</mat-icon>
      </button>
    </div>
    <div style="margin: 10px 0;">
      <button mat-raised-button color="primary" (click)="add()" type="button">
        {{ to['addText'] || 'Add' }}
      </button>
    </div>
  `,
  imports: [CommonModule, FormlyModule, MatButtonModule, MatIconModule],
  standalone: true,
})
export class RepeatTypeComponent extends FieldArrayType {}
