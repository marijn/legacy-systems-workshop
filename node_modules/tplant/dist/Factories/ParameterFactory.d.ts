import ts from 'typescript';
import { Parameter } from '../Components/Parameter';
export declare namespace ParameterFactory {
    function create(parameterSymbol: ts.Symbol, checker: ts.TypeChecker): Parameter;
}
