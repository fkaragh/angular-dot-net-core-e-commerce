import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const snackBar = inject(SnackbarService);

  return next(req).pipe(
    catchError((err:HttpErrorResponse) => {
      if (err.status === 400) {
        if(err.error.errors) {
          const modalStateErrors = [];
          for (const key in err.error.errors) {
            if (err.error.errors[key]){
              modalStateErrors.push(err.error.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        } else{
          snackBar.error(err.error.title || err.error);
        }
        
      }
      if(err.status === 401) {
        snackBar.error(err.error.title || err.error)
      }
      if(err.status === 404) {
        router.navigateByUrl('/not-found');
      }
      if(err.status === 500) {
        const navigationExtras : NavigationExtras = {state: {error: err.error}};
        router.navigateByUrl('/server-error',navigationExtras);
      }
      return throwError(()=> err)
    })
  )
};
