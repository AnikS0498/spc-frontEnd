import { Component, OnInit } from '@angular/core';
import { IReportCard } from 'src/models/reportCard';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-add',
  templateUrl: './report-card-add.component.html',
  styleUrls: ['./report-card-add.component.css']
})
export class ReportCardAddComponent implements OnInit {

  public reportCard!: IReportCard;
  public student!: IStudent;

  constructor(private teacherService:TeacherService) { }

  ngOnInit(): void {
  }

  public addReportCard(){
    this.teacherService.addReportCardDetails(this.reportCard,this.student.id).subscribe(() => {
      alert("Added ReportCard Successfully")
    })
  }

}
