import ts from 'typescript';
import { IComponentComposite } from './Models/IComponentComposite';
import { ICommandOptions } from './Models/ICommandOptions';
export declare namespace tplant {
    function generateDocumentation(fileNames: ReadonlyArray<string>, options?: ts.CompilerOptions): IComponentComposite[];
    function convertToPlant(files: IComponentComposite[], options?: ICommandOptions): string;
}
