import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IParent } from 'src/models/parent';
import { IStandard } from 'src/models/standard';
import { IStudent } from 'src/models/student';
import { ITeacher } from 'src/models/teacher';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  addParentDetails(parent:IParent):Observable<IParent>{
    return this.http.post<IParent>(`${this.apiServerUrl}admin/parent/add`,[parent]);
  }

  updateParentDetails(parent:IParent,sId:string):Observable<IParent>{
    return this.http.put<IParent>(`${this.apiServerUrl}admin/parent/update`,[parent,sId]);
  }

  getAllParent():Observable<IParent[]>{
    let token=localStorage.getItem('token');
    console.log(token);
    let headers_object=new HttpHeaders({
      Authorization: "Bearer "+token
    })
    return this.http.get<IParent[]>(`${this.apiServerUrl}admin/parent/getParents`,
    {headers:headers_object});
  }
  
  addStudentDetails(student:IStudent):Observable<IStudent>{
    return this.http.post<IStudent>(`${this.apiServerUrl}admin/student/add`,[student]);
  }

  updateStudentDetails(student:IStudent):Observable<IStudent>{
    return this.http.put<IStudent>(`${this.apiServerUrl}admin/student/update`,[student]);
  }

  addTeacherDetails(teacher:ITeacher):Observable<ITeacher>{
    return this.http.post<ITeacher>(`${this.apiServerUrl}admin/teacher/add`,teacher);
  }

  updateTeacherDetails(teacher:ITeacher,sIdList:string,sId:string):Observable<ITeacher>{
    let param=new HttpParams().set('standardIdList',sIdList).set('standardId',sId);
  
    return this.http.put<ITeacher>(`${this.apiServerUrl}admin/teacher/update`,teacher,
    {params:param}); 
  }

  getAllTeacher():Observable<ITeacher[]>{
    return this.http.get<ITeacher[]>(`${this.apiServerUrl}admin/teacher/getTeachers`);
  }

  addStandardDetails(standard:IStandard):Observable<IStandard>{
    return this.http.post<IStandard>(`${this.apiServerUrl}/admin/standard/add`,[standard]);
  }

  updateStandardDetails(standard:IStandard,sIdList:number[]):Observable<IStandard>{
    return this.http.put<IStandard>(`${this.apiServerUrl}admin/standard/update`,[standard,sIdList]);
  }
}
