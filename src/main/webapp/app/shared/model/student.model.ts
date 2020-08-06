export interface IStudent {
  id?: number;
  name?: string;
  mobile?: number;
}

export class Student implements IStudent {
  constructor(public id?: number, public name?: string, public mobile?: number) {}
}
