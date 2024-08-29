const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const product = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        fs.readFile(product, (err, fileContent) => {
            let existingProducts = [];
            if (!err && fileContent.length > 0) {
                existingProducts = JSON.parse(fileContent);
            }
            existingProducts.push(this);
            fs.writeFile(product, JSON.stringify(existingProducts), (err) => {
                console.log(err);
            })
        });
    }

    static fetchAll() {
        const product = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'products.json'
        );
        return new Promise((resolve, reject) => {
            fs.readFile(product, (err, fileContent) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const products = fileContent.length > 0 ? JSON.parse(fileContent) : [];
                        resolve(products);
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });
    }
}