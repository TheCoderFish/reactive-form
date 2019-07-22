import { NgModule } from '@angular/core';
import { InternFormComponent } from './intern-form/intern-form.component';
import { ColorMeDirective } from './color-me/color-me.directive';
import { CommonModule } from '@angular/common';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternRoutingModule } from './intern-routing.module';

@NgModule({
    declarations: [
        InternFormComponent,
        ColorMeDirective,
        ErrorComponentComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InternRoutingModule
    ],
    exports: [
    ]
})
export class InternModule {
}