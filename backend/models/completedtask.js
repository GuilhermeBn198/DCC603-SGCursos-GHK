const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class CompletedTask extends Model {}

    CompletedTask.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userCompletedtask: {
                type: DataTypes.INTEGER,
            },
            completed: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "CompletedTask",
        }
    );

    // Establish relationships
    CompletedTask.belongsTo(sequelize.model("User"), {
        foreignKey: "userCompletedtask",
        as: "userCompletedtask",
    });

    CompletedTask.belongsToMany(sequelize.model("CourseTask"), {
        through: "CourseTaskCompletedTask",
        as: "courseTasks",
        foreignKey: "completedTaskId",
    });

    return CompletedTask;
};
