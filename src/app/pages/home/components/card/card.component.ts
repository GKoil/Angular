import { Component, Input } from '@angular/core';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  // @ts-ignore
  @Input() cardInfo: Car;
}
