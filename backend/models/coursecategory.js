const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseCategory extends Model {}

    CourseCategory.init({
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
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    CourseCategory.associate = (models) => {
        CourseCategory.belongsTo(models.Course, {
            foreignKey: "id",
            as: "course",
            multiple: true,
        });
    };

    return CourseCategory;
};
