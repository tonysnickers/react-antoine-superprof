import React from "react";

export default function Home() {
  return <div>home page</div>;
}

// container - header de recherche
// header va contenir: input de recherche pour filtrer par nom de film + select pour filtrer par note
// on va lancer une rechercheauprès de l'api en live, dès qu'on change la valeur de l'input

// container - grille de films
// si on a des résultats, on affiche une grille de films.
// chaque film estrepresenté en forme de carte simple qu affiche: titre + poster
// en cliquant sur une carte de film, on navigue vers la page de review associées.

// composants à faire
// carte de preview de film
// input
// rating select
// loader

// logique
// quand onChange sur l'input, alors call à l'api
// quand onChange sur ratingSelect, alors call à l'api
