import { ComponentKind } from '../Models/ComponentKind';
import { ComponentComposite } from '../Models/IComponentComposite';
export declare class Parameter extends ComponentComposite {
    readonly componentKind: ComponentKind;
    hasInitializer: boolean;
    isOptional: boolean;
    parameterType: string;
}
