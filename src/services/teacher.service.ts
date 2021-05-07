import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAttendance } from 'src/models/attendance';
import { IConcern } from 'src/models/concern';
import { IDiary } from 'src/models/diary';
import { IExam } from 'src/models/exam';
import { IReportCard } from 'src/models/reportCard';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addExamDetails(exam:IExam,sId:string):Observable<IExam>{
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.post<IExam>(`${this.apiServerUrl}/teacher/exam/add`,exam,
      {params: param});
  }

  updateExamDetails(exam:IExam,sId:string):Observable<IExam>{
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.post<IExam>(`${this.apiServerUrl}/teacher/exam/add`,exam,
      {params: param});
  }

  addReportCardDetails(reportCard:IReportCard,sId:number):Observable<IReportCard>{
    return this.http.post<IReportCard>(`${this.apiServerUrl}/teacher/reportCard/add`,[reportCard,sId]);
  }

  updateReportCardDetails(reportCard:IReportCard,sId:number):Observable<IReportCard>{
    return this.http.put<IReportCard>(`${this.apiServerUrl}/teacher/reportCard/update`,[reportCard,sId]);
  }

  addAttendanceDetails(attendance:IAttendance,sId:number):Observable<IAttendance>{
    return this.http.post<IAttendance>(`${this.apiServerUrl}/teacher/reportCard/add`,[attendance,sId]);
  }

  updateAttendanceDetails(attendance:IAttendance,sId:number):Observable<IAttendance>{
    return this.http.put<IAttendance>(`${this.apiServerUrl}/teacher/reportCard/update`,[attendance,sId]);
  }

  addDailyDiaryDetails(diary:IDiary,sId:number):Observable<IDiary>{
    return this.http.post<IDiary>(`${this.apiServerUrl}/teacher/dailyDiary/add`,[diary,sId]);
  }

  updateDailyDiaryDetails(diary:IDiary,sId:number):Observable<IDiary>{
    return this.http.put<IDiary>(`${this.apiServerUrl}/teacher/dailyDiary/update`,[diary,sId]);
  }

  updateCocernDetails(concern:IConcern,pId:number):Observable<IConcern>{
    return this.http.put<IConcern>(`${this.apiServerUrl}/teacher/concern/status`,[concern,pId]);
  }
}
