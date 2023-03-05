// WRITE YOUR CHANGES (BOT TOKEN,CHAT ID AND SO ON) ONLY THERE:
var token = "YOUR_TELEGRAM_BOT_TOKEN";
var chat_id = "YOUR_CHAT_ID";
var check_only_one_column = false;
var check_only_one_row = false;
var column_letter = "YOUR_COLUMN_LETTER"; //for example "A" or "C"
var row_number = "YOUR_NUMBER"; //for example 2 or 14 (without quotation marks)


// You don't need to change code below
function checkForChanges(e) {
  var range = e.range;
  var column = range.getColumn();
  var row = range.getRow();

  if (check_only_one_column && check_only_one_row) {
    if (column === getColumnNumber(column_letter)) {
      if (row === row_number) {
        var value = range.getValue();
        callBot(column, row, value);
      }
    }
  } else if(check_only_one_column){
    if (column === getColumnNumber(column_letter)) {
      var value = range.getValue();
      callBot(column, row, value);
    }
  } else if(check_only_one_row){
    if (row === row_number) {
      var value = range.getValue();
      callBot(column, row, value);
    }
  } else {
    var value = range.getValue();
    callBot(column, row, value);
  }
}

function callBot(column, row, value) {
  var date = new Date();
  var currentTime = date.toLocaleTimeString();

  var message = '['+currentTime+']  Cell <code>'+ getColumnName(column) + row + "</code> \nNew value: <b><code>" + value + "</code></b>";
  var url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chat_id + "&parse_mode=HTML&text=" + encodeURIComponent(message);
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function getColumnNumber(columnLetter) {
  var startingNumber = 1;
  var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var columnNumber = 0;
  for (var i = 0; i < columnLetter.length; i++) {
    var letterValue = base.indexOf(columnLetter.charAt(i)) + 1;
    columnNumber = columnNumber * 26 + letterValue;
  }
  return columnNumber - startingNumber + 1;
}

function getColumnName(num) {
  var columnName = '';
  while (num > 0) {
    var modulo = (num - 1) % 26;
    columnName = String.fromCharCode(65 + modulo) + columnName;
    num = Math.floor((num - modulo) / 26);
  }
  return columnName;
}
