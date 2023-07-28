# Project Name: Product Catalog React App

## Description
This project is a Product Catalog React App that allows users to browse and search for products based on different categories. It utilizes the provided Dummy REST API to fetch product data and implements various functionalities like listing available categories, paginating product listings, and displaying product details.

## Installation
To run the Product Catalog Web App locally, follow the steps below:

1. Clone the repository:
   ```
   git clone <repository_url>
   cd product-catalog-web-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000` to access the web app.

## Features and Functionalities

### 1. List all the available categories in the homepage
- When the user visits the homepage, the web app will display a list of all available categories.
- Upon clicking on any of the listed categories, the user will be redirected to another page that displays all the products available in the selected category.

### 2. Apply pagination to the product listing
- The product listing page will display products in a paginated manner to improve user experience.
- Pagination will allow the user to navigate through multiple pages of products.

### 3. Create a search bar in the homepage
- The homepage will have a search bar where users can enter their query.
- Based on the user's input, a list of matching products will be shown in real-time.

### 4. Product Details Page
- When the user selects any of the products listed in the homepage or search results, they will be redirected to a detailed view of the selected product.
- The product details page will display comprehensive information about the selected product.

## Dependencies
This project uses the following external dependencies (versions may vary):


- "axios": "^1.4.0"
- "bootstrap": "^5.3.1"
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "react-paginate": "^8.2.0"
- "react-router-dom": "^6.14.2"
- "react-scripts": "5.0.1"

## Contribution
If you would like to contribute to this project, feel free to open a pull request with your changes. Ensure that your changes align with the project's objectives and follow best coding practices.

## License
This project is licensed under the MIT License. You can find the license information in the `LICENSE` file.

---

Please make sure to update `<repository_url>` with the actual URL of your repository before including this README file in your project. The README file will provide a quick overview of your project's functionalities, installation instructions, and dependencies, helping other developers understand and contribute to your project effectively. Good luck with your Product Catalog Web App!