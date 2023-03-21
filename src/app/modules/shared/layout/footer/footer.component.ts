import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  title : string | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log("footer : ngOnInIt");
    //initialises in ngOnIt instead of constructor
    this.title = "This is a footer";
  }

}
