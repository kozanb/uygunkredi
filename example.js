const KrediAPI = require('./kredi-api');

//36 Ay vade ile 15 bin TL ihtiyaç kredisi sorgulama
new KrediAPI(36, 15000, 0).getCreditList().then(data=>{
    console.log(data);
 });

