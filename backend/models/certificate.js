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
        courseCertificate: {
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
        userCertificate: {
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
        classCertificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            foreignKey: "classCertificate",
            as: "getclasses",
        });
    };

    return Certificate;
};
