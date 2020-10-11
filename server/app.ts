import express = require('express');
import xml2js = require('xml2js');
import axios from 'axios';

// Prepare the express server variable.
const app: express.Application = express();

/**
 * Articles on medium endpoint.
 */
app.get('/articles', function (req: any, res: any) {
    axios.get('https://medium.com/feed/@quentinfahrner')
        .then(response => {
            const parser = new xml2js.Parser();
            parser.parseString(response.data, function (err: any, result: any) {
                const allArticles = result.rss.channel[0].item;
                const articles = allArticles.filter(function (article: any) {
                    return article.category && article.category.length > 0;
                });

                res.json(articles)
            });
        })
        .catch(error => {
            console.log(error);
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Application running on port ' + PORT);
});
