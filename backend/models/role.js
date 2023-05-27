const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {}

    Role.init(
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
            userpermissions: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Role",
        }
    );

    Role.associate = (models) => {
        Role.belongsToMany(models.User, {
            foreignKey: "userId",
            as: "users",
        });
        Role.hasMany(models.Permission, {
            foreignKey: "roleId",
            as: "getpermission",
        });
    };

    return Role;
};
