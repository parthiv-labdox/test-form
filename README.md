# Referral Management System


## Link to page : https://parthiv-labdox.github.io/test-form/
## Link to Sheets: https://docs.google.com/spreadsheets/d/1Tya7ELlmpjzysHcOHUSr-Cl-BM6dXROq4nlM3zBYrC4/edit?resourcekey=&gid=1724033991#gid=1724033991


## Overview
This project is designed to streamline the referral process by integrating tools like Google Forms, Google Sheets, Google Apps Script, Looker Studio, and HTML. The system automates the collection, management, and visualization of referral data, providing an efficient and user-friendly solution for tracking and managing referrals in real-time.

## Features
- **Google Form Integration**: Simplified data collection with an easy-to-use form for submitting referral asks.
- **Google Sheets for Management**: Centralized data organization with filter views for quick access to specific referrals.
- **Automation with Google Apps Script**: Automated status updates and email notifications to streamline workflows.
- **Interactive Dashboard with Looker Studio**: Real-time visualization and filtering of referral data.
- **Centralized HTML Interface**: A single page to access the form and dashboard for seamless user interaction.

## Workflow
### 1. **Google Form**
- A Google Form is created to collect referral asks with fields like Name, Specific Ask, and Date.
- Responses are automatically saved to a linked Google Sheet.
 ![image](https://github.com/user-attachments/assets/91595ac5-2250-41ae-93ba-7a35039adb06)


### 2. **Google Sheets Setup**
- Responses from the Google Form are organized in a Google Sheet.
- Additional columns, such as **Status**, are added for tracking referral progress.
- Filter views are created for specific statuses or names.
  ![image](https://github.com/user-attachments/assets/50292ec5-a7b7-4196-a59d-7013efd1eea7)


### 3. **Google Apps Script**
- Apps Script is used to automate status updates and send email notifications for new submissions.
- Link the Sheet and add this code: ![code.gs](https://github.com/parthiv-labdox/test-form/blob/main/code.gs)
- Triggers are set up to handle actions such as marking referrals as closed or notifying admins of new asks.\

### 4. **Looker Studio Dashboard**
- The Google Sheet is connected to Looker Studio to create an interactive dashboard.
- Filters for Name and Status are added for dynamic data visualization.
  ![image](https://github.com/user-attachments/assets/bbd06317-4d51-47ca-bd29-876fe10cf459)

### 5. **HTML Integration**
- An HTML page is developed to embed the Google Form and Looker Studio dashboard.
- The page serves as a centralized interface for submitting and managing referrals.



## How to Use
1. **Submit a Referral**: Fill out the Google Form with the required details.
2. **Track Progress**: Use the Google Sheet or Looker Studio dashboard to monitor referral status.
3. **Manage Referrals**: Update statuses and send notifications directly from the Google Sheet.




