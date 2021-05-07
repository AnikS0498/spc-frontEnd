import { Component, OnInit } from '@angular/core';
import { IAttendance } from 'src/models/attendance';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-attendance-update',
  templateUrl: './attendance-update.component.html',
  styleUrls: ['./attendance-update.component.css']
})
export class AttendanceUpdateComponent implements OnInit {

  public attendance!: IAttendance;
  public student!: IStudent;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public updateAttendance(){
    this.teacherService.addAttendanceDetails(this.attendance,this.student.id).subscribe(()=>{
      alert("Updated Attendance Successfully");
      })
  }

}
