import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite, IComponentComposite } from '../Models/IComponentComposite';
export declare class Interface extends ComponentComposite {
    readonly componentKind: ComponentKind;
    members: IComponentComposite[];
    extendsInterface: string[];
    typeParameters: IComponentComposite[];
}
