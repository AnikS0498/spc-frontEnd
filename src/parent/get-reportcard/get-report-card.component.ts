import { Component, OnInit } from '@angular/core';
import { IReportCard } from 'src/models/reportCard';
import { IStudent } from 'src/models/student';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-report-card',
  templateUrl: './get-report-card.component.html',
  styleUrls: ['./get-report-card.component.css']
})
export class GetReportCardComponent implements OnInit {

  // public reportCard !: IReportCard;
  reportCard: IReportCard = new IReportCard();
  sId: number;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.sId = parseInt(localStorage.getItem("studentID"));
    this.getReportCard();
  }

  getReportCard(): void {
    this.parentService.getReportCardDetails(this.sId).subscribe({
      next: reportCard => {
        this.reportCard = reportCard;
        console.log(reportCard);
        
      },
      error: err => console.log(err)
    });
  }
}
