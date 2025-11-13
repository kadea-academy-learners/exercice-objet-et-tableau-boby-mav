// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
function showStudentBulletin(eleves) {
    return eleves.map(ele => {
        const notes = ele.notes;
        let moyenne = 0;

        if (notes.length > 0) {
            const somme = notes.reduce((acc, n) => acc + n, 0);
            moyenne = +(somme / notes.length).toFixed(2); // moyenne arrondie à 2 décimales
        }

        let commentaire = "";
        if (moyenne >= 16) {
            commentaire = "Excellent";
        } else if (moyenne >= 14) {
            commentaire = "Très Bien";
        } else if (moyenne >= 12) {
            commentaire = "Bien";
        } else if (moyenne >= 10) {
            commentaire = "Passable";
        } else {
            commentaire = "À revoir";
        }

        return {
            nom: ele.nom,
            moyenne,
            commentaire
        };
    });
}

const testEleves = [
    { nom: "Alice", notes: [18, 16, 17] },
    { nom: "Bob", notes: [14, 15, 14] },
    { nom: "Charlie", notes: [10, 12, 11] },
    { nom: "David", notes: [5, 8, 9] },
    { nom: "Eva", notes: [] }
];

console.log(showStudentBulletin(testEleves));


module.exports = {
	showStudentBulletin,
};