import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InternFormComponent } from './intern-form/intern-form.component';
import { ColorMeDirective } from './color-me.directive';

@NgModule({
  declarations: [
    AppComponent,
    InternFormComponent,
    ColorMeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
