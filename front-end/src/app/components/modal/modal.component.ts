import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public isModalOpen = true;

  preventDefault(event: Event) {
    event.preventDefault();
  }
  // @Output() close = new EventEmitter<void>();

  closeModal(event: Event) {
    event.preventDefault();
    this.isModalOpen = false;
    // this.close.emit();
  }
}
