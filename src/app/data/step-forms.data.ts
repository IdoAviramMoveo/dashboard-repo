import {
  FormArrayField,
  FormField,
  FormGroupFields,
} from '../models/form-fields.model';
import { FieldType } from '../enums/field-types.enum';
import { UserType } from '../enums/user-types.enum';

export const candidateQuestionnaireFieldsByUserType = {
  [UserType.GENERAL]: ['desiredSector', 'desiredRole'],
  [UserType.INDEPENDENT]: ['desiredSector'],
};

export const candidateQuestionnaireFields: FormField[] = [
  {
    name: 'desiredSector',
    type: FieldType.DROPDOWN,
    image: './assets/images/select-arrow.svg',
    options: [
      { value: 'sector1', display: 'כח עזר' },
      { value: 'sector2', display: 'רופאים' },
      { value: 'sector3', display: 'פרא-רפואי' },
      { value: 'sector4', display: 'מנהל ומשק' },
      { value: 'sector5', display: 'מתנדבים' },
    ],
    label: 'בחר סקטור מיועד',
    errorMessage: '',
    required: true,
  },
  {
    name: 'desiredRole',
    type: FieldType.DROPDOWN,
    image: '../../../assets/images/select-arrow.svg',
    options: [
      { value: 'role1', display: 'אחראי/ת סניטרים' },
      { value: 'role2', display: 'גבסן/ית' },
      { value: 'role3', display: 'כח עזר' },
    ],
    label: 'בחר תפקיד מיועד',
    errorMessage: '',
    required: true,
    enableCondition: {
      dependsOn: 'desiredSector',
      enableIfTrue: true,
    },
  },
  {
    name: 'hearAboutUs',
    type: FieldType.RADIO,
    options: [
      {
        value: 'option1',
        display: 'חברת השמה',
        image: './assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option2',
        display: 'אתר האינטרנט של אסותא',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option3',
        display: 'חבר/מכר',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option4',
        display: 'לוח דרושים',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
      {
        value: 'option5',
        display: 'אחר',
        image: '../../../assets/images/unselected_check.svg',
        selectedImage: '../../../assets/images/selected_check.svg',
      },
    ],
    label: 'היכן נחשפת למשרה או לעבודה באסותא?',
    errorMessage: '',
    required: true,
  },
  {
    name: 'specify',
    type: FieldType.TEXT,
    label: 'פרט',
    errorMessage: '* יש למלא שם פרטי בעברית בלבד',
    required: false,
    displayCondition: {
      dependsOn: 'hearAboutUs',
      value: 'option5',
      notEquals: true,
    },
  },
  {
    name: 'workedBefore',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: 'yes',
        display: 'כן',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
      {
        value: 'no',
        display: 'לא',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
    ],
    label: 'האם עבדת באסותא בעבר?',
    errorMessage: '',
    required: true,
  },
  {
    name: 'familyCloseness',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: 'yes',
        display: 'כן',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
      {
        value: 'no',
        display: 'לא',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
    ],
    label: 'האם הנך בעל קרבה משפחתית לעובד אסותא?',
    errorMessage: '',
    required: true,
  },
];

export const personalInformationFields: (FormField | FormGroupFields)[] = [
  {
    name: 'firstName',
    type: FieldType.TEXT,
    label: 'שם פרטי',
    errorMessage: '* יש למלא שם פרטי בעברית בלבד',
    validationRules: ['hebrew'],
    required: true,
  },
  {
    name: 'id',
    type: FieldType.FILE,
    label: 'העלאת תעודת זהות',
    required: true,
    note: '* יש לצרף צילום ברור של תעודת זהות',
  },
  {
    name: 'lastName',
    type: FieldType.TEXT,
    label: 'שם משפחה',
    errorMessage: '* יש למלא שם משפחה בעברית בלבד',
    validationRules: ['hebrew'],
    required: true,
  },
  {
    name: 'firstNameEnglish',
    type: FieldType.TEXT,
    label: 'שם פרטי באנגלית',
    errorMessage: '* יש למלא שם פרטי באנגלית',
    validationRules: ['english'],
    required: true,
  },
  {
    name: 'lastNameEnglish',
    type: FieldType.TEXT,
    label: 'שם משפחה באנגלית',
    errorMessage: '* יש למלא שם משפחה בעברית',
    validationRules: ['english'],
    required: true,
  },
  {
    name: 'id',
    type: FieldType.NUMBER,
    label: 'תעודת זהות',
    errorMessage: '* יש להזין מספר תעודת זהות כולל ספרת ביקורת',
    validationRules: ['israeliID'],
    required: true,
  },
  {
    name: 'gender',
    type: FieldType.GENDER_SELECT,
    options: [
      {
        value: 'male',
        display: 'זכר',
        image: '../../../assets/images/male-white.png',
        selectedImage: '../../../assets/images/male-blue.png',
      },
      {
        value: 'female',
        display: 'נקבה',
        image: '../../../assets/images/female-white.png',
        selectedImage: '../../../assets/images/female-blue.png',
      },
      { value: 'other', display: 'לא מעוניין/ת לפרט' },
    ],
    label: 'מין',
    errorMessage: '',
    required: true,
  },
  {
    name: 'countryOfBirth',
    type: FieldType.TEXT,
    label: 'ארץ לידה',
    errorMessage: '* יש לבחור ארץ לידה מהרשימה',
    required: true,
  },
  {
    name: 'immigrationYear',
    type: FieldType.NUMBER,
    label: 'שנת עלייה',
    errorMessage: '',
    // validationRules: ['year'],
    required: false,
    displayCondition: {
      dependsOn: 'countryOfBirth',
      value: 'ישראל',
      notEquals: true,
    },
  },
  {
    group: 'address',
    fields: [
      {
        name: 'street',
        type: FieldType.TEXT,
        label: 'רחוב',
        errorMessage: '* נא להזין רחוב',
        validationRules: ['hebrew'],
        required: true,
      },
      {
        name: 'houseNumber',
        type: FieldType.NUMBER,
        label: 'בית/דירה',
        errorMessage: '* יש להזין מספר בית',
        required: true,
      },
    ],
  },
  {
    name: 'city',
    type: FieldType.TEXT,
    label: 'עיר',
    errorMessage: '* יש לבחור עיר מהרשימה',
    validationRules: ['hebrew'],
    required: true,
  },
  {
    name: 'zipCode',
    type: FieldType.NUMBER,
    label: 'מיקוד',
    errorMessage: '* נא להזין מיקוד תקין',
    validationRules: ['zipCode'],
    required: true,
  },
  {
    name: 'mobilePhone',
    type: FieldType.NUMBER,
    label: 'טלפון נייד',
    errorMessage: '* יש להזין מספר טלפון נייד תקין',
    validationRules: ['phoneNumber'],
    required: true,
  },
  {
    name: 'additionalPhone',
    type: FieldType.NUMBER,
    label: 'טלפון נוסף (אופציונאלי)',
    errorMessage: '* יש להזין מספר טלפון נייד תקין',
    required: false,
  },
  {
    name: 'email',
    type: FieldType.TEXT,
    label: 'כתובת דוא"ל',
    errorMessage: '* יש להזין כתובת דואר אלקטרוני',
    validationRules: ['email'],
    required: true,
  },
  {
    name: 'carOwner',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: true,
        display: 'כן',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
      {
        value: false,
        display: 'לא',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
    ],
    label: 'בעל רכב',
    errorMessage: '',
    required: true,
  },
  {
    name: 'hasDrivingLicense',
    type: FieldType.BOOLEAN,
    options: [
      {
        value: true,
        display: 'כן',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
      {
        value: false,
        display: 'לא',
        image: '../../../assets/images/unselected-box.svg',
        selectedImage: '../../../assets/images/selected-box.svg',
      },
    ],
    label: 'רישיון נהיגה',
    errorMessage: '',
    required: true,
  },
];

export const previousJobsFields: FormArrayField[] = [
  {
    name: 'workplaces',
    type: FieldType.FORM_ARRAY,
    arrayFields: [
      {
        group: 'workplaceDetails',
        fields: [
          {
            name: 'companyName',
            type: FieldType.TEXT,
            label: 'חברה',
            errorMessage: '* יש למלא שם מקום העבודה',
            validationRules: ['hebrew'],
            required: true,
          },
          {
            name: 'position',
            type: FieldType.TEXT,
            label: 'תפקיד',
            errorMessage: '* יש לציין תפקיד',
            validationRules: ['hebrew'],
            required: true,
          },
          {
            name: 'reasonEnd',
            type: FieldType.TEXT,
            label: 'סיבת סיום עבודה',
            errorMessage: '* יש לציין סיבת סיום עבודה בעברית',
            validationRules: ['hebrew'],
            required: true,
          },
        ],
      },
      {
        name: 'recommenders',
        type: FieldType.FORM_ARRAY,
        arrayFields: [
          {
            group: 'recommenderDetails',
            fields: [
              {
                name: 'recommenderName',
                type: FieldType.TEXT,
                label: 'שם הממליץ',
                errorMessage: '',
                required: false,
              },
              {
                name: 'recommenderPosition',
                type: FieldType.TEXT,
                label: 'תפקיד',
                errorMessage: '',
                required: false,
              },
              {
                name: 'recommenderPhone',
                type: FieldType.NUMBER,
                label: 'טלפון',
                errorMessage: '* יש להזין מספר טלפון נייד תקין',
                validationRules: ['phoneNumber'],
                required: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
