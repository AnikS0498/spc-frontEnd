import { Component, OnInit } from '@angular/core';
import { IConcern } from 'src/models/concern';
import { IParent } from 'src/models/parent';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-add-concern',
  templateUrl: './add-concern.component.html',
  styleUrls: ['./add-concern.component.css']
})
export class AddConcernComponent implements OnInit {

  pId : string;
  concern !: IConcern;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.onAddConcern();
  }

  onAddConcern(){
    this.parentService.addConcern(this.concern,this.pId).subscribe();
    console.log(this.concern);
  }

}
