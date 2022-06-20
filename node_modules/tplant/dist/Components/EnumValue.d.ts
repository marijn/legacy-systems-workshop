import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite } from '../Models/IComponentComposite';
export declare class EnumValue extends ComponentComposite {
    readonly componentKind: ComponentKind;
    value: string | undefined;
}
