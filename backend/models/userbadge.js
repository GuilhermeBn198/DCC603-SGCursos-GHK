const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const UserBadge = sequelize.define("UserBadge", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        badgeId: {
            type: DataTypes.INTEGER,
        },
        certificate: {
            type: DataTypes.INTEGER,
        },
    });

    // Establish relationships
    UserBadge.belongsTo(sequelize.model("Badge"), {
        foreignKey: "badgeId",
        as: "Badge",
    });

    return UserBadge;
};
