import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../../../services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-party-details-form',
  templateUrl: './party-details-form.component.html',
  styleUrl: './party-details-form.component.css'
})
export class PartyDetailsFormComponent implements OnInit{

  partyDetails : FormGroup

  constructor(private formBuilder:FormBuilder,private apiService : ApiServiceService,private route:ActivatedRoute){
    this.partyDetails = this.formBuilder.group({
      name: ['',[Validators.required]],
      company_name: ['',[Validators.required]],
      mobile_no: ['',[Validators.required]],
      telephone_no: ['',[Validators.required]],
      whatsapp_no: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      remark: [''],
      login_access: [false],
      date_of_birth: [''],
      anniversary_date: ['',[Validators.required]],
      gstin: ['',[Validators.required]],
      pan_no: ['',[Validators.required]],
      apply_tds: [false],
      credit_limit: [0],
      address: this.formBuilder.group({
        addressLine1: ['',[Validators.required]],
        addressLine2: [''],
        country: [''],
        state: [''],
        city: [''],
        pincode: ['']
      }),
      bank: this.formBuilder.group({
        bank_ifsc_code: ['',[Validators.required]],
        bank_name: [''],
        branch_name: [''],
        account_no: [''],
        account_holder_name: ['']
      }),
      image: ['']
    });
  }

  id:number = 0;

  ngOnInit(): void {
    this.route.params.subscribe((response:any)=>{
      this.id = +response['id'];
    })
    if(this.id != 0){
      this.apiService.getPartyById(this.id).subscribe((response:any)=>{
        if(response){
          this.partyDetails.get('name')?.patchValue(response.name)
          this.partyDetails.get('company_name')?.patchValue(response.company_name)
          this.partyDetails.get('mobile_no')?.patchValue(response.mobile_no)
          this.partyDetails.get('telephone_no')?.patchValue(response.telephone_no)
          this.partyDetails.get('whatsapp_no')?.patchValue(response.whatsapp_no)
          this.partyDetails.get('email')?.patchValue(response.email)
          this.partyDetails.get('remark')?.patchValue(response.remark)
          this.partyDetails.get('login_access')?.patchValue(response.login_access)
          this.partyDetails.get('date_of_birth')?.patchValue(response.date_of_birth)
          this.partyDetails.get('annivarsary_date')?.patchValue(response.annivarsary_date)
          this.partyDetails.get('gstin')?.patchValue(response.gstin)
          this.partyDetails.get('pan_no')?.patchValue(response.pan_no)
          this.partyDetails.get('apply_tds')?.patchValue(response.apply_tds)
          this.partyDetails.get('credit_limit')?.patchValue(response.credit_limit)
          this.partyDetails.get('address')?.get('addressLine1')?.patchValue(response.address[0].address_line_1)
          this.partyDetails.get('address')?.get('addressLine2')?.patchValue(response.address[0].address_line_2)
          this.partyDetails.get('address')?.get('country')?.patchValue(response.address[0].country)
          this.partyDetails.get('address')?.get('state')?.patchValue(response.address[0].state)
          this.partyDetails.get('address')?.get('city')?.patchValue(response.address[0].city)
          this.partyDetails.get('address')?.get('pincode')?.patchValue(response.address[0].pincode)
          this.partyDetails.get('bank')?.get('bank_ifsc_code')?.patchValue(response.bank_id[0].bank_ifsc_code)
          this.partyDetails.get('bank')?.get('bank_name')?.patchValue(response.bank_id[0].bank_name)
          this.partyDetails.get('bank')?.get('branch_name')?.patchValue(response.bank_id[0].branch_name)
          this.partyDetails.get('bank')?.get('account_no')?.patchValue(response.bank_id[0].account_no)
          this.partyDetails.get('bank')?.get('account_holder_name')?.patchValue(response.bank_id[0].account_holder_name)
        }
      })
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.partyDetails.patchValue({
      image: file
    });
  }

  onSubmit(){
    this.markFormGroupTouched(this.partyDetails);
    if(this.partyDetails.invalid){
      return;
    }
    // const formData = new FormData();
    // formData.append('name', this.partyDetails.get('name')?.value)
    // formData.append('company_name', this.partyDetails.get('company_name')?.value)
    // formData.append('mobile_no', this.partyDetails.get('mobile_no')?.value)
    // formData.append('telephone_no', this.partyDetails.get('telephone_no')?.value)
    // formData.append('whatsapp_no', this.partyDetails.get('whatsapp_no')?.value)
    // formData.append('email', this.partyDetails.get('email')?.value)
    // formData.append('remark', this.partyDetails.get('remark')?.value)
    // formData.append('login_access', this.partyDetails.get('login_access')?.value)
    // formData.append('date_of_birth', this.partyDetails.get('date_of_birth')?.value)
    // formData.append('anniversary_date', this.partyDetails.get('anniversary_date')?.value)
    // formData.append('gstin', this.partyDetails.get('gstin')?.value)
    // formData.append('pan_no', this.partyDetails.get('pan_no')?.value)
    // formData.append('apply_tds', this.partyDetails.get('apply_tds')?.value)
    // formData.append('credit_limit', this.partyDetails.get('credit_limit')?.value)
    // let addressGroup = this.partyDetails.get('address') as FormGroup;
    // formData.append('addressLine1', addressGroup.get('addressLine1')?.value);
    // formData.append('addressLine2', addressGroup.get('addressLine2')?.value);
    // formData.append('country', addressGroup.get('country')?.value);
    // formData.append('state', addressGroup.get('state')?.value);
    // formData.append('city', addressGroup.get('city')?.value);
    // formData.append('pincode', addressGroup.get('pincode')?.value);
    // let bankGroup = this.partyDetails.get('bank') as FormGroup;
    // formData.append('bank_ifsc_code', bankGroup.get('bank_ifsc_code')?.value);
    // formData.append('bank_name', bankGroup.get('bank_name')?.value);
    // formData.append('branch_name', bankGroup.get('branch_name')?.value);
    // formData.append('account_no', bankGroup.get('account_no')?.value);
    // formData.append('account_holder_name', bankGroup.get('account_holder_name')?.value);
    // const imageControl = this.partyDetails.get('image');
    // if (imageControl && imageControl.value) {
    //   formData.append('image', imageControl.value);
    // }

    let partyDetailObj : any  = {
      name : this.partyDetails.get('name')?.value,
      company_name : this.partyDetails.get('company_name')?.value,
      mobile_no : this.partyDetails.get('mobile_no')?.value,
      telephone_no : this.partyDetails.get('telephone_no')?.value,
      whatsapp_no : this.partyDetails.get('whatsapp_no')?.value,
      email : this.partyDetails.get('email')?.value,
      remark : this.partyDetails.get('remark')?.value,
      login_access : this.partyDetails.get('login_access')?.value,
      date_of_birth : this.partyDetails.get('date_of_birth')?.value,
      anniversary_date : this.partyDetails.get('annivarsary_date')?.value,
      gstin : this.partyDetails.get('gstin')?.value,
      pan_no : this.partyDetails.get('pan_no')?.value,
      apply_tds : this.partyDetails.get('apply_tds')?.value,
      credit_limit : this.partyDetails.get('credit_limit')?.value,
      address: {
        address_line_1: this.partyDetails.get('address')?.get('addressLine1')?.value,
        address_line_2: this.partyDetails.get('address')?.get('addressLine2')?.value,
        country: this.partyDetails.get('address')?.get('country')?.value,
        state: this.partyDetails.get('address')?.get('state')?.value,
        city: this.partyDetails.get('address')?.get('city')?.value,
        pincode: this.partyDetails.get('address')?.get('pincode')?.value,
      },
      bank: {
        bank_ifsc_code: this.partyDetails.get('bank')?.get('bank_ifsc_code')?.value,
        bank_name: this.partyDetails.get('bank')?.get('bank_name')?.value,
        branch_name: this.partyDetails.get('bank')?.get('branch_name')?.value,
        account_no: this.partyDetails.get('bank')?.get('account_no')?.value,
        account_holder_name: this.partyDetails.get('bank')?.get('account_holder_name')?.value,
      },
      // image : this.partyDetails.get('image')?.value
    }
    this.apiService.createPartyDetails(partyDetailObj).subscribe((response:any)=>{
      if(response.success){
        alert('Party Created Successfully!')
      }
    },(error)=>{
      alert('error encountered!')
    })
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }

}
