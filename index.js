const bcrypt = require('bcrypt');

// Set up async function to hash a password
const hashPassword = async(myPassword)=>{
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(myPassword, salt);
    console.log(`salt: ${salt}`);
    console.log(`hash: ${hash}`);
}

hashPassword('hello1234');