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


let createRequest = (followerId,userId) => {
    // let updateString = '';
    // for(var key in userOBJ){
    //     updateString += `${key}="${userOBJ[key]}", `
    // }

    // updateString = updateString.substring(0,updateString.length - 2);

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

// createRequest
module.exports.createRequest = createRequest;
module.exports.create = create;
module.exports.getById = getById;
module.exports.getAllUser = getAllUser;
module.exports.deleteById = deleteById;
module.exports.updateById = updateById;
