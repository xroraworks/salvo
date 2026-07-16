# SEO & GEO Guidelines

## Scopo

Questo documento definisce le regole relative a SEO, GEO, local SEO, indicizzazione, metadati, dati strutturati, contenuti e collegamenti.

Le regole devono essere applicate durante la progettazione delle pagine.

---

## 1. Identità del progetto

Brand:

```text
Salvo Nicolosi
```

Attività:

```text
Fotografo
```

Area principale:

```text
Catania e Sicilia
```

Domini brand:

```text
https://www.salvonicolosiph.com/
https://www.salvonicolosiph.it/
```

Ruolo:

```text
domini normali del brand Salvo Nicolosi PH
```

Domini SEO/geografici:

```text
https://www.fotografosicilia.com/
https://www.fotografosicilia.it/
```

Ruolo:

```text
domini orientati al posizionamento per fotografo, Catania e Sicilia
```

I domini `fotografosicilia.com` e `fotografosicilia.it` rappresentano il posizionamento geografico.

I domini `salvonicolosiph.com` e `salvonicolosiph.it` rappresentano il brand diretto.

Il brand comunicato rimane **Salvo Nicolosi**.

---

## 2. Obiettivo SEO

La SEO deve aiutare a comprendere:

- chi è Salvo Nicolosi;
- cosa offre;
- dove lavora;
- a chi si rivolge;
- quale pagina risponde a un determinato intento.

La SEO non deve trasformare i testi in elenchi di keyword.

---

## 3. Obiettivo GEO

Ogni pagina importante deve chiarire:

1. chi offre il servizio;
2. quale servizio viene offerto;
3. dove viene offerto;
4. a chi è rivolto;
5. come viene svolto;
6. quali elementi lo distinguono;
7. come richiedere informazioni.

Le informazioni importanti non devono essere presenti soltanto nelle immagini.

---

## 4. Lingue e domini

Non viene utilizzata una cartella `/en/`.

Brand inglese:

```text
https://www.salvonicolosiph.com/
```

Brand italiano:

```text
https://www.salvonicolosiph.it/
```

SEO/geografico inglese:

```text
https://www.fotografosicilia.com/
```

SEO/geografico italiano:

```text
https://www.fotografosicilia.it/
```

Le pagine equivalenti devono essere registrate in:

```text
docs/url-map.md
```

Quando una pagina esiste sia sui domini brand sia sui domini SEO/geografici,
non deve essere pubblicata come duplicato non governato. Prima della
pubblicazione deve essere scelta e documentata la strategia tra:

- contenuto distinto per intento;
- canonical verso la pagina principale scelta;
- redirect;
- gruppo hreflang separato per coppia di domini;
- altra scelta SEO motivata.

---

## 5. Title

Ogni pagina deve avere un `<title>` unico.

Il title deve:

- descrivere il contenuto reale;
- contenere il servizio principale quando pertinente;
- contenere la località quando utile;
- includere Salvo Nicolosi quando coerente;
- essere leggibile;
- evitare keyword stuffing.

### Inglese

```html
<title>Photographer for Events in Catania | Salvo Nicolosi</title>
```

### Italiano

```html
<title>Fotografo per Eventi a Catania | Salvo Nicolosi</title>
```

### Da evitare

```html
<title>Home</title>
```

```html
<title>Photographer Sicily Catania Photographer Events Sicily Photo</title>
```

---

## 6. Meta description

Ogni pagina deve avere una description specifica.

Deve:

- descrivere la pagina;
- indicare il servizio;
- includere la località quando utile;
- comunicare un beneficio;
- essere naturale.

### Inglese

```html
<meta
    name="description"
    content="Photographer in Catania for private events, companies, restaurants and social content. Discover the portfolio and tell me about your project."
>
```

### Italiano

```html
<meta
    name="description"
    content="Fotografo a Catania per eventi privati, aziende, ristoranti e contenuti social. Scopri il portfolio e raccontami il tuo progetto."
>
```

Non duplicare la stessa description su tutte le pagine.

---

## 7. Meta keywords

Non utilizzare:

```html
<meta
    name="keywords"
    content=""
>
```

Le keyword devono essere integrate naturalmente in:

- title;
- heading;
- testi;
- URL;
- collegamenti;
- descrizioni.

---

## 8. Robots

Le pagine pubbliche principali utilizzano normalmente:

```html
<meta
    name="robots"
    content="index, follow"
>
```

L'uso di `noindex` o `nofollow` deve essere una scelta consapevole e documentata.

---

## 9. Canonical

Ogni pagina indicizzabile deve utilizzare un canonical autoreferenziale.

Homepage `.com`:

```html
<link
    rel="canonical"
    href="https://www.fotografosicilia.com/"
>
```

Services:

```html
<link
    rel="canonical"
    href="https://www.fotografosicilia.com/services/"
>
```

Servizi `.it`:

```html
<link
    rel="canonical"
    href="https://www.fotografosicilia.it/servizi/"
>
```

Il canonical deve:

- usare HTTPS;
- essere assoluto;
- indicare l'URL definitivo;
- essere coerente con sitemap e link interni;
- non puntare automaticamente alla homepage.

Le versioni linguistiche non devono canonizzare una sull'altra.

---

## 10. Hreflang

Le pagine equivalenti devono utilizzare hreflang reciproci.

```html
<link
    rel="alternate"
    hreflang="en"
    href="https://www.fotografosicilia.com/"
>

<link
    rel="alternate"
    hreflang="it"
    href="https://www.fotografosicilia.it/"
>

<link
    rel="alternate"
    hreflang="x-default"
    href="https://www.fotografosicilia.com/"
>
```

`x-default` punta alla pagina equivalente del `.com`.

Il selettore lingua deve collegare pagine equivalenti.

### Corretto

```text
.com/services/
↕
.it/servizi/
```

### Da evitare

```text
.com/services/
↓
.it/
```

---

## 11. Open Graph

Ogni pagina importante deve prevedere Open Graph.

```html
<meta
    property="og:type"
    content="website"
>

<meta
    property="og:title"
    content="Photographer for Events in Catania | Salvo Nicolosi"
>

<meta
    property="og:description"
    content="Photographer in Catania for private events, brands, businesses and social content."
>

<meta
    property="og:url"
    content="https://www.fotografosicilia.com/"
>

<meta
    property="og:image"
    content="https://www.fotografosicilia.com/assets/images/og/home.jpg"
>

<meta
    property="og:image:alt"
    content="Photography portfolio of Salvo Nicolosi"
>

<meta
    property="og:locale"
    content="en_GB"
>

<meta
    property="og:locale:alternate"
    content="it_IT"
>

<meta
    property="og:site_name"
    content="Salvo Nicolosi"
>
```

`og:url` deve essere coerente con il canonical.

`og:image` deve puntare a un file reale, non a una cartella.

---

## 12. Immagini Open Graph

Dimensione di riferimento:

```text
1200 × 630 px
```

Possono essere aggiunti:

```html
<meta
    property="og:image:width"
    content="1200"
>

<meta
    property="og:image:height"
    content="630"
>
```

La fotografia deve rimanere protagonista.

---

## 13. Contenuti

Ogni pagina deve spiegare:

- cosa viene offerto;
- a chi è rivolto;
- come si svolge;
- quali vantaggi offre;
- dove viene svolto;
- come contattare il fotografo.

Non creare pagine composte soltanto da fotografie.

I testi devono essere:

- originali;
- chiari;
- naturali;
- specifici;
- leggibili;
- utili;
- coerenti con i servizi reali.

---

## 14. Scrittura SEO

Esempi inglesi:

```text
photographer in Sicily
photographer in Catania
event photographer in Catania
corporate event photographer
restaurant photographer in Sicily
social content photography
```

Esempi italiani:

```text
fotografo in Sicilia
fotografo a Catania
fotografo per eventi a Catania
fotografia aziendale
fotografo per ristoranti
contenuti fotografici social
```

### Da evitare

> Photographer Sicily? Sicily photographer for photographer Sicily events.

### Preferire

> I photograph private events, businesses and brands in Catania and across Sicily.

---

## 15. GEO

Utilizzare frasi esplicite e verificabili.

### Inglese

> Salvo Nicolosi is a photographer based in the Catania area, working with private events, companies, restaurants and businesses across Sicily.

### Italiano

> Salvo Nicolosi è un fotografo attivo nell'area di Catania e realizza servizi per eventi privati, aziende, ristoranti e attività commerciali in Sicilia.

Quando utili devono essere presenti:

- descrizioni dei servizi;
- area servita;
- biografia professionale;
- portfolio contestualizzato;
- testimonianze autentiche;
- FAQ utili;
- contatti coerenti;
- progetti e location reali.

Non creare contenuti artificiali soltanto per sistemi AI.

---

## 16. Local SEO

Aree iniziali:

- Catania;
- provincia di Catania;
- Taormina;
- Giardini Naxos;
- Acireale;
- Giarre;
- Viagrande;
- Trecastagni;
- Sicilia.

Non creare pagine identiche cambiando soltanto la città.

Una pagina locale deve contenere materiale specifico:

- fotografie reali;
- location;
- esperienza collegata al territorio;
- progetto pertinente;
- informazioni utili.

---

## 17. URL

Gli URL devono essere:

- brevi;
- descrittivi;
- in minuscolo;
- separati da trattini;
- senza spazi;
- coerenti con la lingua.

### Inglese

```text
/services/
/portfolio/
/contact/
/portfolio/private-event-taormina/
```

### Italiano

```text
/servizi/
/portfolio/
/contatti/
/portfolio/evento-privato-taormina/
```

### Da evitare

```text
/page1.html
/servizio_1/
/index.php?id=24
/FotografoEventiCatania/
```

Un URL pubblicato non deve essere modificato senza valutare un redirect `301`.

---

## 18. Versioni linguistiche

Le due versioni non devono essere traduzioni letterali obbligatorie.

Il `.com` deve essere adattato al pubblico internazionale.

Il `.it` deve essere adattato al pubblico italiano.

Le pagine equivalenti devono mantenere:

- stesso obiettivo;
- stesso servizio principale;
- coerenza delle informazioni essenziali.

---

## 19. Alt text

L'alt deve descrivere l'immagine.

### Corretto

```html
alt="Business owner photographed inside a restaurant in Catania"
```

### Da evitare

```html
alt="Sicily photographer Catania photographer restaurant photography"
```

---

## 20. Internal linking

Collegamenti consigliati:

```text
Home → Services
Home → Portfolio
Services → Portfolio correlato
Portfolio → Servizio pertinente
Portfolio → Contact
About → Portfolio
Footer → Pagine principali
```

I collegamenti devono essere utili.

Non creare pagine importanti isolate.

---

## 21. Anchor text

### Corretto

```html
<a href="/services/">
    Explore photography services
</a>
```

### Da evitare

```html
<a href="/services/">
    Click here
</a>
```

---

## 22. Breadcrumb

Le pagine profonde possono utilizzare breadcrumb.

```html
<nav aria-label="Breadcrumb">

    <ol class="breadcrumb-list">

        <li>
            <a href="/">
                Home
            </a>
        </li>

        <li>
            <a href="/portfolio/">
                Portfolio
            </a>
        </li>

        <li aria-current="page">
            Private event in Taormina
        </li>

    </ol>

</nav>
```

Quando presenti possono essere accompagnati da `BreadcrumbList`.

---

## 23. Dati strutturati

Utilizzare JSON-LD.

Tipologie valutabili:

- `Person`;
- `Organization`, quando appropriato;
- `LocalBusiness`, quando appropriato;
- `Service`;
- `WebSite`;
- `WebPage`;
- `ImageObject`;
- `BreadcrumbList`;
- `FAQPage`, se le FAQ sono presenti;
- `Article`, per contenuti editoriali;
- `Review`, soltanto per recensioni autentiche.

Non utilizzare `ProfessionalService` come tipologia generale.

I dati devono descrivere informazioni reali e verificabili.

---

## 24. Identità JSON-LD

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Salvo Nicolosi",
    "url": "https://www.fotografosicilia.com/",
    "jobTitle": "Photographer",
    "description": "Photographer for private events, companies, restaurants and businesses in Sicily.",
    "areaServed": [
        "Catania",
        "Sicily"
    ],
    "sameAs": [
        "URL_INSTAGRAM",
        "URL_FACEBOOK",
        "URL_LINKEDIN"
    ]
}
</script>
```

I segnaposto devono essere sostituiti prima della pubblicazione.

---

## 25. Coerenza

Le informazioni devono essere coerenti tra:

- homepage;
- About / Chi sono;
- footer;
- dati strutturati;
- social collegati;
- contatti.

Evitare differenze non motivate su:

- professione;
- area servita;
- nome;
- servizi;
- contatti.

---

## 26. Sitemap

Ogni dominio deve avere la propria sitemap.

```text
https://www.fotografosicilia.com/sitemap.xml
```

```text
https://www.fotografosicilia.it/sitemap.xml
```

Inserire soltanto pagine:

- pubblicate;
- canoniche;
- indicizzabili;
- funzionanti;
- raggiungibili.

Non inserire:

- pagine di test;
- duplicate;
- `noindex`;
- URL con errori;
- anteprime.

---

## 27. Robots.txt

Ogni dominio deve avere il proprio:

```text
/robots.txt
```

Non bloccare CSS, JavaScript o immagini necessarie alla comprensione del sito.

Non utilizzare `Disallow: /` sul sito pubblico.

---

## 28. Footer

Il footer può contenere:

- Salvo Nicolosi;
- descrizione professionale;
- servizi;
- Catania e Sicilia;
- contatti;
- social;
- pagine principali;
- privacy;
- cookie policy quando necessaria;
- selettore lingua.

Non trasformarlo in un elenco di keyword.

---

## 29. Checklist SEO e GEO

### Metadata

- title unico;
- description unica;
- robots corretto;
- canonical autoreferenziale;
- hreflang corretti;
- `x-default` sul `.com`;
- `og:url` corretto;
- `og:image` reale.

### Contenuto

- chiaro chi offre il servizio;
- chiaro cosa offre;
- chiaro dove;
- chiaro per chi;
- spiegato il processo;
- CTA presente;
- keyword naturali;
- testo reale oltre alle immagini.

### Immagini

- alt descrittivi;
- nomi file corretti;
- immagini contestualizzate;
- immagine Open Graph adeguata.

### Collegamenti

- pagina raggiungibile;
- internal link pertinenti;
- nessuna pagina isolata;
- selettore lingua verso la pagina equivalente.

### Dati strutturati

- informazioni reali;
- coerenza con la pagina;
- segnaposto rimossi;
- validazione prima della pubblicazione.

---

## 30. Principio finale

Una pagina deve permettere di comprendere:

```text
CHI
COSA
DOVE
PER CHI
COME
PERCHÉ
PROSSIMO PASSO
```

La SEO non deve rendere innaturali i testi.

La GEO non deve produrre contenuti artificiali.

La chiarezza viene prima della ripetizione delle keyword.
