# E-Commerce Project

![Project Status](https://img.shields.io/badge/status-active--development-yellow)

A full-stack e-commerce application built with .NET Core and Angular.

## Project Status

This project is currently under active development. Some features may not be fully implemented, and there may be bugs. Contributions are welcome!

## Current Screenshots

Here are some screenshots of the current state of the application:

### Shop Page
![Home Page](https://github.com/user-attachments/assets/725f567f-8d41-488b-8657-15613aaf6848)


### Searching
![Product Listing](https://github.com/user-attachments/assets/06be6298-2c9e-43e5-8f88-392f94346445)


### Filtering
![Product Details](https://github.com/user-attachments/assets/160ba91f-3b94-44f3-9640-1b744a816e8b)


### Sorting
![Filter](https://github.com/user-attachments/assets/bcd0c1fa-8ab8-44dd-94d0-d6dccd711642)


## Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Description

This project is a full-stack e-commerce application that allows users to browse products, add them to a cart, and make purchases. The backend is built with .NET Core, and the frontend is built with Angular.

**Note:** This project is currently under active development. Some features may not be fully implemented, and there may be bugs.

## Prerequisites

- [.NET Core SDK](https://dotnet.microsoft.com/download) (version 8.0 or later)
- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Docker](https://www.docker.com/get-started) (for running the database)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (version 2017 or later, if not using Docker)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```

3. Set up the database using Docker:
    - Ensure Docker is installed and running on your machine.
    - Run the following command to start a SQL Server container:
        ```sh
        docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Your_password123' -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2019-latest
        ```

4. Set up the backend:
    - Navigate to the API directory:
        ```sh
        cd API
        ```
    - Install dependencies:
        ```sh
        dotnet restore
        ```
    - Set up the database:
        ```sh
        dotnet ef database update
        ```
    - Run the application with watch:
        ```sh
        dotnet watch run
        ```

5. Set up the frontend:
    - Navigate to the client directory:
        ```sh
        cd ../client
        ```
    - Install dependencies:
        ```sh
        npm install
        ```
    - Run the application:
        ```sh
        npm start
        ```

## Usage

1. Open your browser and navigate to `http://localhost:4200`.
2. Use the application to browse products, add them to your cart, and make purchases.

## Features

- Product listing
- Product details
- Shopping cart
- Checkout process
- User authentication
- Admin panel for managing products

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## Dependencies

- .NET Core SDK: 8.0 or later
- Entity Framework Core: 8.0.10
- Node.js: 14.x or later
- Angular: 19.x or later
- Docker: for running the database
