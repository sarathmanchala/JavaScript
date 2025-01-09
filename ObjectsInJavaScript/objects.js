const person1 = {
    firstName: "Sarath",
    lastName: "Manchala",
    age: 21,
    isEmployed: true,
};

const person2 = {
    firstName: "Jahnavi",
    lastName: "Mandadi",
    age: 21,
    isEmployed: false,
};

// Add a method if the person is not employed
if (!person2.isEmployed) {
    person2.searchJob = function () {
        console.log("I am looking for a Developer role");
    };
}

// Call the method to verify it works
if (person2.searchJob) {
    person2.searchJob();
}
