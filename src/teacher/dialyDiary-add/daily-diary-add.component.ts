import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDiary } from 'src/models/diary';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-daily-diary-add',
  templateUrl: './daily-diary-add.component.html',
  styleUrls: ['./daily-diary-add.component.css']
})
export class DailyDiaryAddComponent implements OnInit {

  diary: IDiary = new IDiary;
  sId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public addDiary() {
    this.teacherService.addDailyDiaryDetails(this.diary, this.sId).subscribe(() => {
      alert("Added Diary Successfully");
    })

  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.addDiary();
   }

}
