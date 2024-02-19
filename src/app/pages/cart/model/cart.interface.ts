import { IProduct } from "../../product/model/product.interface";

export interface ICart{
  id: string;
  storeName: string;
  storeStatus: number;
  productList: IProduct[];
}