const userControllers = require("./user.controllers");

const getAll = (req, res) => {
    userControllers
        .getAllUsers()
        .then((response) => {
            res.status(200).json({
                items: response.length,
                users: response,
            });
        })
        .catch(err => res.status(400).json({ message: err.message}))
};

const getById = (req, res) => {
    const id = req.params.id;

    userControllers
        .getUserById(id)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch(err => res.status(400).json({ message: err.message }))
};

const register = (req, res) => {
    const data = req.body;
    if (!data) {
        return res.status(400).json({ message: "Missing Data" });
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.phone ||
        !data.profileImg ||
        !data.addres ||
        !data.status 
    ) {
        return res.status(400).json({
            message: "All fiels must be completed",
            fields: {
                firstName: "string",
                lastName: "string",
                gender: "string",
                email: "example@gmail.com",
                phone: "string",
                profileImg: "example.com/img/example.png",
                birthdayDate: "DD/MM/YYYY",
                addres: "string",
                status: "string",
            },
        });
    } else {
        userControllers
            .createUser(data)
            .then((response) => {
                res.status(201).json({
                    message: `user created succesfuly with id: ${response.id}`,
                    user: response,
                });
            })
            .catch(err => res.status(400).json({ message: err.message}))
    }
};

const remove = (req, res) => {
    const id = req.params.id;
    userControllers
        .deleteUser(id)
        .then((response) => {
            if (response) {
                res.status(204).json();
            } else {
                res.status(400).json({ message: "invalid ID" });
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
};

const edit = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: "Missing Data" });
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.phone ||
        !data.profileImg ||
        !data.addres ||
        !data.status ||
        !data.role
    ) {
        return res.status(400).json({
            message: "All fiels must be completed",
            fields: {
                firstName: "string",
                lastName: "string",
                gender: "string",
                email: "example@gmail.com",
                phone: "string",
                role: "normal",
                profileImg: "example.com/img/example.png",
                birthdayDate: "DD/MM/YYYY",
                addres: "string",
                status: "string",
            },
        });
    } else {
        userControllers
            .editUser(id, data)
            .then((response) => {
                return res.status(200).json({
                    message: "user edited succesfuly",
                    user: response,
                });
            })
            .catch(err => res.status(400).json({ message: err.message }))
    }
};

const editMyUser = (req, res) => {
    const id = req.user.id;
    const data = req.body;

    if (!Object.keys(data).length) {
        return res.staus(400).json({ message: "Missing Data" });
    } else if (
        !data.firstName ||
        !data.lastName ||
        !data.gender ||
        !data.email ||
        !data.phone ||
        !data.profileImg ||
        !data.addres ||
        !data.status ||
        !data.role
    ) {
        return res.status(400).json({
            message: "All fiels must be completed",
            fields: {
                firstName: "string",
                lastName: "string",
                gender: "string",
                email: "example@gmail.com",
                phone: "string",
                role: "normal",
                profileImg: "example.com/img/example.png",
                birthdayDate: "DD/MM/YYYY",
                addres: "string",
                status: "string",
            },
        });
    } else {
        userControllers.editUser(id, data, req.user.rol)
            .then((response) => {
                return res.status(200).json({
                    message: "user edited succesfuly",
                    user: response,
                });
            })
            .catch(err => res.status(400).json({ message: err.message }))

    }
};

const deleteMyUser = (req, res) => {
    const id = req.user.id;
    userControllers.deleteUser(id)
        .then((response) => {
            if (response) {
                return res.status(204).json();
            } else {
                return res.status(400).json({ message: "Invalid id" });
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))

}

const getMyUser = (req, res) => {
    const id = req.user.id;

    userControllers.getUserById(id)
        .then((response) => {
            if (response) {
                return res.status(200).json(data);
            } else {
                return res.status(400).json({ message: "Invalid id" });
            }
        })
        .catch(err => res.status(400).json({ message: err.errors[0].message }))
};

const postProfileImg = (req, res) => {
    const id = req.user.id;
    const imgPath = req.hostname + ":3000" + "api/v1/uploads/" + req.file.filename;
    userControllers.editProfileImg(id, imgPath)
        .then((response) => {
            res.status(200).json(data);
        })
        .catch(err => res.status(400).json({ message: err.errors[0].message }))

};

const getUserWithRol = (req, res) => {
    const id = req.params.id
    userControllers.getUserWithRol(id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch(err => res.status(400).json({ message: err.errors }))
}

module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit,
    editMyUser,
    deleteMyUser,
    getMyUser,
    postProfileImg,
    getUserWithRol
};
