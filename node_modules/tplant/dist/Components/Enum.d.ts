import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite, IComponentComposite } from '../Models/IComponentComposite';
export declare class Enum extends ComponentComposite {
    readonly componentKind: ComponentKind;
    values: IComponentComposite[];
}
