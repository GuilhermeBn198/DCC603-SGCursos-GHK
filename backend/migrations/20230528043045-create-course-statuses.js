module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("course_statuses", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            status_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("course_statuses");
    },
};
