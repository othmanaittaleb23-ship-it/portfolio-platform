# Design System v1 — Portfolio

> Version : 1.0  
> Statut : Validé (TASK-FE-003)  
> Fichier source : `src/styles.scss`

## 🎯 Objectif

Ce design system centralise toutes les décisions visuelles du portfolio
(couleurs, typographie, espacements, arrondis, ombres) pour garantir :

- **Cohérence** visuelle sur tout le site
- **Maintenance** facile (changer une valeur = changer tout le site)
- **Scalabilité** pour les futurs composants

## 🎨 Palette de couleurs

### Couleurs principales
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--primary-color` | `#2563eb` | Boutons, liens, accents principaux |
| `--primary-hover` | `#1d4ed8` | État hover des éléments principaux |
| `--secondary-color` | `#0ea5e9` | Accent secondaire (cyan) |

### Fonds (backgrounds)
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--bg-dark` | `#0f172a` | Hero, footer, mode sombre |
| `--bg-dark-card` | `#1e293b` | Cartes sur fond sombre |
| `--bg-light` | `#f8fafc` | Fond global clair |
| `--bg-white` | `#ffffff` | Cartes, modales, éléments blancs |

### Textes
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--text-main` | `#334155` | Texte principal |
| `--text-muted` | `#64748b` | Texte secondaire / discret |
| `--text-light` | `#f1f5f9` | Texte sur fond sombre |

### États & bordures
| Variable | Valeur | Usage |
|----------|--------|-------|
| `--border-color` | `#cbd5e1` | Bordures subtiles |
| `--success-color` | `#10b981` | Succès / validé |
| `--error-color` | `#ef4444` | Erreur / alerte |

## ✍️ Typographie

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--font-sans` | Inter + fallbacks système | Texte courant |
| `--font-heading` | Poppins + fallback sans | Titres |

**Poids recommandés** :
- Titres : 600–700
- Texte courant : 400–500
- Boutons : 600

## 📏 Espacements (Spacing Scale)

Système en **multiples de 4px**.

| Variable | Valeur | Usage type |
|----------|--------|------------|
| `--spacing-xs` | 4px | Détails, gaps icon+texte |
| `--spacing-sm` | 8px | Petits paddings internes |
| `--spacing-md` | 16px | Espacement standard |
| `--spacing-lg` | 24px | Entre sections |
| `--spacing-xl` | 32px | Autour des grandes sections |
| `--spacing-xxl` | 48px | Entre grandes zones |

## 🔲 Arrondis (Border Radius)

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--radius-sm` | 4px | Petits éléments |
| `--radius-md` | 8px | Boutons, inputs |
| `--radius-lg` | 12px | Cartes |
| `--radius-full` | 9999px | Pastilles, avatars |

## 🌑 Ombres (Shadows)

| Variable | Usage |
|----------|-------|
| `--shadow-sm` | Éléments au repos |
| `--shadow-md` | Cartes au repos |
| `--shadow-lg` | Éléments au survol, modales |

## 🧩 Composants disponibles

Le design system fournit des classes prêtes à l'emploi :

### Boutons
- `.btn` — classe de base
- `.btn-primary` — bouton bleu principal
- `.btn-outline` — bouton contour

### Cartes
- `.card` — carte avec ombre et effet de survol

### Badges
- `.badge` — pastille de base
- `.badge-primary` — pastille bleue
- `.badge-success` — pastille verte

### Formulaires
- `.form-group` — conteneur label + input
- Styles automatiques pour `input`, `textarea`, `select`

## 💡 Règles d'utilisation

1. **Toujours utiliser une variable** au lieu d'une valeur en dur.

   ❌ Mauvais :
   ```scss
   .card { padding: 16px; color: #334155; }