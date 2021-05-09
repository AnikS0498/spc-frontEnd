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

  addExamDetails(exam: IExam, sId: string): Observable<IExam> {
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.post<IExam>(`${this.apiServerUrl}/teacher/exam/add`, exam,
      { params: param });
  }

  updateExamDetails(exam: IExam, sId: string): Observable<IExam> {
    let param = new HttpParams().set("standardIdList", sId);
    return this.http.put<IExam>(`${this.apiServerUrl}/teacher/exam/update`, exam,
      { params: param });
  }

  addReportCardDetails(reportCard: IReportCard, sId: string): Observable<IReportCard> {
    let param = new HttpParams().set("studentdId", sId);
    return this.http.post<IReportCard>(`${this.apiServerUrl}/teacher/reportCard/add`, reportCard,
      { params: param });
  }

  updateReportCardDetails(reportCard: IReportCard, sId: string): Observable<IReportCard> {
    let param = new HttpParams().set("studentdId", sId);
    return this.http.put<IReportCard>(`${this.apiServerUrl}/teacher/reportCard/update`, reportCard,
      { params: param });
  }

  addAttendanceDetails(attendance: IAttendance, sId: string): Observable<IAttendance> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.post<IAttendance>(`${this.apiServerUrl}/teacher/attendance/add`, attendance,
      { params: param });
  }

  updateAttendanceDetails(attendance: IAttendance, sId: string): Observable<IAttendance> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.put<IAttendance>(`${this.apiServerUrl}/teacher/attendance/update`, attendance,
      { params: param });;

  }

  addDailyDiaryDetails(diary: IDiary, sId: string): Observable<IDiary> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.post<IDiary>(`${this.apiServerUrl}/teacher/dailyDiary/add`, diary,
      { params: param });
  }

  updateDailyDiaryDetails(diary: IDiary, sId: string): Observable<IDiary> {
    let param = new HttpParams().set("studentId", sId);
    return this.http.put<IDiary>(`${this.apiServerUrl}/teacher/dailyDiary/update`, diary,
      { params: param });
  }

  updateConcernDetails(concern: IConcern, pId: string): Observable<IConcern> {
    let param = new HttpParams().set("parentId", pId);
    return this.http.put<IConcern>(`${this.apiServerUrl}/teacher/concern/status`, concern,
      { params: param });
  }
}
