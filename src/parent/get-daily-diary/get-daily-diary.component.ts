import { Component, OnInit } from '@angular/core';
import { IDiary } from 'src/models/diary';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-daily-diary',
  templateUrl: './get-daily-diary.component.html',
  styleUrls: ['./get-daily-diary.component.css']
})
export class GetDailyDiaryComponent implements OnInit {

  public dailyDiary !: IDiary;
  sId:number;
  constructor(private parentService : ParentService) { }

  ngOnInit(): void {
    this.getDailyDiary();
  }

  getDailyDiary(): void {
    this.parentService.getDialyDiary(this.sId).subscribe({
      next: dailyDiary => {
        this.dailyDiary = dailyDiary;
      },
      error: err => console.log(err)
    });
  }

}