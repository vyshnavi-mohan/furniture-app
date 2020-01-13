import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('appuser'))

    if(user && user.token!=''){

      return true;

    }else{

      return false;

    }
  }


}
