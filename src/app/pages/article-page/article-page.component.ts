import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [AsyncPipe, CommonModule, NotFoundComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  api = inject(ApiService)
  articleId!: number;
  article$!: Observable<Article>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    
    this.article$ = this.api.getArticleById(this.articleId)
  }

}
