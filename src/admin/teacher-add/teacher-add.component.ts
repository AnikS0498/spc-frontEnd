import { Component, OnInit } from '@angular/core';
import { ITeacher } from 'src/models/teacher';
import { AdminService } from 'src/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  teacher: ITeacher = new ITeacher();
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  onAddTeacher():void{
    this.adminService.addTeacherDetails(this.teacher).subscribe();
    console.log(this.teacher);
    // alert("Teacher Added Successfully");
   
      Swal.fire("Success","Teacher Added Successfully","success");
    
    
    // location.reload();
  }

}
