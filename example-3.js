import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(3, companies);

const valids = getValidCompanies(companies);

console.log('---- EXAMPLE 3 --- ', valids);

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



// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
