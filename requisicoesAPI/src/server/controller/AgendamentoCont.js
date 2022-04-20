const Agendamento = require('../model/AgendamentoSchema');

module.exports = {
    listar: async (req, res) => {
        Agendamento.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).populate('usuario').populate('maquina').sort({ descricao: 1 }); // -1 decrescente 1 crescente
    },
    incluir: async (req, res) => { 
        let obj = new Agendamento(req.body);
         obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    
    alterar: async (req, res) => {
        let obj = new Agendamento(req.body);
        Agendamento.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },
    excluir: async (req, res) => {
        Agendamento.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },
    obterPeloId: async (req, res) => {
        Agendamento.findOne({ _id: req.params.id }, function (err, obj) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).json(obj)
            }
        });
        
    },
    filtrar: async (req, res) => {
        Agendamento.find({
            $or: [
                { descricao: { $regex: req.params.filtro, $options: "i" } },
                { data: { $regex: req.params.filtro, $options: "i" } },
                { status: { $regex: req.params.filtro, $options: "i" } },
            ],
        }, function (err,obj) {
            if (err) {
                res.status(400).send(err);
            }else {res.json(obj)}
        }).sort({ titulo: -1 }); // -1 decrescente 1 crescente
        
    }
};

