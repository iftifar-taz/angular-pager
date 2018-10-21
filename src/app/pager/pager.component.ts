import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pager, PageCountOption } from '../app.models';

@Component({
	selector: '.site-pager',
	templateUrl: './pager.component.html',
	styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

	@Input() pager: Pager;
	@Input() pageCountOptions: PageCountOption[];

	@Output() pagerEmitter: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
		this.pager = new Pager({
			pageCount: 10,
			currentPage: 1
		});

		this.pageCountOptions = [];
		this.PopulatePageCountOptions();
	}

	private PopulatePageCountOptions() {
		this.pageCountOptions.push(new PageCountOption({
			value: 2,
			text: '2',
			isSelected: false
		}));
		this.pageCountOptions.push(new PageCountOption({
			value: 5,
			text: '5',
			isSelected: true
		}));
		this.pageCountOptions.push(new PageCountOption({
			value: 10,
			text: '10',
			isSelected: false
		}));
		this.pageCountOptions.push(new PageCountOption({
			value: 20,
			text: '20',
			isSelected: false
		}));
		this.pageCountOptions.push(new PageCountOption({
			value: 9999,
			text: 'All',
			isSelected: false
		}));
	}

	ngOnInit() {

	}

	getPreviousButtonClass() {
		return {
			disabled: this.pager.currentPage === 1
		}
	}

	getNextButtonClass() {
		console.log(this.pager);
		return {
			disabled: (this.pager.pageCount * (this.pager.currentPage - 1)) + this.pager.pageCount >= this.pager.totalCount
		}
	}

	pageCountOptionsOnChange(event: any) {
		this.pagerEmitter.emit({
			pageCount: event.target.value
		});
	}

	changePageOnClick(event: any, currentPage: number) {
		this.pagerEmitter.emit({
			currentPage: Math.ceil(currentPage)
		});
	}

}
