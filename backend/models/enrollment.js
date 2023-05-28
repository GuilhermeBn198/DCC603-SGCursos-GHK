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
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        classId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        courseClass: {
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
                key: "id",
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
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    Enrollment.associate = (models) => {
        Enrollment.belongsTo(models.Class, {
            foreignKey: "classId",
            as: "class",
        });
        Enrollment.belongsTo(models.Course, {
            foreignKey: "courseId",
            as: "course",
        });
    };

    return Enrollment;
};
