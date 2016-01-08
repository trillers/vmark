var helper = {};

helper.generateFilter = function(Model){
    return function(params, callback){
        var query = Model.find();

        if (params.options) {
            query.setOptions(params.options);
        }

        if (params.sort) {
            query.sort(params.sort);
        }

        if (params.page) {
            var skip = (params.page.no - 1) * params.page.size;
            var limit = params.page.size;
            if (skip) query.skip(skip);
            if (limit) query.limit(limit);
        }

        if (params.conditions) {
            query.find(params.conditions);
        }

        if (params.populations) {
            params.populate.forEach(function(item){
                query.populate(item);
            })
        }
        query.lean(true);
        query.exec(function (err, docs) {
            if (err) {
                console.error('Fail to filter documents: ' + err);
                if(callback) callback(err);
                return;
            }
            if(callback) callback(null, docs);
        });
    };
};

module.exports = helper;
