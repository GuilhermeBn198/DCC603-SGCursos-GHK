module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("courses", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            workload: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            categoryCourse: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            tasksCourse: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            statusCourse: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            certificate: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("courses");
    },
};
