const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');

const getProductFromFile = (cb) => {
    fs.readFile(p, (error, fileContent) => {
        if (error) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
    }

    static fetctAll(cb) {
        getProductFromFile(cb);
    }
}