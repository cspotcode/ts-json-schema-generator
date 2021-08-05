import { JSONSchema7TypeName } from "json-schema";

export interface Config {
    path?: string;
    type?: string;
    schemaId?: string;
    tsconfig?: string;
    expose?: "all" | "none" | "export";
    topRef?: boolean;
    jsDoc?: "none" | "extended" | "basic";
    sortProps?: boolean;
    strictTuples?: boolean;
    skipTypeCheck?: boolean;
    encodeRefs?: boolean;
    extraTags?: string[];
    additionalProperties?: boolean;
    /**
     * @example:
     * [
     *  { name: "ReactElement", moduleName: "React", definitionType: "UI.Element" },
     *  { name: "HTMLElement" },
     *  { name: "Date" }
     * ]
     *
     */
    specificInterfaceTarget?: {
        name: string;
        moduleName?: string;
        definitionType?: JSONSchema7TypeName;
        multiple?: boolean;
    }[];
    /**
     * @example:
     * [
     *  { name: "ReactNode", moduleName: "React", definitionType: "UI.Element", multiple: true }
     * ]
     *
     */
    specificTypeTarget?: {
        name: string;
        moduleName?: string;
        definitionType?: JSONSchema7TypeName;
        multiple?: boolean;
    }[];
}

export const DEFAULT_CONFIG: Omit<Required<Config>, "path" | "type" | "schemaId" | "tsconfig"> = {
    expose: "export",
    topRef: true,
    jsDoc: "extended",
    sortProps: true,
    strictTuples: false,
    skipTypeCheck: false,
    encodeRefs: true,
    extraTags: [],
    additionalProperties: false,
    specificInterfaceTarget: [],
    specificTypeTarget: [],
};
