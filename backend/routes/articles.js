const router = require('express').Router();
let Article = require('../models/article.model')

router.route('/').get((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error: ') + err)
})

router.route('/add').post((req, res) => {
    const articleTitle = req.body.articleTitle;
    const articleMainImg = req.body.articleMainImg
    const articleDuration = req.body.articleDuration
    const creationDate = req.body.creationDate;
    const description_1 = req.body.description_1;
    const descriptionBold_1 = req.body.descriptionBold_1;
    const description_2 = req.body.description_2;
    const descriptionBold_2 = req.body.descriptionBold_2;
    const descriptionImg = req.body.descriptionImg;
    const articleCover=req.body.articleCover;

    const newArticle = new Article({
        articleTitle,
        articleMainImg,
        articleDuration,
        creationDate,
        description_1,
        descriptionBold_1,
        description_2,
        descriptionBold_2,
        descriptionImg,
        articleCover
    });

    newArticle.save()
        .then(() => res.json('Article added!'))
        .catch(err => res.status('400').json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/:id').delete((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(()=> res.json('Article deleted'))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/update/:id').post((req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            article.articleTitle = req.body.articleTitle;
            article.articleMainImg = req.body.articleMainImg;
            article.articleDuration = Number(req.body.articleDuration);
            article.creationDate = Date.parse(req.body.creationDate)
            article.description_1 = req.body.description_1;
            article.descriptionBold_1 = req.body.descriptionBold_1;
            article.description_2 = req.body.description_2;
            article.descriptionBold_2 = req.body.descriptionBold_2;
            article.descriptionImg = req.body.descriptionImg;
            article.articleCover=req.body.articleCover;

            article.save()
                .then(article => res.json(article))
                .catch(err => res.status(400).json('Error: ' + err))
        }).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;