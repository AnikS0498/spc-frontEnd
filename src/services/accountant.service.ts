import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFee } from 'src/models/fee';

@Injectable({
  providedIn: 'root'
})
export class AccountantService {

  private apiServerUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }

  addFeeDetails(fee: IFee,sId:number):Observable<IFee>{
    return this.http.post<IFee>(`${this.apiServerUrl}/accountant/fee/add`,[fee,sId]);
  }
  updateFeeDetails(fee: IFee,sId:number):Observable<IFee>{
    return this.http.put<IFee>(`${this.apiServerUrl}/accountant/fee/update`,[fee,sId]);
  }
}
