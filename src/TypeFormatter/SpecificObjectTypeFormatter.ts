import { SubTypeFormatter } from "../SubTypeFormatter";
import { BaseType } from "../Type/BaseType";
import { Definition } from "../Schema/Definition";
import { SpecificObjectType } from "../Type/SpecificObjectType";

export class SpecificObjectTypeFormatter implements SubTypeFormatter {
    public supportsType(type: SpecificObjectType): boolean {
        return type instanceof SpecificObjectType;
    }
    public getDefinition(type: SpecificObjectType): Definition {
        if (type.isMultiple()) {
            return {
                type: "array",
                items: {
                    type: type.getDefinitionType(),
                },
            };
        }

        return {
            type: type.getDefinitionType(),
        };
    }
    public getChildren(type: SpecificObjectType): BaseType[] {
        return [];
    }
}
