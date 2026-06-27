import { body } from "express-validator";

const userRegistertionValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({ min: 3 }).withMessage("Username should be at least 3 characters long")
            .isLength({ max: 13 }).withMessage("Username can not be more than 13 characters long"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
            .isLength({ min: 6 }).withMessage("Password should be at least 6 characters long")
            .isLength({ max: 20 }).withMessage("Password can not be more than 20 characters long"),
    ]
}

const userLoginValidator = () => {
    return [
        body("email")
            .trim()
            .isEmail().withMessage("Email is invalid")
            .notEmpty().withMessage("Email is required"),
        body("password")
            .trim()
            .notEmpty().withMessage("Password is required")
    ]
}

export { userRegisterionValidator };