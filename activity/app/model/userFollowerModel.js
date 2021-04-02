const connection = require('./connection');

let createRequest = (userId,followerId) => {
    return new Promise(function (resolve, reject) {
        
            connection.query(`INSERT INTO user_follower SET user_id = "${userId}" , follower_id = "${followerId}"` ,function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        
    })
}

let requestAccept = (userId,followerId) => {
    return new Promise(function (resolve, reject) {
       
        connection.query(`UPDATE user_follower SET is_accepted = true WHERE user_id = "${userId}" AND follower_id = "${followerId}"` ,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {

                resolve(res);
            }
        })
    })
}

let getUsersFollowers = (userId) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT follower_id FROM user_follower WHERE user_id = "${userId}"` ,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}

let getUsersFollowersCount = (userId) => {
    return new Promise(function (resolve, reject) {
        connection.query(`SELECT COUNT(*) AS followersCount from user_follower WHERE 
        user_id="${userId}" AND is_accepted=1`,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}
module.exports.getUsersFollowersCount = getUsersFollowersCount;
module.exports.getUsersFollowers = getUsersFollowers;
module.exports.requestAccept = requestAccept;
module.exports.createRequest = createRequest;
// module.exports. = ;