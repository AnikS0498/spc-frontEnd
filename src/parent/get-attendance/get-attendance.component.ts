import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAttendance } from 'src/models/attendance';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-attendance',
  templateUrl: './get-attendance.component.html',
  styleUrls: ['./get-attendance.component.css']
})
export class GetAttendanceComponent implements OnInit {

  // public attendance !:  IAttendance;
  attendance: IAttendance = new IAttendance();
  sId: number;

  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
    this.sId = parseInt(localStorage.getItem("studentID"));
    this.getAttendance();
  }

  getAttendance(): void {
    this.parentService.getAttendance(this.sId).subscribe({
      next: attendance => {
        this.attendance = attendance;
        console.log(attendance);
      },
      error: err => console.log(err)
    });
  }

  onBack(): void {
    this.router.navigate(['/parent']);
  }

}
