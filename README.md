# React Pizza

A responsive and dynamic pizza ordering application built with React and Vite, featuring Lucide icons for a modern and intuitive user interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- Browse a variety of pizzas with detailed descriptions and prices.
- Customize your pizza with various toppings and sizes.
- Add pizzas to the cart and manage your selections.
- Seamless and fast user experience powered by Vite.
- Crisp and scalable icons provided by Lucide.

## Demo

![React Pizza Demo](https://github.com/user-attachments/assets/6a93dc3a-c659-4a86-9824-e93b22f52f6e)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/therandomuser03/react-pizza.git
   cd react-pizza
   ```
2. **Install dependencies:**

Ensure you have Node.js and npm installed. Then, run:

```bash
npm install
```
*Note: If you're using a different package manager like yarn or pnpm, adjust the commands accordingly.*


## Usage

1. To start the development server:
   
   ```bash
   npm run dev
   ```

## Using Lucide Icons

This project uses [Lucide](https://lucide.dev/) for icons. To add an icon to a component:

```bash
npm install lucide-react
```

2. Import the desired icon:

```bash
import { Pizza } from 'lucide-react';

const MyComponent = () => (
  <div>
    <Pizza color="red" size={48} />
  </div>
);

export default MyComponent;
```
*Note: Importing icons directly as shown above ensures that only the icons you use are included in the final bundle, keeping the application lightweight.*


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Open a pull request.
6. Please ensure your code adheres to the project's coding standards and includes appropriate tests.

Happy Coding! ❤️
