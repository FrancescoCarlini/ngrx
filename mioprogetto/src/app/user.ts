export class User {
    username: string;
    nome: string;
    cognome: string;
    email: string;
    isAssociato: boolean;

    constructor(username: string, nome: string, cognome: string, email: string, isAssociato: boolean){
        this.username = username;
        this.nome = nome;
        this.cognome = cognome
        this.email = email
        this.isAssociato = isAssociato
    }
}
