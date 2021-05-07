import { Component, OnInit } from '@angular/core';
import { IDiary } from 'src/models/diary';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-daily-diary-update',
  templateUrl: './daily-diary-update.component.html',
  styleUrls: ['./daily-diary-update.component.css']
})
export class DailyDiaryUpdateComponent implements OnInit {

  public diary!: IDiary;
  public student!: IStudent; 

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public updateDiary() {
    this.teacherService.updateDailyDiaryDetails(this.diary, this.student.id).subscribe(() => {
      alert("Updated Diary Successfully");
    })

  }


}
