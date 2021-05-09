import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAttendance } from 'src/models/attendance';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-attendance-update',
  templateUrl: './attendance-update.component.html',
  styleUrls: ['./attendance-update.component.css']
})
export class AttendanceUpdateComponent implements OnInit {

  attendance: IAttendance = new IAttendance;
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  public updateAttendance(){
    this.teacherService.updateAttendanceDetails(this.attendance,this.sId).subscribe(()=>{
      //alert("Updated Attendance Successfully");
      Swal.fire('Success','Attendance updated','success');
      });
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateAttendance();
   }

}
