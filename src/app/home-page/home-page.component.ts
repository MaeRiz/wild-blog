import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { articlesData } from '../data/articles.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles = articlesData

  title: string = 'Bienvenue sur le Wild Blog de Mahery !';

}
