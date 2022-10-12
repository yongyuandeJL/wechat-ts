/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',
  USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '',
  CITY: '',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小韩',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16832T7l056huNZVUlqbO9TNqwqq9MLs6lYlh8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 所在省份
      province: "四川",
      // 所在城市
      city: "成都",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-16',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.zwcsm.com/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1998', date: '04-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小吴', year: '1995', date: '05-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-20' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小金鱼',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16866TZPSM6I9CJN93HrL4qqPIBwxizXYJcCFv',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0003',
      // 所在省份
      province: "新疆维吾尔自治区",
      // 所在城市
      city: "鄯善",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-20',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.zwcsm.com/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '自己', year: '1985', date: '05-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '1985-05-20' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '仙女',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16869TqnWMTnmaA72oTK7kGJKfd7Xwb3ROqKhl',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0004',
      // 所在省份
      province: "四川",
      // 所在城市
      city: "南充",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-20',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.zwcsm.com/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '自己', year: '1989', date: '09-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { 
        type: '生日', name: '彦祖', year: '1995', date: '05-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '1989-09-20' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '彦祖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU16833T0La7skhIIxTEwMSqYt3vgyFF5JJ6GFfi',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0005',
      // 所在省份
      province: "四川",
      // 所在城市
      city: "南充",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-26',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://www.zwcsm.com/",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '仙女', year: '1989', date: '09-20',
        },
        {
          type: '*生日', name: '傻吊', year: '1998', date: '04-16',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        { 
        type: '生日', name: '自己', year: '1995', date: '05-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '1995-05-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG
