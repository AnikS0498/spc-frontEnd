import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private parentService: ParentService, private router:Router) { }

  ngOnInit(): void {
  }

  onClickAttendance(){
    this.router.navigate(['parent/getAttendance']);
  }

  onClickDailyDiary(){
    this.router.navigate(['parent/getDailyDiary']);
  }

  onClickExam(){
    this.router.navigate(['parent/getExam']);
  }

  onClickFee(){
    this.router.navigate(['parent/getFee']);
  }

  onClickReportCard(){
    this.router.navigate(['parent/getReportCard']);
  }

  onClickAddConcern(){
    this.router.navigate(['parent/addConcern']);
  }

}
