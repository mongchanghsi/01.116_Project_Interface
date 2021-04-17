## 01.116 Project - Inventory Management through Optical Character Recognition

### Problem

During hospital implant operations, nurses are required to manually key down the specific implants that were used in the Electronic Medical Record (EMR) so that they can be individually identified for their granular monitoring and tracking. This process is time and labour intensive and prone to human error. This is a problem that is commonly seen in different types of implant operations.

### Solution

Our solution is a Text Detection solution which allows nurses who are handling the implants, to simply take images of the implant boxes using their mobile devices and thereafter upload the images into our interface which will then populate the relevant fills in the Electronic Health Records of the key information required for data entry. For this proof-of-concept demonstration purposes, we will be populating the Google Excel sheets.

### Set Up

1. Navigate to `frontend`, you will need to run `cp .env.template .env` and key in the required information in the `.env` file
2. Navigate to `backend`, you will need to create a `credentials.json` which contains the credentials for Google Sheets

### How to start

1. Navigate to `frontend`, run `npm install` and do `npm start`
2. Navigate to `backend`, and do `python3 main.py`
