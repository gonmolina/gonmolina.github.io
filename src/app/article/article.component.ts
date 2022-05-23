import { ViewEncapsulation } from '@angular/core';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Article } from '../classes/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent {
  @Input('article')
  article: Article | undefined;

  @Output('escapePress')
  escapeKeyPress = new EventEmitter<void>();

  


  @HostListener('window:keydown.escape', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.onClose()
  }


  constructor(private _sanitizer:DomSanitizer) { }

 
  sanitizer (doc: string): SafeHtml{
    return this._sanitizer.bypassSecurityTrustHtml(doc)
  }

  onClose(){
    this.escapeKeyPress.emit()
  }

}
