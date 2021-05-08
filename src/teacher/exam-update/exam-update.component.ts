import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExam } from 'src/models/exam';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-exam-update',
  templateUrl: './exam-update.component.html',
  styleUrls: ['./exam-update.component.css']
})
export class ExamUpdateComponent implements OnInit {
  
  exam: IExam = new IExam;
  public standards:number[]=[116,117];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateExam(){
    this.teacherService.updateExamDetails(this.exam,this.sIdList).subscribe(()=>{
    alert("Exam updated successfully");
    });
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateExam();
   }


}
