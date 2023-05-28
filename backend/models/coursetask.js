const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseTask extends Model {}

    CourseTask.init(
        {
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
        },
        {
            sequelize,
            modelName: "CourseTask",
        }
    );

    CourseTask.associate = (models) => {
        CourseTask.hasMany(models.Course, {
            foreignKey: "tasksCourse",
            as: "courses",
        });
        CourseTask.belongsToMany(models.CompletedTask, {
            through: "CourseTaskCompletedTask",
            as: "completedTasks",
            foreignKey: "courseTaskId",
        });
    };

    return CourseTask;
};
