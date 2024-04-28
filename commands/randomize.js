
module.exports = {
    name: 'randomize',
    description: 'List all available commands.',
    execute(interaction) {
        let str = '';

        return void interaction.reply({
            content: str,
            ephemeral: true,
        });
    },
};

