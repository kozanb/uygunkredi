const axios = require('axios');
const { JSDOM } = require('jsdom');
const { Base64 } = require('js-base64');

class KrediAPI {
    constructor(month, money, type) {
        var types = ['aWh0aXlhYw==', 'dGFzaXQ=', 'a29udXQ='];
        var paths = ['a3JlZGkv','L2thcnNpbGFzdGlyLwo=','LWF5LXZhZGUtaWxlLQ==','LXRsLz9lcz0w'].map((e) => {return Base64.atob(e).trim()});
        this.instance = axios.create({
            baseURL: Base64.atob('aHR0cHM6Ly93d3cuZW51eWd1bi5jb20v')
        });
        this.responseURL = `${paths[0]}${Base64.atob(types[type])}${paths[1]}${month}${paths[2]}${money}${paths[3]}`;
    }

    getCreditList() {
       return this.instance.get(this.responseURL).then(resHTML => {
            var list = [];
            const { document } = (new JSDOM(resHTML.data)).window;

            document.querySelectorAll('tr[data-bank-id]').forEach(function (element) {
                list.push({
                    ad: element.querySelectorAll('td:nth-child(2) img')[0].alt,
                    oran: element.querySelectorAll('td:nth-child(4) div')[0].textContent.trim(),
                    faiz: element.querySelectorAll('td:nth-child(4) div')[1].textContent.trim(),
                    odeme: element.querySelectorAll('td:nth-child(5)')[0].textContent.trim(),
                    toplam_odeme: element.querySelectorAll('td:nth-child(6)')[0].textContent.trim()
                });
            });

            return list;
        });
    }
}

module.exports = KrediAPI;