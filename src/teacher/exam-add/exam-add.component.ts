import { Component, OnInit } from '@angular/core';
import { IExam } from 'src/models/exam';
import { IStandard } from 'src/models/standard';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {

  public exam!: IExam;
  public standards:number[]=[116,117];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public addExam(){
    this.teacherService.addExamDetails(this.exam,this.sIdList).subscribe(()=>{
    alert("Exam added successfully");
    });
  }

}
