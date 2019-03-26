import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
  providers:[BatchService]
})
export class BatchComponent implements OnInit {

  private newBatch;

  constructor(private batchsrvice:BatchService) { }

  // getBatch(){
  //   return this.batchsrvice.get().then(newbatches=>{
  //     this.newBatch=newbatches;
  //   })
  // }

  // addBatch(){
  
  //   this.batchsrvice.add({title:this.newBatch}).then(()=>{
  //     return this.getBatch();  
  //     alert("n")  ;
  //   }).then(()=>{
  //     this.newBatch="";
     
  //   })
  //   alert(this.newBatch);
  // }

  ngOnInit() {
    // this.batches.getBatch();
  }

}
