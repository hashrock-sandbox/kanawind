const pattern = [
    "シュッ→",
    "シュッ↑",
    "シュッ←",
    "シュッ↓",
    "→シュッ",
    "↑シュッ",
    "←シュッ",
    "↓シュッ",
    "クルッ",
    "ストン",
    "ピョン",
    "フワッ",
    "パッ"
]

const fs = require("fs")

function genClass(args){
    return `.${args.join("")}{
    animation:
        ${args.map((i, n) => `${i} 0.25s ease-in ${n * 0.25}s forwards`).join(",")};
}
`
}

fs.writeFileSync("./out.css", "")

for (let a of pattern) {
    fs.appendFileSync("./out.css",genClass([a]))
}

for (let a of pattern) {
    for (let b of pattern) {
            fs.appendFileSync("./out.css",genClass([a, b]))
    }
}


for (let a of pattern) {
    for (let b of pattern) {
        for (let c of pattern) {
            fs.appendFileSync("./out.css",genClass([a, b, c]))
        }
    }
}
