import { Pipe, PipeTransform } from '@angular/core';

// {{ 1024 | fileSize:'KB' }} ==> 1.00 KB

// {{ 1024 | fileSize }} ==> 1.00 KB
// 1024 passed as size, 'KB' is passed as unit variable

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(size: number, unit: string = 'KB'): string {

    let factors = 1024;

    if (unit === 'MB') {
      factors = factors * 1024;
    }
    if (unit === 'GB') {
      factors = factors * 1024 * 1024;
    }

    return (size / factors).toFixed(3) + unit;
  }

}
