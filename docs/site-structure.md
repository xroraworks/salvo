# Site Structure

## Scopo

Questo documento descrive la struttura fisica ufficiale della repository.

La struttura non deve essere modificata senza aggiornare la documentazione.

---

## 1. Root

Struttura attuale:

```text
fotografosicilia/
├── fotografosicilia.com/
├── fotografosicilia.it/
├── docs/
├── source/
└── README.md
```

La root contiene il progetto generale.

Non rappresenta uno dei domini pubblici.

Le cartelle `fotografosicilia.com/` e `fotografosicilia.it/` rappresentano i
domini SEO/geografici.

I domini brand normali sono:

```text
salvonicolosiph.com
salvonicolosiph.it
```

Se i domini brand vengono gestiti in questa repository, devono essere aggiunti
come cartelle separate e documentati in questo file.

---

## 2. Regola sull'index.html nella root

Nella root non deve esistere:

```text
/index.html
```

### Errato

```text
fotografosicilia/
├── index.html
├── fotografosicilia.com/
├── fotografosicilia.it/
└── README.md
```

### Corretto

```text
fotografosicilia/
├── fotografosicilia.com/
│   └── index.html
├── fotografosicilia.it/
│   └── index.html
├── docs/
├── source/
└── README.md
```

Homepage inglese:

```text
fotografosicilia.com/index.html
```

Homepage italiana:

```text
fotografosicilia.it/index.html
```

Verificare sempre il breadcrumb di VS Code.

---

## 3. fotografosicilia.com

Rappresenta:

```text
https://www.fotografosicilia.com/
```

Ruolo:

```text
dominio SEO/geografico in lingua inglese
```

Lingua:

```text
English
```

Struttura:

```text
fotografosicilia.com/
├── index.html
├── about/
│   └── index.html
├── services/
│   └── index.html
├── portfolio/
│   └── index.html
├── contact/
│   └── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    ├── fonts/
    └── icons/
```

---

## 4. Pagine .com

| Pagina | File | URL |
|---|---|---|
| Home | `index.html` | `/` |
| About | `about/index.html` | `/about/` |
| Services | `services/index.html` | `/services/` |
| Portfolio | `portfolio/index.html` | `/portfolio/` |
| Contact | `contact/index.html` | `/contact/` |

---

## 5. fotografosicilia.it

Rappresenta:

```text
https://www.fotografosicilia.it/
```

Ruolo:

```text
dominio SEO/geografico in lingua italiana
```

Lingua:

```text
Italiano
```

Struttura:

```text
fotografosicilia.it/
├── index.html
├── chi-sono/
│   └── index.html
├── servizi/
│   └── index.html
├── portfolio/
│   └── index.html
├── contatti/
│   └── index.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── images/
    ├── fonts/
    └── icons/
```

---

## 6. Pagine .it

| Pagina | File | URL |
|---|---|---|
| Home | `index.html` | `/` |
| Chi sono | `chi-sono/index.html` | `/chi-sono/` |
| Servizi | `servizi/index.html` | `/servizi/` |
| Portfolio | `portfolio/index.html` | `/portfolio/` |
| Contatti | `contatti/index.html` | `/contatti/` |

---

## 7. Regola delle pagine a cartella

Le pagine interne devono usare una cartella con `index.html`.

### Corretto

```text
services/
└── index.html
```

URL:

```text
/services/
```

### Da evitare

```text
services.html
```

URL:

```text
/services.html
```

---

## 8. Creazione di una nuova pagina

Procedura:

1. identificare il dominio;
2. scegliere l'URL coerente con la lingua;
3. creare la cartella;
4. creare `index.html`;
5. aggiornare `url-map.md`;
6. aggiornare `content-map.md` se la pagina ha un ruolo editoriale importante;
7. creare la pagina equivalente quando prevista;
8. aggiornare sitemap alla pubblicazione.

Esempio futuro:

```text
fotografosicilia.com/services/private-events/index.html
```

Equivalente:

```text
fotografosicilia.it/servizi/eventi-privati/index.html
```

---

## 9. Assets

Ogni dominio possiede i propri assets.

```text
assets/
├── css/
├── js/
├── images/
├── fonts/
└── icons/
```

Il `.com` utilizza:

```text
fotografosicilia.com/assets/
```

Il `.it` utilizza:

```text
fotografosicilia.it/assets/
```

---

## 10. Indipendenza dei domini

I domini pubblici devono funzionare indipendentemente.

Il `.it` non deve dipendere dagli assets del `.com`.

Il `.com` non deve dipendere dagli assets del `.it`.

### Da evitare sul .it

```html
<link
    rel="stylesheet"
    href="https://www.fotografosicilia.com/assets/css/style.css"
>
```

### Corretto

```html
<link
    rel="stylesheet"
    href="/assets/css/style.css"
>
```

---

## 11. CSS

`.com`:

```text
fotografosicilia.com/assets/css/style.css
```

`.it`:

```text
fotografosicilia.it/assets/css/style.css
```

Le modifiche globali devono essere verificate sui domini interessati.

---

## 12. JavaScript

`.com`:

```text
fotografosicilia.com/assets/js/main.js
```

`.it`:

```text
fotografosicilia.it/assets/js/main.js
```

Non collegare direttamente un dominio al file JavaScript dell'altro.

---

## 13. Images

Struttura indicativa:

```text
images/
├── home/
├── about/
├── services/
├── portfolio/
├── contact/
└── og/
```

Evitare cartelle generiche come:

```text
misc/
varie/
temp/
foto/
```

quando il contenuto può essere organizzato meglio.

I nomi delle cartelle tecniche possono rimanere in inglese anche nel `.it`.

---

## 14. Fonts

```text
assets/fonts/
```

Contiene soltanto i font utilizzati.

Non inserire:

- file di prova;
- famiglie non utilizzate;
- pesi inutili.

---

## 15. Icons

```text
assets/icons/
```

Può contenere:

- favicon;
- SVG;
- icone di interfaccia;
- icone social locali.

---

## 16. Docs

```text
docs/
├── coding-guidelines.md
├── seo-geo-guidelines.md
├── site-structure.md
├── url-map.md
├── content-map.md
└── workflow.md
```

La cartella contiene la documentazione interna ufficiale.

---

## 17. Source

```text
source/
```

Può contenere:

- fotografie originali;
- PSD;
- AI;
- loghi master;
- SVG originali;
- file grafici di lavoro.

I file di `source` non fanno parte dei siti pubblici.

Prima di utilizzare una fotografia:

1. selezionarla;
2. rinominarla;
3. ridimensionarla;
4. ottimizzarla;
5. esportarla;
6. copiarla negli assets corretti.

---

## 18. README

```text
README.md
```

Si trova nella root.

Presenta il progetto e rimanda alla documentazione.

Le regole tecniche dettagliate appartengono a `docs/`.

---

## 19. File futuri

File possibili:

```text
robots.txt
sitemap.xml
privacy-policy/
cookie-policy/
```

Devono essere creati dentro il dominio corrispondente.

Esempio:

```text
fotografosicilia.com/robots.txt
fotografosicilia.com/sitemap.xml

fotografosicilia.it/robots.txt
fotografosicilia.it/sitemap.xml
```

---

## 20. Strutture vietate

Non utilizzare:

```text
fotografosicilia/
├── index.html
├── en/
├── it/
└── assets/
```

Non utilizzare:

```text
fotografosicilia.com/
└── it/
```

Non utilizzare:

```text
fotografosicilia.it/
└── en/
```

La lingua è determinata dal dominio.

---

## 21. Regola finale

Prima di creare un file chiedersi:

```text
A quale dominio appartiene?
A quale pagina appartiene?
È pubblico o interno?
Dove è documentato?
Ha un equivalente nell'altra lingua?
```

In caso di dubbio consultare:

```text
docs/site-structure.md
docs/url-map.md
```
