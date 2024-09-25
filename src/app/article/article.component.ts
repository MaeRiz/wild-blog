import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  article = {
    title: "Apprendre Angular",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis exercitationem totam. Soluta voluptate temporibus non, deserunt mollitia maxime voluptas reiciendis obcaecati culpa illo alias tenetur perferendis nisi animi saepe? Hic, quos fugiat ipsum nihil dicta repudiandae asperiores. Pariatur ex maiores iusto culpa. Mollitia, magni. Enim eos fuga accusamus laudantium?"
  }
}
