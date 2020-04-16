const axios = require("axios");

class SimpleFunc {
    static sum(a, b) {
        return a + b;
    }

    static nativeNull() {
        return null;
    }
}

class Lodash {
    compact(array) {
        return array.filter(val => !!val);
    }

    groupBy(array, prop) {
        return array.reduce((acc, cur) => {
            const key = typeof prop === "function" ? prop(cur) : cur[prop];

            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(cur);
            return acc;
        }, {});
    }
}

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error("data in not defined"));
                }
            }, 100)
        })
    }

    static async get() {
        try {
            const response = await axios.get("https://jsonplaceholder.typeicode.com/todos");

            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}

function map(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }

    return result;
}

module.exports = {SimpleFunc, Lodash, Ajax, map};