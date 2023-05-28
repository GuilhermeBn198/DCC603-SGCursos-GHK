const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Course extends Model {}

    Course.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            workload: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            categoryCourse: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            tasksCourse: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            statusCourse: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            certificate: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Course",
        }
    );

    Course.associate = (models) => {
        Course.belongsTo(models.CourseCategory, {
            foreignKey: "categoryCourse",
            as: "getcategories",
        });
        Course.hasMany(models.CourseTask, {
            foreignKey: "tasksCourse",
            as: "gettaskes",
        });
        Course.belongsTo(models.CourseStatus, {
            foreignKey: "statusCourse",
            as: "getstatuses",
        });
        Course.hasMany(models.Badge, {
            foreignKey: "courseId",
            as: "badges",
        });
        Course.hasMany(models.Class, {
            foreignKey: "courseId",
            as: "classes",
        });
        Course.hasMany(models.Certificate, {
            foreignKey: "certificate",
            as: "certificate",
        });
    };

    return Course;
};
