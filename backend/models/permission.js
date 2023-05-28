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
        },
        {
            sequelize,
            modelName: "Permission",
        }
    );

    Permission.associate = (models) => {
        Permission.belongsToMany(models.Role, {
            foreignKey: "Rolepermissions",
        });
    };

    return Permission;
};
