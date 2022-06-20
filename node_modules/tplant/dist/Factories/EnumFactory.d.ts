import ts from 'typescript';
import { Enum } from '../Components/Enum';
export declare namespace EnumFactory {
    function create(enumSymbol: ts.Symbol): Enum;
}
