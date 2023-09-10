import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
