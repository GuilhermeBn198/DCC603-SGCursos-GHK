// models/badge.js
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Badge extends Model {}

    Badge.init(
        {
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
        },
        {
            sequelize,
            modelName: "Badge",
        }
    );

    Badge.associate = (models) => {
        Badge.belongsTo(models.Course, {
            foreignKey: "courseId",
            as: "courses",
        });
        Badge.hasMany(models.UserBadge, {
            foreignKey: "badgeId",
            as: "userBadges",
        });
    };

    return Badge;
};
