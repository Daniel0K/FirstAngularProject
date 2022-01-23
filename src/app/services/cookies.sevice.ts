import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {

  getCookie(name: string) {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
        name.replace(/([$?*|{}[\]\\^])/g, '\\$1') +
        '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  setCookie(name: string, value: string) {
    const updatedCookie: string = `${name}=${value}`;
    document.cookie = updatedCookie;
  }

  hasCookie(value: string): boolean {
    return this.getCookie(value) !== undefined;
  }
}
