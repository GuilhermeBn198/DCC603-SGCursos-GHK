const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        getrole: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "Role",
            },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        institution: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    User.associate = (models) => {
        User.hasMany(models.Enrollment, {
            foreignKey: "userId",
            as: "enrollments",
        });

        User.hasMany(models.Certificate, {
            foreignKey: "userId",
            as: "certificates",
        });

        User.hasMany(models.Class, {
            foreignKey: "userId",
            as: "classes",
        });

        User.hasMany(models.CompletedTask, {
            foreignKey: "userId",
            as: "completedTasks",
        });

        User.hasOne(models.Role, {
            foreignKey: "roleId",
            as: "getrole",
        });
    };

    return User;
};
