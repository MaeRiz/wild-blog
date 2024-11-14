import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { articles_data } from '../../data/articles.data';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnailComponent, AsyncPipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})

export class ArticleListComponent {

  articles$!: Observable<Article[]>;

  messageFromChild: string = '';

  http = inject(HttpClient);

  handleNotification(message: string) {
    this.messageFromChild = message;
    setTimeout(() => {
      this.messageFromChild = '';
    }, 2000);
    ;
  }

  getArticles(): void {
    this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles')
  }

  ngOnInit() {
    this.getArticles()
  }

}
