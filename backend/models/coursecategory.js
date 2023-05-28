const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseCategory extends Model {}

    CourseCategory.init(
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
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "CourseCategory",
        }
    );

    CourseCategory.associate = (models) => {
        CourseCategory.hasMany(models.Course, {
            foreignKey: "categoryCourse",
            as: "courses",
        });
    };

    return CourseCategory;
};
