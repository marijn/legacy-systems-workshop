import ts from 'typescript';
import { Class } from '../Components/Class';
export declare namespace ClassFactory {
    function create(classSymbol: ts.Symbol, checker: ts.TypeChecker): Class;
}
