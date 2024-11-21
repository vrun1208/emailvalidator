function validateEmail(email) {
    if (typeof (email) !== "string") {
        throw new Error("Email must be a String");
    }

    //^[a-zA-Z0-9._%+-] -> Allow letters, numbers and common characters
    //@[a-zA-Z0-9.-] -> allow letters, numbers and hyphens after @ 
    //\.[a-zA-Z]{2,}$ -> ensure valid domain with atleast two letters   
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.includes('@')) {
        return { valid: false, error: "Missing @ Symbol" };
    }

    if (!/\.[^\s@]+$/.test(email)) {
        return { valid: false, error: 'Missing domain extension' };
    }

    if (!regex.test(email)) {
        return { valid: false, error: 'Invalid email format' };
    }

    return { valid: true, error: null };
}

module.exports = { validateEmail };