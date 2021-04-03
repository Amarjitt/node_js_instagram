const connection = require('./connection');


let addInUserFollowingTable = (userId,followerId) => {
    return new Promise(function (resolve, reject) {
            connection.query(`INSERT INTO user_following SET user_id = "${userId}" , follower_id = "${followerId}"` ,function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);

                }
            })
    })
}

let getUsersFollowing = (userId) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT follower_id FROM user_following WHERE user_id = "${userId}"` ,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}


// getUsersFollowing
module.exports.getUsersFollowing = getUsersFollowing;
module.exports.addInUserFollowingTable = addInUserFollowingTable;