const Maquina = require('../model/MaquinaSchema');

module.exports = {
    listar: async (req, res) => {
        Maquina.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },
    incluir: async (req, res) => {
        let obj = new Maquina(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Maquina(req.body);
        Maquina.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Maquina.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },
    obterPeloId: async (req, res) => {
        Maquina.findOne({ _id: req.params.id }, function (err, obj) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).json(obj)
            }
        });

    },
    filtrar: async (req, res) => {
        Maquina.find({
            $or: [
                { modelo: { $regex: req.params.filtro, $options: "i" } },
                { marca: { $regex: req.params.filtro, $options: "i" } },
                { tipoCombustivel: { $regex: req.params.filtro, $options: "i" } },
                { numeroChassi: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err, obj) {
            if (err) {
                res.status(400).send(err);
            } else { res.json(obj) }
        }).sort({ nome: -1 }); // -1 decrescente 1 crescente

    }
};

