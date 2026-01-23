const getElem = id => document.getElementById(id)

getElem("backslash").textContent = "The character \\ is called backslash.";
getElem("backspace").textContent = "ABC\bDEF";
getElem("formfeed").textContent = "Line 1\fLine 2";
getElem("newline").textContent = "Primeira linha\nSegunda linha\nTerceira linha";
getElem("carriage").textContent = "ABC\rXYZ";
getElem("tab").textContent = "Nome:\tJoão\nIdade:\t25\nCidade:\tRecife";
getElem("vertical").textContent = "Linha 1\vLinha 2\vLinha 3";