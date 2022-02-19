import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-title',
  templateUrl: './dialog-title.component.html',
})
export class DialogTitleComponent {
  @Input() title = '';
}
