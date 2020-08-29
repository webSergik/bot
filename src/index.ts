import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(({ reply }) => reply("Я Трамп, ща запущу сипи на 4000"));
bot.help(({ reply }) => reply("Heeelp!!!"));
bot.hears(/delete\s/, (ctx, next) => {
  const parts = ctx.message.text.trim().split(" ");
  if (!parts) return next();
  setTimeout(() => {
    ctx
      .deleteMessage(ctx.update.message.message_id)
      .catch((e) => console.log(e));
  }, 3000);
});
bot
  .launch()
  .then(() => console.log("Bot Started"))
  .catch((err) => console.log(err));
