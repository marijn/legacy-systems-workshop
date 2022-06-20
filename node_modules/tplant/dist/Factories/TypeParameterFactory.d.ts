import ts from 'typescript';
import { TypeParameter } from '../Components/TypeParameter';
export declare namespace TypeParameterFactory {
    function getConstraint(memberDeclaration: ts.Declaration, checker: ts.TypeChecker): string | undefined;
    function create(signature: ts.Symbol, namedDeclaration: ts.NamedDeclaration, checker: ts.TypeChecker): TypeParameter;
}
