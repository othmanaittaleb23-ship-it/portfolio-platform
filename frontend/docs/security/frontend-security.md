# Frontend Security Baseline - Engineering Portfolio

## 1. Règles générales de sécurité
- **Absence de secrets** : Interdiction formelle d'inclure des clés d'API secrètes, des mots de passe ou des tokens dans le code source Angular.
- **Variables d'environnement** : Utiliser exclusivement `src/environments/environment.ts` (et `.development.ts`) pour les configurations d'URL.

## 2. Protection contre les failles XSS (Cross-Site Scripting)
- Éviter d'utiliser `bypassSecurityTrustHtml` ou le rendu de HTML non sécurisé dans les templates Angular, sauf validation stricte et nettoyage préalable (*Sanitization*).
- Privilégier le binding de données Angular (`{{ variable }}`) qui protège nativement contre les injections de scripts.

## 3. Gestion des dépendances
- Exécuter régulièrement des audits de sécurité sur les packages npm :
  ```bash
  npm audit