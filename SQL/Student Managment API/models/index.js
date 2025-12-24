const Student = require('./studentTables');
const IdentityCard = require('./identitycard');
const department = require('./department');
// One-to-One relationship
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// One to Many relationship
department.hasMany(Student);
Student.belongsTo(department);

module.exports = {
    Student,
    IdentityCard,
    department
}; 
