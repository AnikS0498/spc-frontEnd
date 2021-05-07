import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacher!: ITeacher;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  onAddTeacher(addForm:NgForm ):void{
    this.adminService.addTeacherDetails(addForm.value).subscribe();
    console.log(addForm.value);
    alert("Teacher Added Successfully");
  }

  goToTeacherList(){
    
  }
}
