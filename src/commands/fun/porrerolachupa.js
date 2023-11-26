const {ApplicationCommandOptionType} = require('discord.js');
module.exports = {
  run: async ({ interaction }) => {
    await interaction.reply("CHUPALA:\n");
  },
  data: {
    name: "padalustro",
    description: 'padalustro',
  },
};