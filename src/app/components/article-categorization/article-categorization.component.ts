import { Component, input } from '@angular/core';

@Component({
  selector: 'app-article-categorization',
  imports: [],
  templateUrl: './article-categorization.component.html',
})
export class ArticleCategorizationComponent {
  classes = input('');

  categories = [
    'Angular',
    'React',
    'General',
    'Kubernetes',
    'Netlify Functions',
    'Heroku Functions',
  ];
}
