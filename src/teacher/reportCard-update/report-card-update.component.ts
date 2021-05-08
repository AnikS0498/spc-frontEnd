import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IReportCard } from 'src/models/reportCard';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-report-card-update',
  templateUrl: './report-card-update.component.html',
  styleUrls: ['./report-card-update.component.css']
})
export class ReportCardUpdateComponent implements OnInit {

  reportCard: IReportCard = new IReportCard;
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateReportCard(){
    this.teacherService.updateReportCardDetails(this.reportCard,this.sId).subscribe(() => {
      alert("Updated ReportCard Successfully")
    })
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateReportCard();
   }


}
