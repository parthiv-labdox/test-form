# Referral Management System

## Links
- **Page**: [Referral Management System](https://parthiv-labdox.github.io/test-form/)
- **Google Sheet**: [Referral Data](https://docs.google.com/spreadsheets/d/1Tya7ELlmpjzysHcOHUSr-Cl-BM6dXROq4nlM3zBYrC4/edit?resourcekey=&gid=1724033991#gid=1724033991)

---

## Overview
The Referral Management System is designed to streamline and simplify the process of managing referrals. By leveraging tools like Google Forms, Sheets, Apps Script, Looker Studio, and HTML, the system automates referral data collection, organization, and visualization. This integrated solution enhances efficiency and ensures real-time tracking for seamless management.

---

## Key Features
- **Google Form Integration**: Simplifies data collection with a user-friendly form for submitting referral requests.
- **Google Sheets for Centralized Management**: Organizes responses and provides filter views for quick tracking of referral progress.
- **Automation with Google Apps Script**: Automates status updates and email notifications, reducing manual effort.
- **Interactive Dashboard with Looker Studio**: Visualizes referral data dynamically with filters for real-time insights.
- **Centralized HTML Interface**: A single-page platform for accessing the form and dashboard, ensuring ease of use.

---

## Workflow
### 1. Google Form
- Collects referral requests with fields like **Name**, **Specific Ask**, and **Date**.
- Submissions are automatically logged into a linked Google Sheet.
- ![Google Form Example](https://github.com/user-attachments/assets/91595ac5-2250-41ae-93ba-7a35039adb06)

### 2. Google Sheets Setup
- Organizes responses and includes additional columns like **Status** to track referral progress.
- Filter views allow users to focus on specific referrals or statuses.
- ![Google Sheets Example](https://github.com/user-attachments/assets/50292ec5-a7b7-4196-a59d-7013efd1eea7)

### 3. Google Apps Script
- Automates repetitive tasks like updating statuses and sending email notifications.
- Script code (e.g., [`code.gs`](https://github.com/parthiv-labdox/test-form/blob/main/code.gs)) integrates seamlessly with the Google Sheet.
- Triggers automate actions such as notifying admins of new referrals or marking referrals as completed.

### 4. Looker Studio Dashboard
- Connects to the Google Sheet for real-time data visualization.
- Includes dynamic filters (e.g., by **Name** or **Status**) for customizable insights.
- ![Looker Studio Dashboard Example](https://github.com/user-attachments/assets/bbd06317-4d51-47ca-bd29-876fe10cf459)

### 5. HTML Integration
- Embeds the Google Form and Looker Studio dashboard into a centralized HTML page.
- Provides a single interface for submitting, tracking, and managing referrals.

---

## How to Use
1. **Submit a Referral**: Fill out the [Google Form](https://parthiv-labdox.github.io/test-form/) with the required details.
2. **Track Progress**: Monitor the referral’s status via the webpage or linked Google Sheet or Looker Studio dashboard.
3. **Manage Referrals**: Update statuses and send notifications directly from the Google Sheet.

---

This streamlined system ensures that managing referrals is efficient, transparent, and user-friendly.
