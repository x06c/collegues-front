import { Collegue } from "../models/collegue";

let collegueMock: Collegue = {
    matricule: "4efjd89",
    nom: "Toto",
    prenoms: ["leprenom1", 'leprénom2'],
    email: "toto@mail.fr",
    dateNaissance: new Date(Date.UTC(1985,4,11)),
    photoUrl: "maPhoto.jpg"
}

export default collegueMock;