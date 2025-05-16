import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { delay, finalize } from 'rxjs';
import { BusyService } from '../services/busy.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

  busyService.busy();

  //virtual delay for loading spinner and to simulate a slow network
  return next(req).pipe(
    delay(500),
    finalize(()=> busyService.idle())
  )
};
