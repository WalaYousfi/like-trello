import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  canDelete!: boolean;

  @Output() delete = new EventEmitter<boolean>();

  prepareForDelete(){
    this.canDelete = true;
  }

  cancel(){
    this.canDelete = false;
  }

  deleteBoard(){
    this.delete.emit(true);
    this.canDelete = false;
  }

}
