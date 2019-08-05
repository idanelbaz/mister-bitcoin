export default {
    getUser,
    signUp,
    addMove
}


function getUser() {
    if (loadFromStorage('user')) return loadFromStorage('user')
    else return null
}

function signUp(userName) {
    const user = _createUser(userName);
    saveToStorage('user', user)
}

function _createUser(userName) {
    return {
        name: userName,
        coins: 100,
        moves: [],
        id: _makeId(),
        move: [],
    }
}

function addMove(coins, userToTransfer) {
    const user = loadFromStorage('user');
    user.move.push({
        toId: userToTransfer._id,
        to: userToTransfer.name,
        at: new Date(),
        amount: coins
    })
    user.coins = user.coins - coins;
    saveToStorage('user', user)
}

function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}