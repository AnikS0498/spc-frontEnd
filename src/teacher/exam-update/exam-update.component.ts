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
  public standards:number[]=[116,117];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public addExam(){
    this.teacherService.updateExamDetails(this.exam,this.sIdList).subscribe(()=>{
    alert("Exam updated successfully");
    });
  }

}
