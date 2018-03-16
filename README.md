# MOC-js
Everything related to the courses given to the MOC 3A about nodeJS.

### Plan
1) Base de JS
--------------------
  - var let const,  
  - fonctions, => (),  
  - who is this?,  
  - callbacks, promesses,  
  
2) Node JS
--------------------
  - http server,  
  - get, post, ...  
  - body-parser, json,  
  - routing,  
  
3) Express JS
--------------------
  - middlewares,  
  - orm/odm,  
  - REST,  
  
4) Integration/Deploiement continu
--------------------
  -> Travis + Heroku


Exercice
---------------------
Votre API doit maintenant gerer des trajets `Trip`.  
 
  - Un utilisateur peut definir un trajet allant d'un point de depart `start` a une destination `end`.
  - Pour definir un trajet, un utilisateur doit selectionner une voiture `Car` qui lui appartient, le point de depart et le point de destination.
  - Une fois defini, un trajet aura le `status a 0`.
  - Lorsqu'un trajet est defini, d'autres utilisateur peuvent rejoindre ce trajet, **si et seulement si** le trajet n'est pas demarre et si le nombre de places disponibles est suffisant.
  - Quand l'utilisateur demarre un trajet, il notifiera l'API changeant le status de celui-ci a `1`.
  - Quand l'utilisateur est arrive a destination, il notifiera l'API changeant le status du trajet a  `2`.
  - Chaque `Car` dispose d'un nombre de places disponibles `entier > 0`.
  - Evidement seul l'utilisateur proprietaire du vehicule servant au trajet peut changer le status de celui-ci.
  - Un utilisateur ne peut pas supprimer une voiture qui est associee a un trajet en cours.
  - Une suppression d'un vehicule entrainera la supression des trajets associees non demarres.
  
  
  
Sujet Projet: Recherche & Development
----------------------------------------------------

Par groupe de deux ou de facon individuel, proposez, implementez et justifiez le sujet developpe en cours via des technologies differentes.
Ce qui signifie :
    - Pas d'express,
    - Pas de Mongoose,
    - Pas de Travis,
    - Pas d'Heroku
    
    
L'objectif de votre presentation sera de mettre en avant vos justifications, par la demonstration du code qui aura ete implemente, l'utilisation des routes 
pre-ecrites dans POSTMAN pour valider la partie fonctionelle, ainsi qu'une etude de chacune des technologies choisies.