function getFullName(firstName, lastName, middleName) {
  const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
  
  return fullName;
}

console.log(getFullName());
console.log(getFullName('John'));
console.log(getFullName('John', 'Doe'));
console.log(getFullName('John', 'Doe', 'MiddleName'));
