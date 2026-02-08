import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'formly-repeat-section',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormlyModule, MatButtonModule, MatIconModule],
    template: `
    <div class="repeat-section-wrapper">
      <div *ngFor="let field of field.fieldGroup; let i = index" class="repeat-row">
        <formly-field class="field-col" [field]="field"></formly-field>
        <div class="remove-btn-col">
          <button mat-icon-button color="warn" type="button" (click)="remove(i)">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </div>
      <div class="add-btn-wrapper">
        <button mat-stroked-button color="primary" type="button" (click)="add()">
          <mat-icon>add</mat-icon> {{ props['addText'] || 'Add' }}
        </button>
      </div>
    </div>
  `,
    styles: [`
    .repeat-row {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 12px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }
    .field-col {
      flex: 1;
    }
    .add-btn-wrapper {
      margin-top: 12px;
    }
  `],
})
export class RepeatSectionType extends FieldArrayType { }
