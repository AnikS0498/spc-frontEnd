import { Component, OnInit } from '@angular/core';
import { IFee } from 'src/models/fee';
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-get-fee',
  templateUrl: './get-fee.component.html',
  styleUrls: ['./get-fee.component.css']
})
export class GetFeeComponent implements OnInit {

  public fee !: IFee;
  sId : number;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.getFee();
  }

  getFee(): void {
    this.parentService.getFee(this.sId).subscribe({
      next: fee => {
        this.fee = fee;
      },
      error: err => console.log(err)
      
    });
  }

}
