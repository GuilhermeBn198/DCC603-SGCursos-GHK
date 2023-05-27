const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseStatus extends Model {}

    CourseStatus.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        status_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    CourseStatus.associate = (models) => {
        CourseStatus.belongsTo(models.Course, {
            foreignKey: "id",
            as: "courses",
            multiple: true,
        });
    };

    return CourseStatus;
};
