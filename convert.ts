import { readFileSync, writeFileSync } from "node:fs"

interface Command {
    module: string
    base: string
    aliases: string[]
    description: string // could map locale -> desc?
    usage: string // could do multi-usage; could map locale -> usages?
}

const commands: Command[] = []
const { data: cmdsIn } = JSON.parse(readFileSync("./src/xeyame/data/commands.json").toString())

cmdsIn.forEach((element: string[]) => {
    let aliases: string[] = []
    if (element[2]) aliases = element[2].split(",").map(alias => alias.trim())

    commands.push({
        module: element[0],
        base: element[1],
        aliases,
        description: element[3],
        usage: element[4]
    })
});

const output = {
    commands
}

writeFileSync("./src/data/commands.json", JSON.stringify(output, null, 2))
