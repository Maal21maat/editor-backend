const express = require('express');
const router = express.Router();

const editdocsModel = require('../models/editdocs');

router.get(
    '/',
    async (req, res) => {
        const editdocs = await editdocsModel.getAllEditdocs();

        res.json(allEditdocs)

        // return res.json({
        //    data: editdocs
        //});
    }
);

router.post(
    '/',
    async (req, res) => {
        const newDoc = req.body;

        const result = await editdocsModel.insertDoc(newDoc);

        return res.status(201).json({ data: result});
    }
);

router.put(
    "/",
    async (req, res) => {
        const oldId = req.body.id;
        const newText = req.body.newText;

        const result = await dataModel.updateDoc(oldId, newText);

        return res.status(201).json({ data: result });
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
