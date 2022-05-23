import { Component, OnInit, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GDM Web CV';
  isPreload = true;
  
  

  ngOnInit(): void {
    setTimeout(() => this.isPreload=false, 100);    
  }
}
