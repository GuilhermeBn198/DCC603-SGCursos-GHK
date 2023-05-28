module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("RolePermissions", {
            roleId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "roles",
                    key: "id",
                },
            },
            permissionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "permissions",
                    key: "id",
                },
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("RolePermissions");
    },
};
