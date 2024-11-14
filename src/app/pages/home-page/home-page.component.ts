import { Component } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { articles_data } from '../../data/articles.data';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  articles: Article[] = articles_data
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
