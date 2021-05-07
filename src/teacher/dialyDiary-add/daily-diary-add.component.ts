import { Component, OnInit } from '@angular/core';
import { IDiary } from 'src/models/diary';
import { IStudent } from 'src/models/student';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-daily-diary-add',
  templateUrl: './daily-diary-add.component.html',
  styleUrls: ['./daily-diary-add.component.css']
})
export class DailyDiaryAddComponent implements OnInit {

  public diary!: IDiary;
  public student!: IStudent;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public addDiary() {
    this.teacherService.addDailyDiaryDetails(this.diary, this.student.id).subscribe(() => {
      alert("Added Diary Successfully");
    })

  }

}
