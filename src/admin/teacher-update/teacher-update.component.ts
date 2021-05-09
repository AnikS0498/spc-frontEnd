import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.css']
})
export class TeacherUpdateComponent implements OnInit {

  teacher: ITeacher = new ITeacher();
  sIdList:number[]=[117,118];
  standardList:string=this.sIdList.toString();
  sId:string;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  onUpdateTeacher(){
    this.adminService.updateTeacherDetails(this.teacher,this.standardList,this.sId).subscribe();
    console.log(this.teacher);
  }
}
