<div align="center">

# Ndeye Cisse
### Administratrice Systèmes, Réseaux & DevOps

Portfolio interactif · Windows Server · Linux · Docker · Kubernetes · CI/CD

**[🌐 Voir le portfolio → cis-debug.github.io](https://cis-debug.github.io)**

[LinkedIn](https://www.linkedin.com/in/ndeye-cy-8a6a8b3ba) · [GitHub](https://github.com/cis-debug) · [E-mail](mailto:ndeye.cisse.96@outlook.com)

</div>

---

## 🎯 À propos

Technicienne supérieure systèmes et réseaux, je recherche un **stage de 6 mois du 23 avril au 22 octobre 2027** en administration systèmes, réseaux et DevOps (Île-de-France).

Ce dépôt contient le code de mon portfolio. Je l'ai pensé comme une infrastructure : un terminal pour le visiter, mon parcours présenté comme un pipeline CI/CD, et une supervision simulée. L'objectif est de montrer mes compétences techniques, mais aussi ma façon de travailler.

## ✨ Ce que contient le site

| Section | Contenu |
|---|---|
| **Accueil** | Présentation, compte à rebours jusqu'à ma disponibilité, CV à télécharger |
| **Terminal** | Un vrai mini-terminal : `help`, `whoami`, `skills`, `projects`, `neofetch`, `sudo hire-me`… (historique ↑↓, complétion avec Tab) |
| **Parcours** | Ma formation sous forme de pipeline CI/CD (Build → Test → Deploy → Monitor), rejouable |
| **Compétences** | Systèmes & Réseaux, DevOps & Cloud, Scripting, Sécurité, Outils : chaque outil indique où je l'ai utilisé |
| **Projets** | Infrastructure Windows Server, projet DevOps (CI/CD, Docker, Kubernetes), supervision Grafana/Prometheus, projets Cisco & OpenClassrooms, avec schémas d'architecture en ASCII |
| **Mini-supervision** | Courbes CPU / RAM / requêtes et statut des services, avec un bouton « Simuler une panne » (simulation, pas de vraies données) |
| **Soft skills** | Cartes à retourner et mini-jeu de gestion d'incident |
| **Contact** | E-mail, LinkedIn, GitHub, formulaire qui ouvre la messagerie |

**Et aussi** : version **française / anglaise**, thème clair / sombre, palette de commandes (`Ctrl + K`), fond animé, et quelques surprises cachées (essayez le code Konami ↑↑↓↓←→←→BA).

## 🛠️ Technologies

- **HTML5, CSS3, JavaScript** : sans framework, sans build, sans dépendance
- **Canvas** pour le fond animé et les courbes de supervision
- **Google Fonts** : Space Grotesk et JetBrains Mono
- **GitHub Pages** pour l'hébergement

## 📁 Structure du projet

```
.
├── index.html                 # Structure de la page et textes en français
├── style.css                  # Design, thèmes clair/sombre, responsive
├── script.js                  # Interactions, données bilingues, dictionnaire anglais
├── README.md
└── assets/
    ├── avatar.png             # Mon illustration
    └── CV_Ndeye_Cisse.pdf     # Mon CV (bouton « Télécharger mon CV »)
```

## 🚀 Lancer le site en local

Aucune installation n'est nécessaire. Depuis le dossier du projet :

```bash
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000 dans votre navigateur.

## ✏️ Personnaliser

**Mes informations** : le bloc `CONFIG`, tout en haut de `script.js`, contient l'e-mail, le téléphone, les liens LinkedIn et GitHub, les dates de disponibilité et le chemin du CV.

**Les contenus** : dans `script.js`, les tableaux `STAGES` (parcours), `SKILLS` (compétences), `PROJECTS` (projets), `SOFT` (soft skills) et `GAME` (mini-jeu) regroupent les textes en français et en anglais.

**Les couleurs** : elles sont définies au début de `style.css`.

| Variable | Rôle |
|---|---|
| `--accent` | Lavande, couleur principale |
| `--accent2` | Corail, couleur secondaire (numéros de sections, détails, terminal) |
| `--mint` | Vert, réservé à la pastille de disponibilité |

**Le CV** : remplacez le fichier `assets/CV_Ndeye_Cisse.pdf` en gardant le même nom.

## 🌍 Version française / anglaise

Le texte français est écrit directement dans `index.html` (attributs `data-i18n`). Les traductions anglaises sont dans le dictionnaire `EN` de `script.js`, et les contenus dynamiques utilisent des paires français / anglais. Le bouton **EN / FR** en haut à droite change la langue, et le choix est mémorisé dans le navigateur.

Pour ajouter ou modifier un texte, changez-le dans `index.html`, puis son équivalent anglais dans `EN` avec la même clé.

## 🌐 Déploiement sur GitHub Pages

1. Le dépôt s'appelle `cis-debug.github.io` : pour une page personnelle, le nom doit être `pseudo.github.io`.
2. Dans **Settings → Pages → Build and deployment**, choisir **Deploy from a branch**.
3. Sélectionner la branche **main** et le dossier **/ (root)**, puis **Save**.
4. Après une à deux minutes, le site est en ligne sur https://cis-debug.github.io.

Chaque `git push` sur la branche `main` met le site à jour automatiquement.

## ♿ Accessibilité et performances

- Navigation complète au clavier, lien « Aller au contenu », focus visible
- Respect de `prefers-reduced-motion` (animations réduites)
- Affichage adapté du mobile au grand écran
- Aucune bibliothèque externe : chargement rapide

## 📬 Contact

- **E-mail** : [ndeye.cisse.96@outlook.com](mailto:ndeye.cisse.96@outlook.com)
- **LinkedIn** : [ndeye-cy-8a6a8b3ba](https://www.linkedin.com/in/ndeye-cy-8a6a8b3ba)
- **GitHub** : [cis-debug](https://github.com/cis-debug)

---

<div align="center">

© 2026 Ndeye Cisse · Tous droits réservés

*Fait à la main, en HTML, CSS et JavaScript.*

</div>
