var statusLevels = {
    'none': 0,
    'a': 1,
    'r': 2,
    'v': 3
};


var AuthLevel = {
    get: function(auth){
        var status = auth && auth.user ? auth.user.status : 'none';
        return statusLevels[status];
    }
};

module.exports = AuthLevel;