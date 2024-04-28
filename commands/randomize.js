const {ApplicationCommandOptionType } = require('discord.js');

module.exports = {
  name: 'randomize',
  description: 'creates random teams based on users in the channel',
  options: [
    {
      name: 'channel',
      type: ApplicationCommandOptionType.User,
      description: 'The voice channel with the users who want the teams generated for',
      required: true,
    },
  ],
  execute(interaction, client) {
    const channel = interaction.options.getUser('channel');

    interaction.reply({
      content: `YO THIS IS COOL.`,
      ephemeral: true,
    });
  },
};
