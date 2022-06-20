import ts from 'typescript';
import { Namespace } from '../Components/Namespace';
export declare namespace NamespaceFactory {
    function create(namespaceSymbol: ts.Symbol, checker: ts.TypeChecker): Namespace;
}
