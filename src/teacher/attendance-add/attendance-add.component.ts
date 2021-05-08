import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAttendance } from 'src/models/attendance';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.css']
})
export class AttendanceAddComponent implements OnInit {

  attendance: IAttendance = new IAttendance;
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public addAttendance(){
    this.teacherService.addAttendanceDetails(this.attendance,this.sId).subscribe(()=>{
      alert("Added Attendance Successfully");
      })
    }

    onClickTeacher(){
      this.router.navigate(['teacher']);
    }
  
    onSubmit(){
         this.addAttendance();
     }

}