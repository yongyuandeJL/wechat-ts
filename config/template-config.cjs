/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '韩爸爸, 早上好',
    desc: `
    今天又是元气满满的一天 ૮ ・ﻌ・ა
      **{{date.DATA}}**
      ---
      下面为你播报{{city.DATA}}今天的天气 
      🌤天气：{{weather.DATA}}
      💧最低气温: {{min_temperature.DATA}} 
      ☀️最高气温: {{max_temperature.DATA}} 
      😷今日空气质量：{{aqi.DATA}} 
      🌀今日风向：{{wind_direction.DATA}}{{wind_scale.DATA}} 
      {{aqi.DATA}}{{aqi.DATA}}
      📅距离休息：{{holidaytts.DATA}}
      {{comprehensive_horoscope.DATA}}
      ---
      🦊今天是我们认识的第{{love_day.DATA}}天
      {{birthday_message.DATA}}
      ---
      {{moment_copyrighting.DATA}}
      {{note_en.DATA}} {{note_ch.DATA}}
      {{one_talk.DATA}} {{talk_from.DATA}}
      {{poetry_title.DATA}} {{poetry_content.DATA}}
      
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      ---
      共推送 {{need_post_num.DATA}} 人
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      成功用户: {{success_post_ids.DATA}}
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
