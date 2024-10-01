import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { articlesData } from '../data/articles.data';
import { Article } from './../models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles: Article[] = articlesData
  title: string = 'Bienvenue sur le Wild Blog de Mahery !';
  messageFromChild: string = '';

  handleNotification(message: string) {
    this.messageFromChild = message;
    setTimeout(() => {
      this.messageFromChild = '';
    }, 2000);
    ;
  }

}
