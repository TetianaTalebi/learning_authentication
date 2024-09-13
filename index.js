const bcrypt = require('bcrypt');

// // Set up async function to hash a password
// const hashPassword = async(myPassword)=>{
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(myPassword, salt);
//     console.log(`salt: ${salt}`);
//     console.log(`hash: ${hash}`);
// }

// hashPassword('hello1234');

const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);

    if (result) {
        console.log("Logged you in! Successful match!")
    } else {
        console.log("Incorrect! Try again!")
    }
};

login('hello1234', '$2b$12$i/evpc7QE51P42ZvSdJ9..HVqM.7JykoHGb2lVhy0tt8F.xvqrWOy');