import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text    : string = '';
  @Input() fontSize: string = '14px';
  @Input() type    : 'submit' | 'button' = 'submit';
}
