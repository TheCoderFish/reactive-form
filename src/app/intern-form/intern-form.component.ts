import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.scss']
})
export class InternFormComponent implements OnInit {


  internProfile: FormGroup = this.fb.group({
    name: ['', Validators.required],
    qualification: ['', Validators.required],
    experience: [false],
    experienceDetails: this.fb.group({
      company: [''],
      years: [null]
    }),
    domain: ['', Validators.required]
  });


  domains = ['Angular', '.NET', 'Database', 'QA', 'Xamarin', 'ML'];

  isSubmitted = false;

  successMessage = 'Data submitted successfully';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
  }

  editMode() {
    this.isSubmitted = false;
  }

  get name() {
    return this.internProfile.get('name').value;
  }

  set name(input: string) {
    this.internProfile.patchValue({ name: input });
  }

  get qualification() {
    return this.internProfile.get('qualification').value;
  }

  set qualification(input: string) {
    this.internProfile.patchValue({ qualification: input });
  }

  get experience() {
    return this.internProfile.get('experience').value;
  }

  set experience(input: string) {
    this.internProfile.patchValue({ experience: input });
  }

  get company() {
    const expDetail = this.internProfile.get('experienceDetails').value;
    return expDetail.company;

  }

  set company(input: string) {
    this.internProfile.patchValue({ experienceDetails: { company: input } });
  }

  get years() {
    const expDetail = this.internProfile.get('experienceDetails').value;
    return expDetail.years > 0 ? expDetail.years : 0;
  }

  set years(input: string) {
    this.internProfile.patchValue({ years: input });
  }
  get domain() {
    return this.internProfile.get('domain').value;
  }

  set domain(input: string) {
    this.internProfile.patchValue({ domain: input });
  }
}
