const censor = (text, check, censorSymbol = "#") => {
    return text.replace(new RegExp(check.join("|"), "gi"), (match) => 
        censorSymbol.repeat(match.length)
    )
}

module.exports = censor