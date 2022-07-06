import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentNameComponent } from './department-name/department-name.component';
import { FacultyNameComponent } from './faculty-name/faculty-name.component';
import { StudentDataComponent } from './student-data/student-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentNameComponent,
    FacultyNameComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
