// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [];

function signUp(nom, email, password, confirmPassword) {
    // Vérifier si l'email existe déjà
    const userExist = baseDeDonnees.find(user => user.email === email);
    if (userExist) {
        return "Erreur : cet email existe déjà.";
    }

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
        return "Erreur : les mots de passe ne correspondent pas.";
    }

    // Créer un nouvel utilisateur
    const newUser = {
        id: baseDeDonnees.length + 1, // id unique simple
        nom,
        email,
        password,
        estConnecte: false,
        estBloque: false
    };

    baseDeDonnees.push(newUser);
    return newUser;
}

function login(email, password) {
    const user = baseDeDonnees.find(user => user.email === email);

    if (!user) {
        return "Erreur : utilisateur introuvable.";
    }

    if (user.password !== password) {
        return "Erreur : mot de passe incorrect.";
    }

    if (user.estBloque) {
        return "Erreur : compte bloqué.";
    }

    user.estConnecte = true;
    return user;
}
console.log(login("alice@mail.com", "wrong"));


module.exports = { baseDeDonnees, signUp, login };

