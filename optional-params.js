function getFullName(firstName, lastName, middleName) {
    var fullName = middleName ? "".concat(firstName, " ").concat(middleName, " ").concat(lastName) : "".concat(firstName, " ").concat(lastName);
    return fullName;
}
//console.log(getFullName('John')); // compile error - An argument for 'lastName' was not provided.
console.log(getFullName('John', 'Doe'));
console.log(getFullName('John', 'Doe', 'MiddleName'));
