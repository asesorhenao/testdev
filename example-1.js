import {createAll, cleanConsole} from './data';
const companies = createAll();

cleanConsole(1, companies);

const valids = getValidCompanies(companies);

console.log('---- EXAMPLE 1 --- ', valids);
console.log(getStr(valids));

function getStr(arr) {
  return arr.map((c) => {
    return c.users.length;
  });
}

function getValidCompanies(companies) {
  return companies
      .map((comp) => getValidCompany(comp))
      .sort((a, b) => a.users.length - b.users.length)
      .reverse();
}

function getValidCompany(company) {
  return {
    ...company,
    name: capitalize(company.name),
    users: getValidUsers(company.users),
  };
}

function getValidUsers(users) {
  return users
      .map((user) => ({
        ...user,
        firstName: capitalize(user.firstName),
        lastName: capitalize(user.lastName),
      }))
      .sort((a, b) => compareAlphabetical(a, b));
}

function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function compareAlphabetical(a, b) {
  const nameA = getFullName(a).toUpperCase();
  const nameB = getFullName(b).toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
}

function getFullName(a) {
  return `${a.firstName} ${a.lastName}`;
}

module.exports = {
  getValidCompanies,
};


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
