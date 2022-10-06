const express = require('express');
const router = express.Router();

const editdocsModel = require('../models/editdocs');

router.get(
    '/',
    async (req, res) => {
        const editdocs = await editdocsModel.getAllEditdocs();

        return res.json({
            data: editdocs
        });
    }
);

router.post(
    '/',
    async (req, res) => {
        const newDoc = req.body;

        const result = await editdocsModel.insertDoc(newDoc);

        return res.status(201).json({ data: result});

        //if (newDoc.name && newWine.price && newWine.amount) {
        //    const result = await winesModel.insertWine(newWine);

        //    return res.status(201).json({ data: result });
        //} else {
        //    return res.status(400).json({ errors: {
        //        message: "Price and amount needed to create wine."
        //    }});
        //}
    }
);

router.post(
    "/init",
    async (req, res) => {
        await editdocsModel.init();

        res.send("kollar läget här");
    }
);

module.exports = router;
