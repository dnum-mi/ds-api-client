export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigInt: any;
    Coordinates: any;
    ISO8601Date: any;
    ISO8601DateTime: any;
    URL: any;
};
export declare type Address = {
    __typename?: "Address";
    cityCode: Scalars["String"];
    cityName: Scalars["String"];
    departmentCode?: Maybe<Scalars["String"]>;
    departmentName?: Maybe<Scalars["String"]>;
    geometry?: Maybe<GeoJson>;
    label: Scalars["String"];
    postalCode: Scalars["String"];
    regionCode?: Maybe<Scalars["String"]>;
    regionName?: Maybe<Scalars["String"]>;
    streetAddress?: Maybe<Scalars["String"]>;
    streetName?: Maybe<Scalars["String"]>;
    streetNumber?: Maybe<Scalars["String"]>;
    type: AddressType;
};
export declare type AddressChamp = Champ & {
    __typename?: "AddressChamp";
    address?: Maybe<Address>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare enum AddressType {
    Housenumber = "housenumber",
    Street = "street",
    Municipality = "municipality",
    Locality = "locality"
}
export declare type Association = {
    __typename?: "Association";
    dateCreation?: Maybe<Scalars["ISO8601Date"]>;
    dateDeclaration?: Maybe<Scalars["ISO8601Date"]>;
    datePublication?: Maybe<Scalars["ISO8601Date"]>;
    objet?: Maybe<Scalars["String"]>;
    rna: Scalars["String"];
    titre: Scalars["String"];
};
export declare type Avis = {
    __typename?: "Avis";
    attachment?: Maybe<File>;
    claimant?: Maybe<Profile>;
    dateQuestion: Scalars["ISO8601DateTime"];
    dateReponse?: Maybe<Scalars["ISO8601DateTime"]>;
    expert?: Maybe<Profile>;
    id: Scalars["ID"];
    instructeur: Profile;
    question: Scalars["String"];
    reponse?: Maybe<Scalars["String"]>;
};
export declare type CarteChamp = Champ & {
    __typename?: "CarteChamp";
    geoAreas: Array<GeoArea>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type Champ = {
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type ChampDescriptor = {
    __typename?: "ChampDescriptor";
    champDescriptors?: Maybe<Array<ChampDescriptor>>;
    description?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    label: Scalars["String"];
    options?: Maybe<Array<Scalars["String"]>>;
    required: Scalars["Boolean"];
    type: TypeDeChamp;
};
export declare type CheckboxChamp = Champ & {
    __typename?: "CheckboxChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value: Scalars["Boolean"];
};
export declare enum Civilite {
    M = "M",
    Mme = "Mme"
}
export declare type CiviliteChamp = Champ & {
    __typename?: "CiviliteChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value?: Maybe<Civilite>;
};
export declare type Commune = {
    __typename?: "Commune";
    code: Scalars["String"];
    name: Scalars["String"];
};
export declare type CommuneChamp = Champ & {
    __typename?: "CommuneChamp";
    commune?: Maybe<Commune>;
    departement?: Maybe<Departement>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type CreateDirectUploadInput = {
    dossierId: Scalars["ID"];
    filename: Scalars["String"];
    byteSize: Scalars["Int"];
    checksum: Scalars["String"];
    contentType: Scalars["String"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type CreateDirectUploadPayload = {
    __typename?: "CreateDirectUploadPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    directUpload: DirectUpload;
};
export declare type DateChamp = Champ & {
    __typename?: "DateChamp";
    date?: Maybe<Scalars["ISO8601Date"]>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["ISO8601DateTime"]>;
};
export declare type DatetimeChamp = Champ & {
    __typename?: "DatetimeChamp";
    datetime?: Maybe<Scalars["ISO8601DateTime"]>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type DecimalNumberChamp = Champ & {
    __typename?: "DecimalNumberChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["Float"]>;
};
export declare type DeletedDossier = {
    __typename?: "DeletedDossier";
    dateSupression: Scalars["ISO8601DateTime"];
    id: Scalars["ID"];
    number: Scalars["Int"];
    reason: Scalars["String"];
    state: DossierState;
};
export declare type DeletedDossierConnection = {
    __typename?: "DeletedDossierConnection";
    edges?: Maybe<Array<Maybe<DeletedDossierEdge>>>;
    nodes?: Maybe<Array<Maybe<DeletedDossier>>>;
    pageInfo: PageInfo;
};
export declare type DeletedDossierEdge = {
    __typename?: "DeletedDossierEdge";
    cursor: Scalars["String"];
    node?: Maybe<DeletedDossier>;
};
export declare type Demandeur = {
    id: Scalars["ID"];
};
export declare type Demarche = {
    __typename?: "Demarche";
    activeRevision: Revision;
    annotationDescriptors: Array<ChampDescriptor>;
    champDescriptors: Array<ChampDescriptor>;
    dateCreation: Scalars["ISO8601DateTime"];
    dateDepublication?: Maybe<Scalars["ISO8601DateTime"]>;
    dateDerniereModification: Scalars["ISO8601DateTime"];
    dateFermeture?: Maybe<Scalars["ISO8601DateTime"]>;
    datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
    declarative?: Maybe<DossierDeclarativeState>;
    deletedDossiers: DeletedDossierConnection;
    description: Scalars["String"];
    dossiers: DossierConnection;
    draftRevision: Revision;
    groupeInstructeurs: Array<GroupeInstructeur>;
    id: Scalars["ID"];
    number: Scalars["Int"];
    publishedRevision?: Maybe<Revision>;
    revisions: Array<Revision>;
    service?: Maybe<Service>;
    state: DemarcheState;
    title: Scalars["String"];
};
export declare type DemarcheDeletedDossiersArgs = {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    order?: Maybe<Order>;
    deletedSince?: Maybe<Scalars["ISO8601DateTime"]>;
};
export declare type DemarcheDossiersArgs = {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    order?: Maybe<Order>;
    createdSince?: Maybe<Scalars["ISO8601DateTime"]>;
    updatedSince?: Maybe<Scalars["ISO8601DateTime"]>;
    state?: Maybe<DossierState>;
    archived?: Maybe<Scalars["Boolean"]>;
    revision?: Maybe<Scalars["ID"]>;
    maxRevision?: Maybe<Scalars["ID"]>;
    minRevision?: Maybe<Scalars["ID"]>;
};
export declare type DemarcheDescriptor = {
    __typename?: "DemarcheDescriptor";
    cadreJuridique?: Maybe<Scalars["String"]>;
    dateCreation: Scalars["ISO8601DateTime"];
    dateDepublication?: Maybe<Scalars["ISO8601DateTime"]>;
    dateDerniereModification: Scalars["ISO8601DateTime"];
    dateFermeture?: Maybe<Scalars["ISO8601DateTime"]>;
    datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
    declarative?: Maybe<DossierDeclarativeState>;
    deliberation?: Maybe<Scalars["String"]>;
    description: Scalars["String"];
    id: Scalars["ID"];
    number: Scalars["Int"];
    revision: Revision;
    service?: Maybe<Service>;
    state: DemarcheState;
    title: Scalars["String"];
};
export declare enum DemarcheState {
    Brouillon = "brouillon",
    Publiee = "publiee",
    Close = "close",
    Depubliee = "depubliee"
}
export declare type Departement = {
    __typename?: "Departement";
    code: Scalars["String"];
    name: Scalars["String"];
};
export declare type DirectUpload = {
    __typename?: "DirectUpload";
    blobId: Scalars["ID"];
    headers: Scalars["String"];
    signedBlobId: Scalars["ID"];
    url: Scalars["String"];
};
export declare type Dossier = {
    __typename?: "Dossier";
    annotations: Array<Champ>;
    archived: Scalars["Boolean"];
    attestation?: Maybe<File>;
    avis: Array<Avis>;
    champs: Array<Champ>;
    dateDepot: Scalars["ISO8601DateTime"];
    dateDerniereModification: Scalars["ISO8601DateTime"];
    dateExpiration?: Maybe<Scalars["ISO8601DateTime"]>;
    datePassageEnConstruction: Scalars["ISO8601DateTime"];
    datePassageEnInstruction?: Maybe<Scalars["ISO8601DateTime"]>;
    dateSuppressionParAdministration?: Maybe<Scalars["ISO8601DateTime"]>;
    dateSuppressionParUsager?: Maybe<Scalars["ISO8601DateTime"]>;
    dateTraitement?: Maybe<Scalars["ISO8601DateTime"]>;
    demandeur: Demandeur;
    demarche: DemarcheDescriptor;
    geojson?: Maybe<File>;
    groupeInstructeur: GroupeInstructeur;
    id: Scalars["ID"];
    instructeurs: Array<Profile>;
    messages: Array<Message>;
    motivation?: Maybe<Scalars["String"]>;
    motivationAttachment?: Maybe<File>;
    number: Scalars["Int"];
    pdf?: Maybe<File>;
    revision: Revision;
    state: DossierState;
    traitements: Array<Traitement>;
    usager: Profile;
};
export declare type DossierAnnotationsArgs = {
    id?: Maybe<Scalars["ID"]>;
};
export declare type DossierAvisArgs = {
    id?: Maybe<Scalars["ID"]>;
};
export declare type DossierChampsArgs = {
    id?: Maybe<Scalars["ID"]>;
};
export declare type DossierMessagesArgs = {
    id?: Maybe<Scalars["ID"]>;
};
export declare type DossierAccepterInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    motivation?: Maybe<Scalars["String"]>;
    justificatif?: Maybe<Scalars["ID"]>;
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierAccepterPayload = {
    __typename?: "DossierAccepterPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierArchiverInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierArchiverPayload = {
    __typename?: "DossierArchiverPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierChangerGroupeInstructeurInput = {
    dossierId: Scalars["ID"];
    groupeInstructeurId: Scalars["ID"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierChangerGroupeInstructeurPayload = {
    __typename?: "DossierChangerGroupeInstructeurPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierClasserSansSuiteInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    motivation: Scalars["String"];
    justificatif?: Maybe<Scalars["ID"]>;
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierClasserSansSuitePayload = {
    __typename?: "DossierClasserSansSuitePayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierConnection = {
    __typename?: "DossierConnection";
    edges?: Maybe<Array<Maybe<DossierEdge>>>;
    nodes?: Maybe<Array<Maybe<Dossier>>>;
    pageInfo: PageInfo;
};
export declare enum DossierDeclarativeState {
    EnInstruction = "en_instruction",
    Accepte = "accepte"
}
export declare type DossierEdge = {
    __typename?: "DossierEdge";
    cursor: Scalars["String"];
    node?: Maybe<Dossier>;
};
export declare type DossierEnvoyerMessageInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    body: Scalars["String"];
    attachment?: Maybe<Scalars["ID"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierEnvoyerMessagePayload = {
    __typename?: "DossierEnvoyerMessagePayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
    message?: Maybe<Message>;
};
export declare type DossierLinkChamp = Champ & {
    __typename?: "DossierLinkChamp";
    dossier?: Maybe<Dossier>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationAjouterLigneInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationAjouterLignePayload = {
    __typename?: "DossierModifierAnnotationAjouterLignePayload";
    annotation?: Maybe<RepetitionChamp>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierModifierAnnotationCheckboxInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    value: Scalars["Boolean"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationCheckboxPayload = {
    __typename?: "DossierModifierAnnotationCheckboxPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierModifierAnnotationDateInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    value: Scalars["ISO8601Date"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationDatePayload = {
    __typename?: "DossierModifierAnnotationDatePayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierModifierAnnotationDatetimeInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    value: Scalars["ISO8601DateTime"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationDatetimePayload = {
    __typename?: "DossierModifierAnnotationDatetimePayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierModifierAnnotationIntegerNumberInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    value: Scalars["Int"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationIntegerNumberPayload = {
    __typename?: "DossierModifierAnnotationIntegerNumberPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierModifierAnnotationTextInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    annotationId: Scalars["ID"];
    value: Scalars["String"];
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierModifierAnnotationTextPayload = {
    __typename?: "DossierModifierAnnotationTextPayload";
    annotation?: Maybe<Champ>;
    clientMutationId?: Maybe<Scalars["String"]>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierPasserEnInstructionInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierPasserEnInstructionPayload = {
    __typename?: "DossierPasserEnInstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierRefuserInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    motivation: Scalars["String"];
    justificatif?: Maybe<Scalars["ID"]>;
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierRefuserPayload = {
    __typename?: "DossierRefuserPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierRepasserEnConstructionInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierRepasserEnConstructionPayload = {
    __typename?: "DossierRepasserEnConstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare type DossierRepasserEnInstructionInput = {
    dossierId: Scalars["ID"];
    instructeurId: Scalars["ID"];
    disableNotification?: Maybe<Scalars["Boolean"]>;
    clientMutationId?: Maybe<Scalars["String"]>;
};
export declare type DossierRepasserEnInstructionPayload = {
    __typename?: "DossierRepasserEnInstructionPayload";
    clientMutationId?: Maybe<Scalars["String"]>;
    dossier?: Maybe<Dossier>;
    errors?: Maybe<Array<ValidationError>>;
};
export declare enum DossierState {
    EnConstruction = "en_construction",
    EnInstruction = "en_instruction",
    Accepte = "accepte",
    Refuse = "refuse",
    SansSuite = "sans_suite"
}
export declare type Effectif = {
    __typename?: "Effectif";
    nb: Scalars["Float"];
    periode: Scalars["String"];
};
export declare type Entreprise = {
    __typename?: "Entreprise";
    attestationFiscaleAttachment?: Maybe<File>;
    attestationSocialeAttachment?: Maybe<File>;
    capitalSocial?: Maybe<Scalars["BigInt"]>;
    codeEffectifEntreprise?: Maybe<Scalars["String"]>;
    dateCreation: Scalars["ISO8601Date"];
    effectifAnnuel?: Maybe<Effectif>;
    effectifMensuel?: Maybe<Effectif>;
    etatAdministratif?: Maybe<EntrepriseEtatAdministratif>;
    formeJuridique?: Maybe<Scalars["String"]>;
    formeJuridiqueCode?: Maybe<Scalars["String"]>;
    inlineAdresse: Scalars["String"];
    nom?: Maybe<Scalars["String"]>;
    nomCommercial: Scalars["String"];
    numeroTvaIntracommunautaire?: Maybe<Scalars["String"]>;
    prenom?: Maybe<Scalars["String"]>;
    raisonSociale: Scalars["String"];
    siren: Scalars["String"];
    siretSiegeSocial: Scalars["String"];
};
export declare enum EntrepriseEtatAdministratif {
    Actif = "Actif",
    Ferme = "Ferme"
}
export declare type File = {
    __typename?: "File";
    byteSize: Scalars["Int"];
    byteSizeBigInt: Scalars["BigInt"];
    checksum: Scalars["String"];
    contentType: Scalars["String"];
    filename: Scalars["String"];
    url: Scalars["URL"];
};
export declare type GeoArea = {
    description?: Maybe<Scalars["String"]>;
    geometry: GeoJson;
    id: Scalars["ID"];
    source: GeoAreaSource;
};
export declare enum GeoAreaSource {
    Cadastre = "cadastre",
    SelectionUtilisateur = "selection_utilisateur"
}
export declare type GeoJson = {
    __typename?: "GeoJSON";
    coordinates: Scalars["Coordinates"];
    type: Scalars["String"];
};
export declare type GroupeInstructeur = {
    __typename?: "GroupeInstructeur";
    id: Scalars["ID"];
    instructeurs: Array<Profile>;
    label: Scalars["String"];
    number: Scalars["Int"];
};
export declare type GroupeInstructeurWithDossiers = {
    __typename?: "GroupeInstructeurWithDossiers";
    dossiers: DossierConnection;
    id: Scalars["ID"];
    instructeurs: Array<Profile>;
    label: Scalars["String"];
    number: Scalars["Int"];
};
export declare type GroupeInstructeurWithDossiersDossiersArgs = {
    after?: Maybe<Scalars["String"]>;
    before?: Maybe<Scalars["String"]>;
    first?: Maybe<Scalars["Int"]>;
    last?: Maybe<Scalars["Int"]>;
    order?: Maybe<Order>;
    createdSince?: Maybe<Scalars["ISO8601DateTime"]>;
    updatedSince?: Maybe<Scalars["ISO8601DateTime"]>;
    state?: Maybe<DossierState>;
};
export declare type IntegerNumberChamp = Champ & {
    __typename?: "IntegerNumberChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["BigInt"]>;
};
export declare type LinkedDropDownListChamp = Champ & {
    __typename?: "LinkedDropDownListChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    primaryValue?: Maybe<Scalars["String"]>;
    secondaryValue?: Maybe<Scalars["String"]>;
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type Message = {
    __typename?: "Message";
    attachment?: Maybe<File>;
    body: Scalars["String"];
    createdAt: Scalars["ISO8601DateTime"];
    email: Scalars["String"];
    id: Scalars["ID"];
};
export declare type MultipleDropDownListChamp = Champ & {
    __typename?: "MultipleDropDownListChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    values: Array<Scalars["String"]>;
};
export declare type Mutation = {
    __typename?: "Mutation";
    createDirectUpload?: Maybe<CreateDirectUploadPayload>;
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
};
export declare type MutationCreateDirectUploadArgs = {
    input: CreateDirectUploadInput;
};
export declare type MutationDossierAccepterArgs = {
    input: DossierAccepterInput;
};
export declare type MutationDossierArchiverArgs = {
    input: DossierArchiverInput;
};
export declare type MutationDossierChangerGroupeInstructeurArgs = {
    input: DossierChangerGroupeInstructeurInput;
};
export declare type MutationDossierClasserSansSuiteArgs = {
    input: DossierClasserSansSuiteInput;
};
export declare type MutationDossierEnvoyerMessageArgs = {
    input: DossierEnvoyerMessageInput;
};
export declare type MutationDossierModifierAnnotationAjouterLigneArgs = {
    input: DossierModifierAnnotationAjouterLigneInput;
};
export declare type MutationDossierModifierAnnotationCheckboxArgs = {
    input: DossierModifierAnnotationCheckboxInput;
};
export declare type MutationDossierModifierAnnotationDateArgs = {
    input: DossierModifierAnnotationDateInput;
};
export declare type MutationDossierModifierAnnotationDatetimeArgs = {
    input: DossierModifierAnnotationDatetimeInput;
};
export declare type MutationDossierModifierAnnotationIntegerNumberArgs = {
    input: DossierModifierAnnotationIntegerNumberInput;
};
export declare type MutationDossierModifierAnnotationTextArgs = {
    input: DossierModifierAnnotationTextInput;
};
export declare type MutationDossierPasserEnInstructionArgs = {
    input: DossierPasserEnInstructionInput;
};
export declare type MutationDossierRefuserArgs = {
    input: DossierRefuserInput;
};
export declare type MutationDossierRepasserEnConstructionArgs = {
    input: DossierRepasserEnConstructionInput;
};
export declare type MutationDossierRepasserEnInstructionArgs = {
    input: DossierRepasserEnInstructionInput;
};
export declare enum Order {
    Asc = "ASC",
    Desc = "DESC"
}
export declare type PageInfo = {
    __typename?: "PageInfo";
    endCursor?: Maybe<Scalars["String"]>;
    hasNextPage: Scalars["Boolean"];
    hasPreviousPage: Scalars["Boolean"];
    startCursor?: Maybe<Scalars["String"]>;
};
export declare type ParcelleCadastrale = GeoArea & {
    __typename?: "ParcelleCadastrale";
    codeArr: Scalars["String"];
    codeCom: Scalars["String"];
    codeDep: Scalars["String"];
    commune: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    feuille: Scalars["Int"];
    geometry: GeoJson;
    id: Scalars["ID"];
    nomCom: Scalars["String"];
    numero: Scalars["String"];
    prefixe: Scalars["String"];
    section: Scalars["String"];
    source: GeoAreaSource;
    surface: Scalars["String"];
    surfaceIntersection: Scalars["Float"];
    surfaceParcelle: Scalars["Float"];
};
export declare type PersonneMorale = Demandeur & {
    __typename?: "PersonneMorale";
    address: Address;
    adresse: Scalars["String"];
    association?: Maybe<Association>;
    codeInseeLocalite: Scalars["String"];
    codePostal: Scalars["String"];
    complementAdresse?: Maybe<Scalars["String"]>;
    entreprise?: Maybe<Entreprise>;
    id: Scalars["ID"];
    libelleNaf: Scalars["String"];
    localite: Scalars["String"];
    naf: Scalars["String"];
    nomVoie?: Maybe<Scalars["String"]>;
    numeroVoie?: Maybe<Scalars["String"]>;
    siegeSocial: Scalars["Boolean"];
    siret: Scalars["String"];
    typeVoie?: Maybe<Scalars["String"]>;
};
export declare type PersonnePhysique = Demandeur & {
    __typename?: "PersonnePhysique";
    civilite?: Maybe<Civilite>;
    dateDeNaissance?: Maybe<Scalars["ISO8601Date"]>;
    id: Scalars["ID"];
    nom: Scalars["String"];
    prenom: Scalars["String"];
};
export declare type PieceJustificativeChamp = Champ & {
    __typename?: "PieceJustificativeChamp";
    file?: Maybe<File>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type Profile = {
    __typename?: "Profile";
    email: Scalars["String"];
    id: Scalars["ID"];
};
export declare type Query = {
    __typename?: "Query";
    demarche: Demarche;
    dossier: Dossier;
    groupeInstructeur: GroupeInstructeurWithDossiers;
};
export declare type QueryDemarcheArgs = {
    number: Scalars["Int"];
};
export declare type QueryDossierArgs = {
    number: Scalars["Int"];
};
export declare type QueryGroupeInstructeurArgs = {
    number: Scalars["Int"];
};
export declare type RepetitionChamp = Champ & {
    __typename?: "RepetitionChamp";
    champs: Array<Champ>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type Revision = {
    __typename?: "Revision";
    annotationDescriptors: Array<ChampDescriptor>;
    champDescriptors: Array<ChampDescriptor>;
    dateCreation: Scalars["ISO8601DateTime"];
    datePublication?: Maybe<Scalars["ISO8601DateTime"]>;
    id: Scalars["ID"];
};
export declare type SelectionUtilisateur = GeoArea & {
    __typename?: "SelectionUtilisateur";
    description?: Maybe<Scalars["String"]>;
    geometry: GeoJson;
    id: Scalars["ID"];
    source: GeoAreaSource;
};
export declare type Service = {
    __typename?: "Service";
    id: Scalars["ID"];
    nom: Scalars["String"];
    organisme: Scalars["String"];
    siret?: Maybe<Scalars["String"]>;
    typeOrganisme: TypeOrganisme;
};
export declare type SiretChamp = Champ & {
    __typename?: "SiretChamp";
    etablissement?: Maybe<PersonneMorale>;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare type TextChamp = Champ & {
    __typename?: "TextChamp";
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
    value?: Maybe<Scalars["String"]>;
};
export declare type TitreIdentiteChamp = Champ & {
    __typename?: "TitreIdentiteChamp";
    grantType: TitreIdentiteGrantType;
    id: Scalars["ID"];
    label: Scalars["String"];
    stringValue?: Maybe<Scalars["String"]>;
};
export declare enum TitreIdentiteGrantType {
    FranceConnect = "france_connect",
    PieceJustificative = "piece_justificative"
}
export declare type Traitement = {
    __typename?: "Traitement";
    dateTraitement: Scalars["ISO8601DateTime"];
    emailAgentTraitant?: Maybe<Scalars["String"]>;
    id: Scalars["ID"];
    motivation?: Maybe<Scalars["String"]>;
    state: DossierState;
};
export declare enum TypeDeChamp {
    Text = "text",
    Textarea = "textarea",
    Date = "date",
    Datetime = "datetime",
    Number = "number",
    DecimalNumber = "decimal_number",
    IntegerNumber = "integer_number",
    Checkbox = "checkbox",
    Civilite = "civilite",
    Email = "email",
    Phone = "phone",
    Address = "address",
    YesNo = "yes_no",
    DropDownList = "drop_down_list",
    MultipleDropDownList = "multiple_drop_down_list",
    LinkedDropDownList = "linked_drop_down_list",
    Pays = "pays",
    Regions = "regions",
    Departements = "departements",
    Communes = "communes",
    Engagement = "engagement",
    HeaderSection = "header_section",
    Explication = "explication",
    DossierLink = "dossier_link",
    PieceJustificative = "piece_justificative",
    Siret = "siret",
    Carte = "carte",
    Repetition = "repetition",
    TitreIdentite = "titre_identite",
    Iban = "iban",
    AnnuaireEducation = "annuaire_education",
    Cnaf = "cnaf",
    Dgfip = "dgfip",
    PoleEmploi = "pole_emploi",
    Mesri = "mesri"
}
export declare enum TypeOrganisme {
    AdministrationCentrale = "administration_centrale",
    Association = "association",
    CollectiviteTerritoriale = "collectivite_territoriale",
    EtablissementEnseignement = "etablissement_enseignement",
    OperateurDEtat = "operateur_d_etat",
    ServiceDeconcentreDeLEtat = "service_deconcentre_de_l_etat",
    Autre = "autre"
}
export declare type ValidationError = {
    __typename?: "ValidationError";
    message: Scalars["String"];
};
