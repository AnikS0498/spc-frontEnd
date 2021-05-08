import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDiary } from 'src/models/diary';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-daily-diary-update',
  templateUrl: './daily-diary-update.component.html',
  styleUrls: ['./daily-diary-update.component.css']
})
export class DailyDiaryUpdateComponent implements OnInit {

  diary: IDiary = new IDiary;
  sId: string

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateDiary() {
    this.teacherService.updateDailyDiaryDetails(this.diary, this.sId).subscribe(() => {
      alert("Updated Diary Successfully");
    })

  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateDiary();
   }


}
