import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../services/api-service.service';
import { Router } from '@angular/router';
import { TokenServiceService } from '../../../services/token-service.service';

@Component({
  selector: 'app-party-details-list',
  templateUrl: './party-details-list.component.html',
  styleUrl: './party-details-list.component.css'
})
export class PartyDetailsListComponent implements OnInit{

  constructor(private apiService:ApiServiceService, private router:Router, private tokenService: TokenServiceService){}

  ngOnInit(): void {
    this.getPartyDetails()
  }

  users : any[] = []


  getPartyDetails(){
    this.apiService.getAllPartyDetails().subscribe((response:any)=>{
      if(response){
        this.users = response
      }
    })
  }

  deleteParty(id :number){
    this.apiService.deleteParty(id).subscribe((response:any)=>{
      if(response.success){
        alert('Vendor Deleted Successfully!')
      }
    },(error)=>{
      alert('Encountered Error!')
    })
  }

  editParty(id:number){
    this.router.navigate(['/party-details-form',id])
  }

  logout(){
    this.router.navigate(['/login'])
    this.tokenService.removeToken()
  }
}
