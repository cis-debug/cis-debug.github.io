/* ==========================================================
   Portfolio — Ndeye Cisse   (FR / EN)
   Le texte français statique est dans index.html (data-i18n).
   Ici : dictionnaire EN, données bilingues, et toutes les interactions.
   ========================================================== */
(() => {
  'use strict';

  // ---------- À PERSONNALISER ----------
  const CONFIG = {
    email: 'ndeye.cisse.96@outlook.com',
    phone: '07 53 57 53 64',
    linkedin: 'https://www.linkedin.com/in/ndeye-cy-8a6a8b3ba',
    github: 'https://github.com/cis-debug',
    availableFrom: '2027-04-23T00:00:00+02:00',
    availableTo: '2027-10-22T23:59:59+02:00',
    cv: 'assets/CV_Ndeye_Cisse.pdf'
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  // ---------- Langue ----------
  const B = (fr, en) => ({ fr, en });
  let lang = store.get('lang') || ((navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');
  if (lang !== 'fr' && lang !== 'en') lang = 'fr';
  const L = o => (o && typeof o === 'object' && 'fr' in o) ? o[lang] : o;

  // Traductions anglaises des textes statiques de index.html (clé = data-i18n)
  const EN = {
    skip: 'Skip to content',
    nav_terminal: 'Terminal', nav_path: 'Journey', nav_skills: 'Skills', nav_projects: 'Projects', nav_soft: 'Soft skills', nav_contact: 'Contact',
    aria_home: 'Home', aria_main_nav: 'Main navigation', aria_palette: 'Open command palette', aria_lang: 'Switch language',
    aria_theme: 'Toggle theme', aria_menu: 'Menu', aria_down: 'Scroll down', aria_cmd: 'Command', aria_log: 'Pipeline log',
    aria_palette_dlg: 'Command palette', aria_search: 'Search an action',
    hero_pill: 'Available 23 Apr – 22 Oct 2027 · 6-month internship',
    hero_lead: 'Systems & Network Administrator. I put my <strong>Windows Server, Linux, Docker, Kubernetes and CI/CD</strong> skills to work for the <strong>reliability</strong>, <strong>monitoring</strong> and <strong>automation</strong> of your infrastructure.',
    cta_projects: 'See my projects →', cta_cv: 'Download my CV', cta_term: 'Try the terminal',
    cd_days: 'days', cd_hours: 'hours', cd_min: 'min', cd_sec: 'sec',
    h_terminal: 'The terminal',
    s_terminal: 'A sysadmin\'s portfolio is best explored from the command line. Type <code>help</code> (or click a suggestion).',
    h_path: 'My journey, as a CI/CD pipeline',
    s_path: 'Each step of my education is a pipeline stage. Click a stage or run it.',
    replay: '▶ Run the pipeline',
    h_skills: 'Technical skills',
    s_skills: 'Pick a category, then click a tool to see where I used it.',
    lang_it: '🇮🇹 Italian', lang_en: '🇬🇧 English', lang_bm: '🌍 Bambara',
    h_projects: 'Technical projects',
    s_projects: 'Architectures are drawn in ASCII, like in real infra docs.',
    mon_title: '📈 Mini monitoring', mon_small: '(simulation, not real data)', mon_break: '💥 Simulate an outage',
    mon_req: 'Requests/s', mon_ok: 'All services are operational.',
    h_soft: 'Soft skills',
    s_soft: 'Flip the cards, then test yourself against a 2 a.m. incident.',
    game_title: '🚨 Mini-game: incident response',
    h_contact: 'Let\'s work together',
    s_contact: 'I am looking for a 6-month internship (23 April to 22 October 2027) in the Paris region, as a systems, network & DevOps administrator.',
    copy: 'copy', loc: 'Île-de-France, France',
    f_name: 'Your name', f_company: 'Company', f_msg: 'Message', f_send: 'Send by email →',
    f_note: 'Opens your email app (no data is stored).',
    foot_made: 'Handmade with HTML, CSS and JS · hosted on GitHub Pages',
    foot_hint: 'Tip: try the Konami code ↑↑↓↓←→←→BA',
    pal_ph: 'Type a command… (go to, theme, CV…)',
    meta_title: 'Ndeye Cisse — Systems, Network & DevOps Administrator',
    meta_desc: 'Portfolio of Ndeye Cisse, systems, network & DevOps administrator (Windows Server, Linux, Docker, Kubernetes, CI/CD). Looking for a 6-month internship from 23 Apr to 22 Oct 2027.'
  };

  // Textes dynamiques (créés par le JS)
  const T = {
    fr: {
      cdBefore: 'avant ma disponibilité', cdNow: 'restants dans ma période de disponibilité', cdEnd: 'période terminée, contactez-moi quand même 🙂',
      copied: 'Copié ✔', copyFail: 'Copie impossible', mailCopied: 'E-mail copié ✔', root: '🟢 Accès root accordé', matrixOff: 'Mode Matrix désactivé (mouvement réduit)',
      welcome: 'Bienvenue 👋 Tapez <span class="k">help</span> pour commencer.',
      help: 'Commandes : <span class="k">whoami · about · skills · projects · pipeline · languages · contact · neofetch · cv · theme · lang · matrix · goto &lt;section&gt; · sudo hire-me · clear</span>',
      whoami: 'Ndeye Cisse · administratrice systèmes & réseaux · cap sur le DevOps.',
      about: ['Je mets mes acquis <span class="k">Windows Server, Linux, Docker, Kubernetes et CI/CD</span> au service de la fiabilité,', 'de la supervision et de l\'automatisation des infrastructures.', 'Recherche : stage de 6 mois · <span class="w">23/04/2027 → 22/10/2027</span>'],
      languages: '🇮🇹 Italien C2 · 🇬🇧 Anglais B2 · 🌍 Bambara C2',
      contactHint: 'Île-de-France · <span class="m">tapez "goto contact" pour le formulaire</span>',
      neofetch: ['<span class="k">ndeye</span>@<span class="k">portfolio</span>', '-----------------', 'OS       : Ndeye OS 2027 (stable)', 'Shell    : bash / PowerShell', 'Cloud    : AWS · Azure', 'Orchestr.: Kubernetes', 'CI/CD    : GitLab CI · Jenkins · GitHub Actions', 'Monitor  : Grafana · Prometheus · Zabbix', 'Langues  : it · en · bm', 'Uptime   : motivée à 100%'],
      cvDl: 'Téléchargement du CV…', themeDone: 'Thème changé.', langDone: 'Langue : Français', wake: 'Wake up, Ndeye…',
      exit: 'Impossible de quitter : le recrutement est en cours. 😄',
      sections: 'Sections : ', notFound: n => `${esc(n)} : commande introuvable. Tapez <span class="k">help</span>.`,
      sudoPw: '[sudo] mot de passe pour recruteur : ********', sudoOk: '✔ Candidature acceptée. Envoi de l\'e-mail…', mailSubject: 'Proposition de stage',
      sudoOther: 'Bien essayé. Essayez plutôt <span class="k">sudo hire-me</span>.', rm: 'Permission refusée : cette infra est bien sauvegardée. 😉',
      logHint: 'Cliquez sur « Lancer le pipeline » pour rejouer mon parcours.', logStart: '▶ pipeline ndeye/parcours démarré',
      logOk: n => `✔ ${n} réussi`, logDone: '🎉 Pipeline vert : prête pour le stage 2027',
      down: v => `🔴 ALERTE : ${v} ne répond plus. Investigation en cours…`, fix: v => `🟡 Cause identifiée sur ${v}. Correctif appliqué, redémarrage…`,
      back: v => `🟢 ${v} est rétabli. Post-mortem à rédiger. Tous les services sont opérationnels.`,
      details: 'Voir le détail + architecture', gh: 'Code sur GitHub →', flipHint: 'cliquer pour retourner',
      all: 'Tous', step: 'ÉTAPE', next: 'Étape suivante →', seeScore: 'Voir mon score', again: '↻ Rejouer', skillsShown: 'Compétences démontrées',
      scoreMsgs: ['On y retourne ? Relancez une partie 😉', 'Bon début, encore un peu de sang-froid !', 'Presque parfait !', 'Gestion d\'incident exemplaire 🏆'],
      palGo: 'aller à', palAction: 'action', palSecret: 'secret', palNone: 'Aucun résultat'
    },
    en: {
      cdBefore: 'until I am available', cdNow: 'left in my availability window', cdEnd: 'window is over, contact me anyway 🙂',
      copied: 'Copied ✔', copyFail: 'Copy failed', mailCopied: 'Email copied ✔', root: '🟢 Root access granted', matrixOff: 'Matrix mode disabled (reduced motion)',
      welcome: 'Welcome 👋 Type <span class="k">help</span> to get started.',
      help: 'Commands: <span class="k">whoami · about · skills · projects · pipeline · languages · contact · neofetch · cv · theme · lang · matrix · goto &lt;section&gt; · sudo hire-me · clear</span>',
      whoami: 'Ndeye Cisse · systems & networks administrator · heading into DevOps.',
      about: ['I put my <span class="k">Windows Server, Linux, Docker, Kubernetes and CI/CD</span> skills to work for the reliability,', 'monitoring and automation of infrastructure.', 'Looking for: 6-month internship · <span class="w">2027-04-23 → 2027-10-22</span>'],
      languages: '🇮🇹 Italian C2 · 🇬🇧 English B2 · 🌍 Bambara C2',
      contactHint: 'Île-de-France · <span class="m">type "goto contact" for the form</span>',
      neofetch: ['<span class="k">ndeye</span>@<span class="k">portfolio</span>', '-----------------', 'OS       : Ndeye OS 2027 (stable)', 'Shell    : bash / PowerShell', 'Cloud    : AWS · Azure', 'Orchestr.: Kubernetes', 'CI/CD    : GitLab CI · Jenkins · GitHub Actions', 'Monitor  : Grafana · Prometheus · Zabbix', 'Languages: it · en · bm', 'Uptime   : 100% motivated'],
      cvDl: 'Downloading CV…', themeDone: 'Theme toggled.', langDone: 'Language: English', wake: 'Wake up, Ndeye…',
      exit: 'Cannot exit: recruitment in progress. 😄',
      sections: 'Sections: ', notFound: n => `${esc(n)}: command not found. Type <span class="k">help</span>.`,
      sudoPw: '[sudo] password for recruiter: ********', sudoOk: '✔ Application accepted. Sending the email…', mailSubject: 'Internship proposal',
      sudoOther: 'Nice try. Try <span class="k">sudo hire-me</span> instead.', rm: 'Permission denied: this infra is well backed up. 😉',
      logHint: 'Click "Run the pipeline" to replay my journey.', logStart: '▶ pipeline ndeye/journey started',
      logOk: n => `✔ ${n} passed`, logDone: '🎉 Green pipeline: ready for the 2027 internship',
      down: v => `🔴 ALERT: ${v} is not responding. Investigating…`, fix: v => `🟡 Root cause found on ${v}. Fix applied, restarting…`,
      back: v => `🟢 ${v} is back. Post-mortem to write. All services are operational.`,
      details: 'See details + architecture', gh: 'Code on GitHub →', flipHint: 'click to flip',
      all: 'All', step: 'STEP', next: 'Next step →', seeScore: 'See my score', again: '↻ Play again', skillsShown: 'Skills demonstrated',
      scoreMsgs: ['Shall we go again? Start a new game 😉', 'Good start, a bit more composure!', 'Almost perfect!', 'Outstanding incident response 🏆'],
      palGo: 'go to', palAction: 'action', palSecret: 'secret', palNone: 'No results'
    }
  };
  const tt = k => T[lang][k];

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(toast.id);
    toast.id = setTimeout(() => t.classList.remove('on'), 2200);
  }

  // ---------- Données bilingues ----------
  const STAGES = [
    { icon: '🧱', name: 'Build', title: B('Baccalauréat Professionnel', 'Vocational Baccalaureate (Bac Pro)'),
      school: B('CEBANO-MONREGALESE SCL · Mondovì, Italie', 'CEBANO-MONREGALESE SCL · Mondovì, Italy'), date: '2023',
      pts: B(['Informatique, Logistique et Data', 'Bases de la gestion et de l\'analyse de données', 'Outils numériques et bureautiques', 'Organisation, traitement et suivi de l\'information'],
             ['IT, Logistics and Data', 'Basics of data management and analysis', 'Digital and office tools', 'Organising, processing and tracking information']) },
    { icon: '🧪', name: 'Test', title: B('BTS TSSR (Technicien Supérieur Systèmes et Réseaux)', 'BTS TSSR (Systems & Networks Higher Technician Diploma)'),
      school: 'SIMPLON · Montreuil', date: '2024 – 2025',
      pts: B(['Administration Windows et Linux, réseaux et sécurité', 'Virtualisation VMware et Hyper-V', 'Support utilisateurs et gestion des incidents', 'Automatisation (Python, Bash, PowerShell)',
              'Stage Administratrice Systèmes & Réseaux chez MT ENTREPRISE (04–07/2025) : environnements Windows/Linux, comptes et droits d\'accès, scripts Python/PowerShell, sécurisation et suivi des performances'],
             ['Windows and Linux administration, networks and security', 'VMware and Hyper-V virtualization', 'User support and incident management', 'Automation (Python, Bash, PowerShell)',
              'Internship as Systems & Networks Administrator at MT ENTREPRISE (Apr–Jul 2025): Windows/Linux environments, accounts and access rights, Python/PowerShell scripts, security hardening and performance monitoring']) },
    { icon: '🚀', name: 'Deploy', title: B('Ingénieur spécialisé DevOps (attestation de formation)', 'DevOps Specialist Engineer (training certificate)'),
      school: 'ISOSET · Saint-Ouen', date: '2025 – 2026',
      pts: B(['Pipelines CI/CD : GitLab CI, Jenkins, GitHub Actions', 'Docker et Kubernetes', 'Supervision et observabilité : Grafana, Prometheus, Zabbix', 'Déploiement automatisé sur AWS et Azure'],
             ['CI/CD pipelines: GitLab CI, Jenkins, GitHub Actions', 'Docker and Kubernetes', 'Monitoring and observability: Grafana, Prometheus, Zabbix', 'Automated deployment on AWS and Azure']) },
    { icon: '📡', name: 'Monitor', title: B('Bac+3/4 Administration Systèmes et Réseaux', 'Bachelor\'s level (Bac+3/4) in Systems & Networks Administration'),
      school: B('DESCODEUSES · Paris La Défense', 'DESCODEUSES · Paris La Défense'), date: B('2026 – 2027 (en cours)', '2026 – 2027 (ongoing)'),
      pts: B(['Windows, Linux et Active Directory', 'Virtualisation, cloud, sauvegardes et sécurité opérationnelle', 'Réseaux avancés et architecture d\'infrastructures', 'Scripting, conteneurisation et Infrastructure as Code', 'Cybersécurité appliquée aux systèmes d\'information'],
             ['Windows, Linux and Active Directory', 'Virtualization, cloud, backups and operational security', 'Advanced networking and infrastructure architecture', 'Scripting, containerization and Infrastructure as Code', 'Cybersecurity applied to information systems']) }
  ];

  const S = (n, fr, en) => ({ n, d: B(fr, en) });
  const SKILLS = [
    { cat: B('Systèmes & Réseaux', 'Systems & Networks'), items: [
      S('Windows Server', 'AD, DNS, DHCP, GPO, WSUS, RDS. Projet « Infrastructure Windows Server » et stage MT Entreprise.', 'AD, DNS, DHCP, GPO, WSUS, RDS. "Windows Server Infrastructure" project and MT Entreprise internship.'),
      S('Active Directory', 'Déploiement d\'un domaine, gestion centralisée des utilisateurs et des postes.', 'Domain deployment, centralized management of users and workstations.'),
      S('Linux', 'Administration, durcissement, scripts Bash. BTS TSSR, stage et projets.', 'Administration, hardening, Bash scripts. BTS, internship and projects.'),
      S('TCP/IP · VLAN', 'Configuration réseau, routage et commutation (projets Cisco & OpenClassrooms).', 'Network configuration, routing and switching (Cisco & OpenClassrooms projects).'),
      S('VPN · Proxy', 'Sécurisation des accès réseau.', 'Securing network access.'),
      S('VMware · Hyper-V', 'Virtualisation de serveurs pendant le BTS TSSR.', 'Server virtualization during the BTS.'),
      S(B('Gestion d\'incidents', 'Incident management'), 'Support technique et résolution d\'incidents, y compris en stage.', 'Technical support and incident resolution, including during my internship.')
    ] },
    { cat: B('DevOps & Cloud', 'DevOps & Cloud'), items: [
      S('Docker', 'Conteneurisation d\'applications (projet DevOps).', 'Application containerization (DevOps project).'),
      S('Kubernetes', 'Déploiement sur un environnement Kubernetes (projet DevOps).', 'Deployment on a Kubernetes environment (DevOps project).'),
      S('GitLab CI', 'Création de pipelines CI/CD.', 'Building CI/CD pipelines.'),
      S('GitHub Actions', 'Pipelines CI/CD, formation ISOSET.', 'CI/CD pipelines, ISOSET training.'),
      S('Jenkins', 'Pipelines CI/CD, formation ISOSET.', 'CI/CD pipelines, ISOSET training.'),
      S('AWS', 'Déploiement automatisé, formation ISOSET.', 'Automated deployment, ISOSET training.'),
      S('Azure', 'Déploiement automatisé, formation ISOSET.', 'Automated deployment, ISOSET training.'),
      S('IaC', 'Infrastructure as Code, au programme de la formation DESCODEUSES.', 'Infrastructure as Code, part of the DESCODEUSES curriculum.')
    ] },
    { cat: B('Scripting', 'Scripting'), items: [
      S('Python', 'Automatisation de tâches récurrentes (stage MT Entreprise, BTS).', 'Automating recurring tasks (MT Entreprise internship, BTS).'),
      S('PowerShell', 'Automatisation côté Windows (stage, BTS).', 'Windows-side automation (internship, BTS).'),
      S('Bash', 'Automatisation côté Linux.', 'Linux-side automation.'),
      S('HTML / CSS', 'Ce portfolio en est la preuve 😉', 'This portfolio is the proof 😉'),
      S('JavaScript', 'Interactions de ce portfolio : terminal, jeu, supervision simulée.', 'This portfolio\'s interactions: terminal, game, simulated monitoring.')
    ] },
    { cat: B('Sécurité', 'Security'), items: [
      S('Pentest', 'Compétence listée sur mon CV, à détailler lors d\'un entretien.', 'Listed on my CV, happy to go into detail in an interview.'),
      S(B('Audit de sécurité', 'Security audit'), 'Compétence listée sur mon CV.', 'Listed on my CV.'),
      S(B('Gestion des accès', 'Access management'), 'Comptes utilisateurs et droits d\'accès (stage, projet AD).', 'User accounts and access rights (internship, AD project).'),
      S(B('Durcissement Linux', 'Linux hardening'), 'Bonnes pratiques de sécurisation des systèmes Linux.', 'Best practices for securing Linux systems.')
    ] },
    { cat: B('Outils', 'Tools'), items: [
      S('GLPI', 'Gestion de parc et de tickets.', 'Asset and ticket management.'),
      S('Git', 'Versionnement de mes projets et pipelines.', 'Version control for my projects and pipelines.'),
      S('Grafana', 'Tableaux de bord de supervision (projet Supervision d\'infrastructure).', 'Monitoring dashboards (Infrastructure Monitoring project).'),
      S('Prometheus', 'Collecte de métriques et surveillance de la disponibilité des services.', 'Metrics collection and service availability monitoring.'),
      S('Zabbix', 'Supervision, formation ISOSET.', 'Monitoring, ISOSET training.'),
      S('SQL', 'Bases de données et analyse de données.', 'Databases and data analysis.'),
      S(B('Excel avancé', 'Advanced Excel'), 'Traitement et suivi de l\'information.', 'Processing and tracking information.'),
      S('Power BI', 'Visualisation de données.', 'Data visualization.')
    ] }
  ];

  const PROJECTS = [
    { id: 'sys', title: B('Infrastructure Windows Server', 'Windows Server Infrastructure'), tags: ['AD DS', 'DNS', 'DHCP', 'GPO'],
      desc: B('Un domaine complet, géré de façon centralisée.', 'A complete domain, centrally managed.'),
      pts: B(['Déploiement d\'Active Directory', 'Configuration DNS, DHCP et GPO', 'Gestion centralisée des utilisateurs et des postes'],
             ['Active Directory deployment', 'DNS, DHCP and GPO configuration', 'Centralized management of users and workstations']),
      ascii: `  [Poste client] --DHCP--> [DC01]\n        |                 |-- AD DS\n        |                 |-- DNS\n        +---- GPO / comptes + DHCP` },
    { id: 'devops', title: B('Projet DevOps : CI/CD, Docker, Kubernetes', 'DevOps project: CI/CD, Docker, Kubernetes'), tags: ['GitLab CI', 'Docker', 'Kubernetes'],
      desc: B('De git push au déploiement, sans intervention manuelle.', 'From git push to deployment, with no manual steps.'),
      pts: B(['Création de pipelines CI/CD avec GitLab CI', 'Conteneurisation d\'applications avec Docker', 'Déploiement sur environnement Kubernetes'],
             ['CI/CD pipelines with GitLab CI', 'Application containerization with Docker', 'Deployment on a Kubernetes environment']),
      ascii: `  git push -> [GitLab CI] -> build image\n                  |\n                  v\n            [Registry] -> [Kubernetes]` },
    { id: 'mon', title: B('Supervision d\'infrastructure', 'Infrastructure monitoring'), tags: ['Grafana', 'Prometheus'],
      desc: B('Voir un incident avant que l\'utilisateur ne le signale.', 'Spot an incident before users report it.'),
      pts: B(['Tableaux de bord Grafana', 'Collecte de métriques avec Prometheus', 'Surveillance de la disponibilité des services'],
             ['Grafana dashboards', 'Metrics collection with Prometheus', 'Service availability monitoring']),
      ascii: `  [Services] -> [Exporters] -> [Prometheus]\n                                  |\n                             [Grafana] -> alertes` },
    { id: 'net', title: B('Projets Cisco & OpenClassrooms', 'Cisco & OpenClassrooms projects'), tags: B(['Routage', 'Commutation', 'Sécurité'], ['Routing', 'Switching', 'Security']),
      desc: B('Les fondations réseau, du câble à la sécurité des accès.', 'Networking fundamentals, from cabling to access security.'),
      pts: B(['Configuration réseau', 'Routage et commutation', 'Sécurisation des accès réseau'],
             ['Network configuration', 'Routing and switching', 'Securing network access']),
      ascii: `  [PC-A]--[Switch VLAN10]--\n                           [Routeur]--[WAN]\n  [PC-B]--[Switch VLAN20]--` }
  ];
  const PCATS = [['all', B('Tous', 'All')], ['sys', B('Systèmes', 'Systems')], ['devops', B('DevOps', 'DevOps')], ['mon', B('Supervision', 'Monitoring')], ['net', B('Réseaux', 'Networks')]];

  const SOFT = [
    { ico: '🧭', t: B('Rigueur', 'Rigor'), b: B('Documenter, vérifier, recommencer proprement : l\'infra pardonne peu.', 'Document, check, redo cleanly: infrastructure is unforgiving.') },
    { ico: '🔁', t: B('Esprit d\'automatisation', 'Automation mindset'), b: B('Si je fais une tâche deux fois, je l\'écris en script (Python, PowerShell, Bash).', 'If I do a task twice, I script it (Python, PowerShell, Bash).') },
    { ico: '🌍', t: B('Adaptabilité', 'Adaptability'), b: B('Études en France et en Italie, trois langues (italien C2, anglais B2, bambara C2).', 'Studied in France and Italy, three languages (Italian C2, English B2, Bambara C2).') },
    { ico: '📚', t: B('Curiosité', 'Curiosity'), b: B('Systèmes, réseaux, cloud, DevOps : j\'enchaîne les formations pour monter en compétence.', 'Systems, networks, cloud, DevOps: I keep training to build my skills.') },
    { ico: '🤝', t: B('Communication', 'Communication'), b: B('Support utilisateurs : expliquer simplement un problème technique.', 'User support: explaining a technical problem in simple terms.') },
    { ico: '🧘', t: B('Sang-froid', 'Composure'), b: B('Face à un incident : observer, isoler, corriger, puis expliquer.', 'During an incident: observe, isolate, fix, then explain.') }
  ];

  const GAME = [
    { scene: B('02:14. Alerte Grafana : le site renvoie des erreurs 502. Votre premier réflexe ?', '02:14. A Grafana alert fires: the website returns 502 errors. What is your first move?'), skill: B('Méthode', 'Method'),
      opts: [
        { t: B('Redémarrer tous les serveurs, au cas où', 'Restart all servers, just in case'), ok: false, fb: B('Risqué : on perd les traces et on peut aggraver la panne.', 'Risky: you lose the traces and may make the outage worse.') },
        { t: B('Regarder le dashboard, les logs et le dernier déploiement', 'Check the dashboard, the logs and the latest deployment'), ok: true, fb: B('Exact : observer avant d\'agir, et vérifier ce qui a changé récemment.', 'Right: observe before acting, and check what changed recently.') },
        { t: B('Attendre que ça passe', 'Wait for it to pass'), ok: false, fb: B('Les utilisateurs, eux, n\'attendent pas.', 'Users will not wait.') }
      ] },
    { scene: B('Les logs montrent un pod en CrashLoopBackOff juste après le dernier déploiement. Et maintenant ?', 'Logs show a pod in CrashLoopBackOff right after the latest deployment. Now what?'), skill: B('Sang-froid', 'Composure'),
      opts: [
        { t: B('Rollback vers la version précédente, puis analyser', 'Roll back to the previous version, then investigate'), ok: true, fb: B('Rétablir le service d\'abord, comprendre ensuite. C\'est le bon ordre.', 'Restore service first, understand later. That is the right order.') },
        { t: B('Corriger directement en production', 'Fix it directly in production'), ok: false, fb: B('Modifier à chaud sans test, c\'est ajouter de l\'incertitude.', 'Changing things live without testing adds uncertainty.') },
        { t: B('Supprimer le namespace et tout recréer', 'Delete the namespace and recreate everything'), ok: false, fb: B('Beaucoup trop destructif pour un seul pod.', 'Far too destructive for a single pod.') }
      ] },
    { scene: B('Le service est rétabli. Reste la communication.', 'Service is restored. Communication remains.'), skill: B('Communication', 'Communication'),
      opts: [
        { t: B('Ne rien dire, personne n\'a rien vu', 'Say nothing, nobody noticed'), ok: false, fb: B('La transparence construit la confiance.', 'Transparency builds trust.') },
        { t: B('Informer l\'équipe, écrire un post-mortem sans blâme et ajouter une alerte', 'Inform the team, write a blameless post-mortem and add an alert'), ok: true, fb: B('Apprendre collectivement et empêcher que ça se reproduise.', 'Learn together and prevent a repeat.') },
        { t: B('Chercher qui a déployé', 'Find out who deployed'), ok: false, fb: B('On corrige un processus, pas une personne.', 'You fix a process, not a person.') }
      ] }
  ];

  // ---------- Thème ----------
  const themeBtn = $('#themeBtn');
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    store.set('theme', t);
    $('meta[name="theme-color"]').setAttribute('content', t === 'dark' ? '#0b0a12' : '#f8f5ff');
  }
  const toggleTheme = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  themeBtn.addEventListener('click', toggleTheme);

  // ---------- Traduction du HTML statique ----------
  const fr0 = { title: document.title, desc: ($('meta[name="description"]') || {}).content || '' };
  $$('[data-i18n]').forEach(el => { el._fr = el.innerHTML; });
  $$('[data-i18n-aria]').forEach(el => { el._frAria = el.getAttribute('aria-label'); });
  $$('[data-i18n-ph]').forEach(el => { el._frPh = el.getAttribute('placeholder'); });
  const langBtn = $('#langBtn');
  function translateStatic() {
    const fr = lang === 'fr';
    $$('[data-i18n]').forEach(el => { el.innerHTML = fr ? el._fr : (EN[el.dataset.i18n] ?? el._fr); });
    $$('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', fr ? el._frAria : (EN[el.dataset.i18nAria] ?? el._frAria)); });
    $$('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', fr ? el._frPh : (EN[el.dataset.i18nPh] ?? el._frPh)); });
    document.documentElement.lang = lang;
    document.title = fr ? fr0.title : EN.meta_title;
    const md = $('meta[name="description"]'); if (md) md.content = fr ? fr0.desc : EN.meta_desc;
    langBtn.textContent = fr ? 'EN' : 'FR';
  }
  function setLang(l) { lang = l; store.set('lang', l); applyLang(); }
  langBtn.addEventListener('click', () => setLang(lang === 'fr' ? 'en' : 'fr'));

  // ---------- Navigation ----------
  $('#year').textContent = new Date().getFullYear();
  const burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

  const links = $$('#menu a');
  const spy = new IntersectionObserver(es => {
    es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  const progress = $('#progress');
  addEventListener('scroll', () => {
    const h = document.documentElement;
    progress.style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + '%';
  }, { passive: true });

  const rev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => rev.observe(el));

  addEventListener('pointermove', e => {
    const g = $('.glow');
    g.style.setProperty('--gx', e.clientX + 'px');
    g.style.setProperty('--gy', e.clientY + 'px');
    const c = e.target.closest && e.target.closest('.card');
    if (c) {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      c.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }
  }, { passive: true });

  // ---------- Hero : texte tapé + compte à rebours ----------
  const ROLES = B(['./administrer --windows --linux', 'kubectl apply -f infra.yaml', 'git push && pipeline --green', 'monitor --grafana --prometheus', './automatiser --python --powershell'],
                  ['./administer --windows --linux', 'kubectl apply -f infra.yaml', 'git push && pipeline --green', 'monitor --grafana --prometheus', './automate --python --powershell']);
  const typed = $('#typed');
  if (reduce) typed.textContent = ROLES.fr[0];
  else (async function typeLoop() {
    let i = 0;
    for (;;) {
      const list = L(ROLES);
      const w = list[i++ % list.length];
      for (let k = 1; k <= w.length; k++) { typed.textContent = w.slice(0, k); await sleep(55); }
      await sleep(1500);
      for (let k = w.length; k >= 0; k--) { typed.textContent = w.slice(0, k); await sleep(25); }
      await sleep(300);
    }
  })();

  const start = new Date(CONFIG.availableFrom), end = new Date(CONFIG.availableTo);
  function tick() {
    const now = new Date();
    let target = start, label = tt('cdBefore');
    if (now >= start && now <= end) { target = end; label = tt('cdNow'); }
    else if (now > end) { target = now; label = tt('cdEnd'); }
    let d = Math.max(0, target - now);
    const days = Math.floor(d / 864e5); d %= 864e5;
    const h = Math.floor(d / 36e5); d %= 36e5;
    const m = Math.floor(d / 6e4); const s = Math.floor((d % 6e4) / 1e3);
    $('#cdD').textContent = days; $('#cdH').textContent = String(h).padStart(2, '0');
    $('#cdM').textContent = String(m).padStart(2, '0'); $('#cdS').textContent = String(s).padStart(2, '0');
    $('#cdLabel').textContent = label;
  }
  setInterval(tick, 1000);

  // ---------- Fond réseau animé ----------
  (function network() {
    const cv = $('#bg'), ctx = cv.getContext('2d');
    let nodes = [], mouse = { x: -999, y: -999 }, running = true;
    function resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.scale(dpr, dpr);
      const n = Math.round(Math.min(90, innerWidth * innerHeight / 18000));
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    }
    addEventListener('resize', resize); resize();
    addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) frame(); });
    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      const light = document.documentElement.dataset.theme === 'light';
      const col = light ? '90,60,200' : '167,139,250';
      const col2 = light ? '180,80,26' : '255,159,122';
      for (const a of nodes) {
        if (!reduce) { a.x += a.vx; a.y += a.vy; }
        if (a.x < 0 || a.x > innerWidth) a.vx *= -1;
        if (a.y < 0 || a.y > innerHeight) a.vy *= -1;
        ctx.fillStyle = `rgba(${col},.55)`; ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, 7); ctx.fill();
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(${col},${(1 - d / 130) * .22})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const m = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y);
        if (m < 170) { ctx.strokeStyle = `rgba(${col2},${(1 - m / 170) * .5})`; ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      if (!reduce) requestAnimationFrame(frame);
    }
    frame();
  })();

  // ---------- Matrix (easter egg) ----------
  let matrixOn = false;
  function matrix(ms = 8000) {
    if (matrixOn || reduce) { toast(tt('matrixOff')); return; }
    matrixOn = true;
    const cv = $('#matrix'), ctx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight; cv.classList.add('on');
    const cols = Math.floor(innerWidth / 16), drops = Array(cols).fill(1);
    const chars = '01アイウエオカキクケコ{}<>/=$#kubectl'.split('');
    const iv = setInterval(() => {
      ctx.fillStyle = 'rgba(0,0,0,.08)'; ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = '#4ade80'; ctx.font = '15px monospace';
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.random() * chars.length | 0], i * 16, y * 16);
        drops[i] = y * 16 > cv.height && Math.random() > .975 ? 0 : y + 1;
      });
    }, 45);
    setTimeout(() => { clearInterval(iv); cv.classList.remove('on'); setTimeout(() => { ctx.clearRect(0, 0, cv.width, cv.height); matrixOn = false; }, 700); }, ms);
  }
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let kpos = 0;
  addEventListener('keydown', e => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    kpos = k === konami[kpos] ? kpos + 1 : (k === konami[0] ? 1 : 0);
    if (kpos === konami.length) { kpos = 0; toast(tt('root')); matrix(); }
  });

  // ---------- Terminal ----------
  const out = $('#termOut'), input = $('#termInput');
  const history = []; let hpos = 0;
  const line = (html, cls = '') => {
    const d = document.createElement('div');
    d.className = 'l ' + cls; d.innerHTML = html; out.appendChild(d);
    out.scrollTop = out.scrollHeight;
  };
  const go = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); };
  const tx = n => L(n);
  const COMMANDS = {
    help: () => line(tt('help')),
    whoami: () => line(tt('whoami')),
    about: () => tt('about').forEach(l => line(l)),
    skills: () => SKILLS.forEach(c => line(`<span class="k">${esc(L(c.cat))}</span> : ${c.items.map(i => esc(tx(i.n))).join(' · ')}`)),
    projects: () => PROJECTS.forEach((p, i) => line(`<span class="w">[${i + 1}]</span> ${esc(L(p.title))} <span class="m">(${L(p.tags).map(esc).join(', ')})</span>`)),
    pipeline: () => STAGES.forEach(s => line(`${s.icon} <span class="k">${s.name}</span> ${esc(L(s.date))} · ${esc(L(s.title))} <span class="m">@ ${esc(L(s.school))}</span>`)),
    languages: () => line(tt('languages')),
    contact: () => { line(`✉ ${CONFIG.email}`); line(`☎ ${CONFIG.phone}`); line(`in ${esc(CONFIG.linkedin)}`); line(`⌥ ${esc(CONFIG.github)}`); line(tt('contactHint')); },
    neofetch: () => tt('neofetch').forEach(r => line(r)),
    cv: () => { line(tt('cvDl')); const a = document.createElement('a'); a.href = CONFIG.cv; a.download = ''; a.click(); },
    theme: () => { toggleTheme(); line(tt('themeDone')); },
    lang: () => { setLang(lang === 'fr' ? 'en' : 'fr'); line(tt('langDone')); },
    matrix: () => { line(tt('wake')); matrix(); },
    ls: () => line('about.txt  skills/  projects/  pipeline.yml  cv.pdf'),
    date: () => line(new Date().toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB')),
    clear: () => { out.innerHTML = ''; },
    exit: () => line(tt('exit'), 'w'),
    goto: args => {
      const map = { terminal: 'terminal', parcours: 'parcours', journey: 'parcours', path: 'parcours', competences: 'competences', skills: 'competences', projets: 'projets', projects: 'projets', soft: 'soft', contact: 'contact', accueil: 'accueil', home: 'accueil' };
      const t = map[(args[0] || '').toLowerCase()];
      if (t) { go(t); line('→ ' + t); } else line(tt('sections') + [...new Set(Object.keys(map))].join(', '), 'e');
    }
  };
  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    line(`<span class="cmd">ndeye@portfolio:~$</span> ${esc(cmd)}`);
    history.push(cmd); hpos = history.length;
    const [name, ...args] = cmd.split(/\s+/);
    if (cmd.toLowerCase() === 'sudo hire-me') {
      line(tt('sudoPw'));
      line(tt('sudoOk'), 'k');
      setTimeout(() => { location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent(tt('mailSubject')); }, 900);
      return;
    }
    if (name === 'echo') return line(esc(args.join(' ')));
    if (name === 'sudo') return line(tt('sudoOther'), 'w');
    if (name === 'rm') return line(tt('rm'), 'e');
    const fn = COMMANDS[name.toLowerCase()];
    fn ? fn(args) : line(tt('notFound')(name), 'e');
  }
  $('#termForm').addEventListener('submit', e => { e.preventDefault(); run(input.value); input.value = ''; });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && history.length) { hpos = Math.max(0, hpos - 1); input.value = history[hpos]; e.preventDefault(); }
    else if (e.key === 'ArrowDown') { hpos = Math.min(history.length, hpos + 1); input.value = history[hpos] || ''; e.preventDefault(); }
    else if (e.key === 'Tab') {
      e.preventDefault();
      const m = Object.keys(COMMANDS).filter(c => c.startsWith(input.value.toLowerCase()));
      if (m.length === 1) input.value = m[0];
    } else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); COMMANDS.clear(); }
  });
  $('#term').addEventListener('click', () => { if (!getSelection().toString()) input.focus({ preventScroll: true }); });
  line(tt('welcome'), 'm');
  $('#termSugg').innerHTML = ['whoami', 'skills', 'projects', 'neofetch', 'sudo hire-me'].map(c => `<button type="button" data-c="${c}">${c}</button>`).join('');
  $('#termSugg').addEventListener('click', e => { const c = e.target.dataset.c; if (c) run(c); });

  // ---------- Pipeline ----------
  const stagesEl = $('#stages'), fill = $('#pipeFill'), detail = $('#stageDetail'), log = $('#pipeLog');
  let curStage = STAGES.length - 1, logHint = true;
  function showStage(i) {
    curStage = i;
    const s = STAGES[i];
    $$('.stage', stagesEl).forEach((b, k) => { b.classList.toggle('active', k === i); b.classList.toggle('done', k < i); });
    fill.style.width = (i / (STAGES.length - 1) * 100) + '%';
    detail.innerHTML = `<h3>${s.icon} ${esc(L(s.title))}</h3><p class="meta">${esc(L(s.school))} · ${esc(L(s.date))}</p><ul>${L(s.pts).map(p => `<li>${esc(p)}</li>`).join('')}</ul>`;
  }
  function renderStages() {
    stagesEl.innerHTML = STAGES.map((s, i) => `<button class="stage" data-i="${i}" aria-label="${esc(s.name)}"><span class="bullet">${s.icon}</span><b>${s.name}</b><small>${esc(String(L(s.date)).split(' ')[0])}</small></button>`).join('');
    showStage(curStage);
  }
  stagesEl.addEventListener('click', e => { const b = e.target.closest('.stage'); if (b) showStage(+b.dataset.i); });
  let piping = false;
  async function replay() {
    if (piping) return; piping = true; logHint = false;
    log.innerHTML = '';
    const add = h => { log.insertAdjacentHTML('beforeend', `<div>${h}</div>`); log.scrollTop = log.scrollHeight; };
    add(`<span class="run">${tt('logStart')}</span>`);
    for (let i = 0; i < STAGES.length; i++) {
      showStage(i);
      add(`<span class="run">[${STAGES[i].name}]</span> ${esc(L(STAGES[i].title))}…`);
      await sleep(reduce ? 0 : 900);
      add(`<span class="ok">${tt('logOk')(STAGES[i].name)}</span>`);
    }
    add(`<span class="ok">${tt('logDone')}</span>`);
    piping = false;
  }
  $('#replay').addEventListener('click', replay);

  // ---------- Compétences ----------
  const tabsEl = $('#tabs'), chipsEl = $('#chips'), insp = $('#inspector');
  let catIdx = 0, chipIdx = 0;
  function showChip(i) {
    chipIdx = i;
    $$('.chip', chipsEl).forEach((c, k) => c.classList.toggle('on', k === i));
    const it = SKILLS[catIdx].items[i];
    insp.innerHTML = `<h3>${esc(tx(it.n))}</h3><p>${esc(L(it.d))}</p>`;
  }
  function renderSkills() {
    tabsEl.innerHTML = SKILLS.map((c, i) => `<button class="tab${i === catIdx ? ' on' : ''}" role="tab" data-i="${i}">${esc(L(c.cat))}</button>`).join('');
    chipsEl.innerHTML = SKILLS[catIdx].items.map((it, i) => `<button class="chip" style="animation-delay:${i * 50}ms" data-i="${i}">${esc(tx(it.n))}</button>`).join('');
    showChip(Math.min(chipIdx, SKILLS[catIdx].items.length - 1));
  }
  tabsEl.addEventListener('click', e => { const t = e.target.closest('.tab'); if (t) { catIdx = +t.dataset.i; chipIdx = 0; renderSkills(); } });
  chipsEl.addEventListener('click', e => { const c = e.target.closest('.chip'); if (c) showChip(+c.dataset.i); });

  // ---------- Projets ----------
  const projEl = $('#projects'), filtersEl = $('#filters');
  let projFilter = 'all';
  function applyFilter() {
    $$('.filter', filtersEl).forEach(b => b.classList.toggle('on', b.dataset.c === projFilter));
    $$('.proj', projEl).forEach(p => p.classList.toggle('hide', projFilter !== 'all' && p.dataset.c !== projFilter));
  }
  function renderProjects() {
    filtersEl.innerHTML = PCATS.map(([id, label]) => `<button class="filter" data-c="${id}">${esc(L(label))}</button>`).join('');
    projEl.innerHTML = PROJECTS.map(p => `
      <article class="card proj" data-c="${p.id}">
        <h3>${esc(L(p.title))}</h3>
        <p>${esc(L(p.desc))}</p>
        <div class="tags">${L(p.tags).map(t => `<span>${esc(t)}</span>`).join('')}</div>
        <details><summary>${tt('details')}</summary>
          <ul>${L(p.pts).map(x => `<li>${esc(x)}</li>`).join('')}</ul>
          <pre>${esc(p.ascii)}</pre>
        </details>
        <a class="more" href="${CONFIG.github}" target="_blank" rel="noopener">${tt('gh')}</a>
      </article>`).join('');
    applyFilter();
  }
  filtersEl.addEventListener('click', e => { const f = e.target.closest('.filter'); if (f) { projFilter = f.dataset.c; applyFilter(); } });

  // ---------- Supervision simulée ----------
  (function monitor() {
    const N = 60;
    const series = { cpu: Array(N).fill(25), ram: Array(N).fill(45), req: Array(N).fill(120) };
    const cfg = { cpu: { el: $('#spCpu'), v: $('#vCpu'), max: 100, u: '%' }, ram: { el: $('#spRam'), v: $('#vRam'), max: 100, u: '%' }, req: { el: $('#spReq'), v: $('#vReq'), max: 400, u: '' } };
    const SERVICES = ['Active Directory', 'DNS', 'DHCP', 'Grafana', 'Prometheus', 'Kubernetes'];
    const svc = $('#services'), msg = $('#alertMsg');
    svc.innerHTML = SERVICES.map(s => `<li data-s="${s}"><i></i>${s}</li>`).join('');
    let visible = false, incident = false;
    new IntersectionObserver(es => visible = es[0].isIntersecting).observe($('#monitor'));
    const walk = (a, lo, hi, step) => Math.min(hi, Math.max(lo, a[a.length - 1] + (Math.random() - .5) * step));
    function draw(k) {
      const { el, max } = cfg[k], ctx = el.getContext('2d'), w = el.width, h = el.height;
      ctx.clearRect(0, 0, w, h);
      const pts = series[k].map((v, i) => [i / (N - 1) * w, h - 6 - v / max * (h - 12)]);
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(167,139,250,.45)'); g.addColorStop(1, 'rgba(167,139,250,0)');
      ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.strokeStyle = incident ? '#fb7185' : '#a78bfa'; ctx.lineWidth = 2; ctx.stroke();
      ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath(); ctx.fillStyle = g; ctx.fill();
    }
    function step() {
      if (!visible || document.hidden) return;
      series.cpu.push(incident ? Math.min(98, series.cpu.at(-1) + 12) : walk(series.cpu, 12, 60, 12));
      series.ram.push(incident ? Math.min(95, series.ram.at(-1) + 6) : walk(series.ram, 35, 65, 5));
      series.req.push(incident ? Math.max(5, series.req.at(-1) * .6) : walk(series.req, 60, 260, 40));
      for (const k in series) { series[k].shift(); draw(k); cfg[k].v.textContent = Math.round(series[k].at(-1)) + cfg[k].u; }
    }
    setInterval(step, 800);
    $('#breakBtn').addEventListener('click', async () => {
      if (incident) return;
      incident = true;
      const victim = SERVICES[Math.random() * SERVICES.length | 0];
      const li = $(`li[data-s="${victim}"]`, svc);
      msg.removeAttribute('data-i18n');
      li.classList.add('down');
      msg.className = 'alert bad'; msg.textContent = tt('down')(victim);
      await sleep(4500);
      msg.textContent = tt('fix')(victim);
      await sleep(2500);
      li.classList.remove('down');
      incident = false;
      msg.className = 'alert'; msg.textContent = tt('back')(victim);
    });
  })();

  // ---------- Soft skills ----------
  const flipsEl = $('#flips');
  function renderSoft() {
    flipsEl.innerHTML = SOFT.map(s => `
      <button class="flip" aria-pressed="false"><div class="flip-in">
        <div class="face"><span class="ico">${s.ico}</span><b>${esc(L(s.t))}</b><small class="mono" style="color:var(--muted)">${tt('flipHint')}</small></div>
        <div class="face back">${esc(L(s.b))}</div>
      </div></button>`).join('');
  }
  flipsEl.addEventListener('click', e => {
    const f = e.target.closest('.flip'); if (!f) return;
    f.classList.toggle('on'); f.setAttribute('aria-pressed', f.classList.contains('on'));
  });

  // ---------- Mini-jeu ----------
  const game = (() => {
    const body = $('#gameBody'); let i = 0, score = 0; const won = [];
    function render() {
      if (i >= GAME.length) {
        body.innerHTML = `<p class="score">${score}/${GAME.length}</p><p class="fb">${tt('scoreMsgs')[score]}${won.length ? ` ${tt('skillsShown')} : <b>${won.map(esc).join(', ')}</b>.` : ''}</p><button class="btn" id="again">${tt('again')}</button>`;
        $('#again').onclick = () => { i = 0; score = 0; won.length = 0; render(); };
        return;
      }
      const q = GAME[i];
      body.innerHTML = `<p class="step">${tt('step')} ${i + 1}/${GAME.length}</p><div class="scene">${esc(L(q.scene))}</div><div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${esc(L(o.t))}</button>`).join('')}</div><div id="gfb"></div>`;
      $$('.opt', body).forEach(b => b.onclick = () => {
        const o = q.opts[+b.dataset.k];
        $$('.opt', body).forEach(x => x.disabled = true);
        b.classList.add(o.ok ? 'good' : 'bad');
        if (!o.ok) $$('.opt', body)[q.opts.findIndex(x => x.ok)].classList.add('good');
        else { score++; won.push(L(q.skill)); }
        $('#gfb').innerHTML = `<p class="fb">${esc(L(o.fb))}</p><button class="btn small" id="next">${i === GAME.length - 1 ? tt('seeScore') : tt('next')}</button>`;
        $('#next').onclick = () => { i++; render(); };
      });
    }
    return { render };
  })();

  // ---------- Contact ----------
  $('#linkedin').href = CONFIG.linkedin;
  $('#github').href = CONFIG.github;
  document.addEventListener('click', async e => {
    const b = e.target.closest('.copy'); if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); toast(tt('copied')); } catch (err) { toast(tt('copyFail')); }
  });
  $('#mailForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = `${lang === 'fr' ? 'Contact portfolio' : 'Portfolio contact'} : ${f.get('name')}${f.get('company') ? ' (' + f.get('company') + ')' : ''}`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(f.get('msg'))}`;
  });

  // ---------- Palette de commandes ----------
  const pal = $('#palette'), palIn = $('#palInput'), palList = $('#palList');
  const actions = () => [
    [L(B('Accueil', 'Home')), 'palGo', () => go('accueil')], ['Terminal', 'palGo', () => go('terminal')], [L(B('Parcours', 'Journey')), 'palGo', () => go('parcours')],
    [L(B('Compétences', 'Skills')), 'palGo', () => go('competences')], [L(B('Projets', 'Projects')), 'palGo', () => go('projets')], ['Soft skills', 'palGo', () => go('soft')],
    ['Contact', 'palGo', () => go('contact')],
    [L(B('Changer le thème', 'Toggle theme')), 'palAction', toggleTheme],
    [L(B('Passer en anglais', 'Switch to French')), 'palAction', () => setLang(lang === 'fr' ? 'en' : 'fr')],
    [L(B('Télécharger le CV', 'Download the CV')), 'palAction', COMMANDS.cv],
    [L(B('Copier mon e-mail', 'Copy my email')), 'palAction', () => navigator.clipboard.writeText(CONFIG.email).then(() => toast(tt('mailCopied'))).catch(() => toast(tt('copyFail')))],
    [L(B('Lancer le pipeline', 'Run the pipeline')), 'palAction', () => { go('parcours'); replay(); }],
    [L(B('Mode Matrix', 'Matrix mode')), 'palSecret', () => matrix()]
  ];
  let sel = 0, shown = [];
  function renderPal() {
    const q = palIn.value.trim().toLowerCase();
    shown = actions().filter(a => (a[0] + ' ' + tt(a[1])).toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    palList.innerHTML = shown.map((a, i) => `<li role="option" data-i="${i}" class="${i === sel ? 'sel' : ''}">${esc(a[0])}<small>${tt(a[1])}</small></li>`).join('') || `<li>${tt('palNone')}</li>`;
  }
  function openPal() { if (!pal.open) pal.showModal(); palIn.value = ''; sel = 0; renderPal(); palIn.focus(); }
  function exec(i) { const a = shown[i]; if (a) { pal.close(); a[2](); } }
  $('#openPalette').addEventListener('click', openPal);
  addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.open ? pal.close() : openPal(); }
  });
  palIn.addEventListener('input', () => { sel = 0; renderPal(); });
  palIn.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = Math.min(shown.length - 1, sel + 1); renderPal(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); renderPal(); e.preventDefault(); }
    else if (e.key === 'Enter') { exec(sel); e.preventDefault(); }
  });
  palList.addEventListener('click', e => { const li = e.target.closest('li[data-i]'); if (li) exec(+li.dataset.i); });
  pal.addEventListener('click', e => { if (e.target === pal) pal.close(); });

  // ---------- Application de la langue (tout est défini : on lance) ----------
  function applyLang() {
    translateStatic();
    renderStages(); renderSkills(); renderProjects(); renderSoft(); game.render(); tick();
    if (logHint) log.innerHTML = `<div>${tt('logHint')}</div>`;
    if (pal.open) renderPal();
  }
  applyLang();
})();
