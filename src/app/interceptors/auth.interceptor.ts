import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (router.url == "/login" || router.url == "/signin"){
    return next(req)
  }
  
  if (!authService.isLoggedIn()) {
    router.navigate(['/login']);
    return throwError(() => new Error('Token expiré'));
  }

  const token = authService.getToken();
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq);
};
