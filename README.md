# EXPRESS-API-CRUD

## Panoramica

1. **Eseguire quanto segue:**

   - Iniziamo a creare le API per il nostro blog. Iniziate con un nuovo progetto Express + Prisma. Potete utilizzare lo schema Prisma che avete creato nell’esercizio di ieri.

   - Definizione degli endpoint: Vi chiediamo di definire i seguenti endpoint:

   1. POST /posts per creare un nuovo post.
   2. GET /posts/:slug per recuperare un post utilizzando il suo slug.
   3. GET /posts per recuperare tutti i post presenti nel database, con la possibilità di filtrare per:

   - Post pubblicati.
   - Post che contengono una determinata parola nel titolo o nel contenuto.
   - PUT /posts/:slug per aggiornare un post.
   - DELETE /posts/:slug per eliminare un post.

2. **Bonus:**
   1. Implementare la paginazione.
   2. Gestite gli errori, restituendo uno stato HTTP 404 e un messaggio di errore, nel caso in cui una rotta non sia stata trovata.
   3. Gestite gli errori, restituendo uno stato HTTP 500 e un messaggio di errore, nel caso in cui venga sollevata un’eccezione dal Prisma Client.
