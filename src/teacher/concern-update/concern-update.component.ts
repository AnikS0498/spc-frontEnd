import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IConcern } from 'src/models/concern';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-concern-update',
  templateUrl: './concern-update.component.html',
  styleUrls: ['./concern-update.component.css']
})
export class ConcernUpdateComponent implements OnInit {

  concern: IConcern = new IConcern;
  pId: string;

  constructor(private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateConcern() {
    this.teacherService.updateConcernDetails(this.concern, this.pId).subscribe(() => {
      alert("Updated Concern Successfully");
    })

  }

  onClickTeacher(){
    this.router.navigate(['teacher']);
  }

  onSubmit(){
       this.updateConcern();
   }

}


