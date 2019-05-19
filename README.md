# React

## Comment installé React ?
```bash
npx create-react-app my-app
cd my-app
npm start
```
SI vous ne souhaitez pas passer par npx, installer React globalement:
```bash
npm i -g create-react-app 
```

Ces lignes servent à créer l'application React et lancer le serveur de dev en hot reload.

> Extensions: Babel. rien d'autre en particulier sauf p-e des snippets pour ceux qui ont besoin.

## Qu'est-ce qui a été installé ?

- Dossier **node_modules/** que tout le monde connait
- Dossier **public/**
	- **index.html** qui est l'élément le plus important, dedans il y a une div#root, c'est sur ça que react va se greffer
	- **favicon.ico** pour le favicon du site
	- **manifest.json** pour gérer la partie pwa grâce au serviceworker
- Dossier **src/** 
	-  **index.css** et **app.css** css pour l'application, au moment du build ils sont fusionnés.
	-  **index.js** Ce fichier lance react, intègre le css principal, le premier composant App et le greffe à l'élément #root de l'html. Le serviceworker, c'est encore pour la pwa.
	- **App.js** Composant mère de react qui sera exporter. Import de: react pour faire fonctionner le code html, logo et css pour les utiliser dans l'html. La fonction app return un rendu que va faire react.
- **App.test.js** pour géré la partie test de l'application
- **serviceWorker.js** pour géré la partie pwa de l'application
