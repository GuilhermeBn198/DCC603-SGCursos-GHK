const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Certificate extends Model {}

    Certificate.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getcourses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "Course",
            },
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getusers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "User",
            },
        },
        getclasses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "Class",
            },
        },
    });

    Certificate.associate = (models) => {
        Certificate.belongsTo(models.Course, {
            foreignKey: "courseCertificate",
            as: "getcourses",
        });
        Certificate.belongsTo(models.User, {
            foreignKey: "userCertificate",
            as: "getusers",
        });
        Certificate.belongsTo(models.Class, {
            foreignKey: "classId",
            as: "class",
        });
    };

    return Certificate;
};
