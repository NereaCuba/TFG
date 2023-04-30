 // Angular
 import { Pipe, PipeTransform } from '@angular/core';
 import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
 
 /**
  * Sanitize HTML
  */
 @Pipe({
   name: 'safe'
 })
 export class SafePipeDetail implements PipeTransform {
   /**
    * Pipe Constructor
    *
    * @param _sanitizer: DomSanitezer
    */
   // tslint:disable-next-line
   constructor(protected _sanitizer: DomSanitizer) {
   }
 
   /**
    * Transform
    *
    * @param url: string
    */
   transform(url) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
 }