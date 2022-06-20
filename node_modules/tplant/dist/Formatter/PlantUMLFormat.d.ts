import { Class } from '../Components/Class';
import { Enum } from '../Components/Enum';
import { Interface } from '../Components/Interface';
import { Method } from '../Components/Method';
import { Namespace } from '../Components/Namespace';
import { Parameter } from '../Components/Parameter';
import { Property } from '../Components/Property';
import { TypeParameter } from '../Components/TypeParameter';
import { Formatter } from '../Models/Formatter';
export declare class PlantUMLFormat extends Formatter {
    header(): string[];
    footer(): string[];
    addAssociation(type1: string, cardinality: string, type2: string): string[];
    serializeClass(comp: Class): string;
    serializeMembers(comp: Class | Interface, firstLine: string[], result: string[]): void;
    serializeEnum(comp: Enum): string;
    serializeInterface(comp: Interface): string;
    serializeMethod(comp: Method): string;
    serializeNamespace(comp: Namespace): string;
    serializeParameter(comp: Parameter): string;
    serializeProperty(comp: Property): string;
    serializeTypeParameter(comp: TypeParameter): string;
}
