import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment } from '../environment/environment';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl = Environment.baseUrl + 'party/';

  constructor(private http: HttpClient, private tokenService: TokenServiceService) { }

  private createHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders({
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json'
    });
  }

  login(credentials: any) {
    return this.http.post(`${Environment.baseUrl}login/`, credentials);
  }

  getAllPartyDetails() {
    return this.http.get(this.baseUrl, { headers: this.createHeaders() });
  }

  createPartyDetails(details: FormData) {
    return this.http.post(this.baseUrl, details, { headers: this.createHeaders() });
  }

  deleteParty(id: number) {
    return this.http.delete(`${this.baseUrl}?id=${id}`, { headers: this.createHeaders() });
  }

  getPartyById(id: number) {
    return this.http.get(`${this.baseUrl}?id=${id}`, { headers: this.createHeaders() });
  }
}
