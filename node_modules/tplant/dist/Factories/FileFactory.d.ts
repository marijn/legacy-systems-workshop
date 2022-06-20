import ts from 'typescript';
import { File } from '../Components/File';
export declare namespace FileFactory {
    function create(sourceFile: ts.Node, checker: ts.TypeChecker): File;
}
