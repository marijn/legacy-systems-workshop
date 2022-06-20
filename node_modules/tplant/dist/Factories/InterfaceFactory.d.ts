import ts from 'typescript';
import { Interface } from '../Components/Interface';
export declare namespace InterfaceFactory {
    function create(interfaceSymbol: ts.Symbol, checker: ts.TypeChecker): Interface;
}
