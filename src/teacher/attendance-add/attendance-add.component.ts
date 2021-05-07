import { Component, OnInit } from '@angular/core';
import { IAttendance } from 'src/models/attendance';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html',
  styleUrls: ['./attendance-add.component.css']
})
export class AttendanceAddComponent implements OnInit {

  public attendance!: IAttendance;
  public student!: IStudent;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public addAttendance(){
    this.teacherService.addAttendanceDetails(this.attendance,this.student.id).subscribe(()=>{
      alert("Added Attendance Successfully");
      })
  }

}
