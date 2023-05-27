const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseTask extends Model {}

    CourseTask.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        external_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    CourseTask.associate = (models) => {
        CourseTask.belongsTo(models.Course, {
            foreignKey: "courseId",
            as: "courses",
            multiple: true,
        });
        CourseTask.belongsTo(models.CompletedTask, {
            foreignKey: "completedTaskId",
            as: "completedTasks",
            multiple: true,
        });
    };

    return CourseTask;
};
