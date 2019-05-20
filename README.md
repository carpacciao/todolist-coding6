# React
Les sous-titres sont les titres des commits, commencent après "Qu'est-ce qui a été installé ?"
## Comment installer React ?
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

## Restructuration des dossiers

Dans le dossier **src/**, on va créer, pour le projet todolist, 2 dossiers: **css** et **components**.
Dans le dossier **css**, on va y déplacer les 2 css déjà présent. Il faut donc modifier les imports dans **App.js** et **index.js**.

## Nettoyage des fichiers

- Dans le fichiers **src/App.js**, on enlève tout ce qui se trouvent entre les parenthèses du return de la fonction app et on ajoute une div avec du texte dedans.
- On supprime l'import du **logo.svg** et on peut donc le supprimer du projet.
- On va aussi supprimer tout le contenu des **2 css.**

## Installation de Bootstrap

```bash
npm i bootstrap
```
On intègre le css juste au dessus de l'import de notre css/index.css dans **src/index.js*.

## Composant header
> [react-component](https://reactjs.org/docs/react-component.html)

On va créer notre premier composant. Que l'on va nommer **Header.js** et que l'on place dans **src/components/**.
On commence par importer react dans notre fichier pour créer un composant compatible et lisible avec react.
```js
import * as React from 'react'
// ou
import { React, (...) } from 'react'
```
- Dans le premier cas on importe React dans sa globalité. Ses "modules" sont atteignable par React.ModuleName
- Dans le deuxième cas on importe React et les modules que l'on souhaite.
> Pour ce guide, on va utiliser le premier cas.

Ensuite, on va créer la base de notre composant. Les composants sont des class es6 qui extends des composants react et que nous devons exporter en fin de fichier.
```js
import * as React from  'react'

class  Header  extends  React.Component {

}

export default Header
```
Le code de notre composant, on va l'écrire dans la **class**. Les imports se feront en dessous de l'import de react.
Les composant react on besoin, pour fonctionner, d'une méthode **render ()** qui contiendra le code html qui sera rendu par react.

```jsx
class  Header  extends  React.Component {
  render  () {
   return (<div> Header </div>)
  }
}
```
Notons que la méthode render return de l'html entre parenthèse.

Maintenant, on va utiliser notre composant. Pour cela on va l'importer dans notre **src/App.js** au niveau des autres import.

```js
import HeaderApp from './components/Header'
```
Le composant s'utilise de la même manière qu'une balise html, par ce fait on peut l'utiliser dans le code html de l'App.js

```jsx
import React from 'react';
import './css/App.css';
import HeaderApp from './components/Header'

function App() {
  return (
   <div>
     <HeaderApp></HeaderApp>
     <HeaderApp />
   </div>
  );
}

export default App;
```
On peut importer notre composant de 2 manières:
- < HeaderApp></ headerApp> qui pourra à terme contenir du code html lui même.
- < HeaderApp /> balise orpheline que ne pourra pas contenir de code.

Dernière point, je n'ai pas appelé mon composant Header car la balise header existe déjà en html, j'ai donc ajouté 'app' au nom pour la différencier.

## Template du header

Pour commencer, on va donner la classe "container" à la div mère du fichier **src/App.js**. 
Les attributs que l'on va utiliser ne sont pas exactement les mêmes que dans l'html normal. React utilise les méthodes javscript vanilla comme nom d'attribut.
**class=""** devient **className=""**, **for=""** devient **htmlFor=""** par exemple.

```jsx
return (
  <div  className="container">
    <HeaderApp  />
  </div>
);
```
Ensuite, on va remplir le header:
- d'un titre
- d'un input pour le contenu de la nouvelle todo
- de 3 boutons pour choisir le filtre actuel
- et d'une checkbox pour cocher/decocher toutes les todos

**/!\ il faut penser à fermer les balises orphelines comme br, hr, input, ... /!\**

## Template du Body

On crée **src/components/Body.js** et on le crée de la même manière que le header. En tant que composant.
On l'importera dans **src/App.js** et on le place juste en dessous du headerApp.
Celui contiendra la liste des todos. Chacunes des todos doivent contenir:
- le titre
- une checkbox pour valider ou non une todo
- un input pour modifier le texte
- un bouton pour supprimer la todo

