// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
	if (notes.length === 0) return "Échoué"; // gérer le tableau vide

    // Calcul de la somme
    const sum = notes.reduce((acc, note) => acc + note, 0);

    // Calcul de la moyenne
    const moyenne = sum / notes.length;

    // Retourner le message selon la moyenne
    return moyenne >= 10 ? "Réussi" : "Échoué";
}

module.exports = {
	averageNote,
};
console.log(averageNote([15])); 


