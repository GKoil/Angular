import { Component, Input } from '@angular/core';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardInfo: Car | undefined;
}
