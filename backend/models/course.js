const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {}

    Course.init({
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
        getcategories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "CourseCategory",
            },
        },
        tasksCourse: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gettaskes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "CourseTask",
            },
        },
        statusCourse: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getstatuses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "CourseStatus",
            },
        },
        badgesCourse: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        getbadgess: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: "Badge",
            },
        },
        classCertificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        certificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Course.associate = (models) => {
        Course.belongsTo(models.CourseCategory, {
            foreignKey: "categoryCourse",
            as: "getcategories",
        });
        Course.belongsTo(models.CourseTask, {
            foreignKey: "tasksCourse",
            as: "gettaskes",
        });
        Course.belongsTo(models.CourseStatus, {
            foreignKey: "statusCourse",
            as: "getstatuses",
        });
        Course.belongsTo(models.Badge, {
            foreignKey: "badgesCourse",
            as: "getbadgess",
        });
        Course.hasMany(models.Class, {
            foreignKey: "classId",
            as: "classCertificate",
        });
        Course.hasMany(models.Certificate, {
            foreignKey: "certificate",
            as: "certificate",
        });
    };

    return Course;
};
