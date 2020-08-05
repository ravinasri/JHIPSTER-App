import { INotice } from 'app/shared/model/notice.model';

export interface IBoard {
  id?: number;
  title?: string;
  noticeList?: string;
  notices?: INotice[];
}

export class Board implements IBoard {
  constructor(public id?: number, public title?: string, public noticeList?: string, public notices?: INotice[]) {}
}
