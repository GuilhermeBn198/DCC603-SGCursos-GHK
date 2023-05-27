const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Enrollment extends Model {}

    Enrollment.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userEnrollment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getuser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "User",
            },
        },
        enrollment_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cancelled: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cancellation_reason: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Enrollment.associate = (models) => {
        Enrollment.belongsTo(models.User, {
            foreignKey: "userEnrollment",
            as: "user",
        });
    };

    return Enrollment;
};
