import { Route } from '@angular/router';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Route[] = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'article/:id',
        component: ArticleComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

export default routes;
