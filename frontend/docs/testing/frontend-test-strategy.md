# Frontend Testing Strategy - Engineering Portfolio

## 1. Objectifs
Garantir la non-régression, la fiabilité des composants visuels et la fluidité des parcours utilisateurs de l'application Angular.

## 2. Niveaux de test
- **Tests Unitaires (Jasmine / Karma ou Jest)** : Validation de la logique métier, des pipes et des services de données mockées.
- **Tests de Composants** : Validation du rendu visuel et des interactions (clics, états des boutons, responsive).
- **Tests E2E (Cypress / Playwright)** : Simulation des parcours critiques (visiter la page d'accueil, cliquer sur un projet, soumettre le formulaire de contact).

## 3. Composants et Parcours Critiques
- **Navbar** : Navigation fluide sur desktop et menu burger sur mobile.
- **Projects List** : Affichage correct des cartes de projets avec leurs technos (badges).
- **Contact Form** : Validation des champs obligatoires et simulation de l'envoi.

## 4. Convention de nommage
- Fichiers de test : `<nom-du-composant>.spec.ts`