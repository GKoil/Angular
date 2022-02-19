import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './pages/home/components/card/card.component';
import { ListCarsComponent } from './pages/home/components/list-cars/list-cars.component';
import { HeaderComponent } from './layout/header/header.component';
import { TitleContentComponent } from './layout/title-content/title-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCarsComponent,
    HeaderComponent,
    TitleContentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
