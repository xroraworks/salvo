# URL Map

## Scopo

Questo documento contiene la mappa ufficiale degli URL e delle corrispondenze linguistiche.

Riferimento per:

- hreflang;
- selettore lingua;
- canonical;
- sitemap;
- relazione tra pagine equivalenti.

---

## 1. Domini

### Domini brand

English:

```text
https://www.salvonicolosiph.com/
```

Italiano:

```text
https://www.salvonicolosiph.it/
```

### Domini SEO/geografici

English:

```text
https://www.fotografosicilia.com/
```

Italiano:

```text
https://www.fotografosicilia.it/
```

`x-default` deve puntare alla pagina equivalente scelta come default per il gruppo linguistico.

Ogni pagina utilizza un canonical coerente con la strategia di pubblicazione.

Se la stessa pagina viene pubblicata sui domini brand e sui domini SEO/geografici,
la relazione tra canonical, hreflang, contenuti distinti ed eventuali redirect
deve essere documentata prima della pubblicazione.

---

## 2. Mappa principale SEO/geografica

| Pagina | English `fotografosicilia.com` | Italiano `fotografosicilia.it` |
|---|---|---|
| Home | `/` | `/` |
| About | `/about/` | `/chi-sono/` |
| Services | `/services/` | `/servizi/` |
| Portfolio | `/portfolio/` | `/portfolio/` |
| Contact | `/contact/` | `/contatti/` |

## 2.1 Mappa principale brand

| Pagina | English `salvonicolosiph.com` | Italiano `salvonicolosiph.it` |
|---|---|---|
| Home | `/` | `/` |
| About | `/about/` | `/chi-sono/` |
| Services | `/services/` | `/servizi/` |
| Portfolio | `/portfolio/` | `/portfolio/` |
| Contact | `/contact/` | `/contatti/` |

La mappa brand segue la stessa struttura linguistica della mappa SEO/geografica,
salvo diversa decisione documentata.

Le sezioni seguenti documentano la coppia SEO/geografica attualmente presente
nella struttura della repository.

---

## 3. Home

English:

```text
https://www.fotografosicilia.com/
```

Italiano:

```text
https://www.fotografosicilia.it/
```

X-default:

```text
https://www.fotografosicilia.com/
```

---

## 4. About / Chi sono

English:

```text
https://www.fotografosicilia.com/about/
```

Italiano:

```text
https://www.fotografosicilia.it/chi-sono/
```

X-default:

```text
https://www.fotografosicilia.com/about/
```

---

## 5. Services / Servizi

English:

```text
https://www.fotografosicilia.com/services/
```

Italiano:

```text
https://www.fotografosicilia.it/servizi/
```

X-default:

```text
https://www.fotografosicilia.com/services/
```

---

## 6. Portfolio

English:

```text
https://www.fotografosicilia.com/portfolio/
```

Italiano:

```text
https://www.fotografosicilia.it/portfolio/
```

X-default:

```text
https://www.fotografosicilia.com/portfolio/
```

---

## 7. Contact / Contatti

English:

```text
https://www.fotografosicilia.com/contact/
```

Italiano:

```text
https://www.fotografosicilia.it/contatti/
```

X-default:

```text
https://www.fotografosicilia.com/contact/
```

---

## 8. Template .com

Il template seguente usa la coppia SEO/geografica come esempio. Per i domini
brand sostituire gli host con `salvonicolosiph.com` e `salvonicolosiph.it`
quando la pagina appartiene al gruppo brand.

```html
<link
    rel="canonical"
    href="URL_ENGLISH_PAGE"
>

<link
    rel="alternate"
    hreflang="en"
    href="URL_ENGLISH_PAGE"
>

<link
    rel="alternate"
    hreflang="it"
    href="URL_ITALIAN_PAGE"
>

<link
    rel="alternate"
    hreflang="x-default"
    href="URL_ENGLISH_PAGE"
>
```

---

## 9. Template .it

Il template seguente usa la coppia SEO/geografica come esempio. Per i domini
brand sostituire gli host con `salvonicolosiph.com` e `salvonicolosiph.it`
quando la pagina appartiene al gruppo brand.

```html
<link
    rel="canonical"
    href="URL_ITALIAN_PAGE"
>

<link
    rel="alternate"
    hreflang="en"
    href="URL_ENGLISH_PAGE"
>

<link
    rel="alternate"
    hreflang="it"
    href="URL_ITALIAN_PAGE"
>

<link
    rel="alternate"
    hreflang="x-default"
    href="URL_ENGLISH_PAGE"
>
```

---

## 10. Selettore lingua

```text
.com/
↕
.it/
```

```text
.com/about/
↕
.it/chi-sono/
```

```text
.com/services/
↕
.it/servizi/
```

```text
.com/portfolio/
↕
.it/portfolio/
```

```text
.com/contact/
↕
.it/contatti/
```

Non collegare automaticamente tutte le pagine alla homepage dell'altro dominio.

---

## 11. Nuove pagine

Procedura:

1. definire URL inglese;
2. definire URL italiano;
3. registrare la coppia qui;
4. creare le cartelle;
5. configurare canonical;
6. configurare hreflang reciproci;
7. configurare `x-default`;
8. aggiornare il selettore lingua;
9. aggiornare sitemap.

Esempio futuro:

| Pagina | English `.com` | Italiano `.it` |
|---|---|---|
| Private Events | `/services/private-events/` | `/servizi/eventi-privati/` |

---

## 12. URL vietati

Evitare:

```text
/services.html
/chi_sono/
/Page1/
/index.php?id=4
```

Preferire:

```text
/services/
/chi-sono/
/portfolio/private-event-taormina/
```

---

## 13. Modifica di URL pubblicati

Prima di cambiare un URL verificare:

- traffico;
- internal link;
- sitemap;
- canonical;
- hreflang;
- backlink;
- redirect `301`.

Ogni modifica deve essere documentata qui.

---

## 14. Stato attuale

Pagine previste:

```text
HOME
ABOUT / CHI SONO
SERVICES / SERVIZI
PORTFOLIO
CONTACT / CONTATTI
```
