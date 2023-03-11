print = console.log

let links = Array.from(document.getElementsByTagName("a"))
let images = Array.from(document.getElementsByTagName("img"))

links.forEach((item, index) => {
    print(`${index}: href=${item.href} target=${item.target}`);
})

images.forEach((item, index) => {
    print(`${index}: src=${item.src} alt=${item.alt}`);
})


let replayButton = document.getElementById("replay-button")
replayButton.addEventListener("click", (ev) => {
    print(ev)
})

let sadAlertBtn = document.getElementById("sadAlertBtn")
sadAlertBtn.addEventListener("mousedown", (ev) => {
    print(ev)
})


let allRows = Array.from(document.getElementsByTagName("th"))
    .concat(Array.from(document.getElementsByTagName("td")))
print(allRows.length)
allRows.forEach((item) => {
    item.addEventListener("mouseover", (ev) => {
        item.style.border = "solid 1px white"
        print(`Навелся на ${item}`)
    })
    item.addEventListener("mouseout", (ev) => {
        item.style.border = "none"
        print(`Убрал мышь с ${item}`)
    })
})


let pudgeFolder = "static/img/pudge/"
let pudgeFiles = ['frame_001_delay-0.05s.gif', 'frame_002_delay-0.05s.gif', 'frame_003_delay-0.05s.gif', 'frame_004_delay-0.05s.gif', 'frame_005_delay-0.05s.gif', 'frame_006_delay-0.05s.gif', 'frame_007_delay-0.05s.gif', 'frame_008_delay-0.05s.gif', 'frame_009_delay-0.05s.gif', 'frame_010_delay-0.05s.gif', 'frame_011_delay-0.05s.gif', 'frame_012_delay-0.05s.gif', 'frame_013_delay-0.05s.gif', 'frame_014_delay-0.05s.gif', 'frame_015_delay-0.05s.gif', 'frame_016_delay-0.05s.gif', 'frame_017_delay-0.05s.gif', 'frame_018_delay-0.05s.gif', 'frame_019_delay-0.05s.gif', 'frame_020_delay-0.05s.gif', 'frame_021_delay-0.05s.gif', 'frame_022_delay-0.05s.gif', 'frame_023_delay-0.05s.gif', 'frame_024_delay-0.05s.gif', 'frame_025_delay-0.05s.gif', 'frame_026_delay-0.05s.gif', 'frame_027_delay-0.05s.gif', 'frame_028_delay-0.05s.gif', 'frame_029_delay-0.05s.gif', 'frame_030_delay-0.05s.gif', 'frame_031_delay-0.05s.gif', 'frame_032_delay-0.05s.gif', 'frame_033_delay-0.05s.gif', 'frame_034_delay-0.05s.gif', 'frame_035_delay-0.05s.gif', 'frame_036_delay-0.05s.gif', 'frame_037_delay-0.05s.gif', 'frame_038_delay-0.05s.gif', 'frame_039_delay-0.05s.gif', 'frame_040_delay-0.05s.gif', 'frame_041_delay-0.05s.gif', 'frame_042_delay-0.05s.gif', 'frame_043_delay-0.05s.gif', 'frame_044_delay-0.05s.gif', 'frame_045_delay-0.05s.gif', 'frame_046_delay-0.05s.gif', 'frame_047_delay-0.05s.gif', 'frame_048_delay-0.05s.gif', 'frame_049_delay-0.05s.gif', 'frame_050_delay-0.05s.gif', 'frame_051_delay-0.05s.gif', 'frame_052_delay-0.05s.gif', 'frame_053_delay-0.05s.gif', 'frame_054_delay-0.05s.gif', 'frame_055_delay-0.05s.gif', 'frame_056_delay-0.05s.gif', 'frame_057_delay-0.05s.gif', 'frame_058_delay-0.05s.gif', 'frame_059_delay-0.05s.gif', 'frame_060_delay-0.05s.gif', 'frame_061_delay-0.05s.gif', 'frame_062_delay-0.05s.gif', 'frame_063_delay-0.05s.gif', 'frame_064_delay-0.05s.gif', 'frame_065_delay-0.05s.gif', 'frame_066_delay-0.05s.gif', 'frame_067_delay-0.05s.gif', 'frame_068_delay-0.05s.gif', 'frame_069_delay-0.05s.gif', 'frame_070_delay-0.05s.gif', 'frame_071_delay-0.05s.gif', 'frame_072_delay-0.05s.gif', 'frame_073_delay-0.05s.gif', 'frame_074_delay-0.05s.gif', 'frame_075_delay-0.05s.gif', 'frame_076_delay-0.05s.gif', 'frame_077_delay-0.05s.gif', 'frame_078_delay-0.05s.gif', 'frame_079_delay-0.05s.gif', 'frame_080_delay-0.05s.gif', 'frame_081_delay-0.05s.gif', 'frame_082_delay-0.05s.gif', 'frame_083_delay-0.05s.gif', 'frame_084_delay-0.05s.gif', 'frame_085_delay-0.05s.gif', 'frame_086_delay-0.05s.gif', 'frame_087_delay-0.05s.gif', 'frame_088_delay-0.05s.gif', 'frame_089_delay-0.05s.gif', 'frame_090_delay-0.05s.gif', 'frame_091_delay-0.05s.gif', 'frame_092_delay-0.05s.gif', 'frame_093_delay-0.05s.gif', 'frame_094_delay-0.05s.gif', 'frame_095_delay-0.05s.gif', 'frame_096_delay-0.05s.gif', 'frame_097_delay-0.05s.gif', 'frame_098_delay-0.05s.gif', 'frame_099_delay-0.05s.gif', 'frame_100_delay-0.05s.gif', 'frame_101_delay-0.05s.gif', 'frame_102_delay-0.05s.gif', 'frame_103_delay-0.05s.gif', 'frame_104_delay-0.05s.gif', 'frame_105_delay-0.05s.gif', 'frame_106_delay-0.05s.gif', 'frame_107_delay-0.05s.gif', 'frame_108_delay-0.05s.gif', 'frame_109_delay-0.05s.gif', 'frame_110_delay-0.05s.gif', 'frame_111_delay-0.05s.gif', 'frame_112_delay-0.05s.gif', 'frame_113_delay-0.05s.gif', 'frame_114_delay-0.05s.gif', 'frame_115_delay-0.05s.gif', 'frame_116_delay-0.05s.gif', 'frame_117_delay-0.05s.gif', 'frame_118_delay-0.05s.gif', 'frame_119_delay-0.05s.gif', 'frame_120_delay-0.05s.gif', 'frame_121_delay-0.05s.gif', 'frame_122_delay-0.05s.gif', 'frame_123_delay-0.05s.gif', 'frame_124_delay-0.05s.gif', 'frame_125_delay-0.05s.gif', 'frame_126_delay-0.05s.gif', 'frame_127_delay-0.05s.gif', 'frame_128_delay-0.05s.gif', 'frame_129_delay-0.05s.gif', 'frame_130_delay-0.05s.gif', 'frame_131_delay-0.05s.gif', 'frame_132_delay-0.05s.gif', 'frame_133_delay-0.05s.gif', 'frame_134_delay-0.05s.gif', 'frame_135_delay-0.05s.gif', 'frame_136_delay-0.05s.gif', 'frame_137_delay-0.05s.gif', 'frame_138_delay-0.05s.gif', 'frame_139_delay-0.05s.gif', 'frame_140_delay-0.05s.gif', 'frame_141_delay-0.05s.gif', 'frame_142_delay-0.05s.gif', 'frame_143_delay-0.05s.gif', 'frame_144_delay-0.05s.gif', 'frame_145_delay-0.05s.gif', 'frame_146_delay-0.05s.gif', 'frame_147_delay-0.05s.gif', 'frame_148_delay-0.05s.gif', 'frame_149_delay-0.05s.gif', 'frame_150_delay-0.05s.gif', 'frame_151_delay-0.05s.gif', 'frame_152_delay-0.05s.gif', 'frame_153_delay-0.05s.gif', 'frame_154_delay-0.05s.gif', 'frame_155_delay-0.05s.gif', 'frame_156_delay-0.05s.gif', 'frame_157_delay-0.05s.gif', 'frame_158_delay-0.05s.gif', 'frame_159_delay-0.05s.gif', 'frame_160_delay-0.05s.gif', 'frame_161_delay-0.05s.gif', 'frame_162_delay-0.05s.gif', 'frame_163_delay-0.05s.gif', 'frame_164_delay-0.05s.gif', 'frame_165_delay-0.05s.gif', 'frame_166_delay-0.05s.gif', 'frame_167_delay-0.05s.gif', 'frame_168_delay-0.05s.gif', 'frame_169_delay-0.05s.gif', 'frame_170_delay-0.05s.gif', 'frame_171_delay-0.05s.gif', 'frame_172_delay-0.05s.gif', 'frame_173_delay-0.05s.gif', 'frame_174_delay-0.05s.gif', 'frame_175_delay-0.05s.gif', 'frame_176_delay-0.05s.gif', 'frame_177_delay-0.05s.gif', 'frame_178_delay-0.05s.gif', 'frame_179_delay-0.05s.gif', 'frame_180_delay-0.05s.gif', 'frame_181_delay-0.05s.gif', 'frame_182_delay-0.05s.gif', 'frame_183_delay-0.05s.gif', 'frame_184_delay-0.05s.gif', 'frame_185_delay-0.05s.gif', 'frame_186_delay-0.05s.gif', 'frame_187_delay-0.05s.gif', 'frame_188_delay-0.05s.gif', 'frame_189_delay-0.05s.gif', 'frame_190_delay-0.05s.gif', 'frame_191_delay-0.05s.gif', 'frame_192_delay-0.05s.gif', 'frame_193_delay-0.05s.gif', 'frame_194_delay-0.05s.gif', 'frame_195_delay-0.05s.gif', 'frame_196_delay-0.05s.gif', 'frame_197_delay-0.05s.gif', 'frame_198_delay-0.05s.gif', 'frame_199_delay-0.05s.gif', 'frame_200_delay-0.05s.gif', 'frame_201_delay-0.05s.gif', 'frame_202_delay-0.05s.gif', 'frame_203_delay-0.05s.gif']
let pudgePaths = pudgeFiles.map((item) => pudgeFolder + item)
let currentPudge = 0;
function changePicture(){
    document.getElementById("pudge").src = pudgePaths[currentPudge]; 
    currentPudge++;
    if(currentPudge >= pudgePaths.length){
        currentPudge = 0; 
    }
    
}

setInterval(changePicture,50);