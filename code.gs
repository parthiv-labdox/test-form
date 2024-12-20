function onEdit(e) {
    const sheet = e.source.getActiveSheet();
    const range = e.range;

    // Assuming "Status" is in column C (column 3)
    if (range.getColumn() === 5) {
        const currentValue = range.getValue();

         
        // If the value is "Mark as Closed", set it to "Closed"
        if (currentValue === "Mark as Closed" || currentValue === "CLOSED" || currentValue === "closed") {
            range.setValue("Closed");
        }

        else {
            range.setValue("Open");
        }

        
    }
}

function sendNotification(name, askDescription, email) {
    const subject = "New Referral Ask Submitted";
    const body = `Hi,\n\n${name} has submitted a new ask:\n"${askDescription}".\n\nBest regards,\nBNI System`;
    GmailApp.sendEmail(email, subject, body);
}

function onFormSubmit(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get the last row of the form submission
    const lastRow = sheet.getLastRow();
  
  // Define the column index for the Status column (e.g., column 5 for "E")
    const statusColumn = 5;

  // Set the "Status" column for the newly submitted row to "Open"
    sheet.getRange(lastRow, statusColumn).setValue("Open");
    const name = e.values[1];
    const askDescription = e.values[2];
    const email = "parthiv@labdox.in"; // Replace with the admin's email
    sendNotification(name, askDescription, email);
}

