import { Component, OnInit } from '@angular/core';
import { IExam } from 'src/models/exam';
import { IStandard } from 'src/models/standard';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-exam-update',
  templateUrl: './exam-update.component.html',
  styleUrls: ['./exam-update.component.css']
})
export class ExamUpdateComponent implements OnInit {
  
  public exam!: IExam;
  public standards!: IStandard[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public addExam(){
    this.teacherService.updateExamDetails(this.exam,this.).subscribe(()=>{
    alert("Exam updated successfully");
    });
  }

}
