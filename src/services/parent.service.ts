import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAttendance } from 'src/models/attendance';
import { IConcern } from 'src/models/concern';
import { IDiary } from 'src/models/diary';
import { IExam } from 'src/models/exam';
import { IFee } from 'src/models/fee';
import { IReportCard } from 'src/models/reportCard';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getReportCardDetails(sId: number): Observable<IReportCard> {
    return this.http.get<IReportCard>(`${this.apiServerUrl}/parent/student/reportCard/${sId}`);
  }

  getFee(sId: number): Observable<IFee> {
    return this.http.get<IFee>(`${this.apiServerUrl}/parent/student/fee/${sId}`);
  }
  
  getExamDetails(date: Date): Observable<IExam> {
    return this.http.get<IExam>(`${this.apiServerUrl}/parent/student/exam/${date}`);
  }

  getDialyDiary(sId: number): Observable<IDiary> {
    return this.http.get<IDiary>(`${this.apiServerUrl}/parent/student/diary/${sId}`);
  }

  getAttendance(sId: number): Observable<IAttendance> {
    return this.http.get<IAttendance>(`${this.apiServerUrl}/parent/student/attendance/${sId}`);
  }

  addConcern(concern: IConcern, pId: number): Observable<IConcern> {
    return this.http.post<IConcern>(`${this.apiServerUrl}/parent/concern/add`, [concern, pId]);
  }
}
