const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CourseStatus extends Model {}

    CourseStatus.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            status_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "CourseStatus",
        }
    );

    CourseStatus.associate = (models) => {
        CourseStatus.hasMany(models.Course, {
            foreignKey: "statusCourse",
            as: "courses",
        });
    };

    return CourseStatus;
};
