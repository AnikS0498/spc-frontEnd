import { HttpClient, HttpParams } from '@angular/common/http';
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

  addFeeDetails(fee: IFee,sId:string):Observable<IFee>{
    let param = new HttpParams().set("studentId",sId);
    return this.http.post<IFee>(`${this.apiServerUrl}/accountant/fee/add`,fee,
    {params: param});
  }
  updateFeeDetails(fee: IFee,sId:string):Observable<IFee>{
    let param = new HttpParams().set("studentId",sId);
    return this.http.put<IFee>(`${this.apiServerUrl}/accountant/fee/update`,fee,
    {params: param});
  }
}
