import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  var newReq = req.clone({ setHeaders: { 'Username': '11191540', 'Password': '60-dayfreetrial' } })

  return next(newReq);
};
