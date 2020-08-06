import { IAuthor } from 'app/shared/model/author.model';
import { IBoard } from 'app/shared/model/board.model';

export interface INotice {
  id?: number;
  title?: string;
  description?: string;
  author?: string;
  author?: IAuthor;
  noticeList?: IBoard;
}

export class Notice implements INotice {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public author?: string,
    public author?: IAuthor,
    public noticeList?: IBoard
  ) {}
}
