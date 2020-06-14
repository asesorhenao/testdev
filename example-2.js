import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);

const valids = hasCar(companies, true);
console.log('---- EXAMPLE 2 --- ', valids);

function hasCar(companies, hasCar) {
  return companies
      .map((comp) => getHasCarCompany(comp, hasCar));
}

function getHasCarCompany(company, hasCar) {
  return {
    ...company,
    users: getHasCarUser(company.users, hasCar),
  };
}

function getHasCarUser(users, hasCar) {
  return users
      .map((user) => ({
        ...user,
      }));
}


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".
