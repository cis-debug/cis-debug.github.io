# Portfolio — Ndeye Cisse

Site statique (HTML + CSS + JS, zéro dépendance) prêt pour **GitHub Pages**.

## Structure

```
.
├── index.html
├── style.css
├── script.js
└── assets/
    ├── avatar.png            # votre illustration
    └── CV_Ndeye_Cisse.pdf    # votre CV (bouton « Télécharger »)
```

## Personnaliser (2 minutes)

Ouvrez `script.js`, bloc `CONFIG` tout en haut :

- `linkedin` et `github` : déjà renseignés (les boutons « Code sur GitHub » pointent vers votre profil ; remplacez-les par les liens de vrais dépôts si vous voulez)
- `email`, `phone`, dates de disponibilité : déjà remplis d'après votre CV

**FR / EN** : le texte français est dans `index.html` (attributs `data-i18n`), l'anglais dans le dictionnaire `EN` de `script.js`. Le bouton « EN / FR » en haut à droite change la langue (mémorisée dans le navigateur).

Les textes des compétences, projets et soft skills sont aussi dans `script.js` (`SKILLS`, `PROJECTS`, `SOFT`, `STAGES`, `GAME`).
Relisez les **soft skills** et le contenu des **compétences** : ils sont à votre image si vous les reformulez avec vos propres mots.

## Publier sur GitHub Pages

1. Créez un dépôt public nommé `votre-pseudo.github.io` (URL : `https://votre-pseudo.github.io`) ou n'importe quel nom (URL : `https://votre-pseudo.github.io/nom-du-depot`).
2. Déposez-y tous les fichiers (en gardant le dossier `assets/`).
3. Dépôt → **Settings → Pages → Build and deployment** : Source `Deploy from a branch`, branche `main`, dossier `/ (root)` → **Save**.
4. Attendez 1 à 2 minutes : le site est en ligne.

En local : `python3 -m http.server 8000` puis http://localhost:8000.

## Fonctionnalités à montrer en entretien

- Terminal interactif (`help`, `skills`, `neofetch`, `sudo hire-me`, historique ↑↓, Tab)
- Parcours présenté comme un pipeline CI/CD rejouable
- Compétences par catégorie, avec le contexte d'utilisation
- Mini-supervision simulée (Grafana-like) avec bouton « panne »
- Mini-jeu de gestion d'incident
- Palette de commandes `Ctrl + K`, thème clair/sombre, code Konami
- Accessible (clavier, `prefers-reduced-motion`) et responsive
