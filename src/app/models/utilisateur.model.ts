export class utilisateurModel {


    constructor(
        public id: number = -1,
        public nom: string,
        public prenom: string,
    ) { }
}

export interface Utilisateur {
    id: number,
    nom: string,
    prenom: string,
}