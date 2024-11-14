import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';

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

  api = inject(ApiService)

  handleNotification(message: string) {
    this.messageFromChild = message;
    setTimeout(() => {
      this.messageFromChild = '';
    }, 2000);
    ;
  }

  ngOnInit() {
    this.articles$ = this.api.getArticles()
  }

}
