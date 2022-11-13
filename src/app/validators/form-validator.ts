import { AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class FormValidator implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
