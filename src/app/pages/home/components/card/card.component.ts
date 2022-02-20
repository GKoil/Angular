import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '@services/car.type';
import { CarsService } from '@services/cars.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelType } from '@services/model.type';
import { processingCar } from '@services/processing/processing-car';
import mapIdModel from '@app/utils/mapIdModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  isDialogOpened = false;

  isDialogUpdateOpen = false;

  form: FormGroup;

  // formModels: ModelType[] = [];

  @Input() cardInfo: Car | undefined;

  @Input() formModels: ModelType[];

  @Output() removeCar: EventEmitter<number> = new EventEmitter<number>();

  @Output() updateCar: EventEmitter<Car> = new EventEmitter<Car>();

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.cardInfo?.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      modelId: new FormControl(this.cardInfo?.model.id),
      color: new FormControl(this.cardInfo?.color),
      year: new FormControl(this.cardInfo?.year),
      imageUser: new FormControl(this.cardInfo?.image),
      image: new FormControl(''),
    });
  }

  changeShowRemoveDialog() {
    this.isDialogOpened = !this.isDialogOpened;
  }

  changeShowUpdateDialog() {
    console.log(this.formModels, 'card models');
    this.isDialogUpdateOpen = !this.isDialogUpdateOpen;
  }

  onFileChanged(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    const file: File = input.files[0];
    this.form.patchValue({
      image: file,
    });
  }

  submitUpdate(id: number) {
    this.carsService
      .changeCar({
        ...this.form.value,
        id,
        modelId: mapIdModel(this.formModels, this.form.value.modelId),
      })
      .subscribe((response) => {
        this.updateCar.emit(processingCar(response));
        this.changeShowUpdateDialog();
      });
  }

  submitRemove(id: number) {
    this.carsService.removeCar(id).subscribe({
      next: () => {
        this.removeCar.emit(id);
        this.changeShowRemoveDialog();
      },
      error: (error: HttpErrorResponse) => {
        if (error.status !== 200) {
          // Обработка ошибки
          return;
        }

        this.removeCar.emit(id);
        this.changeShowRemoveDialog();
      },
    });
  }
}
