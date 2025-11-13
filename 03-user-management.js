// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
    const admins = users.filter(user => user.estAdmin);
    return admins.map(user => user.nom);
}

// Exemple de test avec console.log
const users = [
    { nom: "Alice", age: 25, estAdmin: true },
    { nom: "Bob", age: 30, estAdmin: false },
    { nom: "Charlie", age: 22, estAdmin: true },
    { nom: "David", age: 28, estAdmin: false },
];

console.log(whoIsAdmin(users)); // ["Alice", "Charlie"]

module.exports = {
    whoIsAdmin,
};

