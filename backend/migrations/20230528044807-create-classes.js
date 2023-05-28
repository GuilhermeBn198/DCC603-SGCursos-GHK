module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("classes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            courseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "courses",
                    key: "id",
                },
            },
            teacher: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            getteacher: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            certificate: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("classes");
    },
};
