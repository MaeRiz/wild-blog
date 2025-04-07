import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';
import { visitorOnlyGuard } from './guards/visitor-only.guard';

export const routes: Routes = [
    {path: '', component: HomePageComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginFormComponent, canActivate: [visitorOnlyGuard]},
    {path: 'signup', component: SignupFormComponent, canActivate: [visitorOnlyGuard]},
    {path: 'contact', component: ContactFormComponent},
    {path: 'article/:id', component: ArticlePageComponent, canActivate: [authGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'admin', component: AdminPageComponent, canActivate: [roleGuard('ROLE_ADMIN')]},
    {path: '**', component: NotFoundComponent},
];
