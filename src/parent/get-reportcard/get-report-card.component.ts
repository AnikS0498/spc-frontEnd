import { Component, OnInit } from '@angular/core';
import { IReportCard } from 'src/models/reportCard';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-report-card',
  templateUrl: './get-report-card.component.html',
  styleUrls: ['./get-report-card.component.css']
})
export class GetReportCardComponent implements OnInit {

  public reportCard !: IReportCard;
  sId: number;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.getReportCard();
  }

  getReportCard(): void {
    this.parentService.getReportCardDetails(this.sId).subscribe({
      next: reportCard => {
        this.reportCard = reportCard;
      },
      error: err => console.log(err)
    });
  }
}
