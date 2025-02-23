

const products = [
    { id: "1", name: "Laptop", price: 3000 },
    { id: "2", name: "Smartphone", price: 1500 }
];

exports.handler = async (event) => {
    const product = products.find(p => p.id === event.pathParameters.id);

    if (!product) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: "Produkt nie znaleziony" })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(product)
    };
};
