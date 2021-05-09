import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReportCard } from 'src/models/reportCard';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-add',
  templateUrl: './report-card-add.component.html',
  styleUrls: ['./report-card-add.component.css']
})
export class ReportCardAddComponent implements OnInit {

  reportCard: IReportCard = new IReportCard;
  sId: string;

  constructor(private teacherService:TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public addReportCard(){
    this.teacherService.addReportCardDetails(this.reportCard,this.sId).subscribe(() => {
      alert("Added ReportCard Successfully")
    })
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.addReportCard();
   }


}
