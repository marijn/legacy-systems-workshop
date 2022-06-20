import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite } from '../Models/IComponentComposite';
export declare class TypeParameter extends ComponentComposite {
    readonly componentKind: ComponentKind;
    constraint: string | undefined;
}
