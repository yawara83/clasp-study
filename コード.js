function helloWorld() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange('A2').setValue('Goodbye World');
}