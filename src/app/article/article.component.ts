import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {

  @Input() givenArticle!: Article;
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();

  liked: boolean = false;

  handleLike = ():void => {
    this.liked ? this.givenArticle.likes -= 1 : this.givenArticle.likes += 1 
    this.liked = !this.liked
    this.notifyLike.emit((this.liked ? 'Vous venez de liké: ' : 'Vous venez de retirer votre like de: ')+ this.givenArticle.title );
  }
}
