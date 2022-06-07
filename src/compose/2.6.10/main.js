'use strict'

const couchbase = require('couchbase')

var cluster = new couchbase.Cluster('couchbase://192.168.101.14?dnssrv=off');
//var cluster = new couchbase.Cluster('couchbase://192.168.101.14');
//var cluster = new couchbase.Cluster('http://192.168.101.14:8091');
//var cluster = new couchbase.Cluster('http://192.168.101.14:8091/pools');


cluster.authenticate('Administrator', 'password');
var bucket = cluster.openBucket('products');
var N1qlQuery = couchbase.N1qlQuery;

bucket.manager().createPrimaryIndex(function() {
    bucket.upsert('user:king_arthur', {
            'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
        },
        function (err, result) {
            bucket.get('user:king_arthur', function (err, result) {
                console.log('Got result: %j', result.value);
                bucket.query(
                    N1qlQuery.fromString('SELECT * FROM bucketname WHERE $1 in interests LIMIT 1'),
                    ['African Swallows'],
                    function (err, rows) {
                        console.log("Got rows: %j", rows);
                    });
            });
        });
});
