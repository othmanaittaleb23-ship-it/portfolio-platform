# Git Workflow & Branching Strategy

## 1. Structure des branches

- **`main`** : Version stable et déployée en production.
- **`develop`** : Branche principale de développement.
- **`feature/<TICKET-ID>-<description>`** : Nouvelle fonctionnalité (ex: `feature/US-FE-001-homepage`).
- **`bugfix/<TICKET-ID>-<description>`** : Correction de bug.
- **`hotfix/<TICKET-ID>-<description>`** : Correction urgente en production.

## 2. Règle des Pull Requests (PR)

1. Créer une branche `feature/*` depuis `develop`.
2. Effectuer les commits avec la convention *Conventional Commits* (ex: `feat:`, `fix:`, `docs:`).
3. Soumettre une Pull Request vers `develop`.
4. Validation requise par au moins 1 pair (Code Review par Othmane ou Imane) + passage des tests CI.