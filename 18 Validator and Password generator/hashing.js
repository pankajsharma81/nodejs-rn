const bcrypt = require("bcrypt");

const password = "pankaj@123";

async function Hashing() {
  // console.time("hash")
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.timeEnd("hash")
  console.log(salt);
  console.log(hashedPassword);

  const check = await bcrypt.compare(password, hashedPassword);
  console.log(check);
}

Hashing();
