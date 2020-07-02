const router = require('express').Router();
let Showcase = require('../models/showcase.model')

router.route('/').get((req, res) => {
    Showcase.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ') + err)
})

router.route('/add').post((req, res) => {
    const showcaseTitle = req.body.showcaseTitle;
    const subtitle = req.body.subtitle;
    const serviceType = req.body.serviceType;
    const descriptionBold = req.body.descriptionBold;
    const description_1 = req.body.description_1;
    const description_2 = req.body.description_2;
    const headerImg = req.body.headerImg;
    const descriptionImg = req.body.descriptionImg;
    const showcaseCover = req.body.showcaseCover;


    const newShowcase = new Showcase({
        showcaseTitle,
        subtitle,
        serviceType,
        descriptionBold,
        description_1,
        description_2,
        headerImg,
        descriptionImg,
        showcaseCover
    });

    newShowcase.save()
        .then(() => res.json('Showcase added!'))
        .catch(err => res.status('400').json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Showcase.findById(req.params.id)
        .then(showcase => res.json(showcase))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/:id').delete((req, res) => {
    Showcase.findByIdAndDelete(req.params.id)
        .then(() => res.json('Showcase deleted'))
        .catch(err => res.status(400).json('Error:' + err));
})

router.route('/update/:id').post((req, res) => {
    Showcase.findById(req.params.id)
        .then(showcase => {
            showcase.showcaseTitle = req.body.showcaseTitle;
            showcase.subtitle = req.body.subtitle;
            showcase.serviceType = req.body.serviceType;
            showcase.descriptionBold = req.body.descriptionBold;
            showcase.description_1 = req.body.description_1;
            showcase.description_2 = req.body.description_2;
            showcase.headerImg = req.body.headerImg;
            showcase.descriptionImg = req.body.descriptionImg;
            showcase.showcaseCover= req.body.showcaseCover;

            showcase.save()
                .then(showcase => res.json(showcase))
                .catch(err => res.status(400).json('Error: ' + err))
        }).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;