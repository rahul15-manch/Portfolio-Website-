function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([data.name, data.email, data.message, new Date()]);
    return ContentService.createTextOutput("Success");
}

