const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Permission extends Model {}

    Permission.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Permission",
        }
    );

    Permission.associate = (models) => {
        Permission.belongsToMany(models.Role, {
            through: {
                model: "RolePermissions",
            },
        });
    };

    return Permission;
};
