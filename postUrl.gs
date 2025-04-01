function doPost(url) {
  try {
    const firstName = url.parameters.firstName
    const lastName = url.parameters.lastName
    const email = url.parameters.email
    const message = url.parameters.message
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("WebContacts")
    const date = new Date()
    const time = Utilities.formatDate(date, "GMT-4", "HH:mm:ss");
    const id = Utilities.getUuid()
    const data = [id, firstName, lastName, email, message, date, time]

    const pos = 2;
    sheet.insertRowBefore(pos)

    for (let i = 0; i < data.length; i++) {
      sheet.getRange(pos,i+1).setValue(data[i])
    }
    return ContentService.createTextOutput('Thank you for for sharing! You may now close this tab.');
  }
  catch (err) {
    return ContentService.createTextOutput(err)
  }
}
