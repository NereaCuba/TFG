import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable()
export class EvaluateService {
    constructor() {}

    csvDownload(headers: any, globalData: any) {
        if(!globalData || !globalData.length) {
            return;
        }
        const separator = ',';
        const csvContent: any = headers.join(separator) + '\n' + globalData.map((rowData: any) => {
            return headers.map((headKey) => {
                return rowData[headKey.toLowerCase().replaceAll(' ', '_')] === null  ||  rowData[headKey.toLowerCase().replaceAll(' ', '_')] === undefined ? '' : rowData[headKey.toLowerCase().replaceAll(' ', '_')];
            }).join(separator);
        }).join('\n');
        this.exportFile(csvContent, 'text/csv;charset=utf-8;');
    }

    exportFile(data: any, fileType: string) {
        const blob =  new Blob([data], {type: fileType});
        var date = new Date().toISOString().split('T')[0];
        FileSaver.saveAs(blob, 'ChartEvaluation'+date);
    }
}