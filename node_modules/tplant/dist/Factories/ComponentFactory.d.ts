import ts from 'typescript';
import { Method } from '../Components/Method';
import { Property } from '../Components/Property';
import { TypeParameter } from '../Components/TypeParameter';
import { IComponentComposite } from '../Models/IComponentComposite';
import { Modifier } from '../Models/Modifier';
export declare namespace ComponentFactory {
    function isNodeExported(node: ts.Node): boolean;
    function create(node: ts.Node, checker: ts.TypeChecker): IComponentComposite[];
    function getExtendsHeritageClauseName(heritageClause: ts.HeritageClause): string;
    function getImplementsHeritageClauseNames(heritageClause: ts.HeritageClause): string[];
    function getMemberModifier(memberDeclaration: ts.Declaration): Modifier;
    function isAbstract(memberDeclaration: ts.Declaration): boolean;
    function isStatic(memberDeclaration: ts.Declaration): boolean;
    function serializeMethods(memberSymbols: ts.UnderscoreEscapedMap<ts.Symbol>, checker: ts.TypeChecker): (Property | Method)[];
    function serializeTypeParameters(memberSymbols: ts.UnderscoreEscapedMap<ts.Symbol>, checker: ts.TypeChecker): TypeParameter[];
    function hasInitializer(declaration: ts.ParameterDeclaration): boolean;
    function isOptional(declaration: ts.PropertyDeclaration | ts.ParameterDeclaration | ts.MethodDeclaration): boolean;
}
