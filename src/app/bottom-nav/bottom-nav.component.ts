import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../classes/article';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})

export class BottomNavComponent implements OnInit {
  @Input('articlesData')
  articlesData: Array<Article>|undefined;

  @Output('articleSelected') 
  articleSelected = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  setArticleVisible(article: Article){
    this.articleSelected.emit(article);
    
  }

}
