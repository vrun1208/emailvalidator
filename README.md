# Email Validator

[![npm version](https://img.shields.io/npm/v/email-validator.svg)](https://www.npmjs.com/package/email-validator)  
A simple and lightweight Node.js package for validating email addresses with regex.

---

## Features

- **Regex-based email validation**: Check if an email address is valid.
- **Detailed error messages**: Get insights on why validation failed.
- **Customizable rules**: Extend the default validation logic.
- **CLI Support**: Validate emails directly from the command line.

---

## Installation

Install the package using npm or yarn:

```bash
npm install email-validator
```
---

## Usage
- **Import the validator**

```bash
const { validateEmail } = require('email-validator');
```

- **Validate an Email Address**
  
```bash
const result = validateEmail('test@example.com');
console.log(result); // { valid: true, error: null }
```
---

## CLI Usage

You can also use the package directly in your terminal:

```bash
npm install -g email-validator
```

```bash
npx email-validator test@example.com
```
