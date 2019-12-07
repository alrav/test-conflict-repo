const average = (values) => {
    let total = 0;

    values.forEach((value) => {
        total += value;
    });

    return total / values.length;
};

const values = [
    100,
    80,
    85,
    95,
    99,
    75,
    65,
    88
];

console.log(average(values));