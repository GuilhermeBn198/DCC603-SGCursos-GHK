module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("completed_tasks", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userCompletedtask: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            completed: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("completed_tasks");
    },
};
