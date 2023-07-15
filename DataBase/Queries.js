const insert_data = 'insert into data(first,last,email,password) values ($1,$2,$3,$4)';

const check_data = 'select * from data where email=$1 AND password=$2';

module.exports = {
    insert_data,
    check_data
}