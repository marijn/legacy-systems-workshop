import { ComponentKind } from './ComponentKind';
export interface IComponentComposite {
    readonly componentKind: ComponentKind;
    readonly name: string;
}
export declare abstract class ComponentComposite implements IComponentComposite {
    abstract readonly componentKind: ComponentKind;
    readonly name: string;
    constructor(name: string);
}
