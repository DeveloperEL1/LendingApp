const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const { validateDbId, raiseRecord404Error } = require('../middlewares/index')
const { generateCrudMethods } = require('../services')
const userCrud = generateCrudMethods(User)
const saltedRoundes = 10
const bcrypt = require('bcrypt');
router.get('/', (req, res) => {
    userCrud.getAll().then(data => res.send(data)).catch(err => next(err))
})

router.post('/signup', async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const allUsers = await userCrud.getAll()
        const existingUser = allUsers.find(user => user.email === email)
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }
        const hashedPassword = await bcrypt.hash(password, saltedRoundes)
        const newUser = await userCrud.create({ name, email, password: hashedPassword, moneyCount: 100, verified: false })
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
    // userCrud.create(req.body).then(data => res.status(201).json(data)).catch(error => next(error))
})

router.post('/signin', async (req, res, next) => {
    try {
        const { email, password } = req.body
        const users = await userCrud.getAll()
        const user = users.find(user => user.email === email)

        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (passwordMatch) {
                res.status(201).json(user);
                return;
            }

        }
        res.status(401).json({ message: 'Invalid email or password' });
    } catch (error) {
        next(error)
    }


})

router.get('/:id', validateDbId, (req, res, next) => {
    userCrud.getById(req.params.id).then(data => {
        if (data)
            res.status(201).
                json(data)
        else
            raiseRecord404Error(req, res)
    }
    ).catch(error => next(error))
})

router.put('/:id', validateDbId, (req, res, next) => {
    userCrud.update(req.params.id, req.body).then(data => {
        if (data)
            res.send(data)
        else
            raiseRecord404Error(req, res)
    }).catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res, next) => {
    userCrud.delete(req.params.id).then(data => {
        if (data) res.send(data)
        else raiseRecord404Error()
    }).catch(error => next(error))
})
module.exports = router