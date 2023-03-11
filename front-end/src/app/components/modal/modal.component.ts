import { Component, EventEmitter } from '@angular/core';

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

  closeModal(event: Event) {
    event.preventDefault();
    this.isModalOpen = false;
    // this.close.emit();
  }
}
