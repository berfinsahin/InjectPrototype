String.prototype.inject = function (data) {
    return this.replace(/{{(.*?)}}/g, function (match, key) {

        // Eşleşen ifadenin bir işlev çağırma olup olmadığını kontrol eder.
        if (!(key.includes('(') && key.includes(')'))) {
            if (key in data) {
                return data[key];
            } else {
                return match;
            }
        }

        try {
            const func = new Function('data', `
                with(data) {
                    return ${key};
                }
            `);
            const result = func(data);
            return result;
        } catch (error) {
            console.error('Hata:', error);
            return match;
        }
    });
};

var person = {
    firstName: 'Berfin',
    lastName: 'Şahın',
    total: 22,
    x: 4,
    y: 2,
    link: 'https://www.cekino.com/',

    sum: function (x, y) {
        return x + y;
    },

    subtract: function (x, y) {
        return x - y;
    },

    product: function (x, y) {
        return x * y;
    }

};

var template = `
  Hello {{firstName}} {{lastName}}
  <a href="{{link}}" />
  Total: {{total}}
  First Name: {{firstName}}, Last Name: {{lastName}}
  Total: 1 + 2 = {{sum(1, 2)}}
  Total: {{ (x) }} + {{ (y) }} = {{ sum(x, y) }} 
  difference: {{(x)}} - {{(y)}} = {{ subtract(x, y)}}
  Impact: {{(total)}} * {{(x)}} = {{ product(total, x) }}
  `;

var result = template.inject(person);

console.log(result);

/*Çıktı(Terminalde node injectPrototype.js ile):
 Hello Berfin Şahın
  <a href="https://www.cekino.com/" />
  Total: 22
  First Name: Berfin, Last Name: Şahın
  Total: 1 + 2 = 3
  Total: 4 + 2 = 6 
  difference: 4 - 2 = 2
  Impact: 22 * 4 = 88
  */
