\# Documentation de l'Architecture Frontend - Engineering Portfolio



Ce document décrit l'architecture, l'organisation des dossiers et les règles de conception de l'application frontend (Angular).



\## 1. Vue d'ensemble de la structure (`src/app/`)



L'application suit une architecture modulaire et propre, séparant les responsabilités en fonction de leur rôle global, partagé, ou métier.



```text

src/app/

├── core/         # Éléments uniques et globaux (Singletons, services globaux, guards, interceptors)

├── shared/       # Composants réutilisables, directives et pipes sans logique métier spécifique

├── layout/       # Composants structurels de mise en page (navbar, footer, sidebar)

└── features/     # Modules fonctionnels / pages de l'application (home, about, skills, projects, blog, contact)

