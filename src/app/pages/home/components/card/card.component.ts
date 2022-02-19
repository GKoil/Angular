import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '@services/car.type';
import { CarsService } from '@services/cars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  isDialogOpened = false;

  isDialogUpdateOpen = false;

  @Input() cardInfo: Car | undefined;

  @Output() removeCar: EventEmitter<number> = new EventEmitter<number>();

  constructor(private carsService: CarsService) {}

  changeShow = () => {
    this.isDialogOpened = !this.isDialogOpened;
  };

  onClickRemoveCar(id: number) {
    this.carsService.removeCar(id).subscribe(
      () => {},
      () => {
        // TODO: ошибка, хотя компонент удален
        this.removeCar.emit(id);
        this.changeShow();
      }
    ),
      () => {};
  }

  changeShowUpdate() {
    this.isDialogUpdateOpen = !this.isDialogUpdateOpen;
  }
}
