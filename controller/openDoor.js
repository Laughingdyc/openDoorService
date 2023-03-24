const https = require('https')
const axios = require('axios')
const open = async (ctx) => {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false })
    // axios.defaults.withCredentials = true;

    await axios({
        method: 'post',
        baseURL: 'https://s.weekey.cn/SmallAPP/Unlock/unlock_new?floor=0',
        data: {
            "gate_id": "66968"
        },
        headers: {
            // "connection": "keep-alive",
            // "content-length": "13",
            // "Accept": "application/json, text/plain, */*",
            // "X-Requested-With": "XMLHttpRequest",
            // "Content-Type": "application/x-www-form-urlencoded",
            // "Origin": "https://s.weekey.cn",
            // "Sec-Fetch-Site": "same-origin",
            // "Sec-Fetch-Mode": "cors",
            // "Sec-Fetch-Dest": "empty",
            // "Referer": "https://s.weekey.cn/mobile_v2/unlock/unlock?token=gh_92a097477318",
            // "Accept-Encoding": "gzip, deflate",
            // "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            Cookie: "PHPSESSID=pi9chglcavpov3iap2a91oi5u5; tgw_l7_route=2f7677f67627cdd752e69e0f729a97b5"
        },
        // Cookie: {
        //     "PHPSESSID": "pi9chglcavpov3iap2a91oi5u5",
        //     "tgw_l7_route": "2f7677f67627cdd752e69e0f729a97b5",
        // },
        httpsAgent: httpsAgent
    }).then(res => {
        if (res) {
            ctx.body = {
                code: 200,
                res: res
            }
        } else {
            ctx.body = {
                code: 300,
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: err
        }
    })
}

const test = async (ctx) => {
    ctx.body = {
        code: 200,
        res: 'test success!'
    }
}

module.exports = {
    open,
    test
}