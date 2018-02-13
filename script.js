var fr = new FileReader();
fr.onloadend = notifyEnd;

function fileSelected() {
  var _input = document.getElementById("fileSelector");
  var file = _input.files[0];
  if (file) {
    fillInfo(file);
    fr.readAsText(file);
  }
}

function notifyEnd() {
  document.getElementById("resultText").value = fr.result;
}

function fillInfo(_file) {
  if (_file) {
    var _tr = document.getElementById("trToFill");
    for (var i = 0; i < 3; i++) {
      var _td = document.createElement("td");
      switch (i) {
        case 0:
          _td.innerText = _file.name;
          break;
        case 1:
          _td.innerText = _file.size;
          break;
      }
      _tr.appendChild(_td);
    }
  }
}
