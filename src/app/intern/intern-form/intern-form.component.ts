import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.scss']
})
export class InternFormComponent implements OnInit {

  internProfile: FormGroup;
  domains: Array<string>;
  mode: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.internProfile = this.fb.group({
      name: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: [false],
      experienceDetails: this.fb.group({
        company: [''],
        years: [null]
      }),
      domain: ['', Validators.required]
    });

    this.mode = 'edit';

    this.domains = ['Angular', '.NET', 'Database', 'QA', 'Xamarin', 'ML'];
    //this.loadDefaultData();
  }


  loadDefaultData() {
    const intern = {
      name: 'Nurali Hasan Khoja',
      qualification: 'BE Electronics',
      experience: true,
      experienceDetails: {
        company: 'Cognizant',
        years: 1
      },
      domain: 'Angular'
    };

    this.internProfile.setValue(intern);
  }

  toggle() {
    this.mode = this.mode === 'edit' ? 'submit' : 'edit';
  }

  get name() {
    return this.internProfile.get('name') as FormControl;
  }

  set name(input: FormControl) {
    this.internProfile.patchValue({ name: input });
  }

  get qualification() {
    return this.internProfile.get('qualification') as FormControl;
  }

  set qualification(input: FormControl) {
    this.internProfile.patchValue({ qualification: input });
  }

  get experience() {
    return this.internProfile.get('experience') as FormControl;
  }

  set experience(input: FormControl) {
    this.internProfile.patchValue({ experience: input });
  }

  get company() {
    const expDetail = this.internProfile.get('experienceDetails') as FormControl;
    return expDetail.value.company;

  }

  set company(input: FormControl) {
    this.internProfile.patchValue({ experienceDetails: { company: input } });
  }

  get years() {
    const expDetail = this.internProfile.get('experienceDetails') as FormControl;
    return expDetail.value.years > 0 ? expDetail.value.years : 0;
  }

  set years(input: FormControl) {
    this.internProfile.patchValue({ years: input });
  }
  get domain() {
    return this.internProfile.get('domain') as FormControl;
  }

  set domain(input: FormControl) {
    this.internProfile.patchValue({ domain: input });
  }
}
