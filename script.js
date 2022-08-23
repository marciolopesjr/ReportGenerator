var now = dayjs().format();

function generate() {

    const nome = document.getElementById('name').value;
    const pa = document.getElementById('P_A').value;
    const fc = document.getElementById('F_C').value;
    const spO2 = document.getElementById('S_PO2').value;

    const doc = new docx.Document({
      sections: [
        {
          properties: {},
          children: [
            new docx.Paragraph({
              children: [
                new docx.TextRun("teste básico "),
                new docx.TextRun({
                  text: " " + nome,
                  bold: true
                }),
                new docx.TextRun({
                  text: "\t" + pa + ' ' + fc + ' ' + spO2,
                  bold: true
                })
              ]
            })
          ]
        }
      ]
    });
  
    docx.Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, now + "_relatório_"+ nome + ".docx");
      console.log("Document created successfully");
    });
  }
  