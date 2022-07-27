const FileSystem = require("fs");
const CSVToJSON = require("csvtojson");

getCallLog();

function getCallLog() {
  const arrFiltrado = [];
  const arrSemNomeDeContato = [];

  CSVToJSON()
    .fromFile("./CallLog.csv")
    .then((dataCSV) => {
      dataCSV.forEach((data) => {
        if (data.name !== "") {
          arrFiltrado.push(data);
        } else {
          arrSemNomeDeContato.push(data);
        }
      });
      showContatos();
    });

  function showContatos() {
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
}
