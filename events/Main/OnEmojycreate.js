module.exports.EmojiCreateCommand = ({
    name: "$getServerVar[log]",
    code: `
    $title[Emoji]
    $description[{emoji} was created in {guildname} on {created}]
    $color[GREEN]
    `
    })