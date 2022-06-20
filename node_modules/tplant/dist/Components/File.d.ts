import { ComponentKind } from '../Models/ComponentKind';
import { IComponentComposite } from '../Models/IComponentComposite';
export declare class File implements IComponentComposite {
    readonly componentKind: ComponentKind;
    readonly name: string;
    parts: IComponentComposite[];
}
