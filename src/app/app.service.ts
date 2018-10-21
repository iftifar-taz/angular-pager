import { Injectable } from '@angular/core';
import { TableData, Pager } from './app.models';
import { of, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor() { }

	public getTableDatas(pager: Pager): Observable<any> {
		const tableDatas: TableData[] = [];
		for (let i = 1; i <= 26; i++) {
			tableDatas.push(new TableData({
				serial: i,
				first: String.fromCharCode(96 + i),
				last: String.fromCharCode(96 + i)
			}));
		}
		pager.totalCount = tableDatas.length;
		const start = pager.pageCount * (pager.currentPage - 1);
		const count = (start + pager.pageCount) > pager.totalCount ? (pager.totalCount - start) : pager.pageCount;
		return of({
			items: tableDatas.splice(start, count),
			pager: pager
		});
	}
}
