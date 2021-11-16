export interface SpecialNpcs {
    sourceSheet: SourceSheet;
    name: string;
    iconImage: null | string;
    photoImage: null | string;
    gender: Gender;
    genderAsia: Gender;
    versionAdded: null | string;
    npcId: string;
    internalId: number;
    birthday: number | string;
    nameColor: null | string;
    bubbleColor: null | string;
    iconFilename: null | string;
    photoFilename: null | string;
    uniqueEntryId: string;
}
export declare enum Gender {
    Female = "Female",
    Male = "Male"
}
export declare enum SourceSheet {
    SpecialNpcs = "SpecialNpcs"
}
