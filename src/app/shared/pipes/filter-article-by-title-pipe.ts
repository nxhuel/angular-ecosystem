import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticleByTitle'
})
export class FilterArticleByTitlePipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    const searhResult = [];
    for(const title of value) {
      if(
        title.title.toLowerCase().indexOf(args) > -1 ||
        title.title.toUpperCase().indexOf(args) > -1 ||
        title.title.indexOf(args) > -1
      ) {
        searhResult.push(title);
      }
    }
    return searhResult;
  }

}
