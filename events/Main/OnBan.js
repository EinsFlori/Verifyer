module.exports.BanCommand = ({
    name: "$getServerVar[log]",
    code: `
    $title[Ban]
    $description[$tag has been banned from $guildName!]
    $color[RED]
    `
    })