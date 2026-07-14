# Fotografo Sicilia

Sito web ufficiale del fotografo **Salvo Nicolosi**.

Il progetto nasce con l'obiettivo di presentare i servizi fotografici offerti, mostrare una selezione dei lavori realizzati e favorire il contatto da parte di privati, aziende e attività commerciali alla ricerca di un fotografo professionista.

Il sito non deve essere considerato esclusivamente come un portfolio fotografico, ma come uno strumento di comunicazione e acquisizione di nuovi clienti.

Lo sviluppo viene realizzato con particolare attenzione a:

- esperienza utente;
- conversione;
- SEO;
- GEO;
- accessibilità;
- performance;
- HTML semantico;
- responsive design;
- qualità e ottimizzazione delle immagini;
- semplicità di manutenzione del codice.

---

## Domini

Il progetto comprende due siti web indipendenti ma strutturalmente collegati.

### Dominio principale

`https://www.fotografosicilia.com/`

- Lingua: inglese
- Dominio principale del progetto
- Versione internazionale del sito
- Versione predefinita del progetto

### Dominio italiano

`https://www.fotografosicilia.it/`

- Lingua: italiano
- Versione italiana del sito
- Rivolto principalmente al mercato italiano

Le pagine equivalenti presenti sui due domini devono essere collegate attraverso gli attributi `hreflang`.

Ogni pagina indicizzabile deve utilizzare un URL canonical autoreferenziale verso il proprio URL definitivo.

La versione `x-default` deve puntare alla pagina equivalente presente sul dominio principale `.com`.

---

## Brand

**Nome professionale:** Salvo Nicolosi

**Attività principale:** Fotografo

**Area operativa principale:** Catania e Sicilia

Il dominio `fotografosicilia.com` rappresenta il posizionamento geografico e professionale del progetto.

Il brand principale del sito rimane **Salvo Nicolosi**.

Il dominio non deve sostituire il nome professionale del fotografo nella comunicazione del sito.

---

## Obiettivo del sito

L'obiettivo principale del sito è trasformare il visitatore in un potenziale cliente.

Il percorso ideale dell'utente è:

`Scoperta → Interesse → Fiducia → Portfolio → Servizi → Contatto`

Ogni pagina deve contribuire a:

1. spiegare chiaramente chi è Salvo Nicolosi;
2. comunicare professionalità e affidabilità;
3. mostrare la qualità del lavoro fotografico;
4. presentare i servizi disponibili;
5. facilitare la navigazione;
6. favorire una richiesta di informazioni, disponibilità o preventivo.

Ogni scelta grafica, tecnica o testuale deve essere valutata anche in relazione a questi obiettivi.

---

## Servizi

I principali servizi fotografici presentati nel sito sono:

- Eventi privati
- Eventi aziendali
- Ristoranti e attività commerciali
- Contenuti social
- Shooting in studio

La struttura dei servizi potrà essere ampliata nel corso dello sviluppo.

L'aggiunta di nuovi servizi deve essere documentata e mantenuta coerente tra il dominio `.com` e il dominio `.it`.

---

## Struttura generale del progetto

La repository contiene due siti web separati.

```text
fotografosicilia/
├── fotografosicilia.com/
├── fotografosicilia.it/
├── docs/
├── source/
└── README.md
```

Il dominio `.com` e il dominio `.it` devono poter funzionare in maniera indipendente.

La struttura dei due siti deve rimanere il più possibile speculare.

---

## fotografosicilia.com

La cartella `fotografosicilia.com` contiene la versione inglese e principale del sito.

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

Le pagine principali iniziali sono:

- Home
- About
- Services
- Portfolio
- Contact

---

## fotografosicilia.it

La cartella `fotografosicilia.it` contiene la versione italiana del sito.

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

Le pagine principali iniziali sono:

- Home
- Chi sono
- Servizi
- Portfolio
- Contatti

---

## Struttura delle pagine

Ogni pagina principale utilizza una propria cartella contenente un file `index.html`.

Esempio:

```text
services/
└── index.html
```

Questa struttura permette di ottenere URL puliti.

Esempio corretto:

```text
https://www.fotografosicilia.com/services/
```

Invece di:

```text
https://www.fotografosicilia.com/services.html
```

Lo stesso principio deve essere applicato alle nuove pagine che verranno create in futuro.

Non devono essere introdotte strutture URL differenti senza una modifica documentata dell'architettura del progetto.

---

## Assets

Ogni dominio possiede le proprie risorse.

```text
assets/
├── css/
├── js/
├── images/
├── fonts/
└── icons/
```

### CSS

La cartella:

```text
assets/css/
```

contiene i fogli di stile del sito.

Il file principale è:

```text
assets/css/style.css
```

### JavaScript

La cartella:

```text
assets/js/
```

contiene gli script JavaScript.

Il file principale è:

```text
assets/js/main.js
```

JavaScript deve essere utilizzato soltanto quando realmente necessario.

Il contenuto principale del sito non deve dipendere da JavaScript per essere letto o compreso.

### Immagini

La cartella:

```text
assets/images/
```

contiene esclusivamente immagini ottimizzate per il web.

Le fotografie originali e i file di lavorazione non devono essere inseriti direttamente nelle cartelle pubbliche del sito.

Le immagini devono essere organizzate progressivamente in base alle esigenze del progetto.

Esempio:

```text
images/
├── home/
├── about/
├── services/
├── portfolio/
├── contact/
└── og/
```

### Font

La cartella:

```text
assets/fonts/
```

contiene gli eventuali font ospitati localmente dal sito.

Devono essere caricati esclusivamente i font e i pesi realmente utilizzati.

### Icons

La cartella:

```text
assets/icons/
```

contiene favicon, icone e altre risorse grafiche vettoriali o di interfaccia.

---

## Indipendenza dei domini

Il dominio `.com` e il dominio `.it` devono poter funzionare indipendentemente.

Il sito italiano non deve dipendere da CSS, JavaScript, immagini, font o icone caricati direttamente dal dominio `.com`.

Il sito inglese non deve dipendere dalle risorse presenti sul dominio `.it`.

Esempio da evitare:

```html
<link
    rel="stylesheet"
    href="https://www.fotografosicilia.com/assets/css/style.css"
>
```

in una pagina di `fotografosicilia.it`.

Ogni sito deve utilizzare le proprie risorse locali.

---

## Cartella source

La cartella:

```text
/source/
```

contiene i file originali e i materiali di lavoro del progetto.

Può contenere, ad esempio:

- fotografie originali;
- file PSD;
- file AI;
- loghi master;
- SVG originali;
- elementi grafici di lavorazione.

I file presenti in `source` non fanno parte del sito pubblico.

Prima di utilizzare una fotografia sul sito, il file deve essere correttamente selezionato, rinominato, ridimensionato e ottimizzato.

La versione destinata al sito deve essere inserita nella cartella `assets/images/` del dominio corrispondente.

---

## Documentazione

La cartella:

```text
/docs/
```

contiene la documentazione interna ufficiale del progetto.

Prima di effettuare modifiche strutturali è necessario consultare la documentazione.

La cartella è organizzata nel seguente modo:

```text
docs/
├── coding-guidelines.md
├── seo-geo-guidelines.md
├── site-structure.md
├── url-map.md
├── content-map.md
└── workflow.md
```

### coding-guidelines.md

Contiene le regole di sviluppo relative a:

- HTML;
- CSS;
- JavaScript;
- HTML semantico;
- heading;
- section;
- article;
- classi;
- ID;
- commenti;
- accessibilità;
- immagini;
- naming convention;
- organizzazione del codice.

### seo-geo-guidelines.md

Contiene le regole relative a:

- SEO;
- GEO;
- indicizzazione;
- title;
- meta description;
- canonical;
- hreflang;
- Open Graph;
- dati strutturati;
- immagini;
- alt text;
- collegamenti interni;
- sitemap;
- robots.txt.

### site-structure.md

Descrive la struttura ufficiale delle cartelle e dei file.

Qualsiasi modifica significativa alla struttura del progetto deve essere documentata in questo file.

### url-map.md

Contiene la corrispondenza tra le pagine inglesi e italiane.

Esempio:

| Inglese | Italiano |
|---|---|
| `/` | `/` |
| `/about/` | `/chi-sono/` |
| `/services/` | `/servizi/` |
| `/portfolio/` | `/portfolio/` |
| `/contact/` | `/contatti/` |

La mappa deve essere aggiornata ogni volta che viene creata una nuova coppia di pagine equivalenti.

Il file rappresenta il riferimento principale per la configurazione degli `hreflang`.

### content-map.md

Definisce l'obiettivo e la struttura editoriale delle pagine.

Per ogni pagina devono essere indicati:

- obiettivo;
- pubblico;
- contenuto principale;
- sezioni previste;
- call to action principale.

Il file non deve necessariamente contenere tutti i testi definitivi delle pagine.

### workflow.md

Definisce il metodo di lavoro condiviso sul progetto.

Contiene le regole relative a:

- Git;
- GitHub;
- sincronizzazione della repository;
- branch;
- commit;
- push;
- gestione delle modifiche;
- prevenzione dei conflitti.

---

## Tecnologie

Il progetto utilizza principalmente:

- HTML5
- CSS3
- JavaScript

Il sito viene sviluppato senza framework frontend pesanti.

L'introduzione di framework, librerie o dipendenze esterne deve essere valutata in relazione a:

- reale necessità;
- performance;
- accessibilità;
- manutenzione;
- sicurezza;
- peso complessivo del sito.

Non devono essere aggiunte dipendenze esclusivamente per realizzare funzionalità semplici ottenibili attraverso HTML, CSS o JavaScript nativo.

---

## Struttura HTML

Ogni pagina HTML deve rispettare la struttura semantica generale del progetto.

```html
<!DOCTYPE html>

<html lang="">

    <head>

    </head>

    <body>

        <header>

        </header>

        <main>

        </main>

        <footer>

        </footer>

    </body>

</html>
```

Il valore dell'attributo `lang` deve corrispondere alla lingua reale della pagina.

Sul dominio `.com`:

```html
<html lang="en">
```

Sul dominio `.it`:

```html
<html lang="it">
```

Ogni pagina deve contenere un solo elemento `<main>`.

Ogni pagina deve contenere un solo `<h1>` principale.

La gerarchia degli heading deve essere logica e coerente con la struttura dei contenuti.

I tag HTML devono essere scelti in base al loro significato semantico e non esclusivamente in base alle esigenze grafiche.

---

## SEO e GEO

SEO e GEO devono essere considerate durante la progettazione delle pagine e non aggiunte soltanto al termine dello sviluppo.

Ogni pagina deve comunicare chiaramente:

- chi offre il servizio;
- quale servizio viene offerto;
- a chi è rivolto;
- dove viene svolto;
- quali elementi lo caratterizzano;
- quale azione può compiere il visitatore.

I contenuti devono essere scritti principalmente per le persone.

Non devono essere inserite ripetizioni artificiali di parole chiave.

Le informazioni principali non devono essere comunicate esclusivamente attraverso immagini.

---

## Performance

Il sito deve essere progettato per garantire caricamenti rapidi e stabilità del layout.

Particolare attenzione deve essere dedicata a:

- peso delle immagini;
- dimensioni delle immagini;
- immagini responsive;
- formati moderni;
- lazy loading;
- quantità di JavaScript;
- numero di font;
- script di terze parti;
- animazioni;
- stabilità del layout.

Le fotografie devono mantenere una qualità visiva adeguata al posizionamento professionale del sito senza compromettere inutilmente le prestazioni.

---

## Accessibilità

L'accessibilità deve essere considerata durante tutto lo sviluppo.

Devono essere utilizzati:

- HTML semantico;
- testi alternativi appropriati;
- gerarchia corretta dei titoli;
- label associate ai campi dei moduli;
- navigazione da tastiera;
- focus visibile;
- contrasti adeguati;
- link descrittivi;
- pulsanti correttamente identificabili.

ARIA deve essere utilizzato soltanto quando gli elementi HTML nativi non sono sufficienti.

---

## Responsive design

Il sito deve essere progettato per funzionare correttamente su:

- smartphone;
- tablet;
- notebook;
- desktop;
- schermi di grandi dimensioni.

La progettazione deve tenere conto delle differenti dimensioni dello schermo fin dall'inizio.

Non devono essere realizzate pagine desktop per poi tentare di adattarle successivamente ai dispositivi mobili senza una strategia responsive.

---

## Lavoro condiviso

Il progetto è sviluppato e gestito attraverso Git e GitHub.

Prima di iniziare una nuova sessione di lavoro è necessario verificare lo stato della repository locale e sincronizzarla con il repository remoto.

Le regole complete sono definite nel file:

```text
docs/workflow.md
```

Le modifiche strutturali non devono essere effettuate senza verificare la documentazione.

---

## Regola generale del progetto

In caso di dubbio deve essere scelta la soluzione:

- più semplice;
- più leggibile;
- più veloce;
- più accessibile;
- più facile da mantenere;
- più coerente con la struttura esistente;
- più utile per il visitatore.

Il design non deve ostacolare il contenuto.

La SEO non deve rendere innaturali i testi.

Le animazioni non devono compromettere la navigazione.

Le fotografie devono essere protagoniste senza compromettere le performance.

Il codice deve rimanere comprensibile anche a distanza di tempo e da persone diverse da chi lo ha scritto inizialmente.

Prima di modificare la struttura generale, gli URL, i domini, il sistema bilingue o le convenzioni di sviluppo è necessario aggiornare la documentazione del progetto.

---

## Stato del progetto

Il progetto è attualmente in fase di sviluppo.

La struttura principale dei due domini è stata definita.

Le pagine principali sono in fase di standardizzazione e sviluppo.

---

© Xrora & XroraWorks
