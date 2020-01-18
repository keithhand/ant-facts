const facts = require(__dirname + '/facts');

Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)];
};

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: facts.random(),
    };
};

