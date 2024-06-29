# Text Detection App

## Website Link : http://74.225.188.13/ or Click [Here](http://74.225.188.13/)

## Overview

This project is a web application that detects text from images and isolates bold words. It utilizes the Google Cloud DocumentAI API for Optical Character Recognition (OCR) and includes a login flow with authentication and password protection.

## Features

- Text detection from images using Google Cloud DocumentAI API (95% data accuracy)
- Bold word isolation
- User authentication with JSON Web Tokens (JWT)
- Password protection with bcrypt
- Full-stack implementation with ReactJS (frontend) and NodeJS (backend)
- MongoDB for database management

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: NodeJS
- **Database**: MongoDB

## Hosting Platform
This application is hosted on **Microsoft Azure virtual machine**. It utilizes Nginx as the web server and PM2 for process management.

## Libraries and Tools Used

- [google-documentai](https://www.npmjs.com/package/@google-cloud/documentai) - For OCR
- [multer](https://www.npmjs.com/package/multer) - Middleware for handling `multipart/form-data`, used for file uploads
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - For password hashing
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - For parsing cookies
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For handling JSON Web Tokens
- [mongoose](https://www.npmjs.com/package/mongoose) - For MongoDB object modeling
