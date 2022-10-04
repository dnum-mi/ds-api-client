"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrganisme = exports.TypeDeChamp = exports.TitreIdentiteGrantType = exports.Order = exports.GeoAreaSource = exports.EntrepriseEtatAdministratif = exports.DossierState = exports.DossierDeclarativeState = exports.DemarcheState = exports.Civilite = exports.AddressType = void 0;
var AddressType;
(function (AddressType) {
    AddressType["Housenumber"] = "housenumber";
    AddressType["Street"] = "street";
    AddressType["Municipality"] = "municipality";
    AddressType["Locality"] = "locality";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
var Civilite;
(function (Civilite) {
    Civilite["M"] = "M";
    Civilite["Mme"] = "Mme";
})(Civilite = exports.Civilite || (exports.Civilite = {}));
var DemarcheState;
(function (DemarcheState) {
    DemarcheState["Brouillon"] = "brouillon";
    DemarcheState["Publiee"] = "publiee";
    DemarcheState["Close"] = "close";
    DemarcheState["Depubliee"] = "depubliee";
})(DemarcheState = exports.DemarcheState || (exports.DemarcheState = {}));
var DossierDeclarativeState;
(function (DossierDeclarativeState) {
    DossierDeclarativeState["EnInstruction"] = "en_instruction";
    DossierDeclarativeState["Accepte"] = "accepte";
})(DossierDeclarativeState = exports.DossierDeclarativeState || (exports.DossierDeclarativeState = {}));
var DossierState;
(function (DossierState) {
    DossierState["EnConstruction"] = "en_construction";
    DossierState["EnInstruction"] = "en_instruction";
    DossierState["Accepte"] = "accepte";
    DossierState["Refuse"] = "refuse";
    DossierState["SansSuite"] = "sans_suite";
})(DossierState = exports.DossierState || (exports.DossierState = {}));
var EntrepriseEtatAdministratif;
(function (EntrepriseEtatAdministratif) {
    EntrepriseEtatAdministratif["Actif"] = "Actif";
    EntrepriseEtatAdministratif["Ferme"] = "Ferme";
})(EntrepriseEtatAdministratif = exports.EntrepriseEtatAdministratif || (exports.EntrepriseEtatAdministratif = {}));
var GeoAreaSource;
(function (GeoAreaSource) {
    GeoAreaSource["Cadastre"] = "cadastre";
    GeoAreaSource["SelectionUtilisateur"] = "selection_utilisateur";
})(GeoAreaSource = exports.GeoAreaSource || (exports.GeoAreaSource = {}));
var Order;
(function (Order) {
    Order["Asc"] = "ASC";
    Order["Desc"] = "DESC";
})(Order = exports.Order || (exports.Order = {}));
var TitreIdentiteGrantType;
(function (TitreIdentiteGrantType) {
    TitreIdentiteGrantType["FranceConnect"] = "france_connect";
    TitreIdentiteGrantType["PieceJustificative"] = "piece_justificative";
})(TitreIdentiteGrantType = exports.TitreIdentiteGrantType || (exports.TitreIdentiteGrantType = {}));
var TypeDeChamp;
(function (TypeDeChamp) {
    TypeDeChamp["Text"] = "text";
    TypeDeChamp["Textarea"] = "textarea";
    TypeDeChamp["Date"] = "date";
    TypeDeChamp["Datetime"] = "datetime";
    TypeDeChamp["Number"] = "number";
    TypeDeChamp["DecimalNumber"] = "decimal_number";
    TypeDeChamp["IntegerNumber"] = "integer_number";
    TypeDeChamp["Checkbox"] = "checkbox";
    TypeDeChamp["Civilite"] = "civilite";
    TypeDeChamp["Email"] = "email";
    TypeDeChamp["Phone"] = "phone";
    TypeDeChamp["Address"] = "address";
    TypeDeChamp["YesNo"] = "yes_no";
    TypeDeChamp["DropDownList"] = "drop_down_list";
    TypeDeChamp["MultipleDropDownList"] = "multiple_drop_down_list";
    TypeDeChamp["LinkedDropDownList"] = "linked_drop_down_list";
    TypeDeChamp["Pays"] = "pays";
    TypeDeChamp["Regions"] = "regions";
    TypeDeChamp["Departements"] = "departements";
    TypeDeChamp["Communes"] = "communes";
    TypeDeChamp["Engagement"] = "engagement";
    TypeDeChamp["HeaderSection"] = "header_section";
    TypeDeChamp["Explication"] = "explication";
    TypeDeChamp["DossierLink"] = "dossier_link";
    TypeDeChamp["PieceJustificative"] = "piece_justificative";
    TypeDeChamp["Siret"] = "siret";
    TypeDeChamp["Carte"] = "carte";
    TypeDeChamp["Repetition"] = "repetition";
    TypeDeChamp["TitreIdentite"] = "titre_identite";
    TypeDeChamp["Iban"] = "iban";
    TypeDeChamp["AnnuaireEducation"] = "annuaire_education";
    TypeDeChamp["Cnaf"] = "cnaf";
    TypeDeChamp["Dgfip"] = "dgfip";
    TypeDeChamp["PoleEmploi"] = "pole_emploi";
    TypeDeChamp["Mesri"] = "mesri";
})(TypeDeChamp = exports.TypeDeChamp || (exports.TypeDeChamp = {}));
var TypeOrganisme;
(function (TypeOrganisme) {
    TypeOrganisme["AdministrationCentrale"] = "administration_centrale";
    TypeOrganisme["Association"] = "association";
    TypeOrganisme["CollectiviteTerritoriale"] = "collectivite_territoriale";
    TypeOrganisme["EtablissementEnseignement"] = "etablissement_enseignement";
    TypeOrganisme["OperateurDEtat"] = "operateur_d_etat";
    TypeOrganisme["ServiceDeconcentreDeLEtat"] = "service_deconcentre_de_l_etat";
    TypeOrganisme["Autre"] = "autre";
})(TypeOrganisme = exports.TypeOrganisme || (exports.TypeOrganisme = {}));
//# sourceMappingURL=types.js.map