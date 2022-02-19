import { Component, Input } from '@angular/core';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  isDialogOpened = false;

  @Input() cardInfo: Car | undefined;

  @Input() onClickRemove: (id: number) => void = () => {};

  changeShow = () => {
    this.isDialogOpened = !this.isDialogOpened;
  };

  onClickRemoveCar(id: number) {
    this.changeShow();
    this.onClickRemove(id);
  }
}
