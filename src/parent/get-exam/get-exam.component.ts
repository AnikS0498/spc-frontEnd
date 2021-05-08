import { Component, OnInit } from '@angular/core';
import { IExam } from 'src/models/exam';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-exam',
  templateUrl: './get-exam.component.html',
  styleUrls: ['./get-exam.component.css']
})
export class GetExamComponent implements OnInit {

  public exam !: IExam;
  date : Date;

  constructor(private parentService : ParentService) { }

  ngOnInit(): void {
    this.getExam();
  }
  getExam(): void {
    this.parentService.getExamDetails(this.date).subscribe({
      next: exam => {
        this.exam = exam;
      },
      error: err => console.log(err)
    });
  }

}
