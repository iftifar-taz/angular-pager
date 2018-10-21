import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { TableData, Pager } from './app.models';

@Component({
	selector: '.site-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	title = 'Pager';
	tableDatas: TableData[];
	pager: Pager;

	constructor(private appService: AppService) {
		this.tableDatas = [];
		this.pager = new Pager({
			totalCount: 26,
			pageCount: 5,
			currentPage: 1
		});
	}

	private getTableDatas() {
		this.appService.getTableDatas(this.pager).subscribe(x => {
			this.tableDatas = x.items;
		});
	}

	ngOnInit() {
		this.getTableDatas();
	}

	pagerOnChange(data: any) {
		if (data.pageCount) {
			this.pager.pageCount = 1*data.pageCount;
			this.getTableDatas();
		}

		if (data.currentPage) {
			this.pager.currentPage = data.currentPage;
			this.getTableDatas();
		}
	}
}
