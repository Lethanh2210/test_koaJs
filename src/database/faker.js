import { faker } from '@faker-js/faker';
import fs from 'fs';

export function createRandomUser(){
    return {
        id: faker.datatype.uuid(),
        name: faker.commerce.product(),
        price: faker.datatype.number(),
        description: faker.helpers.arrayElement(['beautiful', 'new product', 'cheap']),
        product: faker.helpers.arrayElement(['T-Shirt', 'Polo', 'Sweater']),
        color: faker.color.rgb(),
        createAt: faker.date.past(),
        image: 	faker.image.fashion()
    };
}

export function createDatabase(){
    const products = [];
    Array.from({ length: 100 }).forEach(() => {
        products.push(createRandomUser());
    });

    fs.writeFileSync('./src/database/products.json', JSON.stringify({
        data: products
    }));

}
