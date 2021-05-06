import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IParent } from 'src/models/parent';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public parent_obj!: IParent;
  public teachers: ITeacher[]=[];
  show:boolean=false;

  constructor(private adminService:AdminService,
              private router:Router) { }

 ngOnInit(): void {
 
    this.getTeachers();
  } 

  onClick(){
    this.show=!this.show;
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


  

  public getTeachers(): void { 
    this.adminService.getAllTeacher().subscribe({
      next: teachers=>{
        this.teachers = teachers;
      },
      error: err=> console.log(err)
    });
  }


}
