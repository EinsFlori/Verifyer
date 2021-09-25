module.exports.ChannelCreateCommand = ({
    name: "$getServerVar[log]",
    code: `
    $title[Channel]
    $description[{name} channel in {guildname} was just created!]
    $color[GREEN]
    `
    })