function getFullName(firstName, lastName, middleName) {
    if (middleName === void 0) { middleName = ''; }
    var fullName = "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    return fullName;
}
//console.log(getFullName('John')); // compile error - An argument for 'lastName' was not provided.
console.log(getFullName('John', 'Doe'));
console.log(getFullName('John', 'Doe', 'MiddleName'));
