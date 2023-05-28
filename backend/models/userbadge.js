const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class UserBadge extends Model {}

    UserBadge.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            badgeId: {
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            certificate: {
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "UserBadge",
        }
    );

    // Establish relationships
    UserBadge.belongsTo(sequelize.model("Badge"), {
        foreignKey: "badgeId",
        as: "Badge",
    });
    UserBadge.belongsTo(sequelize.model("User"), {
        foreignKey: "userId",
        as: "User",
    });

    return UserBadge;
};
