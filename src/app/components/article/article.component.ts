import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, DatePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {

  @Input() givenArticle!: Article;
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();

  liked: boolean = false;
  comment: string = ''

  handleLike = ():void => {
    this.liked ? this.givenArticle.likeCount -= 1 : this.givenArticle.likeCount += 1 
    this.liked = !this.liked
    this.notifyLike.emit((this.liked ? 'Vous venez de liké: ' : 'Vous venez de retirer votre like de: ')+ this.givenArticle.title );
  }
}
