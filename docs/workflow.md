# Workflow

## Scopo

Questo documento definisce il metodo di lavoro condiviso sul progetto **Fotografo Sicilia**.

Strumenti:

- Visual Studio Code;
- Git;
- GitHub.

Obiettivi:

- evitare conflitti;
- evitare sovrascritture;
- mantenere una cronologia chiara;
- rendere riconoscibili le modifiche.

---

## 1. Repository

Repository:

```text
https://github.com/xroraworks/salvo.git
```

Remote:

```text
origin
```

Branch principale:

```text
main
```

---

## 2. Prima di iniziare

Eseguire:

```powershell
git status
```

Se non ci sono modifiche locali da gestire:

```powershell
git pull origin main
```

Non iniziare a lavorare su una versione locale non aggiornata.

---

## 3. Flusso standard

```text
GIT STATUS
↓
GIT PULL
↓
MODIFICA IN VS CODE
↓
CONTROLLO
↓
GIT STATUS
↓
GIT ADD
↓
GIT COMMIT
↓
GIT PUSH
```

Comandi:

```powershell
git status
git pull origin main
```

Dopo il lavoro:

```powershell
git status
git add .
git commit -m "tipo: descrizione"
git push origin main
```

---

## 4. GitHub web

Evitare modifiche dirette dal sito GitHub quando il progetto viene sviluppato da VS Code.

Le modifiche dal browser possono creare divergenze tra repository locale e remota.

Possibili conseguenze:

```text
non-fast-forward
merge conflict
rebase conflict
```

Dopo una modifica effettuata su GitHub:

```powershell
git pull origin main
```

prima di continuare localmente.

---

## 5. File corretto

Prima di modificare verificare il percorso.

Homepage `.com`:

```text
fotografosicilia.com > index.html
```

Homepage `.it`:

```text
fotografosicilia.it > index.html
```

Non deve esistere:

```text
root > index.html
```

Consultare `site-structure.md` prima di creare file nella root.

---

## 6. Git status

Utilizzare frequentemente:

```powershell
git status
```

Serve a verificare:

- branch;
- file modificati;
- file nuovi;
- file eliminati;
- staging;
- rebase;
- merge;
- conflitti.

---

## 7. Staging

Tutte le modifiche:

```powershell
git add .
```

File specifico:

```powershell
git add README.md
```

Esempio:

```powershell
git add fotografosicilia.com/index.html
```

Prima del commit:

```powershell
git status
```

Controllare `Changes to be committed`.

---

## 8. Commit

Formato:

```text
tipo: descrizione
```

Tipi ufficiali:

```text
feat:
fix:
seo:
geo:
perf:
content:
style:
docs:
refactor:
```

---

## 9. Esempi commit

```text
feat: add services page structure
```

```text
fix: move com homepage to correct domain folder
```

```text
seo: update homepage title and meta description
```

```text
geo: clarify service area on homepage
```

```text
perf: optimize portfolio images
```

```text
content: update about page introduction
```

```text
style: improve header spacing
```

```text
docs: update site structure guidelines
```

```text
refactor: reorganize project structure for com and it websites
```

---

## 10. Commit e push

Errato:

```powershell
git push "Aggiornamento index.html"
```

Git interpreta il testo come remote.

Corretto:

```powershell
git commit -m "seo: update com homepage metadata"
git push origin main
```

---

## 11. Push

Comando standard:

```powershell
git push origin main
```

Il push invia i commit locali al remoto.

---

## 12. Non-fast-forward

Messaggio:

```text
! [rejected] main -> main (non-fast-forward)
```

Il remoto contiene modifiche non presenti localmente.

Non utilizzare immediatamente `--force`.

Prima:

```powershell
git status
```

Poi valutare:

```powershell
git pull --rebase origin main
```

---

## 13. Conflitti

Se Git mostra:

```text
Unmerged paths
```

eseguire:

```powershell
git status
```

Nel file possono comparire:

```text
<<<<<<< HEAD
contenuto A
=======
contenuto B
>>>>>>> commit
```

La versione finale deve:

- contenere il contenuto corretto;
- eliminare i marker;
- essere salvata.

Poi:

```powershell
git add NOME-FILE
```

---

## 14. Rebase

Se `git status` mostra:

```text
rebase in progress
```

non eseguire un nuovo pull.

Dopo aver risolto:

```powershell
git add NOME-FILE
git rebase --continue
```

Controllare:

```powershell
git status
```

---

## 15. Rebase abort

Utilizzare:

```powershell
git rebase --abort
```

soltanto per annullare il rebase.

Prima verificare sempre:

```powershell
git status
```

---

## 16. Force push

Non utilizzare normalmente:

```powershell
git push --force
```

Quando realmente necessario e approvato:

```powershell
git push --force-with-lease origin main
```

Il force push è un'eccezione.

---

## 17. Lavoro in due

Prima di iniziare:

```powershell
git pull origin main
```

Quando possibile evitare modifiche contemporanee allo stesso file.

File sensibili:

```text
style.css
main.js
README.md
docs/*
index.html delle pagine principali
```

Comunicare gli interventi sulle strutture globali.

---

## 18. Modifiche strutturali

Prima di modificare:

- cartelle;
- URL;
- dominio di una pagina;
- naming convention;
- struttura HTML;
- sistema bilingue;
- file globali;

consultare i docs.

Aggiornare il file pertinente:

```text
site-structure.md
url-map.md
coding-guidelines.md
seo-geo-guidelines.md
content-map.md
```

---

## 19. Cartelle vuote

Git non traccia cartelle vuote.

Traccia i file.

Una cartella può non comparire su GitHub finché non contiene un file.

Se necessario può essere utilizzato `.gitkeep`.

---

## 20. LF e CRLF

Su Windows Git può mostrare:

```text
LF will be replaced by CRLF
```

Non è automaticamente un errore.

Indica una differenza nel formato dei fine riga.

La gestione potrà essere standardizzata con `.gitattributes` quando necessario.

---

## 21. Prima del commit

Verificare:

1. file salvati;
2. percorso corretto;
3. `git status`;
4. assenza di file creati per errore;
5. codice controllato;
6. preview controllata quando pertinente;
7. staging corretto;
8. nuovo `git status`.

---

## 22. Prima del push

Verificare:

- commit creato;
- messaggio chiaro;
- nessun rebase in corso;
- nessun conflitto;
- branch `main`;
- working tree nello stato atteso.

Poi:

```powershell
git push origin main
```

---

## 23. Dopo il push

```powershell
git status
```

Stato ideale:

```text
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Controllare GitHub:

- file corretti;
- percorsi corretti;
- commit presente;
- assenza di duplicati nella root.

---

## 24. Workflow completo

```powershell
git status
git pull origin main
```

Lavorare in VS Code.

Poi:

```powershell
git status
git add .
git status
git commit -m "tipo: descrizione"
git push origin main
git status
```

---

## 25. Principio finale

La cronologia Git deve raccontare l'evoluzione del progetto.

Ogni modifica importante deve essere:

```text
RICONOSCIBILE
CONTROLLABILE
DOCUMENTATA
RECUPERABILE
```

In caso di errore fermarsi e leggere:

```powershell
git status
```

prima di eseguire altri comandi.
