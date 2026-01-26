export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Represents non-fractional signed whole numeric values. Since the value may
   * exceed the size of a 32-bit integer, it's encoded as a string.
   */
  BigInt: { input: any; output: any; }
  /** GeoJSON coordinates */
  Coordinates: { input: any; output: any; }
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
  /** A valid URL, transported as a string */
  URL: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  /** code INSEE de la commune */
  cityCode: Scalars['String']['output'];
  /** nom de la commune */
  cityName: Scalars['String']['output'];
  /** code ISO du pays */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** nom du pays */
  countryName?: Maybe<Scalars['String']['output']>;
  /** n° de département */
  departmentCode?: Maybe<Scalars['String']['output']>;
  /** nom de département */
  departmentName?: Maybe<Scalars['String']['output']>;
  /** coordonnées géographique */
  geometry?: Maybe<GeoJson>;
  /** libellé complet de l’adresse */
  label: Scalars['String']['output'];
  /** code postal */
  postalCode: Scalars['String']['output'];
  /** n° de région */
  regionCode?: Maybe<Scalars['String']['output']>;
  /** nom de région */
  regionName?: Maybe<Scalars['String']['output']>;
  /** numéro éventuel et nom de voie ou lieu dit */
  streetAddress?: Maybe<Scalars['String']['output']>;
  /** nom de voie ou lieu dit */
  streetName?: Maybe<Scalars['String']['output']>;
  /** numéro avec indice de répétition éventuel (bis, ter, A, B) */
  streetNumber?: Maybe<Scalars['String']['output']>;
  /** type de résultat trouvé */
  type: AddressType;
};

export type AddressChamp = Champ & {
  __typename?: 'AddressChamp';
  address?: Maybe<Address>;
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  commune?: Maybe<Commune>;
  departement?: Maybe<Departement>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type AddressChampDescriptor = ChampDescriptor & {
  __typename?: 'AddressChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export const AddressType = {
  /** numéro « à la plaque » */
  Housenumber: 'housenumber',
  /** lieu-dit */
  Locality: 'locality',
  /** numéro « à la commune » */
  Municipality: 'municipality',
  /** position « à la voie », placé approximativement au centre de celle-ci */
  Street: 'street'
} as const;

export type AddressType = typeof AddressType[keyof typeof AddressType];
export type AnnotationInput = {
  /** Annotation ID */
  id: Scalars['ID']['input'];
  /** Valeur de l’annotation. */
  value: AnnotationValueInput;
};

export type AnnotationValueInput =
  /** Modifier la valeur d’un champ case à cocher */
  { checkbox: Scalars['Boolean']['input']; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ date */
  { checkbox?: never; date: Scalars['ISO8601Date']['input']; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ date et heure */
  { checkbox?: never; date?: never; datetime: Scalars['ISO8601DateTime']['input']; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ nombre décimal */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber: Scalars['Float']['input']; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la sélection d’un champ choix simple */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList: Scalars['String']['input']; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ adresse électronique */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email: Scalars['String']['input']; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ nombre entier */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber: Scalars['Int']['input']; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la sélection d’un champ choix multiple */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList: Array<Scalars['String']['input']>; repetition?: never; text?: never; textarea?: never; yesNo?: never; }
  |  /** Ajouter des repetitions à un champ répétable */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition: Scalars['Int']['input']; text?: never; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ texte */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text: Scalars['String']['input']; textarea?: never; yesNo?: never; }
  |  /** Modifier la valeur d’un champ texte long */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea: Scalars['String']['input']; yesNo?: never; }
  |  /** Modifier la valeur d’un champ Oui/Non */
  { checkbox?: never; date?: never; datetime?: never; decimalNumber?: never; dropDownList?: never; email?: never; integerNumber?: never; multipleDropDownList?: never; repetition?: never; text?: never; textarea?: never; yesNo: Scalars['Boolean']['input']; };

export type AnnuaireEducationChampDescriptor = ChampDescriptor & {
  __typename?: 'AnnuaireEducationChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Association = {
  __typename?: 'Association';
  dateCreation?: Maybe<Scalars['ISO8601Date']['output']>;
  dateDeclaration?: Maybe<Scalars['ISO8601Date']['output']>;
  datePublication?: Maybe<Scalars['ISO8601Date']['output']>;
  objet?: Maybe<Scalars['String']['output']>;
  rna: Scalars['String']['output'];
  titre: Scalars['String']['output'];
};

export type AttachmentsColumn = Column & {
  __typename?: 'AttachmentsColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Array<File>>;
};

export type Avis = {
  __typename?: 'Avis';
  /** @deprecated Utilisez le champ `attachments` à la place. */
  attachment?: Maybe<File>;
  attachments: Array<File>;
  claimant?: Maybe<Profile>;
  dateQuestion: Scalars['ISO8601DateTime']['output'];
  dateReponse?: Maybe<Scalars['ISO8601DateTime']['output']>;
  expert?: Maybe<Profile>;
  id: Scalars['ID']['output'];
  /** @deprecated Utilisez le champ `claimant` à la place. */
  instructeur: Profile;
  question: Scalars['String']['output'];
  questionAnswer?: Maybe<Scalars['Boolean']['output']>;
  questionLabel?: Maybe<Scalars['String']['output']>;
  reponse?: Maybe<Scalars['String']['output']>;
};

export type BooleanColumn = Column & {
  __typename?: 'BooleanColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Boolean']['output']>;
};

export type CojoChampDescriptor = ChampDescriptor & {
  __typename?: 'COJOChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type CarteChamp = Champ & {
  __typename?: 'CarteChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  geoAreas: Array<GeoArea>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type CarteChampDescriptor = ChampDescriptor & {
  __typename?: 'CarteChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Champ = {
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ChampDescriptor = {
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type CheckboxChamp = Champ & {
  __typename?: 'CheckboxChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value: Scalars['Boolean']['output'];
};

export type CheckboxChampDescriptor = ChampDescriptor & {
  __typename?: 'CheckboxChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type ChorusConfiguration = {
  __typename?: 'ChorusConfiguration';
  /** Le code du centre de cout auquel est rattaché la démarche. */
  centreDeCout?: Maybe<Scalars['String']['output']>;
  /** Le code du domaine fonctionnel auquel est rattaché la démarche. */
  domaineFonctionnel?: Maybe<Scalars['String']['output']>;
  /** Le code du référentiel de programmation auquel est rattaché la démarche.. */
  referentielDeProgrammation?: Maybe<Scalars['String']['output']>;
};

export const Civilite = {
  /** Monsieur */
  M: 'M',
  /** Madame */
  Mme: 'Mme'
} as const;

export type Civilite = typeof Civilite[keyof typeof Civilite];
export type CiviliteChamp = Champ & {
  __typename?: 'CiviliteChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Civilite>;
};

export type CiviliteChampDescriptor = ChampDescriptor & {
  __typename?: 'CiviliteChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type CnafChampDescriptor = ChampDescriptor & {
  __typename?: 'CnafChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Column = {
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
};

export type Commune = {
  __typename?: 'Commune';
  /** Le code INSEE */
  code: Scalars['String']['output'];
  /** Le nom de la commune */
  name: Scalars['String']['output'];
  /** Le code postal */
  postalCode?: Maybe<Scalars['String']['output']>;
};

export type CommuneChamp = Champ & {
  __typename?: 'CommuneChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  commune?: Maybe<Commune>;
  departement?: Maybe<Departement>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type CommuneChampDescriptor = ChampDescriptor & {
  __typename?: 'CommuneChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export const ConnectionUsager = {
  /** Compte supprimé */
  Deleted: 'deleted',
  /** Connexion via FranceConnect */
  FranceConnect: 'france_connect',
  /** Connexion via mot de passe */
  Password: 'password'
} as const;

export type ConnectionUsager = typeof ConnectionUsager[keyof typeof ConnectionUsager];
export type Correction = {
  __typename?: 'Correction';
  dateResolution?: Maybe<Scalars['ISO8601DateTime']['output']>;
  reason: CorrectionReason;
};

export const CorrectionReason = {
  /** Le dossier est incomplet et nécessite d’être complété */
  Incomplete: 'incomplete',
  /** Le dossier n’est pas valide et nécessite une correction */
  Incorrect: 'incorrect',
  /** Le dossier doit être mis à jour et revalidé */
  Outdated: 'outdated'
} as const;

export type CorrectionReason = typeof CorrectionReason[keyof typeof CorrectionReason];
/** Autogenerated input type of CreateDirectUpload */
export type CreateDirectUploadInput = {
  /** File size (bytes) */
  byteSize: Scalars['Int']['input'];
  /** MD5 file checksum as base64 */
  checksum: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** File content type */
  contentType: Scalars['String']['input'];
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Original file name */
  filename: Scalars['String']['input'];
};

/** Autogenerated return type of CreateDirectUpload. */
export type CreateDirectUploadPayload = {
  __typename?: 'CreateDirectUploadPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  directUpload: DirectUpload;
};

export type DateChamp = Champ & {
  __typename?: 'DateChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  /** La valeur du champ formaté en ISO8601 (Date). */
  date?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  /**
   * La valeur du champ formaté en ISO8601 (DateTime).
   * @deprecated Utilisez le champ `date` ou le fragment `DatetimeChamp` à la place.
   */
  value?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type DateChampDescriptor = ChampDescriptor & {
  __typename?: 'DateChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type DateColumn = Column & {
  __typename?: 'DateColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['ISO8601Date']['output']>;
};

export type DateTimeColumn = Column & {
  __typename?: 'DateTimeColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['ISO8601DateTime']['output']>;
};

export type DatetimeChamp = Champ & {
  __typename?: 'DatetimeChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  /** La valeur du champ formaté en ISO8601 (DateTime). */
  datetime?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type DatetimeChampDescriptor = ChampDescriptor & {
  __typename?: 'DatetimeChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type DecimalColumn = Column & {
  __typename?: 'DecimalColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type DecimalNumberChamp = Champ & {
  __typename?: 'DecimalNumberChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type DecimalNumberChampDescriptor = ChampDescriptor & {
  __typename?: 'DecimalNumberChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

/** Un dossier supprimé */
export type DeletedDossier = {
  __typename?: 'DeletedDossier';
  /** Date de suppression. */
  dateSupression: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Le numéro du dossier qui a été supprimé. */
  number: Scalars['Int']['output'];
  /** La raison de la suppression du dossier. */
  reason: DeletedDossierReason;
  /** L’état du dossier supprimé. */
  state: DossierState;
};

/** The connection type for DeletedDossier. */
export type DeletedDossierConnection = {
  __typename?: 'DeletedDossierConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DeletedDossierEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<DeletedDossier>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type DeletedDossierEdge = {
  __typename?: 'DeletedDossierEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<DeletedDossier>;
};

export const DeletedDossierReason = {
  Expired: 'expired',
  InstructeurRequest: 'instructeur_request',
  ManagerRequest: 'manager_request',
  ProcedureRemoved: 'procedure_removed',
  UserExpired: 'user_expired',
  UserRemoved: 'user_removed',
  UserRequest: 'user_request'
} as const;

export type DeletedDossierReason = typeof DeletedDossierReason[keyof typeof DeletedDossierReason];
export type Demandeur = {
  id: Scalars['ID']['output'];
};

/** Une démarche */
export type Demarche = {
  __typename?: 'Demarche';
  activeRevision: Revision;
  /** Liste les administrateurs de la démarche */
  administrateurs: Array<Profile>;
  /** @deprecated Utilisez le champ `activeRevision.annotationDescriptors` à la place. */
  annotationDescriptors: Array<ChampDescriptor>;
  /** @deprecated Utilisez le champ `activeRevision.champDescriptors` à la place. */
  champDescriptors: Array<ChampDescriptor>;
  /** Cadre budgétaire Chorus */
  chorusConfiguration?: Maybe<ChorusConfiguration>;
  /** Date de la création. */
  dateCreation: Scalars['ISO8601DateTime']['output'];
  /** Date de la dépublication. */
  dateDepublication?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la dernière modification. */
  dateDerniereModification: Scalars['ISO8601DateTime']['output'];
  /** Date de la fermeture. */
  dateFermeture?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la publication. */
  datePublication?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Pour une démarche déclarative, état cible des dossiers à valider automatiquement */
  declarative?: Maybe<DossierDeclarativeState>;
  /** Liste de tous les dossiers supprimés d’une démarche. */
  deletedDossiers: DeletedDossierConnection;
  /** Description de la démarche. */
  description: Scalars['String']['output'];
  /** Liste de tous les dossiers d’une démarche. */
  dossiers: DossierConnection;
  draftRevision: Revision;
  groupeInstructeurs: Array<GroupeInstructeur>;
  id: Scalars['ID']['output'];
  /** Liste des labels associables aux dossiers */
  labels: Array<Label>;
  /** Numero de la démarche. */
  number: Scalars['Int']['output'];
  /** Liste de tous les dossiers en attente de suppression définitive d’une démarche. */
  pendingDeletedDossiers: DeletedDossierConnection;
  publishedRevision?: Maybe<Revision>;
  revisions: Array<Revision>;
  service?: Maybe<Service>;
  /** État de la démarche. */
  state: DemarcheState;
  /** Titre de la démarche. */
  title: Scalars['String']['output'];
};


/** Une démarche */
export type DemarcheDeletedDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deletedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order>;
};


/** Une démarche */
export type DemarcheDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxRevision?: InputMaybe<Scalars['ID']['input']>;
  minRevision?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Order>;
  revision?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<DossierState>;
  updatedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/** Une démarche */
export type DemarcheGroupeInstructeursArgs = {
  closed?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Une démarche */
export type DemarchePendingDeletedDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deletedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order>;
};

/** Autogenerated input type of DemarcheCloner */
export type DemarcheClonerInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** La démarche */
  demarche: FindDemarcheInput;
  /** Le titre de la nouvelle démarche. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of DemarcheCloner. */
export type DemarcheClonerPayload = {
  __typename?: 'DemarcheClonerPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  demarche?: Maybe<DemarcheDescriptor>;
  errors?: Maybe<Array<ValidationError>>;
};

/**
 * Une démarche (métadonnées)
 * Ceci est une version abrégée du type `Demarche`, qui n’expose que les métadonnées.
 * Cela évite l’accès récursif aux dossiers.
 */
export type DemarcheDescriptor = {
  __typename?: 'DemarcheDescriptor';
  /** URL du cadre juridique qui justifie le droit de collecter les données demandées dans la démarche */
  cadreJuridiqueURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `cadreJuridiqueURL` à la place. */
  cadreJuridiqueUrl?: Maybe<Scalars['String']['output']>;
  /** Date de la création. */
  dateCreation: Scalars['ISO8601DateTime']['output'];
  /** Date de la dépublication. */
  dateDepublication?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la dernière modification. */
  dateDerniereModification: Scalars['ISO8601DateTime']['output'];
  /** Date de la fermeture. */
  dateFermeture?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la publication. */
  datePublication?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Pour une démarche déclarative, état cible des dossiers à valider automatiquement */
  declarative?: Maybe<DossierDeclarativeState>;
  /** fichier contenant le cadre juridique */
  deliberation?: Maybe<File>;
  /** URL pour commencer la démarche */
  demarcheURL?: Maybe<Scalars['URL']['output']>;
  /** @deprecated Utilisez le champ `demarcheURL` à la place. */
  demarcheUrl?: Maybe<Scalars['URL']['output']>;
  /** Description de la démarche. */
  description: Scalars['String']['output'];
  /** URL ou adresse électronique pour contacter le Délégué à la Protection des Données (DPO) */
  dpoURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `dpoURL` à la place. */
  dpoUrl?: Maybe<Scalars['String']['output']>;
  /** Durée de conservation des dossiers en mois. */
  dureeConservationDossiers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  logo?: Maybe<File>;
  /** notice explicative de la démarche */
  notice?: Maybe<File>;
  noticeURL?: Maybe<Scalars['URL']['output']>;
  /** @deprecated Utilisez le champ `noticeURL` à la place. */
  noticeUrl?: Maybe<Scalars['URL']['output']>;
  /** Numero de la démarche. */
  number: Scalars['Int']['output'];
  opendata: Scalars['Boolean']['output'];
  revision: Revision;
  service?: Maybe<Service>;
  /** URL où les usagers trouvent le lien vers la démarche */
  siteWebURL?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `siteWebURL` à la place. */
  siteWebUrl?: Maybe<Scalars['String']['output']>;
  /** État de la démarche. */
  state: DemarcheState;
  /** mots ou expressions attribués à la démarche pour décrire son contenu et la retrouver */
  tags: Array<Scalars['String']['output']>;
  /** Titre de la démarche. */
  title: Scalars['String']['output'];
  /** ministère(s) ou collectivité(s) qui mettent en oeuvre la démarche */
  zones: Array<Scalars['String']['output']>;
};

export const DemarcheState = {
  /** Brouillon */
  Brouillon: 'brouillon',
  /** Close */
  Close: 'close',
  /** Dépubliée */
  Depubliee: 'depubliee',
  /** Publiée */
  Publiee: 'publiee'
} as const;

export type DemarcheState = typeof DemarcheState[keyof typeof DemarcheState];
export type Departement = {
  __typename?: 'Departement';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type DepartementChamp = Champ & {
  __typename?: 'DepartementChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  departement?: Maybe<Departement>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type DepartementChampDescriptor = ChampDescriptor & {
  __typename?: 'DepartementChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des departements. */
  options?: Maybe<Array<Departement>>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type DgfipChampDescriptor = ChampDescriptor & {
  __typename?: 'DgfipChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

/** Represents direct upload credentials */
export type DirectUpload = {
  __typename?: 'DirectUpload';
  /** Created blob record ID */
  blobId: Scalars['ID']['output'];
  /** HTTP request headers (JSON-encoded) */
  headers: Scalars['String']['output'];
  /** Created blob record signed ID */
  signedBlobId: Scalars['ID']['output'];
  /** Upload URL */
  url: Scalars['String']['output'];
};

/** Un dossier */
export type Dossier = {
  __typename?: 'Dossier';
  annotations: Array<Champ>;
  archived: Scalars['Boolean']['output'];
  /** L’URL de l’attestation au format PDF. */
  attestation?: Maybe<File>;
  avis: Array<Avis>;
  champs: Array<Champ>;
  connectionUsager: ConnectionUsager;
  /** Date de dépôt. */
  dateDepot: Scalars['ISO8601DateTime']['output'];
  /** Date de la dernière demande de correction qui n’a pas encore été traitée par l’usager. */
  dateDerniereCorrectionEnAttente?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la dernière modification. */
  dateDerniereModification: Scalars['ISO8601DateTime']['output'];
  /** Date de la dernière modification des annotations. */
  dateDerniereModificationAnnotations: Scalars['ISO8601DateTime']['output'];
  /** Date de la dernière modification des champs. */
  dateDerniereModificationChamps: Scalars['ISO8601DateTime']['output'];
  /** Date d’expiration. */
  dateExpiration?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date du dernier passage en construction. */
  datePassageEnConstruction: Scalars['ISO8601DateTime']['output'];
  /** Date du dernier passage en instruction. */
  datePassageEnInstruction?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date prévisionnelle de décision automatique par le SVA/SVR. */
  datePrevisionnelleDecisionSVASVR?: Maybe<Scalars['ISO8601Date']['output']>;
  /** Date de la suppression par l’administration. */
  dateSuppressionParAdministration?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date de la suppression par l’usager. */
  dateSuppressionParUsager?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date du dernier traitement. */
  dateTraitement?: Maybe<Scalars['ISO8601DateTime']['output']>;
  /** Date du traitement automatique par le SVA/SVR. */
  dateTraitementSVASVR?: Maybe<Scalars['ISO8601DateTime']['output']>;
  demandeur: Demandeur;
  demarche: DemarcheDescriptor;
  deposeParUnTiers?: Maybe<Scalars['Boolean']['output']>;
  /** L’URL du GeoJSON contenant les données cartographiques du dossier. */
  geojson?: Maybe<File>;
  groupeInstructeur: GroupeInstructeur;
  id: Scalars['ID']['output'];
  instructeurs: Array<Profile>;
  /** Labels associés au dossier */
  labels: Array<Label>;
  messages: Array<Message>;
  motivation?: Maybe<Scalars['String']['output']>;
  motivationAttachment?: Maybe<File>;
  nomMandataire?: Maybe<Scalars['String']['output']>;
  /** Le numero du dossier. */
  number: Scalars['Int']['output'];
  /** L’URL du dossier au format PDF. */
  pdf?: Maybe<File>;
  prefilled: Scalars['Boolean']['output'];
  prenomMandataire?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `demarche.revision` à la place. */
  revision: Revision;
  /** L’état du dossier. */
  state: DossierState;
  traitements: Array<Traitement>;
  /** Profil de l’usager déposant le dossier */
  usager: Profile;
};


/** Un dossier */
export type DossierAnnotationsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Un dossier */
export type DossierAvisArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Un dossier */
export type DossierChampsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Un dossier */
export type DossierMessagesArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated input type of DossierAccepter */
export type DossierAccepterInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
  justificatif?: InputMaybe<Scalars['ID']['input']>;
  motivation?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of DossierAccepter. */
export type DossierAccepterPayload = {
  __typename?: 'DossierAccepterPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierAjouterLabel */
export type DossierAjouterLabelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dossierId: Scalars['ID']['input'];
  /** ID du label */
  labelId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierAjouterLabel. */
export type DossierAjouterLabelPayload = {
  __typename?: 'DossierAjouterLabelPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
  label?: Maybe<Label>;
};

/** Autogenerated input type of DossierAnnulerDemandeCorrection */
export type DossierAnnulerDemandeCorrectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instructeurId: Scalars['ID']['input'];
  messageId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierAnnulerDemandeCorrection. */
export type DossierAnnulerDemandeCorrectionPayload = {
  __typename?: 'DossierAnnulerDemandeCorrectionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  message?: Maybe<Message>;
};

/** Autogenerated input type of DossierArchiver */
export type DossierArchiverInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierArchiver. */
export type DossierArchiverPayload = {
  __typename?: 'DossierArchiverPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierBasculeSuivi */
export type DossierBasculeSuiviInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Indique s’il faut suivre (true) ou ne plus suivre (false) le dossier. */
  follow?: Scalars['Boolean']['input'];
  /** Instructeur ID */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierBasculeSuivi. */
export type DossierBasculeSuiviPayload = {
  __typename?: 'DossierBasculeSuiviPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
  instructeur?: Maybe<Profile>;
};

/** Autogenerated input type of DossierChangerGroupeInstructeur */
export type DossierChangerGroupeInstructeurInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Group instructeur a affecter */
  groupeInstructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierChangerGroupeInstructeur. */
export type DossierChangerGroupeInstructeurPayload = {
  __typename?: 'DossierChangerGroupeInstructeurPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierClasserSansSuite */
export type DossierClasserSansSuiteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
  justificatif?: InputMaybe<Scalars['ID']['input']>;
  motivation: Scalars['String']['input'];
};

/** Autogenerated return type of DossierClasserSansSuite. */
export type DossierClasserSansSuitePayload = {
  __typename?: 'DossierClasserSansSuitePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** The connection type for Dossier. */
export type DossierConnection = {
  __typename?: 'DossierConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DossierEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Dossier>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export const DossierDeclarativeState = {
  /** Accepté */
  Accepte: 'accepte',
  /** En instruction */
  EnInstruction: 'en_instruction'
} as const;

export type DossierDeclarativeState = typeof DossierDeclarativeState[keyof typeof DossierDeclarativeState];
/** Autogenerated input type of DossierDesarchiver */
export type DossierDesarchiverInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierDesarchiver. */
export type DossierDesarchiverPayload = {
  __typename?: 'DossierDesarchiverPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** An edge in a connection. */
export type DossierEdge = {
  __typename?: 'DossierEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Dossier>;
};

/** Autogenerated input type of DossierEnvoyerMessage */
export type DossierEnvoyerMessageInput = {
  attachment?: InputMaybe<Scalars['ID']['input']>;
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Préciser qu’il s’agit d’une demande de correction. Le dossier repasssera en construction. */
  correction?: InputMaybe<CorrectionReason>;
  dossierId: Scalars['ID']['input'];
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierEnvoyerMessage. */
export type DossierEnvoyerMessagePayload = {
  __typename?: 'DossierEnvoyerMessagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  message?: Maybe<Message>;
};

export type DossierLinkChamp = Champ & {
  __typename?: 'DossierLinkChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  dossier?: Maybe<Dossier>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type DossierLinkChampDescriptor = ChampDescriptor & {
  __typename?: 'DossierLinkChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

/** Autogenerated input type of DossierModifierAnnotationAjouterLigne */
export type DossierModifierAnnotationAjouterLigneInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationAjouterLigne. */
export type DossierModifierAnnotationAjouterLignePayload = {
  __typename?: 'DossierModifierAnnotationAjouterLignePayload';
  annotation?: Maybe<RepetitionChamp>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationCheckbox */
export type DossierModifierAnnotationCheckboxInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['Boolean']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationCheckbox. */
export type DossierModifierAnnotationCheckboxPayload = {
  __typename?: 'DossierModifierAnnotationCheckboxPayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationDate */
export type DossierModifierAnnotationDateInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['ISO8601Date']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationDate. */
export type DossierModifierAnnotationDatePayload = {
  __typename?: 'DossierModifierAnnotationDatePayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationDatetime */
export type DossierModifierAnnotationDatetimeInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['ISO8601DateTime']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationDatetime. */
export type DossierModifierAnnotationDatetimePayload = {
  __typename?: 'DossierModifierAnnotationDatetimePayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationDecimalNumber */
export type DossierModifierAnnotationDecimalNumberInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['Float']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationDecimalNumber. */
export type DossierModifierAnnotationDecimalNumberPayload = {
  __typename?: 'DossierModifierAnnotationDecimalNumberPayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationDropDownList */
export type DossierModifierAnnotationDropDownListInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationDropDownList. */
export type DossierModifierAnnotationDropDownListPayload = {
  __typename?: 'DossierModifierAnnotationDropDownListPayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationIntegerNumber */
export type DossierModifierAnnotationIntegerNumberInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['Int']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationIntegerNumber. */
export type DossierModifierAnnotationIntegerNumberPayload = {
  __typename?: 'DossierModifierAnnotationIntegerNumberPayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotationText */
export type DossierModifierAnnotationTextInput = {
  /** Annotation ID */
  annotationId: Scalars['ID']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

/** Autogenerated return type of DossierModifierAnnotationText. */
export type DossierModifierAnnotationTextPayload = {
  __typename?: 'DossierModifierAnnotationTextPayload';
  annotation?: Maybe<Champ>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierModifierAnnotations */
export type DossierModifierAnnotationsInput = {
  /** Annotations à modifier */
  annotations: Array<AnnotationInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui demande la modification. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierModifierAnnotations. */
export type DossierModifierAnnotationsPayload = {
  __typename?: 'DossierModifierAnnotationsPayload';
  annotations?: Maybe<Array<Champ>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierPasserEnInstruction */
export type DossierPasserEnInstructionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierPasserEnInstruction. */
export type DossierPasserEnInstructionPayload = {
  __typename?: 'DossierPasserEnInstructionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierRefuser */
export type DossierRefuserInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
  justificatif?: InputMaybe<Scalars['ID']['input']>;
  motivation: Scalars['String']['input'];
};

/** Autogenerated return type of DossierRefuser. */
export type DossierRefuserPayload = {
  __typename?: 'DossierRefuserPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierRepasserEnConstruction */
export type DossierRepasserEnConstructionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierRepasserEnConstruction. */
export type DossierRepasserEnConstructionPayload = {
  __typename?: 'DossierRepasserEnConstructionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

/** Autogenerated input type of DossierRepasserEnInstruction */
export type DossierRepasserEnInstructionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Désactiver l’envoi de l’email de notification après l’opération */
  disableNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** Dossier ID */
  dossierId: Scalars['ID']['input'];
  /** Instructeur qui prend la décision sur le dossier. */
  instructeurId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierRepasserEnInstruction. */
export type DossierRepasserEnInstructionPayload = {
  __typename?: 'DossierRepasserEnInstructionPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
};

export const DossierState = {
  /** Accepté */
  Accepte: 'accepte',
  /** En construction */
  EnConstruction: 'en_construction',
  /** En instruction */
  EnInstruction: 'en_instruction',
  /** Refusé */
  Refuse: 'refuse',
  /** Classé sans suite */
  SansSuite: 'sans_suite'
} as const;

export type DossierState = typeof DossierState[keyof typeof DossierState];
/** Autogenerated input type of DossierSupprimerLabel */
export type DossierSupprimerLabelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  dossierId: Scalars['ID']['input'];
  labelId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierSupprimerLabel. */
export type DossierSupprimerLabelPayload = {
  __typename?: 'DossierSupprimerLabelPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dossier?: Maybe<Dossier>;
  errors?: Maybe<Array<ValidationError>>;
  label?: Maybe<Label>;
};

/** Autogenerated input type of DossierSupprimerMessage */
export type DossierSupprimerMessageInput = {
  /**
   * Annule automatiquement la demande de correction avant de supprimer le message.
   * @deprecated Utilisez la mutation `dossierAnnulerDemandeCorrection` avant de supprimer un message avec correction. Ce paramètre sera supprimé dans une future version.
   */
  cancelCorrection?: InputMaybe<Scalars['Boolean']['input']>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instructeurId: Scalars['ID']['input'];
  messageId: Scalars['ID']['input'];
};

/** Autogenerated return type of DossierSupprimerMessage. */
export type DossierSupprimerMessagePayload = {
  __typename?: 'DossierSupprimerMessagePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  message?: Maybe<Message>;
};

export type DropDownListChamp = Champ & {
  __typename?: 'DropDownListChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type DropDownListChampDescriptor = ChampDescriptor & {
  __typename?: 'DropDownListChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des options d’un champ avec selection. */
  options?: Maybe<Array<Scalars['String']['output']>>;
  /** La selection contien l’option "Autre". */
  otherOption?: Maybe<Scalars['Boolean']['output']>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Effectif = {
  __typename?: 'Effectif';
  nb: Scalars['Float']['output'];
  periode: Scalars['String']['output'];
};

export type EmailChampDescriptor = ChampDescriptor & {
  __typename?: 'EmailChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type EngagementJuridique = {
  __typename?: 'EngagementJuridique';
  montantEngage?: Maybe<Scalars['String']['output']>;
  montantPaye?: Maybe<Scalars['String']['output']>;
};

export type EngagementJuridiqueChamp = Champ & {
  __typename?: 'EngagementJuridiqueChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  /** Montant engagé et payé de l’EJ. */
  engagementJuridique?: Maybe<EngagementJuridique>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type EngagementJuridiqueChampDescriptor = ChampDescriptor & {
  __typename?: 'EngagementJuridiqueChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Entreprise = {
  __typename?: 'Entreprise';
  attestationFiscaleAttachment?: Maybe<File>;
  attestationSocialeAttachment?: Maybe<File>;
  /** capital social de l’entreprise. -1 si inconnu. */
  capitalSocial?: Maybe<Scalars['BigInt']['output']>;
  codeEffectifEntreprise?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['ISO8601Date']['output']>;
  /** effectif moyen d’une année */
  effectifAnnuel?: Maybe<Effectif>;
  /** effectif pour un mois donné */
  effectifMensuel?: Maybe<Effectif>;
  enseigne?: Maybe<Scalars['String']['output']>;
  etatAdministratif?: Maybe<EntrepriseEtatAdministratif>;
  formeJuridique?: Maybe<Scalars['String']['output']>;
  formeJuridiqueCode?: Maybe<Scalars['String']['output']>;
  inlineAdresse: Scalars['String']['output'];
  nom?: Maybe<Scalars['String']['output']>;
  nomCommercial: Scalars['String']['output'];
  numeroTvaIntracommunautaire?: Maybe<Scalars['String']['output']>;
  prenom?: Maybe<Scalars['String']['output']>;
  raisonSociale: Scalars['String']['output'];
  siren: Scalars['String']['output'];
  siretSiegeSocial: Scalars['String']['output'];
};

export const EntrepriseEtatAdministratif = {
  /** L’entreprise est en activité */
  Actif: 'Actif',
  /** L’entreprise a cessé son activité */
  Ferme: 'Ferme'
} as const;

export type EntrepriseEtatAdministratif = typeof EntrepriseEtatAdministratif[keyof typeof EntrepriseEtatAdministratif];
export type EnumColumn = Column & {
  __typename?: 'EnumColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type EnumsColumn = Column & {
  __typename?: 'EnumsColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Array<Scalars['String']['output']>>;
};

export type Epci = {
  __typename?: 'Epci';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EpciChamp = Champ & {
  __typename?: 'EpciChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  departement?: Maybe<Departement>;
  epci?: Maybe<Epci>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type EpciChampDescriptor = ChampDescriptor & {
  __typename?: 'EpciChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type ExplicationChamp = Champ & {
  __typename?: 'ExplicationChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ExplicationChampDescriptor = ChampDescriptor & {
  __typename?: 'ExplicationChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  collapsibleExplanationEnabled?: Maybe<Scalars['Boolean']['output']>;
  collapsibleExplanationText?: Maybe<Scalars['String']['output']>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type File = {
  __typename?: 'File';
  /** @deprecated Utilisez le champ `byteSizeBigInt` à la place. */
  byteSize: Scalars['Int']['output'];
  byteSizeBigInt: Scalars['BigInt']['output'];
  checksum: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  /** Date de création du fichier. */
  createdAt: Scalars['ISO8601DateTime']['output'];
  filename: Scalars['String']['output'];
  url: Scalars['URL']['output'];
  virusScanResult: Scalars['String']['output'];
};

export type FindDemarcheInput =
  /** ID de la démarche. */
  { id: Scalars['ID']['input']; number?: never; }
  |  /** Numero de la démarche. */
  { id?: never; number: Scalars['Int']['input']; };

export type FormattedChampDescriptor = ChampDescriptor & {
  __typename?: 'FormattedChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type GeoArea = {
  description?: Maybe<Scalars['String']['output']>;
  geometry: GeoJson;
  id: Scalars['ID']['output'];
  source: GeoAreaSource;
};

export const GeoAreaSource = {
  /** Parcelle cadastrale */
  Cadastre: 'cadastre',
  /** Parcelle agricole */
  Rpg: 'rpg',
  /** Sélection utilisateur */
  SelectionUtilisateur: 'selection_utilisateur'
} as const;

export type GeoAreaSource = typeof GeoAreaSource[keyof typeof GeoAreaSource];
export type GeoJson = {
  __typename?: 'GeoJSON';
  coordinates: Scalars['Coordinates']['output'];
  type: Scalars['String']['output'];
};

/** Un groupe instructeur */
export type GroupeInstructeur = {
  __typename?: 'GroupeInstructeur';
  /** L’état du groupe instructeur. */
  closed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  instructeurs: Array<Profile>;
  /** Libellé du groupe instructeur. */
  label: Scalars['String']['output'];
  /** Le numero du groupe instructeur. */
  number: Scalars['Int']['output'];
};

/** Autogenerated input type of GroupeInstructeurAjouterInstructeurs */
export type GroupeInstructeurAjouterInstructeursInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Groupe instructeur ID. */
  groupeInstructeurId: Scalars['ID']['input'];
  /** Instructeurs à ajouter. */
  instructeurs: Array<ProfileInput>;
};

/** Autogenerated return type of GroupeInstructeurAjouterInstructeurs. */
export type GroupeInstructeurAjouterInstructeursPayload = {
  __typename?: 'GroupeInstructeurAjouterInstructeursPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  groupeInstructeur?: Maybe<GroupeInstructeur>;
  warnings?: Maybe<Array<WarningMessage>>;
};

/** Attributs pour l’ajout d’un groupe instructeur. */
export type GroupeInstructeurAttributes = {
  /** L’état du groupe instructeur. */
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Instructeurs à ajouter. */
  instructeurs?: InputMaybe<Array<ProfileInput>>;
  /** Libelle du groupe instructeur. */
  label: Scalars['String']['input'];
};

/** Autogenerated input type of GroupeInstructeurCreer */
export type GroupeInstructeurCreerInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Demarche ID ou numéro. */
  demarche: FindDemarcheInput;
  /** Groupes instructeur à ajouter. */
  groupeInstructeur: GroupeInstructeurAttributes;
};

/** Autogenerated return type of GroupeInstructeurCreer. */
export type GroupeInstructeurCreerPayload = {
  __typename?: 'GroupeInstructeurCreerPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  groupeInstructeur?: Maybe<GroupeInstructeur>;
  warnings?: Maybe<Array<WarningMessage>>;
};

/** Autogenerated input type of GroupeInstructeurModifier */
export type GroupeInstructeurModifierInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** L’état du groupe instructeur. */
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Groupe instructeur ID. */
  groupeInstructeurId: Scalars['ID']['input'];
  /** Libellé du groupe instructeur. */
  label?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of GroupeInstructeurModifier. */
export type GroupeInstructeurModifierPayload = {
  __typename?: 'GroupeInstructeurModifierPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  groupeInstructeur?: Maybe<GroupeInstructeur>;
};

/** Autogenerated input type of GroupeInstructeurSupprimerInstructeurs */
export type GroupeInstructeurSupprimerInstructeursInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** Groupe instructeur ID. */
  groupeInstructeurId: Scalars['ID']['input'];
  /** Instructeurs à supprimer. */
  instructeurs: Array<ProfileInput>;
};

/** Autogenerated return type of GroupeInstructeurSupprimerInstructeurs. */
export type GroupeInstructeurSupprimerInstructeursPayload = {
  __typename?: 'GroupeInstructeurSupprimerInstructeursPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<ValidationError>>;
  groupeInstructeur?: Maybe<GroupeInstructeur>;
};

/** Un groupe instructeur avec ses dossiers */
export type GroupeInstructeurWithDossiers = {
  __typename?: 'GroupeInstructeurWithDossiers';
  /** L’état du groupe instructeur. */
  closed: Scalars['Boolean']['output'];
  /** Liste de tous les dossiers supprimés d’un groupe instructeur. */
  deletedDossiers: DeletedDossierConnection;
  /** Liste de tous les dossiers d’un groupe instructeur. */
  dossiers: DossierConnection;
  id: Scalars['ID']['output'];
  instructeurs: Array<Profile>;
  /** Libellé du groupe instructeur. */
  label: Scalars['String']['output'];
  /** Le numero du groupe instructeur. */
  number: Scalars['Int']['output'];
  /** Liste de tous les dossiers en attente de suppression définitive d’un groupe instructeur. */
  pendingDeletedDossiers: DeletedDossierConnection;
};


/** Un groupe instructeur avec ses dossiers */
export type GroupeInstructeurWithDossiersDeletedDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deletedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order>;
};


/** Un groupe instructeur avec ses dossiers */
export type GroupeInstructeurWithDossiersDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  createdSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  maxRevision?: InputMaybe<Scalars['ID']['input']>;
  minRevision?: InputMaybe<Scalars['ID']['input']>;
  order?: InputMaybe<Order>;
  revision?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<DossierState>;
  updatedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
};


/** Un groupe instructeur avec ses dossiers */
export type GroupeInstructeurWithDossiersPendingDeletedDossiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  deletedSince?: InputMaybe<Scalars['ISO8601DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Order>;
};

export type HeaderSectionChamp = Champ & {
  __typename?: 'HeaderSectionChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type HeaderSectionChampDescriptor = ChampDescriptor & {
  __typename?: 'HeaderSectionChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type IbanChampDescriptor = ChampDescriptor & {
  __typename?: 'IbanChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type IntegerColumn = Column & {
  __typename?: 'IntegerColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type IntegerNumberChamp = Champ & {
  __typename?: 'IntegerNumberChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['BigInt']['output']>;
};

export type IntegerNumberChampDescriptor = ChampDescriptor & {
  __typename?: 'IntegerNumberChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Label = {
  __typename?: 'Label';
  /** Couleur du label */
  color: LabelColorEnum;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Couleurs disponibles pour les labels */
export const LabelColorEnum = {
  BeigeGrisGalet: 'beige_gris_galet',
  BlueEcume: 'blue_ecume',
  BrownCafeCreme: 'brown_cafe_creme',
  GreenBourgeon: 'green_bourgeon',
  GreenEmeraude: 'green_emeraude',
  GreenMenthe: 'green_menthe',
  GreenTilleulVerveine: 'green_tilleul_verveine',
  PinkMacaron: 'pink_macaron',
  PurpleGlycine: 'purple_glycine',
  YellowTournesol: 'yellow_tournesol'
} as const;

export type LabelColorEnum = typeof LabelColorEnum[keyof typeof LabelColorEnum];
export type LinkedDropDownListChamp = Champ & {
  __typename?: 'LinkedDropDownListChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  primaryValue?: Maybe<Scalars['String']['output']>;
  secondaryValue?: Maybe<Scalars['String']['output']>;
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type LinkedDropDownListChampDescriptor = ChampDescriptor & {
  __typename?: 'LinkedDropDownListChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des options d’un champ avec selection. */
  options?: Maybe<Array<Scalars['String']['output']>>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type MesriChampDescriptor = ChampDescriptor & {
  __typename?: 'MesriChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Message = {
  __typename?: 'Message';
  /** @deprecated Utilisez le champ `attachments` à la place. */
  attachment?: Maybe<File>;
  attachments: Array<File>;
  body: Scalars['String']['output'];
  correction?: Maybe<Correction>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  discardedAt?: Maybe<Scalars['ISO8601DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type MultipleDropDownListChamp = Champ & {
  __typename?: 'MultipleDropDownListChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  values: Array<Scalars['String']['output']>;
};

export type MultipleDropDownListChampDescriptor = ChampDescriptor & {
  __typename?: 'MultipleDropDownListChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des options d’un champ avec selection. */
  options?: Maybe<Array<Scalars['String']['output']>>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** File information required to prepare a direct upload */
  createDirectUpload?: Maybe<CreateDirectUploadPayload>;
  /** Cloner une démarche. */
  demarcheCloner?: Maybe<DemarcheClonerPayload>;
  /** Accepter le dossier. */
  dossierAccepter?: Maybe<DossierAccepterPayload>;
  /** Ajouter un label à un dossier */
  dossierAjouterLabel?: Maybe<DossierAjouterLabelPayload>;
  /** Annuler une demande de correction sans supprimer le message. */
  dossierAnnulerDemandeCorrection?: Maybe<DossierAnnulerDemandeCorrectionPayload>;
  /** Archiver le dossier. */
  dossierArchiver?: Maybe<DossierArchiverPayload>;
  dossierBasculeSuivi?: Maybe<DossierBasculeSuiviPayload>;
  /** Changer le groupe instructeur du dossier. */
  dossierChangerGroupeInstructeur?: Maybe<DossierChangerGroupeInstructeurPayload>;
  /** Classer le dossier sans suite. */
  dossierClasserSansSuite?: Maybe<DossierClasserSansSuitePayload>;
  /** Désarchiver le dossier. */
  dossierDesarchiver?: Maybe<DossierDesarchiverPayload>;
  /** Envoyer un message à l’usager du dossier. */
  dossierEnvoyerMessage?: Maybe<DossierEnvoyerMessagePayload>;
  /** @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place. */
  dossierModifierAnnotationAjouterLigne?: Maybe<DossierModifierAnnotationAjouterLignePayload>;
  /**
   * Modifier l’annotation au format oui/non.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationCheckbox?: Maybe<DossierModifierAnnotationCheckboxPayload>;
  /**
   * Modifier l’annotation au format date.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationDate?: Maybe<DossierModifierAnnotationDatePayload>;
  /**
   * Modifier l’annotation au format date et heure.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationDatetime?: Maybe<DossierModifierAnnotationDatetimePayload>;
  /**
   * Modifier l’annotation au format nombre décimal.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationDecimalNumber?: Maybe<DossierModifierAnnotationDecimalNumberPayload>;
  /**
   * Modifier l’annotation d’un champs de type dropdown list.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationDropDownList?: Maybe<DossierModifierAnnotationDropDownListPayload>;
  /**
   * Modifier l’annotation au format nombre entier.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationIntegerNumber?: Maybe<DossierModifierAnnotationIntegerNumberPayload>;
  /**
   * Modifier l’annotation au format text.
   * @deprecated Utilisez la mutation `dossierModifierAnnotations` à la place.
   */
  dossierModifierAnnotationText?: Maybe<DossierModifierAnnotationTextPayload>;
  /** Modifier les annotations privées. */
  dossierModifierAnnotations?: Maybe<DossierModifierAnnotationsPayload>;
  /** Passer le dossier en instruction. */
  dossierPasserEnInstruction?: Maybe<DossierPasserEnInstructionPayload>;
  /** Refuser le dossier. */
  dossierRefuser?: Maybe<DossierRefuserPayload>;
  /** Re-passer le dossier en construction. */
  dossierRepasserEnConstruction?: Maybe<DossierRepasserEnConstructionPayload>;
  /** Re-passer le dossier en instruction. */
  dossierRepasserEnInstruction?: Maybe<DossierRepasserEnInstructionPayload>;
  /** Supprimer un label d’un dossier */
  dossierSupprimerLabel?: Maybe<DossierSupprimerLabelPayload>;
  /** Supprimer un message. */
  dossierSupprimerMessage?: Maybe<DossierSupprimerMessagePayload>;
  /** Ajouter des instructeurs à un groupe instructeur. */
  groupeInstructeurAjouterInstructeurs?: Maybe<GroupeInstructeurAjouterInstructeursPayload>;
  /** Crée un groupe instructeur. */
  groupeInstructeurCreer?: Maybe<GroupeInstructeurCreerPayload>;
  /** Modifier un groupe instructeur. */
  groupeInstructeurModifier?: Maybe<GroupeInstructeurModifierPayload>;
  /** Supprimer des instructeurs d’un groupe instructeur. */
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


export type MutationDossierAjouterLabelArgs = {
  input: DossierAjouterLabelInput;
};


export type MutationDossierAnnulerDemandeCorrectionArgs = {
  input: DossierAnnulerDemandeCorrectionInput;
};


export type MutationDossierArchiverArgs = {
  input: DossierArchiverInput;
};


export type MutationDossierBasculeSuiviArgs = {
  input: DossierBasculeSuiviInput;
};


export type MutationDossierChangerGroupeInstructeurArgs = {
  input: DossierChangerGroupeInstructeurInput;
};


export type MutationDossierClasserSansSuiteArgs = {
  input: DossierClasserSansSuiteInput;
};


export type MutationDossierDesarchiverArgs = {
  input: DossierDesarchiverInput;
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


export type MutationDossierModifierAnnotationDecimalNumberArgs = {
  input: DossierModifierAnnotationDecimalNumberInput;
};


export type MutationDossierModifierAnnotationDropDownListArgs = {
  input: DossierModifierAnnotationDropDownListInput;
};


export type MutationDossierModifierAnnotationIntegerNumberArgs = {
  input: DossierModifierAnnotationIntegerNumberInput;
};


export type MutationDossierModifierAnnotationTextArgs = {
  input: DossierModifierAnnotationTextInput;
};


export type MutationDossierModifierAnnotationsArgs = {
  input: DossierModifierAnnotationsInput;
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


export type MutationDossierSupprimerLabelArgs = {
  input: DossierSupprimerLabelInput;
};


export type MutationDossierSupprimerMessageArgs = {
  input: DossierSupprimerMessageInput;
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
  __typename?: 'NumberChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export const Order = {
  /** L’ordre ascendant. */
  Asc: 'ASC',
  /** L’ordre descendant. */
  Desc: 'DESC'
} as const;

export type Order = typeof Order[keyof typeof Order];
/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type ParcelleCadastrale = GeoArea & {
  __typename?: 'ParcelleCadastrale';
  /** @deprecated Utilisez le champ `prefixe` à la place. */
  codeArr: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `commune` à la place. */
  codeCom: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `commune` à la place. */
  codeDep: Scalars['String']['output'];
  commune: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** @deprecated L’information n’est plus disponible. */
  feuille: Scalars['Int']['output'];
  geometry: GeoJson;
  id: Scalars['ID']['output'];
  /** @deprecated Utilisez le champ `commune` à la place. */
  nomCom: Scalars['String']['output'];
  numero: Scalars['String']['output'];
  prefixe: Scalars['String']['output'];
  section: Scalars['String']['output'];
  source: GeoAreaSource;
  surface: Scalars['String']['output'];
  /** @deprecated L’information n’est plus disponible. */
  surfaceIntersection: Scalars['Float']['output'];
  /** @deprecated Utilisez le champ `surface` à la place. */
  surfaceParcelle: Scalars['Float']['output'];
};

export type Pays = {
  __typename?: 'Pays';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PaysChamp = Champ & {
  __typename?: 'PaysChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  pays?: Maybe<Pays>;
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type PaysChampDescriptor = ChampDescriptor & {
  __typename?: 'PaysChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des pays. */
  options?: Maybe<Array<Pays>>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type PersonneMorale = Demandeur & {
  __typename?: 'PersonneMorale';
  address: Address;
  /** @deprecated Utilisez le champ `address.label` à la place. */
  adresse: Scalars['String']['output'];
  association?: Maybe<Association>;
  /** @deprecated Utilisez le champ `address.city_code` à la place. */
  codeInseeLocalite: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `address.postal_code` à la place. */
  codePostal: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `address` à la place. */
  complementAdresse?: Maybe<Scalars['String']['output']>;
  entreprise?: Maybe<Entreprise>;
  id: Scalars['ID']['output'];
  libelleNaf: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `address.city_name` à la place. */
  localite: Scalars['String']['output'];
  naf?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `address.street_name` à la place. */
  nomVoie?: Maybe<Scalars['String']['output']>;
  /** @deprecated Utilisez le champ `address.street_number` à la place. */
  numeroVoie?: Maybe<Scalars['String']['output']>;
  siegeSocial: Scalars['Boolean']['output'];
  siret: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `address.street_address` à la place. */
  typeVoie?: Maybe<Scalars['String']['output']>;
};

export type PersonneMoraleIncomplete = Demandeur & {
  __typename?: 'PersonneMoraleIncomplete';
  id: Scalars['ID']['output'];
  siret: Scalars['String']['output'];
};

export type PersonnePhysique = Demandeur & {
  __typename?: 'PersonnePhysique';
  civilite?: Maybe<Civilite>;
  dateDeNaissance?: Maybe<Scalars['ISO8601Date']['output']>;
  /**
   * Adresse électronique du bénéficiaire (dans le cas d’un dossier déposé par et
   * pour l’usager connecté, l’adresse électronique est celle de l’usager connecté.
   * Dans le cas d’un dossier déposé pour un bénéficiaire, l’adresse électronique
   * est celle du bénéficiaire, si elle a été renseignée)
   */
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  nom: Scalars['String']['output'];
  prenom: Scalars['String']['output'];
};

export type PhoneChampDescriptor = ChampDescriptor & {
  __typename?: 'PhoneChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type PieceJustificativeChamp = Champ & {
  __typename?: 'PieceJustificativeChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  /** @deprecated Utilisez le champ `files` à la place. */
  file?: Maybe<File>;
  files: Array<File>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type PieceJustificativeChampDescriptor = ChampDescriptor & {
  __typename?: 'PieceJustificativeChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  /** Modèle de la pièce justificative. */
  fileTemplate?: Maybe<File>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type PoleEmploiChampDescriptor = ChampDescriptor & {
  __typename?: 'PoleEmploiChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

/** Profil d’un usager connecté (déposant un dossier, instruisant un dossier...) */
export type Profile = {
  __typename?: 'Profile';
  /** Adresse électronique de l’usager */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ProfileInput =
  /** Email */
  { email: Scalars['String']['input']; id?: never; }
  |  /** ID */
  { email?: never; id: Scalars['ID']['input']; };

export type Query = {
  __typename?: 'Query';
  /** Informations concernant une démarche. */
  demarche: Demarche;
  demarcheDescriptor?: Maybe<DemarcheDescriptor>;
  /** Informations sur un dossier d’une démarche. */
  dossier: Dossier;
  /** Informations sur un groupe instructeur. */
  groupeInstructeur: GroupeInstructeurWithDossiers;
};


export type QueryDemarcheArgs = {
  number: Scalars['Int']['input'];
};


export type QueryDemarcheDescriptorArgs = {
  demarche: FindDemarcheInput;
};


export type QueryDossierArgs = {
  number: Scalars['Int']['input'];
};


export type QueryGroupeInstructeurArgs = {
  number: Scalars['Int']['input'];
};

export type Rna = {
  __typename?: 'RNA';
  address?: Maybe<Address>;
  id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type RnaChamp = Champ & {
  __typename?: 'RNAChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  commune?: Maybe<Commune>;
  departement?: Maybe<Departement>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  rna?: Maybe<Rna>;
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type RnaChampDescriptor = ChampDescriptor & {
  __typename?: 'RNAChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Rnf = {
  __typename?: 'RNF';
  address?: Maybe<Address>;
  id: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type RnfChamp = Champ & {
  __typename?: 'RNFChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  commune?: Maybe<Commune>;
  departement?: Maybe<Departement>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  rnf?: Maybe<Rnf>;
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type RnfChampDescriptor = ChampDescriptor & {
  __typename?: 'RNFChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type ReferentielChampDescriptor = ChampDescriptor & {
  __typename?: 'ReferentielChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Region = {
  __typename?: 'Region';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type RegionChamp = Champ & {
  __typename?: 'RegionChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  region?: Maybe<Region>;
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type RegionChampDescriptor = ChampDescriptor & {
  __typename?: 'RegionChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** List des regions. */
  options?: Maybe<Array<Region>>;
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type RepetitionChamp = Champ & {
  __typename?: 'RepetitionChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /** @deprecated Utilisez le champ `rows` à la place. */
  champs: Array<Champ>;
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  rows: Array<Row>;
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type RepetitionChampDescriptor = ChampDescriptor & {
  __typename?: 'RepetitionChampDescriptor';
  /** Description des champs d’un bloc répétable. */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type Revision = {
  __typename?: 'Revision';
  annotationDescriptors: Array<ChampDescriptor>;
  champDescriptors: Array<ChampDescriptor>;
  /** Date de la création. */
  dateCreation: Scalars['ISO8601DateTime']['output'];
  /** Date de la publication. */
  datePublication?: Maybe<Scalars['ISO8601DateTime']['output']>;
  id: Scalars['ID']['output'];
};

export type Row = {
  __typename?: 'Row';
  champs: Array<Champ>;
  id: Scalars['ID']['output'];
};

export type SelectionUtilisateur = GeoArea & {
  __typename?: 'SelectionUtilisateur';
  description?: Maybe<Scalars['String']['output']>;
  geometry: GeoJson;
  id: Scalars['ID']['output'];
  source: GeoAreaSource;
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['ID']['output'];
  /** nom du service qui met en oeuvre la démarche */
  nom: Scalars['String']['output'];
  /** nom de l’organisme qui met en oeuvre la démarche */
  organisme: Scalars['String']['output'];
  /** n° siret du service qui met en oeuvre la démarche */
  siret?: Maybe<Scalars['String']['output']>;
  /** type d’organisme qui met en oeuvre la démarche */
  typeOrganisme: TypeOrganisme;
};

export type SiretChamp = Champ & {
  __typename?: 'SiretChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  etablissement?: Maybe<PersonneMorale>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SiretChampDescriptor = ChampDescriptor & {
  __typename?: 'SiretChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type TextChamp = Champ & {
  __typename?: 'TextChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type TextChampDescriptor = ChampDescriptor & {
  __typename?: 'TextChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type TextColumn = Column & {
  __typename?: 'TextColumn';
  id: Scalars['ID']['output'];
  /** Libellé de la colonne. */
  label: Scalars['String']['output'];
  /** La valeur de la colonne sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type TextareaChampDescriptor = ChampDescriptor & {
  __typename?: 'TextareaChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export type TitreIdentiteChamp = Champ & {
  __typename?: 'TitreIdentiteChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  filled: Scalars['Boolean']['output'];
  grantType: TitreIdentiteGrantType;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type TitreIdentiteChampDescriptor = ChampDescriptor & {
  __typename?: 'TitreIdentiteChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};

export const TitreIdentiteGrantType = {
  /** Françe Connect */
  FranceConnect: 'france_connect',
  /** Pièce justificative */
  PieceJustificative: 'piece_justificative'
} as const;

export type TitreIdentiteGrantType = typeof TitreIdentiteGrantType[keyof typeof TitreIdentiteGrantType];
export type Traitement = {
  __typename?: 'Traitement';
  dateTraitement: Scalars['ISO8601DateTime']['output'];
  emailAgentTraitant?: Maybe<Scalars['String']['output']>;
  event: TraitementEvent;
  id: Scalars['ID']['output'];
  motivation?: Maybe<Scalars['String']['output']>;
  revision?: Maybe<Revision>;
  /** @deprecated Utilisez le champ `event` à la place. */
  state: DossierState;
};

export const TraitementEvent = {
  /** Accepte */
  Accepte: 'accepte',
  /** Accepte automatiquement */
  AccepteAutomatiquement: 'accepte_automatiquement',
  /** Classe sans suite */
  ClasseSansSuite: 'classe_sans_suite',
  /** Depose */
  Depose: 'depose',
  /** Depose correction instructeur */
  DeposeCorrectionInstructeur: 'depose_correction_instructeur',
  /** Depose correction usager */
  DeposeCorrectionUsager: 'depose_correction_usager',
  /** Passe en instruction */
  PasseEnInstruction: 'passe_en_instruction',
  /** Passe en instruction automatiquement */
  PasseEnInstructionAutomatiquement: 'passe_en_instruction_automatiquement',
  /** Refuse */
  Refuse: 'refuse',
  /** Refuse automatiquement */
  RefuseAutomatiquement: 'refuse_automatiquement',
  /** Repasse en construction */
  RepasseEnConstruction: 'repasse_en_construction',
  /** Repasse en instruction */
  RepasseEnInstruction: 'repasse_en_instruction'
} as const;

export type TraitementEvent = typeof TraitementEvent[keyof typeof TraitementEvent];
export const TypeDeChamp = {
  /** Adresse */
  Address: 'address',
  /** Annuaire de l’éducation */
  AnnuaireEducation: 'annuaire_education',
  /** Carte */
  Carte: 'carte',
  /** Case à cocher seule */
  Checkbox: 'checkbox',
  /** Civilité */
  Civilite: 'civilite',
  /** Données de la Caisse nationale des allocations familiales */
  Cnaf: 'cnaf',
  /** Accréditation Paris 2024 */
  Cojo: 'cojo',
  /** Communes */
  Communes: 'communes',
  /** Date */
  Date: 'date',
  /** Date et Heure */
  Datetime: 'datetime',
  /** Nombre décimal */
  DecimalNumber: 'decimal_number',
  /** Départements */
  Departements: 'departements',
  /** Données de la Direction générale des Finances publiques */
  Dgfip: 'dgfip',
  /** Lien vers un autre dossier */
  DossierLink: 'dossier_link',
  /** Choix simple */
  DropDownList: 'drop_down_list',
  /** Adresse électronique */
  Email: 'email',
  /** Translation missing: fr.activerecord.attributes.type_de_champ.type_champs.engagement_juridique */
  EngagementJuridique: 'engagement_juridique',
  /** EPCI */
  Epci: 'epci',
  /** Explication */
  Explication: 'explication',
  /** Champ formaté */
  Formatted: 'formatted',
  /** Titre de section */
  HeaderSection: 'header_section',
  /** Numéro Iban */
  Iban: 'iban',
  /** Nombre entier */
  IntegerNumber: 'integer_number',
  /** Deux menus déroulants liés */
  LinkedDropDownList: 'linked_drop_down_list',
  /** Données du Ministère de l’Enseignement Supérieur, de la Recherche et de l’Innovation */
  Mesri: 'mesri',
  /** Choix multiple */
  MultipleDropDownList: 'multiple_drop_down_list',
  /** Nombre */
  Number: 'number',
  /** Pays */
  Pays: 'pays',
  /** Téléphone */
  Phone: 'phone',
  /** Pièce à joindre */
  PieceJustificative: 'piece_justificative',
  /** Situation Pôle emploi */
  PoleEmploi: 'pole_emploi',
  /** Référentiel configurable (avancé) */
  Referentiel: 'referentiel',
  /** Régions */
  Regions: 'regions',
  /** Bloc répétable */
  Repetition: 'repetition',
  /** RNA (Répertoire national des associations) */
  Rna: 'rna',
  /** RNF (Répertoire national des fondations) */
  Rnf: 'rnf',
  /** Numéro Siret */
  Siret: 'siret',
  /** Texte court */
  Text: 'text',
  /** Texte long */
  Textarea: 'textarea',
  /** Titre identité */
  TitreIdentite: 'titre_identite',
  /** Oui/Non */
  YesNo: 'yes_no'
} as const;

export type TypeDeChamp = typeof TypeDeChamp[keyof typeof TypeDeChamp];
export const TypeOrganisme = {
  /** Administration centrale */
  AdministrationCentrale: 'administration_centrale',
  /** Association */
  Association: 'association',
  /** Autre */
  Autre: 'autre',
  /** Collectivité territoriale */
  CollectiviteTerritoriale: 'collectivite_territoriale',
  /** Établissement d’enseignement */
  EtablissementEnseignement: 'etablissement_enseignement',
  /** Opérateur d’État */
  OperateurDEtat: 'operateur_d_etat',
  /** Service déconcentré de l’État */
  ServiceDeconcentreDeLEtat: 'service_deconcentre_de_l_etat'
} as const;

export type TypeOrganisme = typeof TypeOrganisme[keyof typeof TypeOrganisme];
/** Éreur de validation */
export type ValidationError = {
  __typename?: 'ValidationError';
  /** A description of the error */
  message: Scalars['String']['output'];
};

/** Message d’alerte */
export type WarningMessage = {
  __typename?: 'WarningMessage';
  /** La description de l’alerte */
  message: Scalars['String']['output'];
};

export type YesNoChamp = Champ & {
  __typename?: 'YesNoChamp';
  /** L’identifiant du champDescriptor de ce champ */
  champDescriptorId: Scalars['String']['output'];
  /**
   * Les colonnes sont des données associées à un champ. ex: Pour un champ adresse,
   * nous pouvons renvoyer les composant (rue, code postal, departement, region)
   * sous formes de colonne
   */
  columns: Array<Column>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  prefilled: Scalars['Boolean']['output'];
  /** La valeur du champ sous forme texte. */
  stringValue?: Maybe<Scalars['String']['output']>;
  /** Date de dernière modification du champ. */
  updatedAt: Scalars['ISO8601DateTime']['output'];
  value?: Maybe<Scalars['Boolean']['output']>;
};

export type YesNoChampDescriptor = ChampDescriptor & {
  __typename?: 'YesNoChampDescriptor';
  /**
   * Description des champs d’un bloc répétable.
   * @deprecated Utilisez le champ `RepetitionChampDescriptor.champ_descriptors` à la place.
   */
  champDescriptors?: Maybe<Array<ChampDescriptor>>;
  /** Description du champ. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Libellé du champ. */
  label: Scalars['String']['output'];
  /** Est-ce que le champ est obligatoire ? */
  required: Scalars['Boolean']['output'];
  /**
   * Type de la valeur du champ.
   * @deprecated Utilisez le champ `__typename` à la place.
   */
  type: TypeDeChamp;
};
