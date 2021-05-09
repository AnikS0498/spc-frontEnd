import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExam } from 'src/models/exam';
import { TeacherService } from 'src/services/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {

  exam: IExam = new IExam;
  standards:number[]=[116,117];
  sIdList: string = this.standards.toString();

  constructor(private teacherService: TeacherService,
              private router:Router) { }

  ngOnInit(): void {
  }

  public addExam(){
    this.teacherService.addExamDetails(this.exam,this.sIdList).subscribe(()=>{
    //alert("Exam added successfully");
    Swal.fire('Success','Exam added','success');
    });
  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.addExam();
   }

}
