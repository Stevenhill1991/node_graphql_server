const { users } = require("./data");

class User {
    static all() {
        return users;
    }
    static findOne(id) {
        return users.find((user) => user.id === id);
    }
}

module.exports = {
    User,
};