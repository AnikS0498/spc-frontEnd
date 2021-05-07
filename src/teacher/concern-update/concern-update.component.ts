import { Component, OnInit } from '@angular/core';
import { IConcern } from 'src/models/concern';
import { IParent } from 'src/models/parent';
import { TeacherService } from 'src/services/teacher.service';

@Component({
  selector: 'app-concern-update',
  templateUrl: './concern-update.component.html',
  styleUrls: ['./concern-update.component.css']
})
export class ConcernUpdateComponent implements OnInit {

  public concern!: IConcern;
  public parent!: IParent;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  public updateConcern() {
    this.teacherService.updateCocernDetails(this.concern, this.parent.id).subscribe(() => {
      alert("Updated Concern Successfully");
    })

  }

}


