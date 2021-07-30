export class Collegue {
    matricule!: string;
    nom!: string;
    prenoms!: string[];
    email!: string;
    dateNaissance!: Date;
    photoUrl!: string;

    constructor(
        matricule: string,
        nom: string,
        prenoms: string,
        email: string,
        dateNaissance: Date,
        photoUrl: string
    ) {}
}
