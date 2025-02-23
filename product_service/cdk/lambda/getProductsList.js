// exports.handler = async (event) => {
//     const products = [
//         { id: 1, name: "Laptop", price: 3000 },
//         { id: 2, name: "Telefon", price: 1500 }
//     ];
    
//     return {
//         statusCode: 200,
//         body: JSON.stringify(products)
//     };
// };
exports.handler = async () => {
    const products = [
        { id: "1", name: "Laptop", price: 3000 },
        { id: "2", name: "Smartphone", price: 1500 }
    ];

    return {
        statusCode: 200,
        body: JSON.stringify(products)
    };
};
