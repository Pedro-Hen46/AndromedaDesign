const csv = require("csvtojson");
const csvFilePath = "./CallLog.csv";

const arrFiltrado = [];
const arrSemNomeDeContato = [];

csv()
  .fromFile(csvFilePath)
  .then((dataCSV) => {
    dataCSV.forEach((data) => {
      console.log(data);
      if (data.name !== "") {
        arrFiltrado.push(data);
      } else {
        arrSemNomeDeContato.push(data);
      }
    });
    getCallLog();
  });

function getCallLog() {
  console.log(arrFiltrado);

  console.log(
    "Existe um total de *",
    arrFiltrado.length,
    "* Ligações de numero cadastrados"
  );

  console.log(
    "Existe um total de *",
    arrSemNomeDeContato.length,
    "* Ligações de numeros sem cadastro"
  );
}
