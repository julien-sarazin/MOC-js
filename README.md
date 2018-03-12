# MOC-js
Everything related to the courses given to the MOC 3A about nodeJS.

1) Base de JS
  -> var let const
  -> fonctions, => ()
  -> this
  -> callbacks, promesses

2) Node JS
  -> http server
  -> get, post, ...
  -> body-parser, json
  -> routing

3) Express JS
  -> middlewares
  -> orm/odm
  -> REST

4) Deploiment continu
  -> heroku + ???




POST /users
 - creer et sauvegarder une instance de la classe User,
  qui doit contenir au minimum, un nom, un prenom et un age.

GET /users
  - Doit me retourner la liste des users precedement crees


POST /cars
   - creer et sauvegarder une instance de la classe Car,
    qui doit contenir au minimum, un model, une couleur

  GET /cars
    - Doit me retourner la liste des cars precedement crees

Toute autre route et method utilisees renverra une 'Bad Request'

(++ Optionel) Persister les instances dans un fichier '.json'
