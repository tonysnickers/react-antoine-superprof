import React, { useState, useMemo, useEffect, useCallback, memo } from "react";

interface IProps {
  label?: string;
}

// we increment total in <Parent/>>, but only unmemoized component renders again!
// avec memo() , le composant ne se rerend QUE quand ses props change. C'est le bazooka.
const Memoized = memo(({ label }: IProps) => {
  console.log("%c memoized component renders ", "color:limegreen");
  return <div>memoized: {label}</div>;
});

const Unmemoized = ({ label }: IProps) => {
  console.log("%c unmemoized component renders! ", "color: yellow");

  // computation n'est pas recalculée! elle ne le sera que quand prop.label aura changé
  // usememo() est le sniper, il permet de garder en mémoire la valeur de retour d'une fonction.
  // la valeur retorunée n'est recalculée QUE si le ou les elemets dans son array de dépendence change(nt).
  const computation = useMemo(() => {
    console.log(
      "%c extensive computation is being processed! ",
      "color: #FFC633"
    );
    return `hello ${label}`;
  }, [label]); // car label est en array de dépendence

  return (
    <section>
      <div>unmemoized: {label}</div>
      <div>{computation}</div>
    </section>
  );
};

//Dès que l'état du parent change (state interne, ou prop qu'il reçoit), ALORS, il doit se rerendre
// pour afficher un contenu à jour pour l'utilisateur.#FFC633
// DU COUP, les composannts enfants se re-rendent aussi.#FFC633
// c'est pour cela qu'on utilise la mémoisation pour éviter derefaire des calculs couteux.
export default function Parent() {
  const ref = React.useRef();
  console.log("rerefefer", ref.current);
  const [total, setTotal] = useState(0);
  const [label, setLabel] = useState("Joe");

  // si fetchData n'était pas une fonction memoisée grâce à useCallback,
  // la fonction se redeclarerait à chaque rendu, même non lié (ex: label=> averell, la relancerait)
  const fetchData = useCallback(() => {
    console.log("fetchdata!!!");
    return { hits: total };
  }, [total]);

  //useEffect,se lance à chaque fois que le ou les elements dans son array de dépendance change(n)t.#FFC633
  // si son array de dépenance est vide, alors, il ne selance qu'une seule fois, au moment ou le composant est rendu.#FFC633
  useEffect(() => {
    console.log("%c useEffect fires! ", "color: red");
    fetchData();
  }, [total, fetchData]);

  const onFocus = () => {
    if (ref && ref.current) {
      alert(ref.current.clientWidth);
    }
  };
  return (
    <div>
      <p>{total}</p>
      <Memoized label={label} />
      <Unmemoized label={label} />
      <button onClick={() => setTotal(total + 1)}>click</button>
      <button onClick={() => setLabel("Averell")}>label to Averell</button>
      <button onClick={() => onFocus()}>focus input!l</button>
      <input type="text" ref={ref} placeholder="email" />
    </div>
  );
}
