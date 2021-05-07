import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IParent } from 'src/models/parent';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public parent_obj!: IParent;

  constructor(private adminService:AdminService,
              private router:Router) { }

 ngOnInit(): void {
  } 

  onClickTeacher(){
    this.router.navigate(['admin/getAllTeachers']);
  }

  onClickParent(){
    this.router.navigate(['admin/getAllParents']);
  }

  public addParent(addForm:NgForm):void{
    this.adminService.addParentDetails(addForm.value).subscribe({
      next: parent => {
        this.parent_obj=parent;
      }
    });
  }


  

  


}
