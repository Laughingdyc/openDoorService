const router = require('koa-router')()
const {
    open,
} = require('../controller/openDoor')
router.prefix('/api/openDoor')

router.get('/open', open)

module.exports = router
