import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.scss']
})
export class InternFormComponent implements OnInit {

  internProfile: FormGroup = this.fb.group({
    name: [''],
    qualification: [''],
    experience: [false],
    experienceDetails: this.fb.group({
      company: [''],
      years: [null]
    }),
    domain: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.internProfile.value);
  }

}
