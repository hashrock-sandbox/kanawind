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
    "スッ",
    "パッ"
]

console.log(Math.pow(pattern.length, 4))

const fs = require("fs")




for (let a of pattern) {
    for (let b of pattern) {
        for (let c of pattern) {
            for (let d of pattern) {
                fs.appendFileSync("./out.css", [a, b, c, d].join("\n"))
            }
        }
    }
}
