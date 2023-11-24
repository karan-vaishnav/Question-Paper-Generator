# Question Paper Generator

This is a simple command-line tool for generating question papers based on difficulty levels and total marks. It uses Node.js and readline-sync for user input.

## How to Use

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/question-paper-generator.git
    cd question-paper-generator
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    node index.js
    ```

4. **Follow the prompts** to enter the percentage for each difficulty level (Easy, Moderate, Difficult) and the total marks required.

5. The tool will generate a question paper based on the provided criteria, displaying questions and their respective marks.

## File Structure

- `index.js`: Entry point for the application. It imports the `generateQuestionPaper` function from the `questionPprGenerator.js` file and runs it.

- `utils/questionPprGenerator.js`: Contains the main logic for filtering and generating question papers. It uses the `readline-sync` library for user input and imports the `questions` module for the question data.

- `Models/Question.js`: Module containing the question data. Ensure that your questions are structured appropriately in this file.

## Customization

Feel free to customize the application according to your needs. You can modify the question data in `Question.js` or adjust the filtering logic in `questionPprGenerator.js`.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
