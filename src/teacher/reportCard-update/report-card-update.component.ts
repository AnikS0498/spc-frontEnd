import { Component, OnInit } from '@angular/core';
import { IReportCard } from 'src/models/reportCard';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-update',
  templateUrl: './report-card-update.component.html',
  styleUrls: ['./report-card-update.component.css']
})
export class ReportCardUpdateComponent implements OnInit {

  public reportCard!: IReportCard;
  public student!: IStudent;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public updateReportCard(){
    this.teacherService.updateReportCardDetails(this.reportCard,this.student.id).subscribe(() => {
      alert("Updated ReportCard Successfully")
    })
  }

}
