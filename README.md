
# String Inject Prototype

- Prototype, bir objenin başka bir objeden miras aldığı özellikleri veya fonksiyonları tutan bir referanstır. proto ise, bir objenin prototype’ını gösteren bir özelliktir. Bu sayede, bir obje, prototype’ında bulunan özelliklere veya fonksiyonlara erişebilir.

- String Inject Prototype, JavaScript’te bir string içindeki {{ … }} ifadeleri ile dinamik templateler oluşturmak için kullanılan bir yöntemdir.

- Bu yöntem, bir string’i bir obje ile enjekte ederek, objenin özelliklerini veya fonksiyonlarını string içinde kullanmaya olanak sağlar.

  Örnekler:
        - 'Hello {{ name }}'.inject({ name: 'Berfin' });
           //Çıktı: Hello Berfin

        - '<a href="{{ url }} />'.inject({ url: 'https://www.cekino.com/' });
            //Çıktı: <a href="https://www.cekino.com/" />
            
        - 'Total: {{ cost + profit }}'.inject({ cost: 9, profit: 3 });
            //Çıktı: Total: 12

        - 'First Name: {{ firstName }}, Last Name: {{ lastName }}'.inject({ firstName: 'Berfin', lastName: 'Şahın' });
            //Çıktı: First Name: Berfin, Last Name: Şahın

        - 'Total: {{ a }} + {{ b }} = {{ sum(a, b) }}'.inject({ a: 5, b: 4, sum: (a, b) => a + b });
            //Çıktı: Total: 5 + 4 = 9
