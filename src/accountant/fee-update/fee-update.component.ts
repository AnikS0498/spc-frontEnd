import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFee } from 'src/models/fee';
import { IStudent } from 'src/models/student';
import { AccountantService } from 'src/services/accountant.service';

@Component({
  selector: 'app-fee-update',
  templateUrl: './fee-update.component.html',
  styleUrls: ['./fee-update.component.css']
})
export class FeeUpdateComponent implements OnInit {

  public fee!: IFee;
  student: string;

  constructor(private accountantService: AccountantService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateFee(){ 
      this.accountantService.updateFeeDetails(this.fee, this.student).subscribe(()=>{

        alert("fee updated successfully!!!!");

      });  
      
  }

    onClickAccountant(){
      this.router.navigate(['accountant']);
    }

    onSubmit(){
      this.updateFee();
  }

}
