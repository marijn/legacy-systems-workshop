import { Class } from '../Components/Class';
import { Enum } from '../Components/Enum';
import { Interface } from '../Components/Interface';
import { Method } from '../Components/Method';
import { Namespace } from '../Components/Namespace';
import { Parameter } from '../Components/Parameter';
import { Property } from '../Components/Property';
import { TypeParameter } from '../Components/TypeParameter';
import { Formatter } from '../Models/Formatter';
import { IComponentComposite } from '../Models/IComponentComposite';
export declare class MermaidFormat extends Formatter {
    header(): string[];
    serializeClass(comp: Class): string;
    addAssociation(type1: string, cardinality: string, type2: string): string[];
    serializeEnum(comp: Enum): string;
    serializeInterface(comp: Interface): string;
    serializeMethod(comp: Method): string;
    serializeNamespace(comp: Namespace): string;
    cleanType(typeDef: string): string;
    serializeParameter(comp: Parameter): string;
    serializeProperty(comp: Property): string;
    serializeTypeParameter(comp: TypeParameter): string;
    renderFiles(files: IComponentComposite[], associations: boolean): string;
}
