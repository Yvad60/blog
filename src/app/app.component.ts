import { Component } from '@angular/core';
import { ArticleCategorizationComponent } from './article-categorization/article-categorization.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    ArticleListComponent,
    ArticleCategorizationComponent,
  ],
})
export class AppComponent {}
