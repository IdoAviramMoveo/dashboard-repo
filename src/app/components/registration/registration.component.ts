import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  stepOneFields,
  stepTwoFields,
  stepThreeFields,
} from '../../data/step-forms.data';
import { UserType } from '../../enums/user-types.enum';
import { buildFormControls } from '../../utils/form-validators.util';
import {
  FormArrayField,
  FormField,
  FormGroupFields,
} from '../../models/form-fields.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  userType: string;
  currentStep: number = 1;

  stepOneFields: FormField[] = stepOneFields;
  stepTwoFields: (FormField | FormGroupFields)[] = stepTwoFields;
  stepThreeFields: (FormField | FormGroupFields | FormArrayField)[] =
    stepThreeFields;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const type = params['userType'];
      if (type && Object.values(UserType).includes(type as UserType)) {
        this.userType = type;
        this.initializeForm();
      } else {
        this.router.navigate(['/registration/general']);
      }
    });
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      stepOne: this.fb.group(buildFormControls(this.stepOneFields)),
      stepTwo: this.fb.group(buildFormControls(this.stepTwoFields)),
      stepThree: this.fb.group(buildFormControls(this.stepThreeFields)),
    });
  }

  initializeFormBasedOnUserType(userType: UserType) {
    switch (userType) {
      case UserType.GENERAL:
        break;
      case UserType.INTERN:
        break;
      case UserType.VOLUNTEER:
        break;
      case UserType.INDEPENDENT:
        break;
      default:
    }
  }

  buildFormControls(fields) {
    const group = {};
    fields.forEach((field) => {
      group[field.name] = ['', Validators.required];
    });
    return group;
  }

  goToNextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {}
}
