import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite, IComponentComposite } from '../Models/IComponentComposite';
export declare class Class extends ComponentComposite {
    readonly componentKind: ComponentKind;
    isAbstract: boolean;
    isStatic: boolean;
    constructorMethods: IComponentComposite[];
    members: IComponentComposite[];
    extendsClass: string | undefined;
    implementsInterfaces: string[];
    typeParameters: IComponentComposite[];
}
