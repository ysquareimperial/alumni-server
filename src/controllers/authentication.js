import db from "../models";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const SignUp = (req, res) => {
    const { email, firstName, lastName, password, phone, imageUrl } = req.body;
    console.log(req.body);

    db.sequelize
        .query(`SELECT  max(id) + 1 as id from signup `)
        .then((result) => {
            let maxId = result[0][0].id;
            console.log(maxId);

            db.sequelize.query(`SELECT * from signup where email="${email}"`)
                .then(resp => {
                    if (resp[0].length) {
                        console.log('user exist')
                        return res.status(400).json({ success: false, msg: 'email already registered' })
                    } else {
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(password, salt, (err, hash) => {
                                if (err) throw err;
                                let newPass = hash;

                                db.sequelize.query(
                                    `INSERT INTO signup (id, email, password, 
                                    firstName, lastName, phone, imageUrl
              ) VALUES 
              ("${maxId}", "${email}","${password}","${firstName}","${lastName}",
              "${phone}","${imageUrl}"
               )`)
                                    .then((results) => {
                                        db.sequelize.query(`SELECT * from signup where phone ="${phone}"`)
                                            .then(result => {
                                                //   res.json({
                                                //   status: "success",
                                                //   result : result[]
                                                // });
                                                let user = result[0][0];
                                                console.log(user)

                                                let payload = {
                                                    phone: user.phone,
                                                }
                                                jwt.sign(payload, "secret", {
                                                    expiresIn: "1d"
                                                },
                                                    (err, token) => {
                                                        if (err) throw err;

                                                        res.json({
                                                            success: true,
                                                            msg: 'Successfully logged in',
                                                            token,
                                                            user
                                                        })
                                                    })
                                            })

                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        res.status(500).json({ status: "failed", err });
                                    })
                            })
                        })
                    }
                })

        })
}


const SignIn = (req, res) => {
    const {   
        phone,
        password,
    } = req.body

    db.sequelize.query(`SELECT email, firstName, lastName, password, phone from 
		signup WHERE phone =  "${phone}"`)
        .then((result) => {
            // console.log(req.body)
            if (!result[0].length) {
                res.status(400).json({
                    success: false,
                    msg: "user does not exits",

                })
                console.log("user does not exits")
            }
            else {
                console.log(result[0][0].email)

                let originalPassword = result[0][0].password;
                // console.log(password, originalPassword, '====')
                // bcrypt
                //     .compare(password, originalPassword)
                //     .then(isMatch => {
                        // if (isMatch) {
                            if (password === originalPassword) {
                            console.log('matched!')
                            let user = result[0][0];
                            console.log(user)

                            let payload = {
                                phone: user.phone,
                            }

                            jwt.sign(payload, "secret", {
                                expiresIn: "1d"
                            },
                                (err, token) => {
                                    if (err) throw err;

                                    res.json({
                                        success: true,
                                        msg: 'Successfully logged in',
                                        token,
                                        user
                                    })
                                })
                        } else {
                            return res.status(400).json({ success: false, msg: 'Password not correct' })
                        }
                    // })

                // else{
                // 	res.json({
                // 		response : "Welcome back",
                // 		status : 200,
                // 		username : username,
                // 		result
                // 	})
                // 	console.log("success")
                // }
            }
        })
}



const verifyToken = (req, res) => {
    const authToken = req.headers["authorization"];
    const token = authToken.split(" ")[1]
    console.log(authToken)

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.json({ success: false, msg: 'Failed to authenticate token', err })
        }

        const { phone } = decoded;

        db.sequelize.query(`SELECT *  from signup where phone="${phone}"`)
            .then(result => {
                res.json({ success: true, user: result[0] })
            }).catch((err) => {
                console.log(err);
                res.status(500).json({ status: "failed", err });
            })

    })
}


export {
    SignUp,
    SignIn,
    verifyToken

}