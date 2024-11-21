#!/usr/bin/env node

const { validateEmail } =require('./index');

const email = process.argv[2];

if(!email){
    console.log("usage: node cli.js <email argument>");
    process.exit(1);
}

const result = validateEmail(email);
if(result.valid){
    console.log("Valid email");
}else{
    console.log(`Invalid email: ${result.error}`);
}