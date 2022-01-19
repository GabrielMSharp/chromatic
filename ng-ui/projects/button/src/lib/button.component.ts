import { Component, Input } from '@angular/core';

export type ButtonSize = 'small' | 'large';

@Component({
  selector: 'ui-button',
  styleUrls: ['./button.component.scss'],
  template: `
    <span><button [ngClass]="{'buttonSizeLarge' : size === 'large'}" [attr.disabled]="disabled? true : null">{{text}}</button></span>
  `
})
export class ButtonComponent {
  @Input() text: string = 'Button Label';
  @Input() size: ButtonSize = 'small';
  @Input() disabled: boolean = false;
}