import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IParent } from 'src/models/parent';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})
export class ParentUpdateComponent implements OnInit {
  parentForm:FormGroup;
  parent: IParent = new IParent();
  studentId:string;
  constructor(private adminService:AdminService,private fb:FormBuilder) { 
    this.parentForm = this.fb.group({
      
    });
  }

  ngOnInit(): void {
  }

  onUpdateParent():void{
    this.adminService.updateParentDetails(this.parent,this.studentId).subscribe();
    console.log(this.parent);
    alert("Parent Added Successfully");
    location.reload();
  }
}
