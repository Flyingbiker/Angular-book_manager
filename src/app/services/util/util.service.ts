import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   *
   * @param objectsArray
   * @param attr
   * @param searchVal
   */
  static findElementByAttr(objectsArray, attr, searchVal) {

    for(let object of objectsArray) {
      if(object[attr] === searchVal) {
        return object;
      }
    }

  }

}
