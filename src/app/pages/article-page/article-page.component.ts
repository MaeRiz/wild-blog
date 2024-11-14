import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NotFoundComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  http = inject(HttpClient)
  articleId!: number;
  article$!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.getArticleById(this.articleId)
  }

  getArticleById(id: number): void {
    this.article$ = this.http.get<Article>('http://localhost:3000/articles/' + id)
  }

}
