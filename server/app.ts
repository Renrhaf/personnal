import express = require('express');
import xml2js = require('xml2js');
const truncate = require('truncate-html');
const getImgSrc = require('get-img-src');
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';

// require syntax
const fetch = require('node-fetch');
global.fetch = fetch;

// Prepare the express server variable.
const app: express.Application = express();

// CORS handling.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/**
 * Photos on unsplash endpoint.
 */
app.get('/photos', function (req: any, res: any) {
    const unsplash = new Unsplash({accessKey: '8775a3b50a1c3562542a12d04373df00ab1f65bff6ec26570fe048cbc71d08fd'});
    unsplash.users.photos("renrhaf", 1, 10, "latest", { orientation: "landscape" })
        .then(toJson)
        .then(json => {
            res.json(json)
        })
        .catch(error => {
            console.log(error);
        });
})

/**
 * Articles on medium endpoint.
 */
app.get('/articles', function (req: any, res: any) {
    axios.get('https://medium.com/feed/@quentinfahrner')
        .then(response => {
            const parser = new xml2js.Parser();
            parser.parseString(response.data, function (err: any, result: any) {
                const allArticles = result.rss.channel[0].item;
                const onlyPosts = allArticles.filter(function (article: any) {
                    return article.category && article.category.length > 0;
                })

                const articles = onlyPosts.map(function (article: any) {
                    return {
                        title: article.title[0],
                        categories: article.category,
                        link: article.link[0],
                        content: article['content:encoded'][0],
                        summary: truncate(article['content:encoded'][0], 15, { byWords: true })
                    }
                })

                res.json(articles)
            });
        })
        .catch(error => {
            console.log(error);
        });
});

/**
 * Send a contact email endpoint.
 */
app.post('/contact', function (req: any, res: any) {

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('CORS-enabled web server listening on port ' + PORT)
});
