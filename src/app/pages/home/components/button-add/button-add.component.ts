import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import mapIdModel from '@app/utils/mapIdModel';
import { ModelType } from '@services/model.type';
import { CarsService } from '@services/cars.service';
import { processingCar } from '@services/processing/processing-car';
import { Car } from '@services/car.type';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
})
export class ButtonAddComponent implements OnInit {
  isDialogUpdateOpen = false;

  form: FormGroup | any; // TODO: Убрать any

  formModels: ModelType[] = [];

  @Output() addCar: EventEmitter<Car> = new EventEmitter<Car>();

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      modelId: new FormControl(''),
      color: new FormControl(''),
      year: new FormControl(''),
      imageUser: new FormControl(''),
      image: new FormControl(''),
    });
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

  changeShowAddDialog() {
    if (this.formModels.length === 0) {
      this.carsService.getModels().subscribe((data) => {
        this.formModels = data;
      });
    }
    this.isDialogUpdateOpen = !this.isDialogUpdateOpen;
  }

  submitAdd() {
    this.carsService
      .addCar({
        ...this.form.value,
        modelId: mapIdModel(this.formModels, this.form.value.modelId),
      })
      .subscribe((response) => {
        this.addCar.emit(processingCar(response));
        this.changeShowAddDialog();
        this.form.reset();
      });
  }
}
