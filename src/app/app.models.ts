export class TableData {
	public serial: number;
	public first: string;
	public last: string;

	public constructor(init?: Partial<TableData>) {
		Object.assign(this, init);
	}
}

export class Pager {
	public totalCount: number;
	public pageCount: number;
	public currentPage: number;

	public constructor(init?: Partial<Pager>) {
		Object.assign(this, init);
	}
}

export class PageCountOption {
	public value: number;
	public text: string;
	public isSelected: boolean;

	public constructor(init?: Partial<PageCountOption>) {
		Object.assign(this, init);
	}
}


