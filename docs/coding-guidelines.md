# Coding Guidelines

## Scopo

Questo documento definisce le regole ufficiali di sviluppo del progetto **Fotografo Sicilia**.

Le regole si applicano a tutti i domini pubblici del progetto.

Domini brand:

- `https://www.salvonicolosiph.com/`
- `https://www.salvonicolosiph.it/`

Domini SEO/geografici:

- `https://www.fotografosicilia.com/`
- `https://www.fotografosicilia.it/`

Il codice deve rimanere leggibile, semantico, accessibile, performante e comprensibile anche da persone diverse da chi lo ha scritto.

---

## 1. Tecnologie

Il progetto utilizza:

- HTML5
- CSS3
- JavaScript nativo

Non introdurre framework o librerie senza una reale necessità.

Ogni dipendenza esterna deve essere valutata in relazione a:

- performance;
- accessibilità;
- manutenzione;
- sicurezza;
- peso complessivo.

---

## 2. Struttura HTML obbligatoria

Ogni pagina deve utilizzare questa struttura:

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

La dichiarazione corretta è:

```html
<!DOCTYPE html>
```

Non utilizzare:

```html
<!DOCTYPE>
```

---

## 3. Lingua della pagina

Sul dominio `.com`:

```html
<html lang="en">
```

Sul dominio `.it`:

```html
<html lang="it">
```

Il valore di `lang` deve corrispondere alla lingua reale della pagina.

---

## 4. Head

Ogni pagina deve contenere almeno:

```html
<meta charset="UTF-8">

<meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
>
```

Devono inoltre essere previsti, quando pertinenti:

- `<title>`;
- meta description;
- meta robots;
- canonical;
- hreflang;
- Open Graph;
- favicon;
- CSS;
- JSON-LD;
- JavaScript.

Le regole SEO e GEO sono definite in `seo-geo-guidelines.md`.

---

## 5. HTML semantico

Utilizzare i tag in base al loro significato.

Tag principali:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
<figure>
<figcaption>
<address>
```

Non utilizzare un `<div>` quando esiste un elemento semantico più appropriato.

### Corretto

```html
<nav aria-label="Main navigation">

    <ul>

        <li>
            <a href="/">
                Home
            </a>
        </li>

        <li>
            <a href="/about/">
                About
            </a>
        </li>

    </ul>

</nav>
```

### Da evitare

```html
<div class="menu">

    <div>
        Home
    </div>

    <div>
        About
    </div>

</div>
```

---

## 6. Header

L'header globale può contenere:

- logo o nome professionale;
- navigazione principale;
- selettore lingua;
- CTA;
- pulsante menu mobile.

Il logo o nome deve collegarsi alla homepage del dominio corrente.

```html
<a
    class="site-logo"
    href="/"
    aria-label="Salvo Nicolosi - Homepage"
>
    Salvo Nicolosi
</a>
```

---

## 7. Main

Ogni pagina deve contenere un solo `<main>`.

Preferire:

```html
<main id="main-content">
```

Il `<main>` deve contenere esclusivamente il contenuto principale della pagina.

---

## 8. Section

Una `<section>` deve rappresentare un argomento riconoscibile.

Quando possibile deve avere un titolo associato.

```html
<section
    class="services-section"
    aria-labelledby="services-title"
>

    <h2 id="services-title">
        Photography services
    </h2>

</section>
```

Non creare una `<section>` soltanto per applicare margini, sfondi o colori.

---

## 9. Article

Utilizzare `<article>` per contenuti autonomi:

- progetto portfolio;
- servizio;
- testimonianza;
- storia fotografica;
- case study.

```html
<article class="portfolio-card">

    <img
        src="/assets/images/portfolio/private-event-taormina.webp"
        width="1200"
        height="800"
        alt="Private event photographed in Taormina"
        loading="lazy"
        decoding="async"
    >

    <h3>
        Private event in Taormina
    </h3>

    <p>
        A photographic story created in the historic centre of Taormina.
    </p>

    <a href="/portfolio/private-event-taormina/">
        View the story
    </a>

</article>
```

---

## 10. Heading

Ogni pagina deve avere un solo `<h1>`.

La gerarchia deve essere logica:

```html
<h1>Page title</h1>

<h2>Main section</h2>

<h3>Internal topic</h3>

<h3>Internal topic</h3>

<h2>New main section</h2>
```

Non scegliere un heading in base alla dimensione grafica.

### Da evitare

```html
<h1>Services</h1>

<h4>Private events</h4>
```

### Preferire

```html
<h1>Photography services in Sicily</h1>

<h2>Private events</h2>

<h3>Weddings</h3>
```

---

## 11. Link

Utilizzare `<a>` per la navigazione.

Il testo deve descrivere la destinazione.

### Preferire

```html
<a href="/portfolio/">
    View the portfolio
</a>
```

### Evitare

```html
<a href="/portfolio/">
    Click here
</a>
```

Per link esterni aperti in una nuova scheda:

```html
target="_blank"
rel="noopener noreferrer"
```

---

## 12. Button

Utilizzare `<button>` per azioni.

Esempi:

- menu;
- moduli;
- controlli di galleria;
- interfacce.

```html
<button
    class="menu-toggle"
    type="button"
    aria-expanded="false"
    aria-controls="main-navigation"
>
    Open menu
</button>
```

Per navigare verso un'altra pagina utilizzare `<a>`.

---

## 13. Moduli

Ogni campo deve avere una label associata.

```html
<label for="contact-name">
    Name
</label>

<input
    type="text"
    id="contact-name"
    name="name"
    autocomplete="name"
    required
>
```

Non usare il placeholder come sostituto della label.

Utilizzare tipi appropriati:

```html
type="email"
type="tel"
type="date"
```

I moduli devono prevedere:

- campi obbligatori riconoscibili;
- errori chiari;
- consenso privacy quando necessario;
- conferma di invio;
- protezione antispam;
- navigazione da tastiera.

---

## 14. Skip link

Versione inglese:

```html
<a
    class="skip-link"
    href="#main-content"
>
    Skip to main content
</a>
```

Versione italiana:

```html
<a
    class="skip-link"
    href="#main-content"
>
    Vai al contenuto principale
</a>
```

---

## 15. Commenti HTML

Formato standard:

```html
<!-- ==================================================
     HEADER
================================================== -->
```

```html
<!-- ==================================================
     HERO
================================================== -->
```

```html
<!-- ==================================================
     SERVICES
================================================== -->
```

```html
<!-- ==================================================
     FOOTER
================================================== -->
```

Per strutture lunghe:

```html
</section>
<!-- /services-section -->
```

I commenti devono spiegare la struttura o una scelta tecnica.

Non inserire:

- password;
- credenziali;
- token;
- chiavi API;
- dati personali;
- informazioni riservate.

Il codice non più utilizzato deve essere eliminato. Git conserva la cronologia.

---

## 16. Indentazione

Utilizzare **4 spazi**.

Non mescolare tab e spazi.

```html
<section class="intro-section">

    <div class="content-container">

        <h2>
            Stories that remain
        </h2>

        <p>
            Photography created around people and real moments.
        </p>

    </div>

</section>
```

Gli attributi lunghi possono essere distribuiti su più righe:

```html
<meta
    name="description"
    content="Professional photography services for private events, brands and businesses in Sicily."
>
```

---

## 17. Classi CSS

Le classi devono essere:

- in inglese;
- in minuscolo;
- in `kebab-case`.

### Corretto

```text
hero-section
service-card
portfolio-grid
contact-form
main-navigation
language-switcher
```

### Da evitare

```text
HeroSection
service_card
Box1
contenitoreBlu
testoGrande
```

Le classi devono descrivere il ruolo.

Preferire:

```text
testimonial-card
```

Evitare:

```text
gray-box
```

---

## 18. ID

Utilizzare gli ID soltanto per:

- anchor;
- label e input;
- ARIA;
- elementi unici controllati da JavaScript;
- contenuto principale.

Esempi:

```text
main-content
contact-email
services-title
main-navigation
```

Gli ID devono essere unici.

---

## 19. CSS

Non utilizzare CSS inline.

### Da evitare

```html
<h1 style="font-size: 60px; color: black;">
```

### Preferire

```html
<h1 class="hero-title">
```

File principale:

```text
assets/css/style.css
```

Utilizzare custom properties per valori ricorrenti.

```css
:root {
    --color-background: #f7f5f1;
    --color-text: #171717;
    --color-muted: #686868;

    --font-heading: "Heading Font", serif;
    --font-body: "Body Font", sans-serif;

    --container-width: 1200px;
    --section-spacing: clamp(4rem, 8vw, 8rem);
}
```

---

## 20. Organizzazione CSS

Ordine consigliato:

```css
/* ==================================================
   1. CUSTOM PROPERTIES
================================================== */

/* ==================================================
   2. RESET
================================================== */

/* ==================================================
   3. BASE
================================================== */

/* ==================================================
   4. TYPOGRAPHY
================================================== */

/* ==================================================
   5. LAYOUT
================================================== */

/* ==================================================
   6. COMPONENTS
================================================== */

/* ==================================================
   7. UTILITIES
================================================== */

/* ==================================================
   8. RESPONSIVE
================================================== */
```

Non aggiungere regole casualmente alla fine del file.

---

## 21. JavaScript

JavaScript deve essere utilizzato soltanto quando necessario.

Non deve essere indispensabile per:

- leggere i contenuti;
- comprendere i servizi;
- trovare i contatti;
- vedere le immagini principali.

File principale:

```text
assets/js/main.js
```

Caricamento consigliato:

```html
<script
    src="/assets/js/main.js"
    defer
></script>
```

---

## 22. Immagini

Formati preferiti:

- AVIF;
- WebP;
- JPEG come fallback;
- PNG soltanto per trasparenza;
- SVG per loghi e icone.

Non caricare fotografie alla risoluzione originale della fotocamera.

```html
<img
    src="/assets/images/portfolio/taormina-event-1200.webp"
    srcset="
        /assets/images/portfolio/taormina-event-600.webp 600w,
        /assets/images/portfolio/taormina-event-1200.webp 1200w,
        /assets/images/portfolio/taormina-event-1800.webp 1800w
    "
    sizes="(max-width: 768px) 100vw, 50vw"
    width="1200"
    height="800"
    alt="Private event photographed at sunset in Taormina"
    loading="lazy"
    decoding="async"
>
```

---

## 23. Width e height

Dichiarare quando possibile:

```html
width=""
height=""
```

Questo riduce gli spostamenti del layout.

---

## 24. Lazy loading

Le immagini fuori dalla parte iniziale possono utilizzare:

```html
loading="lazy"
```

L'immagine principale della hero non deve normalmente utilizzare lazy loading.

Per una risorsa principale può essere valutato:

```html
fetchpriority="high"
```

---

## 25. Alt text

L'alt deve descrivere il contenuto utile dell'immagine.

### Corretto

```html
alt="Graduate photographed during a private event in Catania"
```

### Da evitare

```html
alt="photo"
```

```html
alt="photographer Sicily photographer Catania event photography"
```

Per immagini decorative:

```html
alt=""
```

---

## 26. Font

Indicativamente utilizzare:

- un font per titoli;
- un font per testi e interfaccia.

Caricare soltanto i pesi realmente utilizzati.

Esempio:

```text
400 Regular
500 Medium
600 SemiBold
```

Quando possibile ospitare i font localmente.

Prevedere sempre un fallback.

---

## 27. Accessibilità

Regole minime:

- HTML semantico;
- contrasto sufficiente;
- testo leggibile;
- navigazione da tastiera;
- focus visibile;
- alt corretti;
- label nei moduli;
- pulsanti comprensibili;
- link descrittivi;
- nessuna informazione comunicata soltanto tramite colore.

ARIA deve essere utilizzato soltanto quando l'HTML nativo non è sufficiente.

---

## 28. Focus

Non utilizzare:

```css
outline: none;
```

senza un'alternativa accessibile.

Il focus deve essere visibile su:

- link;
- pulsanti;
- input;
- controlli interattivi.

---

## 29. Movimento ridotto

```css
@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

}
```

Le animazioni devono essere leggere, brevi e funzionali.

Evitare:

- intro obbligatorie;
- blocco dello scroll;
- parallax pesante;
- animazioni che ritardano il testo;
- cursori difficili da utilizzare.

---

## 30. Responsive design

Il sito deve funzionare su:

- smartphone;
- tablet;
- notebook;
- desktop;
- grandi schermi.

Il responsive deve essere considerato durante lo sviluppo.

Non duplicare contenuti HTML per creare una versione desktop e una mobile senza una reale necessità.

---

## 31. Performance

Controllare:

- Largest Contentful Paint;
- Interaction to Next Paint;
- Cumulative Layout Shift.

Azioni richieste:

- comprimere le immagini;
- dichiarare width e height;
- utilizzare immagini responsive;
- limitare JavaScript;
- limitare script esterni;
- utilizzare lazy loading correttamente;
- evitare slider pesanti;
- limitare le fotografie nella homepage;
- ottimizzare i font.

---

## 32. Nomi dei file

I nomi devono essere:

- in minuscolo;
- descrittivi;
- separati da trattini;
- senza spazi;
- senza accenti;
- senza caratteri speciali;
- senza numeri casuali.

### Corretto

```text
private-event-taormina.webp
corporate-event-catania.webp
restaurant-photography-sicily.webp
```

### Da evitare

```text
DSC_8493.jpg
foto definitiva 2.jpg
IMG(1).png
evento-à-taormina.jpg
```

---

## 33. Percorso dei file

Homepage inglese:

```text
fotografosicilia.com/index.html
```

Homepage italiana:

```text
fotografosicilia.it/index.html
```

Non deve esistere:

```text
/index.html
```

nella root della repository.

Verificare sempre il breadcrumb di VS Code prima di modificare un file.

---

## 34. Checklist tecnica

Prima di completare una pagina verificare:

### HTML

- `<!DOCTYPE html>` presente;
- `lang` corretto;
- `header`, `main`, `footer` presenti;
- un solo `<main>`;
- un solo `<h1>`;
- heading logici;
- tag semantici corretti.

### Immagini

- file ottimizzati;
- nomi descrittivi;
- alt corretti;
- width e height presenti;
- `srcset` quando utile;
- lazy loading soltanto su immagini non prioritarie.

### Accessibilità

- navigazione da tastiera;
- focus visibile;
- contrasti adeguati;
- label nei moduli;
- pulsanti comprensibili;
- skip link presente.

### Performance

- immagini compresse;
- JavaScript essenziale;
- script caricati correttamente;
- layout stabile;
- animazioni leggere;
- font limitati.

---

## 35. Principio finale

In caso di dubbio scegliere la soluzione:

- più semplice;
- più leggibile;
- più veloce;
- più accessibile;
- più facile da mantenere;
- più coerente con il progetto.

Il design non deve ostacolare il contenuto.

Le fotografie devono essere protagoniste senza compromettere performance e comprensione.
