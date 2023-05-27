// models/badge.js
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Badge extends Model {}

    Badge.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Badge.associate = (models) => {
        Badge.belongsTo(models.Course, {
            foreignKey: "courseId",
            as: "courses",
        });
        Badge.belongsTo(models.UserBadge, {
            foreignKey: "userBadgeId",
            as: "userBadge",
        });
    };

    return Badge;
};
