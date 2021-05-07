import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFee } from 'src/models/fee';
import { IStudent } from 'src/models/student';
import { AccountantService } from 'src/services/accountant.service';

@Component({
  selector: 'app-fee-add',
  templateUrl: './fee-add.component.html',
  styleUrls: ['./fee-add.component.css']
})
export class FeeAddComponent implements OnInit {

  public fee!: IFee;
  public student!: IStudent;
  constructor(private accountantService : AccountantService,
              private router: Router) { }

  ngOnInit(): void {
  }
 

  public addFee(){
    this.accountantService.addFeeDetails(this.fee, this.student.id).subscribe(()=>{
    alert("Added Fee Successfully");
    })

  }

  onClickAccountant(){
    this.router.navigate(['accountant']);
  }

  onSubmit(){
       this.addFee();
   }

}
