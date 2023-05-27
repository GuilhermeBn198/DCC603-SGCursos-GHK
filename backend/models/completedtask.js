const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CompletedTask = sequelize.define("CompletedTask", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userCompletedtask: {
            type: DataTypes.INTEGER,
        },
        getusers: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        completedtaskId: {
            type: DataTypes.INTEGER,
        },
        getTaskId: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
    });

    // Establish relationships
    CompletedTask.belongsTo(sequelize.model("User"), {
        foreignKey: "userCompletedtask",
        as: "userCompletedtask",
    });

    CompletedTask.belongsToMany(sequelize.model("CourseTask"), {
        through: {
            model: sequelize.model("CompletedTask"),
            as: "completedtask",
            foreignKey: "completedtaskId",
        },
    });

    return CompletedTask;
};
