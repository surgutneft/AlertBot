const { Telegraf } = require('telegraf')
const schedule = require('node-schedule')

const bot = new Telegraf ('5459191364:AAGO_AsMI7JLGq1zOWVfqVyH7AL-PO0NPOE')
bot.start((ctx) => ctx.replyWithHTML('Привет! Я могу напомнить тебе о чем угодно только попроси.\nДля этого направь мне время напоминания в формате \n<b>ДД.ММ.ГГГГ ЧЧ:ММ:СС</b>'))

bot.on('text', (ctx) => {
    // Explicit usage

    console.log(ctx.update.message.text)
    const date = new Date(ctx.update.message.text)
    const job = schedule.scheduleJob(date, () => {
        console.log('The world is going to end today.')
        ctx.reply(`Hello`)
      })
  })
  

bot.launch()

