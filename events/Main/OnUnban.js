module.exports.UnbanCommand = ({
    name: "$getServerVar[log]",
    code: `
    $title[UnBan]
    $description[$tag[$authorID] was unbanned from $guildName[$guildID]]
    $color[GREEN]
    `
    })