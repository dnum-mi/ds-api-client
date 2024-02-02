export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
};
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigInt: {
        input: any;
        output: any;
    };
    Coordinates: {
        input: any;
        output: any;
    };
    ISO8601Date: {
        input: any;
        output: any;
    };
    ISO8601DateTime: {
        input: any;
        output: any;
    };
    URL: {
        input: any;
        output: any;
    };
};
export type Address = {
    __typename?: "Address";
    cityCode: Scalars["String"]["output"];
    cityName: Scalars["String"]["output"];
    departmentCode?: Maybe<Scalars["String"]["output"]>;
    departmentName?: Maybe<Scalars["String"]["output"]>;
    geometry?: Maybe<GeoJson>;
    label: Scalars["String"]["output"];
    postalCode: Scalars["String"]["output"];
    regionCode?: Maybe<Scalars["String"]["output"]>;
    regionName?: Maybe<Scalars["String"]["output"]>;
    streetAddress?: Maybe<Scalars["String"]["output"]>;
    streetName?: Maybe<Scalars["String"]["output"]>;
    streetNumber?: Maybe<Scalars["String"]["output"]>;
    type: AddressType;
};
export type AddressChamp = Champ & {
    __typename?: "AddressChamp";
    address?: Maybe<Address>;
    commune?: Maybe<Commune>;
    departement?: Maybe<Departement>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type AddressChampDescriptor = ChampDescriptor & {
    __typename?: "AddressChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export declare const AddressType: {
    readonly Housenumber: "housenumber";
    readonly Locality: "locality";
    readonly Municipality: "municipality";
    readonly Street: "street";
};
export type AddressType = typeof AddressType[keyof typeof AddressType];
export type AnnuaireEducationChampDescriptor = ChampDescriptor & {
    __typename?: "AnnuaireEducationChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Association = {
    __typename?: "Association";
    dateCreation?: Maybe<Scalars["ISO8601Date"]["output"]>;
    dateDeclaration?: Maybe<Scalars["ISO8601Date"]["output"]>;
    datePublication?: Maybe<Scalars["ISO8601Date"]["output"]>;
    objet?: Maybe<Scalars["String"]["output"]>;
    rna: Scalars["String"]["output"];
    titre: Scalars["String"]["output"];
};
export type Avis = {
    __typename?: "Avis";
    attachment?: Maybe<File>;
    attachments: Array<File>;
    claimant?: Maybe<Profile>;
    dateQuestion: Scalars["ISO8601DateTime"]["output"];
    dateReponse?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    expert?: Maybe<Profile>;
    id: Scalars["ID"]["output"];
    instructeur: Profile;
    question: Scalars["String"]["output"];
    questionAnswer?: Maybe<Scalars["Boolean"]["output"]>;
    questionLabel?: Maybe<Scalars["String"]["output"]>;
    reponse?: Maybe<Scalars["String"]["output"]>;
};
export type CarteChamp = Champ & {
    __typename?: "CarteChamp";
    geoAreas: Array<GeoArea>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type CarteChampDescriptor = ChampDescriptor & {
    __typename?: "CarteChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Champ = {
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type ChampDescriptor = {
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type CheckboxChamp = Champ & {
    __typename?: "CheckboxChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value: Scalars["Boolean"]["output"];
};
export type CheckboxChampDescriptor = ChampDescriptor & {
    __typename?: "CheckboxChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export declare const Civilite: {
    readonly M: "M";
    readonly Mme: "Mme";
};
export type Civilite = typeof Civilite[keyof typeof Civilite];
export type CiviliteChamp = Champ & {
    __typename?: "CiviliteChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value?: Maybe<Civilite>;
};
export type CiviliteChampDescriptor = ChampDescriptor & {
    __typename?: "CiviliteChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type CnafChampDescriptor = ChampDescriptor & {
    __typename?: "CnafChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Commune = {
    __typename?: "Commune";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
    postalCode?: Maybe<Scalars["String"]["output"]>;
};
export type CommuneChamp = Champ & {
    __typename?: "CommuneChamp";
    commune?: Maybe<Commune>;
    departement?: Maybe<Departement>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type CommuneChampDescriptor = ChampDescriptor & {
    __typename?: "CommuneChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export declare const ConnectionUsager: {
    readonly Deleted: "deleted";
    readonly FranceConnect: "france_connect";
    readonly Password: "password";
};
export type ConnectionUsager = typeof ConnectionUsager[keyof typeof ConnectionUsager];
export type CreateDirectUploadInput = {
    byteSize: Scalars["Int"]["input"];
    checksum: Scalars["String"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    contentType: Scalars["String"]["input"];
    dossierId: Scalars["ID"]["input"];
    filename: Scalars["String"]["input"];
};
export type CreateDirectUploadPayload = {
    __typename?: "CreateDirectUploadPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    directUpload: DirectUpload;
};
export type DateChamp = Champ & {
    __typename?: "DateChamp";
    date?: Maybe<Scalars["ISO8601Date"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
};
export type DateChampDescriptor = ChampDescriptor & {
    __typename?: "DateChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DatetimeChamp = Champ & {
    __typename?: "DatetimeChamp";
    datetime?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type DatetimeChampDescriptor = ChampDescriptor & {
    __typename?: "DatetimeChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DecimalNumberChamp = Champ & {
    __typename?: "DecimalNumberChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value?: Maybe<Scalars["Float"]["output"]>;
};
export type DecimalNumberChampDescriptor = ChampDescriptor & {
    __typename?: "DecimalNumberChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DeletedDossier = {
    __typename?: "DeletedDossier";
    dateSupression: Scalars["ISO8601DateTime"]["output"];
    id: Scalars["ID"]["output"];
    number: Scalars["Int"]["output"];
    reason: Scalars["String"]["output"];
    state: DossierState;
};
export type DeletedDossierConnection = {
    __typename?: "DeletedDossierConnection";
    edges?: Maybe<Array<Maybe<DeletedDossierEdge>>>;
    nodes?: Maybe<Array<Maybe<DeletedDossier>>>;
    pageInfo: PageInfo;
};
export type DeletedDossierEdge = {
    __typename?: "DeletedDossierEdge";
    cursor: Scalars["String"]["output"];
    node?: Maybe<DeletedDossier>;
};
export type Demandeur = {
    id: Scalars["ID"]["output"];
};
export type Demarche = {
    __typename?: "Demarche";
    activeRevision: Revision;
    annotationDescriptors: Array<ChampDescriptor>;
    champDescriptors: Array<ChampDescriptor>;
    dateCreation: Scalars["ISO8601DateTime"]["output"];
    dateDepublication?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    dateDerniereModification: Scalars["ISO8601DateTime"]["output"];
    dateFermeture?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    datePublication?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    declarative?: Maybe<DossierDeclarativeState>;
    deletedDossiers: DeletedDossierConnection;
    description: Scalars["String"]["output"];
    dossiers: DossierConnection;
    draftRevision: Revision;
    groupeInstructeurs: Array<GroupeInstructeur>;
    id: Scalars["ID"]["output"];
    number: Scalars["Int"]["output"];
    pendingDeletedDossiers: DeletedDossierConnection;
    publishedRevision?: Maybe<Revision>;
    revisions: Array<Revision>;
    service?: Maybe<Service>;
    state: DemarcheState;
    title: Scalars["String"]["output"];
};
export type DemarcheDeletedDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    deletedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<Order>;
};
export type DemarcheDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    archived?: InputMaybe<Scalars["Boolean"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    createdSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    maxRevision?: InputMaybe<Scalars["ID"]["input"]>;
    minRevision?: InputMaybe<Scalars["ID"]["input"]>;
    order?: InputMaybe<Order>;
    revision?: InputMaybe<Scalars["ID"]["input"]>;
    state?: InputMaybe<DossierState>;
    updatedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
};
export type DemarcheGroupeInstructeursArgs = {
    closed?: InputMaybe<Scalars["Boolean"]["input"]>;
};
export type DemarchePendingDeletedDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    deletedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<Order>;
};
export type DemarcheClonerInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    demarche: FindDemarcheInput;
    title?: InputMaybe<Scalars["String"]["input"]>;
};
export type DemarcheClonerPayload = {
    __typename?: "DemarcheClonerPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    demarche?: Maybe<DemarcheDescriptor>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DemarcheDescriptor = {
    __typename?: "DemarcheDescriptor";
    cadreJuridiqueUrl?: Maybe<Scalars["String"]["output"]>;
    dateCreation: Scalars["ISO8601DateTime"]["output"];
    dateDepublication?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    dateDerniereModification: Scalars["ISO8601DateTime"]["output"];
    dateFermeture?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    datePublication?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    declarative?: Maybe<DossierDeclarativeState>;
    deliberation?: Maybe<File>;
    demarcheUrl?: Maybe<Scalars["String"]["output"]>;
    description: Scalars["String"]["output"];
    dpoUrl?: Maybe<Scalars["String"]["output"]>;
    dureeConservationDossiers: Scalars["Int"]["output"];
    id: Scalars["ID"]["output"];
    logo?: Maybe<File>;
    notice?: Maybe<File>;
    noticeUrl?: Maybe<Scalars["String"]["output"]>;
    number: Scalars["Int"]["output"];
    opendata: Scalars["Boolean"]["output"];
    revision: Revision;
    service?: Maybe<Service>;
    siteWebUrl?: Maybe<Scalars["String"]["output"]>;
    state: DemarcheState;
    tags: Array<Scalars["String"]["output"]>;
    title: Scalars["String"]["output"];
    zones: Array<Scalars["String"]["output"]>;
};
export declare const DemarcheState: {
    readonly Brouillon: "brouillon";
    readonly Close: "close";
    readonly Depubliee: "depubliee";
    readonly Publiee: "publiee";
};
export type DemarcheState = typeof DemarcheState[keyof typeof DemarcheState];
export type Departement = {
    __typename?: "Departement";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type DepartementChamp = Champ & {
    __typename?: "DepartementChamp";
    departement?: Maybe<Departement>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type DepartementChampDescriptor = ChampDescriptor & {
    __typename?: "DepartementChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Departement>>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DgfipChampDescriptor = ChampDescriptor & {
    __typename?: "DgfipChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DirectUpload = {
    __typename?: "DirectUpload";
    blobId: Scalars["ID"]["output"];
    headers: Scalars["String"]["output"];
    signedBlobId: Scalars["ID"]["output"];
    url: Scalars["String"]["output"];
};
export type Dossier = {
    __typename?: "Dossier";
    annotations: Array<Champ>;
    archived: Scalars["Boolean"]["output"];
    attestation?: Maybe<File>;
    avis: Array<Avis>;
    champs: Array<Champ>;
    connectionUsager: ConnectionUsager;
    dateDepot: Scalars["ISO8601DateTime"]["output"];
    dateDerniereModification: Scalars["ISO8601DateTime"]["output"];
    dateExpiration?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    datePassageEnConstruction: Scalars["ISO8601DateTime"]["output"];
    datePassageEnInstruction?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    dateSuppressionParAdministration?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    dateSuppressionParUsager?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    dateTraitement?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    demandeur: Demandeur;
    demarche: DemarcheDescriptor;
    geojson?: Maybe<File>;
    groupeInstructeur: GroupeInstructeur;
    id: Scalars["ID"]["output"];
    instructeurs: Array<Profile>;
    messages: Array<Message>;
    motivation?: Maybe<Scalars["String"]["output"]>;
    motivationAttachment?: Maybe<File>;
    number: Scalars["Int"]["output"];
    pdf?: Maybe<File>;
    revision: Revision;
    state: DossierState;
    traitements: Array<Traitement>;
    usager: Profile;
};
export type DossierAnnotationsArgs = {
    id?: InputMaybe<Scalars["ID"]["input"]>;
};
export type DossierAvisArgs = {
    id?: InputMaybe<Scalars["ID"]["input"]>;
};
export type DossierChampsArgs = {
    id?: InputMaybe<Scalars["ID"]["input"]>;
};
export type DossierMessagesArgs = {
    id?: InputMaybe<Scalars["ID"]["input"]>;
};
export type DossierAccepterInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    justificatif?: InputMaybe<Scalars["ID"]["input"]>;
    motivation?: InputMaybe<Scalars["String"]["input"]>;
};
export type DossierAccepterPayload = {
    __typename?: "DossierAccepterPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierArchiverInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierArchiverPayload = {
    __typename?: "DossierArchiverPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierChangerGroupeInstructeurInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    groupeInstructeurId: Scalars["ID"]["input"];
};
export type DossierChangerGroupeInstructeurPayload = {
    __typename?: "DossierChangerGroupeInstructeurPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierClasserSansSuiteInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    justificatif?: InputMaybe<Scalars["ID"]["input"]>;
    motivation: Scalars["String"]["input"];
};
export type DossierClasserSansSuitePayload = {
    __typename?: "DossierClasserSansSuitePayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierConnection = {
    __typename?: "DossierConnection";
    edges?: Maybe<Array<Maybe<DossierEdge>>>;
    nodes?: Maybe<Array<Maybe<Dossier>>>;
    pageInfo: PageInfo;
};
export declare const DossierDeclarativeState: {
    readonly Accepte: "accepte";
    readonly EnInstruction: "en_instruction";
};
export type DossierDeclarativeState = typeof DossierDeclarativeState[keyof typeof DossierDeclarativeState];
export type DossierEdge = {
    __typename?: "DossierEdge";
    cursor: Scalars["String"]["output"];
    node?: Maybe<Dossier>;
};
export type DossierEnvoyerMessageInput = {
    attachment?: InputMaybe<Scalars["ID"]["input"]>;
    body: Scalars["String"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierEnvoyerMessagePayload = {
    __typename?: "DossierEnvoyerMessagePayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
    message?: Maybe<Message>;
};
export type DossierLinkChamp = Champ & {
    __typename?: "DossierLinkChamp";
    dossier?: Maybe<Dossier>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type DossierLinkChampDescriptor = ChampDescriptor & {
    __typename?: "DossierLinkChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type DossierModifierAnnotationAjouterLigneInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierModifierAnnotationAjouterLignePayload = {
    __typename?: "DossierModifierAnnotationAjouterLignePayload";
    annotation?: Maybe<RepetitionChamp>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierModifierAnnotationCheckboxInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    value: Scalars["Boolean"]["input"];
};
export type DossierModifierAnnotationCheckboxPayload = {
    __typename?: "DossierModifierAnnotationCheckboxPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierModifierAnnotationDateInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    value: Scalars["ISO8601Date"]["input"];
};
export type DossierModifierAnnotationDatePayload = {
    __typename?: "DossierModifierAnnotationDatePayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierModifierAnnotationDatetimeInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    value: Scalars["ISO8601DateTime"]["input"];
};
export type DossierModifierAnnotationDatetimePayload = {
    __typename?: "DossierModifierAnnotationDatetimePayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierModifierAnnotationIntegerNumberInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    value: Scalars["Int"]["input"];
};
export type DossierModifierAnnotationIntegerNumberPayload = {
    __typename?: "DossierModifierAnnotationIntegerNumberPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierModifierAnnotationTextInput = {
    annotationId: Scalars["ID"]["input"];
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    value: Scalars["String"]["input"];
};
export type DossierModifierAnnotationTextPayload = {
    __typename?: "DossierModifierAnnotationTextPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierPasserEnInstructionInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierPasserEnInstructionPayload = {
    __typename?: "DossierPasserEnInstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierRefuserInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
    justificatif?: InputMaybe<Scalars["ID"]["input"]>;
    motivation: Scalars["String"]["input"];
};
export type DossierRefuserPayload = {
    __typename?: "DossierRefuserPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierRepasserEnConstructionInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierRepasserEnConstructionPayload = {
    __typename?: "DossierRepasserEnConstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export type DossierRepasserEnInstructionInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    disableNotification?: InputMaybe<Scalars["Boolean"]["input"]>;
    dossierId: Scalars["ID"]["input"];
    instructeurId: Scalars["ID"]["input"];
};
export type DossierRepasserEnInstructionPayload = {
    __typename?: "DossierRepasserEnInstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare const DossierState: {
    readonly Accepte: "accepte";
    readonly EnConstruction: "en_construction";
    readonly EnInstruction: "en_instruction";
    readonly Refuse: "refuse";
    readonly SansSuite: "sans_suite";
};
export type DossierState = typeof DossierState[keyof typeof DossierState];
export type DropDownListChampDescriptor = ChampDescriptor & {
    __typename?: "DropDownListChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Scalars["String"]["output"]>>;
    otherOption?: Maybe<Scalars["Boolean"]["output"]>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Effectif = {
    __typename?: "Effectif";
    nb: Scalars["Float"]["output"];
    periode: Scalars["String"]["output"];
};
export type EmailChampDescriptor = ChampDescriptor & {
    __typename?: "EmailChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Entreprise = {
    __typename?: "Entreprise";
    attestationFiscaleAttachment?: Maybe<File>;
    attestationSocialeAttachment?: Maybe<File>;
    capitalSocial?: Maybe<Scalars["BigInt"]["output"]>;
    codeEffectifEntreprise?: Maybe<Scalars["String"]["output"]>;
    dateCreation?: Maybe<Scalars["ISO8601Date"]["output"]>;
    effectifAnnuel?: Maybe<Effectif>;
    effectifMensuel?: Maybe<Effectif>;
    etatAdministratif?: Maybe<EntrepriseEtatAdministratif>;
    formeJuridique?: Maybe<Scalars["String"]["output"]>;
    formeJuridiqueCode?: Maybe<Scalars["String"]["output"]>;
    inlineAdresse: Scalars["String"]["output"];
    nom?: Maybe<Scalars["String"]["output"]>;
    nomCommercial: Scalars["String"]["output"];
    numeroTvaIntracommunautaire?: Maybe<Scalars["String"]["output"]>;
    prenom?: Maybe<Scalars["String"]["output"]>;
    raisonSociale: Scalars["String"]["output"];
    siren: Scalars["String"]["output"];
    siretSiegeSocial: Scalars["String"]["output"];
};
export declare const EntrepriseEtatAdministratif: {
    readonly Actif: "Actif";
    readonly Ferme: "Ferme";
};
export type EntrepriseEtatAdministratif = typeof EntrepriseEtatAdministratif[keyof typeof EntrepriseEtatAdministratif];
export type Epci = {
    __typename?: "Epci";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type EpciChamp = Champ & {
    __typename?: "EpciChamp";
    departement?: Maybe<Departement>;
    epci?: Maybe<Epci>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type EpciChampDescriptor = ChampDescriptor & {
    __typename?: "EpciChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type ExplicationChampDescriptor = ChampDescriptor & {
    __typename?: "ExplicationChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    collapsibleExplanationEnabled?: Maybe<Scalars["Boolean"]["output"]>;
    collapsibleExplanationText?: Maybe<Scalars["String"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type File = {
    __typename?: "File";
    byteSize: Scalars["Int"]["output"];
    byteSizeBigInt: Scalars["BigInt"]["output"];
    checksum: Scalars["String"]["output"];
    contentType: Scalars["String"]["output"];
    filename: Scalars["String"]["output"];
    url: Scalars["URL"]["output"];
};
export type FindDemarcheInput = {
    id: Scalars["ID"]["input"];
    number?: never;
} | {
    id?: never;
    number: Scalars["Int"]["input"];
};
export type GeoArea = {
    description?: Maybe<Scalars["String"]["output"]>;
    geometry: GeoJson;
    id: Scalars["ID"]["output"];
    source: GeoAreaSource;
};
export declare const GeoAreaSource: {
    readonly Cadastre: "cadastre";
    readonly SelectionUtilisateur: "selection_utilisateur";
};
export type GeoAreaSource = typeof GeoAreaSource[keyof typeof GeoAreaSource];
export type GeoJson = {
    __typename?: "GeoJSON";
    coordinates: Scalars["Coordinates"]["output"];
    type: Scalars["String"]["output"];
};
export type GroupeInstructeur = {
    __typename?: "GroupeInstructeur";
    closed: Scalars["Boolean"]["output"];
    id: Scalars["ID"]["output"];
    instructeurs: Array<Profile>;
    label: Scalars["String"]["output"];
    number: Scalars["Int"]["output"];
};
export type GroupeInstructeurAjouterInstructeursInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    groupeInstructeurId: Scalars["ID"]["input"];
    instructeurs: Array<ProfileInput>;
};
export type GroupeInstructeurAjouterInstructeursPayload = {
    __typename?: "GroupeInstructeurAjouterInstructeursPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
    groupeInstructeur?: Maybe<GroupeInstructeur>;
    warnings?: Maybe<Array<WarningMessage>>;
};
export type GroupeInstructeurAttributes = {
    closed?: InputMaybe<Scalars["Boolean"]["input"]>;
    instructeurs?: InputMaybe<Array<ProfileInput>>;
    label: Scalars["String"]["input"];
};
export type GroupeInstructeurCreerInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    demarche: FindDemarcheInput;
    groupeInstructeur: GroupeInstructeurAttributes;
};
export type GroupeInstructeurCreerPayload = {
    __typename?: "GroupeInstructeurCreerPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
    groupeInstructeur?: Maybe<GroupeInstructeur>;
    warnings?: Maybe<Array<WarningMessage>>;
};
export type GroupeInstructeurModifierInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    closed?: InputMaybe<Scalars["Boolean"]["input"]>;
    groupeInstructeurId: Scalars["ID"]["input"];
    label?: InputMaybe<Scalars["String"]["input"]>;
};
export type GroupeInstructeurModifierPayload = {
    __typename?: "GroupeInstructeurModifierPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
    groupeInstructeur?: Maybe<GroupeInstructeur>;
};
export type GroupeInstructeurSupprimerInstructeursInput = {
    clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
    groupeInstructeurId: Scalars["ID"]["input"];
    instructeurs: Array<ProfileInput>;
};
export type GroupeInstructeurSupprimerInstructeursPayload = {
    __typename?: "GroupeInstructeurSupprimerInstructeursPayload";
    clientMutationId?: Maybe<Scalars["String"]["output"]>;
    errors?: Maybe<Array<ValidationError>>;
    groupeInstructeur?: Maybe<GroupeInstructeur>;
};
export type GroupeInstructeurWithDossiers = {
    __typename?: "GroupeInstructeurWithDossiers";
    closed: Scalars["Boolean"]["output"];
    deletedDossiers: DeletedDossierConnection;
    dossiers: DossierConnection;
    id: Scalars["ID"]["output"];
    instructeurs: Array<Profile>;
    label: Scalars["String"]["output"];
    number: Scalars["Int"]["output"];
    pendingDeletedDossiers: DeletedDossierConnection;
};
export type GroupeInstructeurWithDossiersDeletedDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    deletedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<Order>;
};
export type GroupeInstructeurWithDossiersDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    archived?: InputMaybe<Scalars["Boolean"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    createdSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    maxRevision?: InputMaybe<Scalars["ID"]["input"]>;
    minRevision?: InputMaybe<Scalars["ID"]["input"]>;
    order?: InputMaybe<Order>;
    revision?: InputMaybe<Scalars["ID"]["input"]>;
    state?: InputMaybe<DossierState>;
    updatedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
};
export type GroupeInstructeurWithDossiersPendingDeletedDossiersArgs = {
    after?: InputMaybe<Scalars["String"]["input"]>;
    before?: InputMaybe<Scalars["String"]["input"]>;
    deletedSince?: InputMaybe<Scalars["ISO8601DateTime"]["input"]>;
    first?: InputMaybe<Scalars["Int"]["input"]>;
    last?: InputMaybe<Scalars["Int"]["input"]>;
    order?: InputMaybe<Order>;
};
export type HeaderSectionChampDescriptor = ChampDescriptor & {
    __typename?: "HeaderSectionChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type IbanChampDescriptor = ChampDescriptor & {
    __typename?: "IbanChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type IntegerNumberChamp = Champ & {
    __typename?: "IntegerNumberChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value?: Maybe<Scalars["BigInt"]["output"]>;
};
export type IntegerNumberChampDescriptor = ChampDescriptor & {
    __typename?: "IntegerNumberChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type LinkedDropDownListChamp = Champ & {
    __typename?: "LinkedDropDownListChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    primaryValue?: Maybe<Scalars["String"]["output"]>;
    secondaryValue?: Maybe<Scalars["String"]["output"]>;
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type LinkedDropDownListChampDescriptor = ChampDescriptor & {
    __typename?: "LinkedDropDownListChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Scalars["String"]["output"]>>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type MesriChampDescriptor = ChampDescriptor & {
    __typename?: "MesriChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Message = {
    __typename?: "Message";
    attachment?: Maybe<File>;
    attachments: Array<File>;
    body: Scalars["String"]["output"];
    createdAt: Scalars["ISO8601DateTime"]["output"];
    email: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
};
export type MultipleDropDownListChamp = Champ & {
    __typename?: "MultipleDropDownListChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    values: Array<Scalars["String"]["output"]>;
};
export type MultipleDropDownListChampDescriptor = ChampDescriptor & {
    __typename?: "MultipleDropDownListChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Scalars["String"]["output"]>>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Mutation = {
    __typename?: "Mutation";
    createDirectUpload?: Maybe<CreateDirectUploadPayload>;
    demarcheCloner?: Maybe<DemarcheClonerPayload>;
    dossierAccepter?: Maybe<DossierAccepterPayload>;
    dossierArchiver?: Maybe<DossierArchiverPayload>;
    dossierChangerGroupeInstructeur?: Maybe<DossierChangerGroupeInstructeurPayload>;
    dossierClasserSansSuite?: Maybe<DossierClasserSansSuitePayload>;
    dossierEnvoyerMessage?: Maybe<DossierEnvoyerMessagePayload>;
    dossierModifierAnnotationAjouterLigne?: Maybe<DossierModifierAnnotationAjouterLignePayload>;
    dossierModifierAnnotationCheckbox?: Maybe<DossierModifierAnnotationCheckboxPayload>;
    dossierModifierAnnotationDate?: Maybe<DossierModifierAnnotationDatePayload>;
    dossierModifierAnnotationDatetime?: Maybe<DossierModifierAnnotationDatetimePayload>;
    dossierModifierAnnotationIntegerNumber?: Maybe<DossierModifierAnnotationIntegerNumberPayload>;
    dossierModifierAnnotationText?: Maybe<DossierModifierAnnotationTextPayload>;
    dossierPasserEnInstruction?: Maybe<DossierPasserEnInstructionPayload>;
    dossierRefuser?: Maybe<DossierRefuserPayload>;
    dossierRepasserEnConstruction?: Maybe<DossierRepasserEnConstructionPayload>;
    dossierRepasserEnInstruction?: Maybe<DossierRepasserEnInstructionPayload>;
    groupeInstructeurAjouterInstructeurs?: Maybe<GroupeInstructeurAjouterInstructeursPayload>;
    groupeInstructeurCreer?: Maybe<GroupeInstructeurCreerPayload>;
    groupeInstructeurModifier?: Maybe<GroupeInstructeurModifierPayload>;
    groupeInstructeurSupprimerInstructeurs?: Maybe<GroupeInstructeurSupprimerInstructeursPayload>;
};
export type MutationCreateDirectUploadArgs = {
    input: CreateDirectUploadInput;
};
export type MutationDemarcheClonerArgs = {
    input: DemarcheClonerInput;
};
export type MutationDossierAccepterArgs = {
    input: DossierAccepterInput;
};
export type MutationDossierArchiverArgs = {
    input: DossierArchiverInput;
};
export type MutationDossierChangerGroupeInstructeurArgs = {
    input: DossierChangerGroupeInstructeurInput;
};
export type MutationDossierClasserSansSuiteArgs = {
    input: DossierClasserSansSuiteInput;
};
export type MutationDossierEnvoyerMessageArgs = {
    input: DossierEnvoyerMessageInput;
};
export type MutationDossierModifierAnnotationAjouterLigneArgs = {
    input: DossierModifierAnnotationAjouterLigneInput;
};
export type MutationDossierModifierAnnotationCheckboxArgs = {
    input: DossierModifierAnnotationCheckboxInput;
};
export type MutationDossierModifierAnnotationDateArgs = {
    input: DossierModifierAnnotationDateInput;
};
export type MutationDossierModifierAnnotationDatetimeArgs = {
    input: DossierModifierAnnotationDatetimeInput;
};
export type MutationDossierModifierAnnotationIntegerNumberArgs = {
    input: DossierModifierAnnotationIntegerNumberInput;
};
export type MutationDossierModifierAnnotationTextArgs = {
    input: DossierModifierAnnotationTextInput;
};
export type MutationDossierPasserEnInstructionArgs = {
    input: DossierPasserEnInstructionInput;
};
export type MutationDossierRefuserArgs = {
    input: DossierRefuserInput;
};
export type MutationDossierRepasserEnConstructionArgs = {
    input: DossierRepasserEnConstructionInput;
};
export type MutationDossierRepasserEnInstructionArgs = {
    input: DossierRepasserEnInstructionInput;
};
export type MutationGroupeInstructeurAjouterInstructeursArgs = {
    input: GroupeInstructeurAjouterInstructeursInput;
};
export type MutationGroupeInstructeurCreerArgs = {
    input: GroupeInstructeurCreerInput;
};
export type MutationGroupeInstructeurModifierArgs = {
    input: GroupeInstructeurModifierInput;
};
export type MutationGroupeInstructeurSupprimerInstructeursArgs = {
    input: GroupeInstructeurSupprimerInstructeursInput;
};
export type NumberChampDescriptor = ChampDescriptor & {
    __typename?: "NumberChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export declare const Order: {
    readonly Asc: "ASC";
    readonly Desc: "DESC";
};
export type Order = typeof Order[keyof typeof Order];
export type PageInfo = {
    __typename?: "PageInfo";
    endCursor?: Maybe<Scalars["String"]["output"]>;
    hasNextPage: Scalars["Boolean"]["output"];
    hasPreviousPage: Scalars["Boolean"]["output"];
    startCursor?: Maybe<Scalars["String"]["output"]>;
};
export type ParcelleCadastrale = GeoArea & {
    __typename?: "ParcelleCadastrale";
    codeArr: Scalars["String"]["output"];
    codeCom: Scalars["String"]["output"];
    codeDep: Scalars["String"]["output"];
    commune: Scalars["String"]["output"];
    description?: Maybe<Scalars["String"]["output"]>;
    feuille: Scalars["Int"]["output"];
    geometry: GeoJson;
    id: Scalars["ID"]["output"];
    nomCom: Scalars["String"]["output"];
    numero: Scalars["String"]["output"];
    prefixe: Scalars["String"]["output"];
    section: Scalars["String"]["output"];
    source: GeoAreaSource;
    surface: Scalars["String"]["output"];
    surfaceIntersection: Scalars["Float"]["output"];
    surfaceParcelle: Scalars["Float"]["output"];
};
export type Pays = {
    __typename?: "Pays";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type PaysChamp = Champ & {
    __typename?: "PaysChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    pays?: Maybe<Pays>;
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type PaysChampDescriptor = ChampDescriptor & {
    __typename?: "PaysChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Pays>>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type PersonneMorale = Demandeur & {
    __typename?: "PersonneMorale";
    address: Address;
    adresse: Scalars["String"]["output"];
    association?: Maybe<Association>;
    codeInseeLocalite: Scalars["String"]["output"];
    codePostal: Scalars["String"]["output"];
    complementAdresse?: Maybe<Scalars["String"]["output"]>;
    entreprise?: Maybe<Entreprise>;
    id: Scalars["ID"]["output"];
    libelleNaf: Scalars["String"]["output"];
    localite: Scalars["String"]["output"];
    naf?: Maybe<Scalars["String"]["output"]>;
    nomVoie?: Maybe<Scalars["String"]["output"]>;
    numeroVoie?: Maybe<Scalars["String"]["output"]>;
    siegeSocial: Scalars["Boolean"]["output"];
    siret: Scalars["String"]["output"];
    typeVoie?: Maybe<Scalars["String"]["output"]>;
};
export type PersonneMoraleIncomplete = Demandeur & {
    __typename?: "PersonneMoraleIncomplete";
    id: Scalars["ID"]["output"];
    siret: Scalars["String"]["output"];
};
export type PersonnePhysique = Demandeur & {
    __typename?: "PersonnePhysique";
    civilite?: Maybe<Civilite>;
    dateDeNaissance?: Maybe<Scalars["ISO8601Date"]["output"]>;
    id: Scalars["ID"]["output"];
    nom: Scalars["String"]["output"];
    prenom: Scalars["String"]["output"];
};
export type PhoneChampDescriptor = ChampDescriptor & {
    __typename?: "PhoneChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type PieceJustificativeChamp = Champ & {
    __typename?: "PieceJustificativeChamp";
    file?: Maybe<File>;
    files: Array<File>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type PieceJustificativeChampDescriptor = ChampDescriptor & {
    __typename?: "PieceJustificativeChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    fileTemplate?: Maybe<File>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type PoleEmploiChampDescriptor = ChampDescriptor & {
    __typename?: "PoleEmploiChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Profile = {
    __typename?: "Profile";
    email: Scalars["String"]["output"];
    id: Scalars["ID"]["output"];
};
export type ProfileInput = {
    email: Scalars["String"]["input"];
    id?: never;
} | {
    email?: never;
    id: Scalars["ID"]["input"];
};
export type Query = {
    __typename?: "Query";
    demarche: Demarche;
    demarcheDescriptor?: Maybe<DemarcheDescriptor>;
    dossier: Dossier;
    groupeInstructeur: GroupeInstructeurWithDossiers;
};
export type QueryDemarcheArgs = {
    number: Scalars["Int"]["input"];
};
export type QueryDemarcheDescriptorArgs = {
    demarche: FindDemarcheInput;
};
export type QueryDossierArgs = {
    number: Scalars["Int"]["input"];
};
export type QueryGroupeInstructeurArgs = {
    number: Scalars["Int"]["input"];
};
export type RnaChampDescriptor = ChampDescriptor & {
    __typename?: "RNAChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Region = {
    __typename?: "Region";
    code: Scalars["String"]["output"];
    name: Scalars["String"]["output"];
};
export type RegionChamp = Champ & {
    __typename?: "RegionChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    region?: Maybe<Region>;
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type RegionChampDescriptor = ChampDescriptor & {
    __typename?: "RegionChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    options?: Maybe<Array<Region>>;
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type RepetitionChamp = Champ & {
    __typename?: "RepetitionChamp";
    champs: Array<Champ>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    rows: Array<Row>;
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type RepetitionChampDescriptor = ChampDescriptor & {
    __typename?: "RepetitionChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type Revision = {
    __typename?: "Revision";
    annotationDescriptors: Array<ChampDescriptor>;
    champDescriptors: Array<ChampDescriptor>;
    dateCreation: Scalars["ISO8601DateTime"]["output"];
    datePublication?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    id: Scalars["ID"]["output"];
};
export type Row = {
    __typename?: "Row";
    champs: Array<Champ>;
    id: Scalars["ID"]["output"];
};
export type SelectionUtilisateur = GeoArea & {
    __typename?: "SelectionUtilisateur";
    description?: Maybe<Scalars["String"]["output"]>;
    geometry: GeoJson;
    id: Scalars["ID"]["output"];
    source: GeoAreaSource;
};
export type Service = {
    __typename?: "Service";
    id: Scalars["ID"]["output"];
    nom: Scalars["String"]["output"];
    organisme: Scalars["String"]["output"];
    siret?: Maybe<Scalars["String"]["output"]>;
    typeOrganisme: TypeOrganisme;
};
export type SiretChamp = Champ & {
    __typename?: "SiretChamp";
    etablissement?: Maybe<PersonneMorale>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type SiretChampDescriptor = ChampDescriptor & {
    __typename?: "SiretChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type TextChamp = Champ & {
    __typename?: "TextChamp";
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
    value?: Maybe<Scalars["String"]["output"]>;
};
export type TextChampDescriptor = ChampDescriptor & {
    __typename?: "TextChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type TextareaChampDescriptor = ChampDescriptor & {
    __typename?: "TextareaChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export type TitreIdentiteChamp = Champ & {
    __typename?: "TitreIdentiteChamp";
    filled: Scalars["Boolean"]["output"];
    grantType: TitreIdentiteGrantType;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    stringValue?: Maybe<Scalars["String"]["output"]>;
};
export type TitreIdentiteChampDescriptor = ChampDescriptor & {
    __typename?: "TitreIdentiteChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
export declare const TitreIdentiteGrantType: {
    readonly FranceConnect: "france_connect";
    readonly PieceJustificative: "piece_justificative";
};
export type TitreIdentiteGrantType = typeof TitreIdentiteGrantType[keyof typeof TitreIdentiteGrantType];
export type Traitement = {
    __typename?: "Traitement";
    dateTraitement: Scalars["ISO8601DateTime"]["output"];
    emailAgentTraitant?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    motivation?: Maybe<Scalars["String"]["output"]>;
    state: DossierState;
};
export declare const TypeDeChamp: {
    readonly Address: "address";
    readonly AnnuaireEducation: "annuaire_education";
    readonly Carte: "carte";
    readonly Checkbox: "checkbox";
    readonly Civilite: "civilite";
    readonly Cnaf: "cnaf";
    readonly Communes: "communes";
    readonly Date: "date";
    readonly Datetime: "datetime";
    readonly DecimalNumber: "decimal_number";
    readonly Departements: "departements";
    readonly Dgfip: "dgfip";
    readonly DossierLink: "dossier_link";
    readonly DropDownList: "drop_down_list";
    readonly Email: "email";
    readonly Epci: "epci";
    readonly Explication: "explication";
    readonly HeaderSection: "header_section";
    readonly Iban: "iban";
    readonly IntegerNumber: "integer_number";
    readonly LinkedDropDownList: "linked_drop_down_list";
    readonly Mesri: "mesri";
    readonly MultipleDropDownList: "multiple_drop_down_list";
    readonly Number: "number";
    readonly Pays: "pays";
    readonly Phone: "phone";
    readonly PieceJustificative: "piece_justificative";
    readonly PoleEmploi: "pole_emploi";
    readonly Regions: "regions";
    readonly Repetition: "repetition";
    readonly Rna: "rna";
    readonly Siret: "siret";
    readonly Text: "text";
    readonly Textarea: "textarea";
    readonly TitreIdentite: "titre_identite";
    readonly YesNo: "yes_no";
};
export type TypeDeChamp = typeof TypeDeChamp[keyof typeof TypeDeChamp];
export declare const TypeOrganisme: {
    readonly AdministrationCentrale: "administration_centrale";
    readonly Association: "association";
    readonly Autre: "autre";
    readonly CollectiviteTerritoriale: "collectivite_territoriale";
    readonly EtablissementEnseignement: "etablissement_enseignement";
    readonly OperateurDEtat: "operateur_d_etat";
    readonly ServiceDeconcentreDeLEtat: "service_deconcentre_de_l_etat";
};
export type TypeOrganisme = typeof TypeOrganisme[keyof typeof TypeOrganisme];
export type ValidationError = {
    __typename?: "ValidationError";
    message: Scalars["String"]["output"];
};
export type WarningMessage = {
    __typename?: "WarningMessage";
    message: Scalars["String"]["output"];
};
export type YesNoChampDescriptor = ChampDescriptor & {
    __typename?: "YesNoChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]["output"]>;
    id: Scalars["ID"]["output"];
    label: Scalars["String"]["output"];
    required: Scalars["Boolean"]["output"];
    type: TypeDeChamp;
};
