const router = require('koa-router')()
const {
    open,
    test
} = require('../controller/openDoor')
router.prefix('/api/openDoor')

router.get('/open', open)

router.get('/test', test)

module.exports = router
