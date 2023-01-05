const { hash } = require('bcryptjs');
const { sign } = require('jsonwebtoken');


module.exports = async (password, data) => {
    const passwordHash = await hash(password, 10);
    const token = sign(data, process.env.SECRET);

    return { passwordHash, token }
};
