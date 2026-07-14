# AGENTS.md

## Contesto del progetto

Questa repository contiene il sito web fotografico statico di Salvo Nicolosi.

Il sito è un progetto orientato all'acquisizione di nuovi clienti e al
posizionamento professionale, non è soltanto un portfolio fotografico.

La repository contiene due siti web correlati ma indipendenti:

- `fotografosicilia.com/` — sito in lingua inglese e dominio internazionale principale.
- `fotografosicilia.it/` — sito in lingua italiana rivolto al mercato italiano.

Il progetto utilizza HTML, CSS e JavaScript puro.

---

## Documentazione del progetto

Le regole ufficiali del progetto sono contenute nella cartella `docs/`.

Prima di effettuare modifiche, leggere la documentazione pertinente al lavoro
da svolgere.

La documentazione disponibile è composta dai seguenti file:

- `docs/coding-guidelines.md`
- `docs/seo-geo-guidelines.md`
- `docs/site-structure.md`
- `docs/url-map.md`
- `docs/content-map.md`
- `docs/workflow.md`

La documentazione contenuta nella cartella `docs/` rappresenta il riferimento
ufficiale per le regole del progetto.

Il presente file `AGENTS.md` contiene istruzioni operative per gli agenti e non
sostituisce la documentazione dettagliata del progetto.

---

## Prima di modificare il progetto

Prima di effettuare qualsiasi modifica:

1. identificare il dominio interessato dal lavoro;
2. identificare la pagina o il file esatto da modificare;
3. leggere la documentazione pertinente contenuta nella cartella `docs/`;
4. verificare il percorso completo del file;
5. preservare l'architettura esistente del progetto.

Non presumere convenzioni o regole quando queste sono già documentate.

---

## Documentazione da consultare in base al lavoro

Per le regole relative a HTML, CSS, JavaScript, accessibilità, naming,
indentazione, immagini e performance, consultare:

`docs/coding-guidelines.md`

Per SEO, GEO, metadati, URL canonical, hreflang, Open Graph, dati strutturati,
Local SEO e visibilità dei contenuti, consultare:

`docs/seo-geo-guidelines.md`

Per la struttura delle cartelle, la separazione dei domini, gli assets e la
struttura fisica dei file, consultare:

`docs/site-structure.md`

Per le corrispondenze tra URL inglesi e italiani e la mappatura delle pagine,
consultare:

`docs/url-map.md`

Per gli obiettivi delle pagine, le sezioni, i servizi, la gerarchia dei
contenuti e le call to action, consultare:

`docs/content-map.md`

Per Git, GitHub, commit, pull, push, rebase e il flusso di lavoro condiviso,
consultare:

`docs/workflow.md`

---

## Regole critiche del progetto

Non creare o modificare un file `index.html` nella root della repository.

La homepage inglese si trova in:

`fotografosicilia.com/index.html`

La homepage italiana si trova in:

`fotografosicilia.it/index.html`

Prima di modificare qualsiasi file `index.html`, verificare sempre il percorso
completo del file.

I siti `.com` e `.it` devono funzionare in maniera indipendente.

Non creare dipendenze tra i due domini per CSS, JavaScript, immagini, font o
icone.

Il sito `.com` deve utilizzare i propri assets.

Il sito `.it` deve utilizzare i propri assets.

Non introdurre framework, librerie pesanti, sistemi di build o dipendenze
esterne senza una reale necessità del progetto e senza che la modifica sia
documentata e approvata.

Non modificare l'architettura degli URL senza aver consultato e, quando
necessario, aggiornato:

`docs/url-map.md`

Non effettuare modifiche o supposizioni relative a SEO, GEO, metadati o dati
strutturati senza aver consultato:

`docs/seo-geo-guidelines.md`

Non creare o tradurre automaticamente la pagina equivalente nell'altra lingua,
a meno che il lavoro richiesto non riguardi esplicitamente entrambe le versioni
del sito.

---

## Principio operativo

Preferire soluzioni:

- semplici;
- semantiche;
- accessibili;
- performanti;
- facilmente manutenibili;
- coerenti con il progetto esistente;
- comprensibili da un altro sviluppatore o agente.

La fotografia deve rimanere il principale elemento visivo del sito senza
compromettere usabilità, accessibilità, SEO, GEO o performance.

Quando una supposizione entra in conflitto con la documentazione del progetto,
seguire la documentazione.

Se una modifica richiesta comporta il cambiamento di una regola già stabilita
nel progetto, identificare e segnalare il conflitto prima di procedere con
l'implementazione.