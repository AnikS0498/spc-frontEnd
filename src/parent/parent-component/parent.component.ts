import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  showAttendance: boolean = false;
  showDiary: boolean = false;
  showExam: boolean = false;
  showFee: boolean = false;
  showReportCard: boolean = false;
  studentId: string;
  examDate: string;

  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickAttendance() {
    this.showAttendance = true;
    this.showExam = false;
    this.showFee = false;
    this.showReportCard = false;
    localStorage.setItem("studentID", this.studentId);
  }

  onClickDailyDiary() {
    this.showAttendance = false;
    this.showDiary = true;
    this.showExam = false;
    this.showFee = false;
    this.showReportCard = false;
    localStorage.setItem("studentID", this.studentId);
  }

  onClickExam() {
    this.showExam = true;
    this.showAttendance = false;
    this.showDiary = false;
    this.showFee = false;
    this.showReportCard = false;
    localStorage.setItem("examDate", this.examDate);
  }

  onClickFee() {
    this.showFee = true;
    this.showAttendance = false;
    this.showDiary = false;
    this.showReportCard = false;
    this.showExam = false;
    localStorage.setItem("studentID", this.studentId);
  }

  onClickReportCard() {
    this.showReportCard = true;
    this.showAttendance = false;
    this.showDiary = false;
    this.showFee = false;
    this.showExam = false;
    localStorage.setItem("studentID", this.studentId);
  }

  onClickAddConcern() {
  }



}
