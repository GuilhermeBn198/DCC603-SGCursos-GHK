const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Class extends Model {}

    Class.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        courseClass: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getcourse: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "Course",
            },
        },
        teacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getteacher: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "User",
            },
        },
        certificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Class.associate = (models) => {
        Class.belongsTo(models.Course, {
            foreignKey: "courseClass",
            as: "course",
        });
        Class.belongsTo(models.User, {
            foreignKey: "teacher",
            as: "teacher",
        });
        Class.hasMany(models.Certificate, {
            foreignKey: "classId",
            as: "certificate",
        });
    };

    return Class;
};
