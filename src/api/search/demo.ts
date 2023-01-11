// const fetchUser = (id: string) =>
//   new Promise((resolve, error) => {
//     const user = { name: "joe", imageProfile: "jhjdh", id }; // faux appel au server, on imagine qu'on a déjà la réponse
//     // if(user){
//     //     return resolve(user)
//     // }
//     // else{
//     //     error("fetch user failed")
//     // }
//     return user ? resolve(user) : error("fetch user failed");
//   });

// // si on appelle fetchUser() sans rien faire derrière, le code va s'executer, mais on n'accedera pas à sa valeur de retour
// // pour acceder à sa valeur de retour on utilise then/catch ou await au sein d'un bloc try/catch

// //   // exemples:
// //   const get = async () => {
// //     const res = await fetchUser()
// //     console.log(res)
// //   }
// //   get()

// // const get = async () => {
// //     try{
// //     const res = await fetchUser()
// //     console.log(res)
// //     }
// //     catch(err){
// //       console.log(err)
// //     }
// //   }
// //   get()

// const fetchNotifications = (id: string) =>
//   new Promise((res, err) => {
//     const notifications = 5;
//     return fetchNotifications ? res(notifications) : err("notification failed");
//   });

// fetchNotifications("id54")
//   .then((res) => console.log("ok", res))
//   .catch((err) => console.log("error", err));

// fetchUser("id54") // Promise
//   .then((response) => console.log("ok", response))
//   .catch((error) => console.log("error", error));

// // Promise.all => return when all promises are done
// const fetchAll = (id) =>
//   Promise.all([fetchUser(id), fetchNotifications("id54")])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// // Promise.race => return first promise to finish
// const fetchFirst = () =>
//   Promise.race([fetchUser("id54"), fetchNotifications("id54")])
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

// fetchFirst();
