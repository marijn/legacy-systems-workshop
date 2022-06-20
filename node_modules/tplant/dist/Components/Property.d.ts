import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite } from '../Models/IComponentComposite';
import { Modifier } from '../Models/Modifier';
export declare class Property extends ComponentComposite {
    readonly componentKind: ComponentKind;
    modifier: Modifier;
    returnType: string;
    isAbstract: boolean;
    isOptional: boolean;
    isStatic: boolean;
}
