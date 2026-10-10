import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header-actions',
  imports: [MatIconButton, MatIcon],
  template: `
    <div class="flex items-center gap-2">
      <button matIconButton aria-label="Yêu thích">
        <mat-icon>favorite</mat-icon>
      </button>
    </div>
  `,
  styles: ``,
})
export class HeaderActions {}
