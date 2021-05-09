import { Component, OnInit } from '@angular/core';
import { IParent } from 'src/models/parent';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.css']
})
export class ParentAddComponent implements OnInit {

  parent: IParent = new IParent();
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  onAddParent():void{
    this.adminService.addParentDetails(this.parent).subscribe();
    console.log(this.parent);
    alert("Parent Added Successfully");
    location.reload();
  }
}
