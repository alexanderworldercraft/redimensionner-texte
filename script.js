// Redimensionner les textes
$(document).ready(function() {
    // Ajoute un gestionnaire d'événements pour exécuter une fonction quand un bouton dans un élément avec la classe group-test est cliqué.
    $(".group-test button").click(function(){
        // Stocke la référence au bouton cliqué
        var clickedButton = this;

        // Pour chaque élément avec la classe redimensionner, exécute la fonction suivante.
        $(".redimensionner").each(function() {
            // Crée une variable texte qui fait référence à l'élément actuel.
            var texte = $(this);
            // Récupère la taille de la police actuelle de cet élément et la stocke dans taille.
            var taille = texte.css('fontSize');
            // Convertit la taille de la police en un nombre flottant (en ignorant l'unité comme px ou em), et le stocke dans nombre.
            var nombre = parseFloat(taille, 10);
            // Extrait les deux derniers caractères de la chaîne taille (qui devraient être l'unité comme px ou em) et les stocke dans unite.
            var unite = taille.slice(-2);

            // Vérifie si l'ID du bouton cliqué est 'plus'.
            if(clickedButton.id == 'plus'){
                // Si oui, augmente la taille de la police de 10% (multiplie nombre par 1.1).
                nombre *= 1.1;
            }
            // Sinon, vérifie si l'ID du bouton cliqué est 'moins'.
            else if(clickedButton.id == 'moins') {
                // Si oui, diminue la taille de la police de 10% (divise nombre par 1.1).
                nombre /= 1.1;
            }
            // Applique la nouvelle taille de police à l'élément actuel.
            texte.css("fontSize", nombre + unite);
        });
    })
})