import ts from 'typescript';
import { EnumValue } from '../Components/EnumValue';
export declare namespace EnumValueFactory {
    function create(signature: ts.Symbol): EnumValue;
}
