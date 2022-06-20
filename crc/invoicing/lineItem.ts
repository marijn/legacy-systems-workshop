import {Currency} from "./currency";

export class LineItem {
    description: string;
    singlePrice: number;
    totalPrice: number;
    number: number;
    currency: Currency;
    category: string;
}