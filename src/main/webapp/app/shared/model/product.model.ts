export interface IProduct {
  id?: number;
  regionName?: string;
}

export class Product implements IProduct {
  constructor(public id?: number, public regionName?: string) {}
}
