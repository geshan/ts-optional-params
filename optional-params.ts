function getFullName(firstName: string, lastName: string, middleName?: string) {
  const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`; 
  return fullName;
}

//console.log(getFullName('John')); // compile error - An argument for 'lastName' was not provided.
console.log(getFullName('John', 'Doe'));
console.log(getFullName('John', 'Doe', 'MiddleName'));
