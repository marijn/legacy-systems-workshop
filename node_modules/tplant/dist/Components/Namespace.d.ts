import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite, IComponentComposite } from '../Models/IComponentComposite';
export declare class Namespace extends ComponentComposite {
    readonly componentKind: ComponentKind;
    parts: IComponentComposite[];
}
