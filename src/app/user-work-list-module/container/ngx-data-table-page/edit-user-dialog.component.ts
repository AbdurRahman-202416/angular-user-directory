import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserType } from '../../types/user.type';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Edit User</h2>
    <mat-dialog-content>
      <form [formGroup]="editForm" class="edit-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Phone</mat-label>
          <input matInput formControlName="phone" />
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Website</mat-label>
          <input matInput formControlName="website" />
        </mat-form-field>

        <div formGroupName="company">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Company Name</mat-label>
            <input matInput formControlName="name" />
          </mat-form-field>
        </div>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button color="primary" [disabled]="editForm.invalid" (click)="save()">
        Save
      </button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      .edit-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 10px;
      }
      .full-width {
        width: 100%;
      }
    `,
  ],
})
export class EditUserDialogComponent implements OnInit {
  editForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserType,
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [this.data.name, Validators.required],
      email: [this.data.email, [Validators.required, Validators.email]],
      phone: [this.data.phone],
      website: [this.data.website],
      company: this.fb.group({
        name: [this.data.company?.name || ''],
      }),
    });
  }

  save(): void {
    if (this.editForm.valid) {
      // Merge updated fields back into the original data object
      const updatedUser = { ...this.data, ...this.editForm.value };
      this.dialogRef.close(updatedUser);
    }
  }
}
