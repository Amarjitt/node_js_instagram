const connection = require('./connection');

const { uuid } = require('uuidv4');

let create = (userObj) => {
        // insert 
        userObj.uid = uuid();
        // create user 
        return new Promise(function (resolve, reject) {
            connection.query("INSERT INTO user SET ?", userObj, function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        })
    }

let getById = (userId) => {
        
        return new Promise(function (resolve, reject) {
            connection.query(`SELECT * FROM user WHERE uid = "${userId}"`, function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        })
    }

let getAllUser = () => {

        return new Promise(function (resolve, reject) {
            connection.query("SELECT * FROM user", function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        })
    }
let deleteById = (userId) => {    
    return new Promise(function (resolve, reject) {
        connection.query(`DELETE FROM user WHERE uid="${userId}"` ,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}

let updateById = (userOBJ,userId) => {
    let updateString = '';
    for(var key in userOBJ){
        updateString += `${key}="${userOBJ[key]}", `
    }

    updateString = updateString.substring(0,updateString.length - 2);

    return new Promise(function (resolve, reject) {
        connection.query(`UPDATE user SET ${updateString} WHERE uid = "${userId}"` ,function (err, res) {
            if (err) {
                reject(err)
                return;
            } else {
                resolve(res);
            }
        })
    })
}


let createRequest = (userId,followerId,is_public) => {
    return new Promise(function (resolve, reject) {
        if(is_public === 1){
            connection.query(`INSERT INTO user_follower SET user_id = "${userId}" , follower_id = "${followerId}" , is_accepted = true` ,function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        }
        else{
            connection.query(`INSERT INTO user_follower SET user_id = "${userId}" , follower_id = "${followerId}"` ,function (err, res) {
                if (err) {
                    reject(err)
                    return;
                } else {
                    resolve(res);
                }
            })
        }
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

// getAllFollowers
// createRequest
module.exports.createRequest = createRequest;
module.exports.create = create;
module.exports.getById = getById;
module.exports.getAllUser = getAllUser;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
module.exports.requestAccept = requestAccept;
module.exports.getUsersFollowers = getUsersFollowers;

