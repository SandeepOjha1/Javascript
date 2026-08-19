const student = {
    name: "Sandeep",
    course: "MCA",
    cgpa: 7.59,
    city: "Gwalior"
};
console.log(student);

console.log("Adding/Changing information: ", student.city="Vadodara");
console.log(student);

console.log("Adding gender: ", student.gender = "Male");
console.log(student);


//Objects of Objects

const staff = {
    Iris: {
        position: "Admin",
        ign: "Purelyiris"
    },
    Alpha: {
        position: "Mod",
        ign: "Alpha_Devil"
    },
    Nypht: {
        position: "Manager",
        ign: "Nyphtt"
    }
};

console.log("Objects of Objects:", staff);


// Arrays of objects

const staffs = [
    {
        name: "Iris",
        position: "Admin",
        ign: "Purelyiris"
    },
    {
        name: "Alpha",
        position: "Mod",
        ign: "Alpha_Devil"
    },
    {
        name: "Nypht",
        position: "Manager",
        ign: "Nyphtt"
    }
];

console.log("Array of Objects:", staffs);