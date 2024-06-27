const calculadora = require('../models/calculadora');

exports.index = (req, res) => {
  res.render('index');
};

exports.calcular = (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operador = req.body.operador;

  if (isNaN(num1) || isNaN(num2)) {
    res.redirect('/?error=Valores+inválidos');
  } else {
    const resultado = calculadora.calcular(num1, num2, operador);
    res.render('resultado', { resultado: resultado, operador: calculadora.getOperadorNome(operador) });
  }
};
