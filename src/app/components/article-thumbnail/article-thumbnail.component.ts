import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, DatePipe],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {

  @Input() givenArticle!: Article;
  @Output() notifyLike: EventEmitter<string> = new EventEmitter<string>();

  comment: string = ''

  handleLike = ():void => {
    this.givenArticle.isLiked ? this.givenArticle.likeCount -= 1 : this.givenArticle.likeCount += 1 
    this.givenArticle.isLiked = !this.givenArticle.isLiked
    this.notifyLike.emit((this.givenArticle.isLiked ? 'Vous venez de liké: ' : 'Vous venez de retirer votre like de: ')+ this.givenArticle.title );
  }

}
