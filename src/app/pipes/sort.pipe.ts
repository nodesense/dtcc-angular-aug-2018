import { Pipe, PipeTransform } from '@angular/core';

// {{products | sort:'price':'asc' }}
// {{brands | sort:'name':'desc'}}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[],
            fieldName: string,
            sortType: string = 'asc'): any[] {
    
    if (!items || !fieldName) {
      return items; // no sorting
    }

    if (sortType === 'asc') {
      return items.sort ( (l, r) => {
          if (l[fieldName] > r[fieldName]) {
             return 1;
          }

          if (l[fieldName] < r[fieldName]) {
            return -1;
          }
          return 0;
      });
    }

    if (sortType === 'desc') {
      return items.sort ( (l, r) => {
          if (l[fieldName] < r[fieldName]) {
             return 1;
          }
          if (l[fieldName] > r[fieldName]) {
            return -1;
          }
          return 0;
      });
    }
     

  }

}
