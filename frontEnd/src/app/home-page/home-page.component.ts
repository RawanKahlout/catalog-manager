import { Component, OnInit } from '@angular/core';
import{dataService}from '../data.service';
import { element, Key } from 'protractor';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
preBlocks// to be accceed by html
blocks : any[]=[];
breakpoint
result;
  constructor(private _dataService : dataService) { }
  ngOnInit() {
    this._dataService.getStatistics().subscribe(
      data => {
        this.result = data;
        this.preBlocks=this.result.data
      },
      error => {
        console.error("something wrong");
      }
    )
    this.breakpoint = (window.innerWidth <= 100) ? 1 : 4;

    //this.preBlocks.forEach(element => {
      //for (var Key in element) {
       // this.blocks.push(Key)
     // }
  //})
}
onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 100) ? 1 : 4 ;

}

}
