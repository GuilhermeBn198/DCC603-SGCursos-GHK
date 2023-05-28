module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("enrollments", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            courseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            classId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            courseClass: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            userEnrollment: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            getuser: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    modelName: "users",
                    key: "id",
                },
            },
            enrollment_date: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cancelled: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            cancellation_reason: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            start_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            end_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.dropTable("enrollments");
    },
};
