import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(list: any[], text: string, column: string): any[] {
        if (text === '') {
            return list;
        }

        return list.filter(album => {
            return album[column].toLowerCase().includes(text.toLowerCase());
        });
    }

}
