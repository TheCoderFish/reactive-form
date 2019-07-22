import { NgModule } from '@angular/core';
import { InternFormComponent } from './intern-form/intern-form.component';
import { ColorMeDirective } from './color-me/color-me.directive';
import { CommonModule } from '@angular/common';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        InternFormComponent,
        ColorMeDirective,
        ErrorComponentComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        InternFormComponent,
        ColorMeDirective,
        ErrorComponentComponent
    ]
})
export class InternModule {
}