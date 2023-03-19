const https = require('https')
const axios = require('axios')
const open = async (ctx) => {
    const httpsAgent = new https.Agent({ rejectUnauthorized: false })

    await axios({
        method: 'post',
        baseURL: 'https://s.weekey.cn/SmallAPP/Unlock/unlock_new?floor=0',
        data: {
            "gate_id": "66968"
        },
        headers: {
            "connection": "keep-alive",
            "content-length": "13",
            "Accept": "application/json, text/plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            // "User-Agent": "Mozilla/5.0 (Linux; Android 12; Mi 10 Pro Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/107.0.5304.141 Mobile Safari/537.36 XWEB/5023 MMWEBSDK/20230202 MMWEBID/5058 MicroMessenger/8.0.33.2320(0x28002151) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://s.weekey.cn",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://s.weekey.cn/mobile_v2/unlock/unlock?token=gh_92a097477318",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": "PHPSESSID=pi9chglcavpov3iap2a91oi5u5; tgw_l7_route=2f7677f67627cdd752e69e0f729a97b5"
        },
        "PHPSESSID": "pi9chglcavpov3iap2a91oi5u5",
        "tgw_l7_route": "2f7677f67627cdd752e69e0f729a97b5",
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
    // ctx.body = { code: 100 }
}

module.exports = {
    open
}