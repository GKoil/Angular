import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-content',
  templateUrl: './title-content.component.html',
})
export class TitleContentComponent {
  @Input() title = '';
}
