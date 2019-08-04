var unicode_table =[
    [47,'Basic Latin - Special Characters'],
    [57,'Basic Latin - Digits'],
    [64,'Basic Latin - Special Characters'],
    [90,'Basic Latin - Upper Case Letters'],
    [96,'Basic Latin - Special Characters'],
    [122,'Basic Latin - Lower Case Letters'],
    [127,'Basic Latin - Special Characters'],
    [255,'C1 Controls and Latin-1 Supplement'],
    [383,'Latin Extended-A'],
    [591,'Latin Extended-B'],
    [687,'IPA Extensions'],
    [767,'Spacing Modifier Letters'],
    [879,'Combining Diacritical Marks'],
    [1023,'Greek/Coptic'],
    [1279,'Cyrillic'],
    [1327,'Cyrillic Supplement'],
    [1423,'Armenian'],
    [1535,'Hebrew'],
    [1791,'Arabic'],
    [1871,'Syriac'],
    [1919,'Undefined'],
    [1983,'Thaana'],
    [2303,'Undefined'],
    [2431,'Devanagari'],
    [2559,'Bengali/Assamese'],
    [2687,'Gurmukhi'],
    [2815,'Gujarati'],
    [2943,'Oriya'],
    [3071,'Tamil'],
    [3199,'Telugu'],
    [3327,'Kannada'],
    [3583,'Malayalam'],
    [3583,'Sinhala'],
    [3711,'Thai'],
    [3839,'Lao'],
    [4095,'Tibetan'],
    [4255,'Myanmar'],
    [4351,'Georgian'],
    [4607,'Hangul Jamo'],
    [4991,'Ethiopic'],
    [5023,'Undefined'],
    [5119,'Cherokee'],
    [5759,'Unified Canadian Aboriginal Syllabics'],
    [5791,'Ogham'],
    [5887,'Runic'],
    [5919,'Tagalog'],
    [5951,'Hanunoo'],
    [5983,'Buhid'],
    [6015,'Tagbanwa'],
    [6143,'Khmer'],
    [6319,'Mongolian'],
    [6399,'Undefined'],
    [6479,'Limbu'],
    [6527,'Tai Le'],
    [6623,'Undefined'],
    [6655,'Khmer Symbols'],
    [7423,'Undefined'],
    [7551,'Phonetic Extensions'],
    [7679,'Undefined'],
    [7935,'Latin Extended Additional'],
    [8191,'Greek Extended'],
    [8303,'General Punctuation'],
    [8351,'Superscripts and Subscripts'],
    [8399,'Currency Symbols'],
    [8447,'Combining Diacritical Marks for Symbols'],
    [8527,'Letterlike Symbols'],
    [8591,'Number Forms'],
    [8703,'Arrows'],
    [8959,'Mathematical Operators'],
    [9215,'Miscellaneous Technical'],
    [9279,'Control Pictures'],
    [9311,'Optical Character Recognition'],
    [9471,'Enclosed Alphanumerics'],
    [9599,'Box Drawing'],
    [9631,'Block Elements'],
    [9727,'Geometric Shapes'],
    [9983,'Miscellaneous Symbols'],
    [10175,'Dingbats'],
    [10223,'Miscellaneous Mathematical Symbols-A'],
    [10239,'Supplemental Arrows-A'],
    [10495,'Braille Patterns'],
    [10623,'Supplemental Arrows-B'],
    [10751,'Miscellaneous Mathematical Symbols-B'],
    [11007,'Supplemental Mathematical Operators'],
    [11263,'Miscellaneous Symbols and Arrows'],
    [11903,'Undefined'],
    [12031,'CJK Radicals Supplement'],
    [12255,'Kangxi Radicals'],
    [12015,'Undefined'],
    [12287,'Ideographic Description Characters'],
    [12351,'CJK Symbols and Punctuation'],
    [12447,'Hiragana'],
    [12543,'Katakana'],
    [12591,'Bopomofo'],
    [12687,'Hangul Compatibility Jamo'],
    [12703,'Kanbun (Kunten)'],
    [12735,'Bopomofo Extended'],
    [12783,'Undefined'],
    [12799,'Katakana Phonetic Extensions'],
    [13055,'Enclosed CJK Letters and Months'],
    [13311,'CJK Compatibility'],
    [19903,'CJK Unified Ideographs Extension A'],
    [19967,'Yijing Hexagram Symbols'],
    [40879,'CJK Unified Ideographs'],
    [40959,'Undefined'],
    [42127,'Yi Syllables'],
    [42191,'Yi Radicals'],
    [44031,'Undefined'],
    [55215,'Hangul Syllables'],
    [55295,'Undefined'],
    [56319,'High Surrogate Area'],
    [57343,'Low Surrogate Area'],
    [63743,'Private Use Area'],
    [64255,'CJK Compatibility Ideographs'],
    [64335,'Alphabetic Presentation Forms'],
    [65023,'Arabic Presentation Forms-A'],
    [65039,'Variation Selectors'],
    [65055,'Undefined'],
    [65071,'Combining Half Marks'],
    [65103,'CJK Compatibility Forms'],
    [65135,'Small Form Variants'],
    [65279,'Arabic Presentation Forms-B'],
    [65519,'Halfwidth and Fullwidth Forms'],
    [65535,'Specials'],
    [65663,'Linear B Syllabary'],
    [65791,'Linear B Ideograms'],
    [65855,'Aegean Numbers'],
    [66303,'Undefined'],
    [66351,'Old Italic'],
    [66383,'Gothic'],
    [66463,'Ugaritic'],
    [66639,'Deseret'],
    [66687,'Shavian'],
    [66735,'Osmanya'],
    [67583,'Undefined'],
    [67647,'Cypriot Syllabary'],
    [118783,'Undefined'],
    [119039,'Byzantine Musical Symbols'],
    [119295,'Musical Symbols'],
    [119551,'Undefined'],
    [119647,'Tai Xuan Jing Symbols'],
    [119807,'Undefined'],
    [120831,'Mathematical Alphanumeric Symbols'],
    [131071,'Undefined'],
    [173791,'CJK Unified Ideographs Extension B'],
    [194559,'Undefined'],
    [195103,'CJK Compatibility Ideographs Supplement'],
    [917503,'Unused'],
    [917631,'Tags'],
    [917759,'Unused'],
    [917999,'Variation Selectors Supplement'],
    [983039,'Unused'],
    [1048573,'Supplementary Private Use Area-A'],
    [1048575,'Unused'],
    [1114109,'Supplementary Private Use Area-B']
]
var positive_words = [
    'absolutely',
    'accepted',
    'acclaimed',
    'accomplish',
    'accomplishment',
    'achievement',
    'action',
    'active',
    'admire',
    'adorable',
    'adventure',
    'affirmative',
    'affluent',
    'agree',
    'agreeable',
    'amazing',
    'angelic',
    'appealing',
    'approve',
    'aptitude',
    'attr',
    'active',
    'awesome',
    'beaming',
    'beautiful',
    'believe',
    'beneficial',
    'bliss',
    'bountiful',
    'bounty',
    'brave',
    'bravo',
    'brilliant',
    'bubbly',
    'calm',
    'celebrated',
    'certain',
    'champ',
    'champion',
    'charming',
    'cheery',
    'choice',
    'classic',
    'classical',
    'clean',
    'commend',
    'composed',
    'congratulation',
    'constant',
    'cool',
    'courageous',
    'creative',
    'cute',
    'dazzling',
    'delight',
    'delightful',
    'distinguished',
    'divine',
    'earnest',
    'easy',
    'ecstatic',
    'effective',
    'effervescent',
    'efficient',
    'effortless',
    'electrifying',
    'elegant',
    'enchanting',
    'encouraging',
    'endorsed',
    'energetic',
    'energized',
    'engaging',
    'enthusiastic',
    'essential',
    'esteemed',
    'ethical',
    'excellent',
    'exciting',
    'exquisite',
    'fabulous',
    'fair',
    'familiar',
    'famous',
    'fantastic',
    'favorable',
    'fetching',
    'fine',
    'fitting',
    'flourishing',
    'fortunate',
    'free',
    'fresh',
    'friendly',
    'fun',
    'funny',
    'generous',
    'genius',
    'genuine',
    'giving',
    'glamorous',
    'glowing',
    'good',
    'gorgeous',
    'graceful',
    'great',
    'green',
    'grin',
    'growing',
    'handsome',
    'happy',
    'harmonious',
    'healing',
    'healthy',
    'hearty',
    'heavenly',
    'honest',
    'honorable',
    'honored',
    'hug',
    'idea',
    'ideal',
    'imaginative',
    'imagine',
    'impressive',
    'independent',
    'innovate',
    'innovative',
    'instant',
    'instantaneous',
    'instinctive',
    'intellectual',
    'intelligent',
    'intuitive',
    'inventive',
    'jovial',
    'joy',
    'jubilant',
    'keen',
    'kind',
    'knowing',
    'knowledgeable',
    'laugh',
    'learned',
    'legendary',
    'light',
    'lively',
    'lovely',
    'lucid',
    'lucky',
    'luminous',
    'marvelous',
    'masterful',
    'meaningful',
    'merit',
    'meritorious',
    'miraculous',
    'motivating',
    'moving',
    'natural',
    'nice',
    'novel',
    'now',
    'nurturing',
    'nutritious',
    'okay',
    'one',
    'open',
    'optimistic',
    'paradise',
    'perfect',
    'phenomenal',
    'pleasant',
    'pleasurable',
    'plentiful',
    'poised',
    'polished',
    'popular',
    'positive',
    'powerful',
    'prepared',
    'pretty',
    'principled',
    'productive',
    'progress',
    'prominent',
    'protected',
    'proud',
    'quality',
    'quick',
    'quiet',
    'ready',
    'reassuring',
    'refined',
    'refreshing',
    'rejoice',
    'reliable',
    'remarkable',
    'resounding',
    'respected',
    'restored',
    'reward',
    'rewarding',
    'right',
    'robust',
    'safe',
    'satisfactory',
    'secure',
    'seemly',
    'simple',
    'skilled',
    'skillful',
    'smile',
    'soulful',
    'sparkling',
    'special',
    'spirited',
    'spiritual',
    'stirring',
    'stunning',
    'stupendous',
    'success',
    'successful',
    'sunny',
    'super',
    'superb',
    'supporting',
    'surprising',
    'terrific',
    'thorough',
    'thrilling',
    'thriving',
    'tops',
    'tranquil',
    'transformative',
    'transforming',
    'trusting',
    'truthful',
    'valued',
    'vibrant',
    'victorious',
    'victory',
    'vigorous',
    'virtuous',
    'vital',
    'vivacious',
    'wealthy',
    'welcome',
    'well',
    'whole',
    'wholesome',
    'willing',
    'wonderful',
    'wondrous',
    'worthy',
    'wow',
    'yes',
    'yummy',
    'zeal',
    'zealous',
]
var negative_words =[
    'abysmal',
    'adverse',
    'alarming',
    'angry',
    'annoy',
    'anxious',
    'apathy',
    'appalling',
    'atrocious',
    'awful',
    'bad',
    'banal',
    'barbed',
    'belligerent',
    'bemoan',
    'beneath',
    'boring',
    'broken',
    'callous',
    'cannot',
    'clumsy',
    'coarse',
    'cold',
    'collapse',
    'confused',
    'contradictory',
    'contrary',
    'corrosive',
    'corrupt',
    'crazy',
    'creepy',
    'criminal',
    'cruel',
    'cry',
    'cutting',
    'damage',
    'damaging',
    'dastardly',
    'dead',
    'decaying',
    'deformed',
    'deny',
    'deplorable',
    'depressed',
    'deprived',
    'despicable',
    'detrimental',
    'dirty',
    'disease',
    'disgusting',
    'disheveled',
    'dishonest',
    'dishonorable',
    'dismal',
    'distress',
    'dreadful',
    'dreary',
    'enraged',
    'eroding',
    'evil',
    'fail',
    'faulty',
    'fear',
    'feeble',
    'fight',
    'filthy',
    'foul',
    'frighten',
    'frightful',
    'gawky',
    'ghastly',
    'grave',
    'greed',
    'grim',
    'grimace',
    'gross',
    'grotesque',
    'gruesome',
    'guilty',
    'haggard',
    'hard',
    'harmful',
    'hate',
    'hideous',
    'homely',
    'horrendous',
    'horrible',
    'hostile',
    'hurt',
    'hurtful',
    'icky',
    'ignorant',
    'ignore',
    'ill',
    'immature',
    'imperfect',
    'impossible',
    'inane',
    'inelegant',
    'infernal',
    'injure',
    'injurious',
    'insane',
    'insidious',
    'insipid',
    'jealous',
    'junky',
    'lose',
    'lousy',
    'lumpy',
    'malicious',
    'mean',
    'menacing',
    'messy',
    'misshapen',
    'missing',
    'misunderstood',
    'moan',
    'moldy',
    'monstrous',
    'naive',
    'nasty',
    'naughty',
    'negate',
    'negative',
    'never',
    'no',
    'nobody',
    'nondescript',
    'nonsense',
    'not',
    'noxious',
    'objectionable',
    'odious',
    'offensive',
    'old',
    'oppressive',
    'pain',
    'perturb',
    'pessimistic',
    'petty',
    'plain',
    'poisonous',
    'poor',
    'prejudice',
    'questionable',
    'quirky',
    'quit',
    'reject',
    'renege',
    'repellant',
    'reptilian',
    'repugnant',
    'repulsive',
    'revenge',
    'revolting',
    'rocky',
    'rotten',
    'rude',
    'ruthless',
    'sad',
    'savage',
    'scare',
    'scary',
    'scream',
    'severe',
    'shocking',
    'shoddy',
    'sick',
    'sickening',
    'sinister',
    'slimy',
    'smelly',
    'sobbing',
    'sorry',
    'spiteful',
    'sticky',
    'stinky',
    'stormy',
    'stressful',
    'stuck',
    'stupid',
    'substandard',
    'suspect',
    'suspicious',
    'tense',
    'terrible',
    'terrifying',
    'threatening',
    'ugly',
    'undermine',
    'unfair',
    'unfavorable',
    'unhappy',
    'unhealthy',
    'unjust',
    'unlucky',
    'unpleasant',
    'unsatisfactory',
    'unsightly',
    'untoward',
    'unwanted',
    'unwelcome',
    'unwholesome',
    'unwieldy',
    'unwise',
    'upset',
    'vice',
    'vicious',
    'vile',
    'villainous',
    'vindictive',
    'wary',
    'weary',
    'wicked',
    'woeful',
    'worthless',
    'wound',
    'yell',
    'yucky',
    'zero',
]


function binary_search_words(word, list){
    var target_word = word.toLowerCase();
    var start = 0
    var end = list.length - 1
    while (start <= end){
        var m = Math.floor((start + end) / 2)
        var current = list[m].toLowerCase()
        if (current < target_word){
            start = m + 1
        }
        else if (current > target_word){
            end = m - 1
        }else{
            return m
        }
    }
    return null
}

///init() for the visual appearances.
function init(){
	$("#text-detail").hide();
    $("#information").hide();
    $("#input").show();

    document.getElementById("start").disabled = true;
    $("#start").click(function(){
        parse_tag = $("#parse_tags").prop("checked")
        $("#file-name").append(file.name)
        if (file.size > 100*1024*1024){
            ////// limit the size of file to 75mb
            file = file.slice(0, 75*1024*1024)
        }
        readFile(file,parse_tag);
    })
};

/// This is a simple function to get the word with minimum frequency,
/// used for drawHistogramNwords() and drawWordCloud();
function findMin(list){
    let minIndex = 0
    let minVal = list[minIndex][1]
    for(i in list){
        var currentVal = list[i][1]
        if (minVal > currentVal){
            minIndex = i
            minVal = list[i][1]
        }
    }
    return [minIndex, minVal]
};

///This calls readFile upon uploading the file.
document.getElementById('myFile').onchange = function(e) {

    file = e.srcElement.files[0]

    try{
        var extension = file.name.split(".").pop()
        if (extension == "html" || extension == "xml"){
            $("#parse_tags").prop('checked', true);
        }
    }catch(error){
        $("#parse_tags").prop('checked', false);
    }

    document.getElementById("start").disabled = false;
};

/// This is the main function that reads and populates the page.
function readFile(file, parse_tag) {
    var reader = new FileReader();
    reader.onload = readSuccess;  
    function readSuccess(evt) { 
        console.log("starting the procedure!")
        $("#text-detail").show()
        $("#information").show()
        $("#input").hide()
        var text = evt.target.result;

        // var extension = file.name.split(".").pop();
        if (parse_tag){
            text = text.replace(/<[^>]*>?/gm, '');
        }


        console.time("createSentenceList:")
        let sentence_list = createSentenceList(text)
        console.timeEnd("createSentenceList:")
        // console.time("createWordList:")
        // let word_list = createWordList(text)
        let word_list = []
        // console.timeEnd("createWordList:")
        ///// CREATE FILE INFO
        size = file.size / (1000.0); // in bytes, we will use 1k insteaed of 1024

        console.time("SENTENCE = getLines:")
        num_line = GetLines(sentence_list)
        console.timeEnd("SENTENCE = getLines:")
        console.time("WORD X = getWords:")
        num_word = GetWords(word_list)
        console.timeEnd("WORD X = getWords:")
        num_chars = text.length;
        $("#file-size").append(size + " KB")
        $("#file-lines").append(num_line + " lines")
        $("#file-words").append(num_word + " words")
        $("#file-characters").append(num_chars + " characters")

        let n = 20
        console.time("SENTENCE = drawSentenceLength:")
        drawSentenceLengthHistogram(sentence_list)
        console.timeEnd("SENTENCE = drawSentenceLength:")

        console.time("WORD = drawWordLength:")
        drawWordLengthHistogram(word_list)
        console.timeEnd("WORD = drawWordLength:")


        console.time("WORD X = drawHistogramNWords:")
        drawHistogramNwords(word_list,n)
        $('#histogram_N_word_button').click(function(){
            let val = $('#histogram_N_word').val()
            drawHistogramNwords(word_list, val)
        })
        console.timeEnd("WORD X = drawHistogramNWords:")

        drawHistogramPairwords(word_list, n);
        $('#histogram_pair_word_button').click(function(){
            let val = $('#histogram_pair_word').val()
            drawHistogramPairwords(word_list, val)
        })

        console.time("WORD X = drawWordCloud:")
        drawWordCloud(word_list, n)
        $("#word_cloud_button").click(function(){
            let val = $('#word_cloud_value').val()
            drawWordCloud(word_list, val)
        })
        console.timeEnd("WORD X = drawWordCloud:")



        console.time("SENTENCE = firstandLastN:")
        FirstandLastNSentences(sentence_list, 5)
        $('#first-and-last-button').click(function(){
            val = $('#first-and-last').val()
            FirstandLastNSentences(sentence_list, val)
        })
        console.timeEnd("SENTENCE = firstandLastN:")

        let x = 6
        let y = 9
        console.time("SENTENCE = sentenceBetween:")
        sentenceBetweenXY(sentence_list,x,y)
        $("#between-x-y-button").click(function(){
            val1 = $('#between-x').val()
            val2 = $('#between-y').val()
            sentenceBetweenXY(sentence_list,val1,val2)
        })
        console.timeEnd("SENTENCE = sentenceBetween:")

        let x1 = 6
        let y1 = 9

        console.time("TEXT = lineBetween:")
        GetLinesBetweenXY(sentence_list,x1,y1)
        $("#min-max-button").click(function(){
            val3 = $('#min-x').val()
            val4 = $('#max-y').val()

            GetLinesBetweenXY(sentence_list,val3,val4)
        })
        console.timeEnd("TEXT = lineBetween:")

        // let keyword = "Abilities"
        // console.time("SENTENCE = searchWord:")
        // searchWord(sentence_list, keyword)
        $("#search-text-button").click(function(){
            val5 = $('#search-text').val()
            searchWord(sentence_list, val5)
        })
        // console.timeEnd("SENTENCE = searchWord:")


        console.time("charDist:")
        charDistribution(text)
        console.timeEnd("charDist:")
        console.time("PieDist:")
        overallCharacterPieDistribution(text)
        console.timeEnd("PieDist:")
        impressionDistribution();
        // dictionary_valid_dist();

    };
    reader.readAsText(file);
};


///////////////////////////////////////////////////////////////////////////////////
////////////////////////// Below uses Text as-is
function cleanText(text){
}

function charDistribution(text){
    langDict = {}
    for (var i= 0; i < text.length; i++){
        tag = text.charCodeAt(i)
        for (var j = 0; j < unicode_table.length; j ++){
            if (tag <= unicode_table[j][0]){
                /// tag is within this range
                if (langDict[unicode_table[j][1]] != null){
                    /// dict already exists
                    langDict[unicode_table[j][1]] += 1
                }else{
                    /// its first time
                    langDict[unicode_table[j][1]] = 1
                }
                break
            }
        }
    }
    /////// DRAW
    /////// update piechart
    $("#pie_char_class").empty();
    $("#pie_char_class").append("<canvas id='pie_charclass'></canvas>")
    var labelList = []
    var dataList = []
    // for(i in histogramList){

    // for(var i = 0; i < histogramList.length; i++){
        // labelList.push(histogramList[i][0])
        // dataList.push(histogramList[i][1])
    // }

    for (key in langDict){
        labelList.push(key)
        dataList.push(langDict[key])
    }

    var ctx = document.getElementById('pie_charclass').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labelList,
            datasets: [{
                label: 'Keys',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 0, 0.2),
                borderColor: getColorScheme(labelList.length, 0, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
}


////// Checks from the positive / negative words to see what pool of words were more commonly used.
function impressionDistribution(){
    if (positive_count == 0 && negative_count == 0){
        positive_count = 1
        negative_count = 1
    }

    var sum = positive_count + negative_count
    var positive_ratio = positive_count / sum /// normalize to percentage
    var negative_ratio = negative_count / sum /// normalize to percentage

    $("#positive_negative").empty();
    $("#positive_negative").append("<canvas id='positive_negative_graph'></canvas>")
    var labelList = ["Positive Impression", "Negative Impression"]
    var dataList = [positive_ratio, negative_ratio]
    var ctx = document.getElementById('positive_negative_graph').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labelList,
            datasets: [{
                label: 'Keys',
                data: dataList,
                backgroundColor: ["rgba(0,0,255,0.2)","rgba(255,0,0,0.2)"],
                borderColor: ["rgba(0,0,255,1)","rgba(255,0,0,1)"],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
}

// function dictionary_valid_dist(){
//     if (valid_word_count == 0 && invalid_word_count == 0){
//         valid_word_count = 1
//         invalid_word_count = 1
//     }

//     var sum = valid_word_count + invalid_word_count
//     var positive_ratio = valid_word_count / sum /// normalize to percentage
//     var negative_ratio = invalid_word_count / sum /// normalize to percentage

//     $("#valid_invalid").empty();
//     $("#valid_invalid").append("<canvas id='valid_invalid_graph'></canvas>")
//     var labelList = ["Valid Words in Dictionary", "Invalid Words in Dictionary"]
//     var dataList = [positive_ratio, negative_ratio]
//     var ctx = document.getElementById('valid_invalid_graph').getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: labelList,
//             datasets: [{
//                 label: 'Keys',
//                 data: dataList,
//                 backgroundColor: ["rgba(0,0,255,0.2)","rgba(255,0,0,0.2)"],
//                 borderColor: ["rgba(0,0,255,1)","rgba(255,0,0,1)"],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             },
//             legend: {
//                 display: false
//             },
//         }
//     });
// }


function overallCharacterPieDistribution(text){
    charDict = {}
    for (var i= 0; i < text.length; i++){
        var char = text[i]
        if (charDict[char] != null){
            charDict[char] += 1
        }else{
            charDict[char] = 1
        }
    }

    /////// update piechart
    $("#pie_char_dist").empty();
    $("#pie_char_dist").append("<canvas id='pie_char'></canvas>")
    var labelList = []
    var dataList = []
    // for(i in histogramList){

    // for(var i = 0; i < histogramList.length; i++){
        // labelList.push(histogramList[i][0])
        // dataList.push(histogramList[i][1])
    // }

    for (key in charDict){
        labelList.push(key)
        dataList.push(charDict[key])
    }

    var ctx = document.getElementById('pie_char').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labelList,
            datasets: [{
                label: 'Characters',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 0, 0.2),
                borderColor: getColorScheme(labelList.length, 0, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });

}
/////////// Below function deprecated for improved performance
// function createWordList(text){
//     // var wordlist = text.replace(/\./g,' ');
//     var wordlist = text
//     wordlist = wordlist.trim().split(/\s+/);
//     return wordlist
// }

function createSentenceList(text){
    var sentenceList = text.trim().split(/\n/)
    for(let i = 0; i < sentenceList.length; i++){
        sentence = sentenceList[i]
        if (sentence == ""){
            sentenceList.splice(i, 1)
        }
    }
    return sentenceList
}



///////////////////////////////////////////////////////////////////////////////////
////////////////////////// Below uses sentencelist

var word_dict = {}
var pair_dict = {}

/// This function generates the minimum, maximum and average length of the sentences.
/// EDITED: Get lines also creates word dictionary as it processes through sentences, saving time
/// from having to read the data from the files again.
var positive_count = 0
var negative_count = 0
// var valid_word_count = 0
// var invalid_word_count = 0
function GetLines(sentenceList){
    var sumLen = 0;
    var totLen = 0
    var minLen = -1;
    var maxLen = -1;
    for(var i=0; i < sentenceList.length; i ++){
        var curSentence = sentenceList[i].split(" ")
        curSentence = curSentence.filter(function (text) { return (text != "")})
        var curLen = curSentence.length
        //////////////////////////////// since we splited the sentence, might as well get words here!
        for (var wordindex = 0; wordindex < curLen; wordindex++){
            var word = curSentence[wordindex]

            /// Takes in positive and negative words
            var is_positive = binary_search_words(word, positive_words)
            var is_negative = binary_search_words(word, negative_words)

            if (is_positive != null){
                ////// this word is used positively
                positive_count += 1
            }

            if (is_negative != null){
                ////// this word is used negatively
                negative_count += 1
            }


            // var is_valid = binary_search_words(word, all_words)
            // if (is_valid){
            //     valid_word_count += 1
            // }else{
            //     invalid_word_count += 1
            // }


            if (wordindex+1 < curLen){
                pair = curSentence[wordindex] + " " + curSentence[wordindex + 1]
                if (pair_dict[pair] != null){
                    pair_dict[pair] += 1
                }else{
                    pair_dict[pair] = 1
                }
            }
            //////// should i remove any special characters here?
            if (word_dict[word] != null){
                //// has occured before
                word_dict[word] += 1
            }else{
                //// not occured before
                word_dict[word] = 1
            }
        }
        ////////////////////////////////
        sumLen += curLen
        totLen += 1
        if (minLen < 0){
            minLen = curLen
        }else{
            if( curLen < minLen){
                minLen = curLen
            }
        }

        if (maxLen < 0){
            maxLen = curLen
        }else{
            if (curLen > maxLen){
                maxLen = curLen
            }
        }
    }
    $("#file-lines-min").append("minimum: ", minLen)
    $("#file-lines-max").append("maximum: ", maxLen)
    $("#file-lines-avg").append("average: ", sumLen / totLen)
    console.log("POSTIVE / NEGATIVE ANALYSIS ==========================")
    return sentenceList.length;   
};

/// This function generates the first and last N sentences in the file.
function FirstandLastNSentences(sentenceList, N){
    $("#firstN").empty()
    $("#lastN").empty()
    var firstSentences = sentenceList.slice(0,N)
    var maxLen = sentenceList.length
    var lastN = maxLen - N
    var lastSentences  = sentenceList.slice(lastN,maxLen)
    for( i in firstSentences){
        $("#firstN").append("<div class = 'sentences'> " + (parseInt(i)+1) + ". " + firstSentences[i] + " </div>")
        $("#lastN").append("<div class = 'sentences'> " + (parseInt(i)+1) + ". " + lastSentences[i] + " </div>")
    }
};

/// This function is used to present the lines between x (starting line)
/// and y (ending line).
function sentenceBetweenXY(sentenceList,x,y){
    $("#betweenXY").empty()
    var targetSentences = sentenceList.slice(x-1,y)
    for (i in targetSentences){
        $("#betweenXY").append("<div class = 'sentences'> "+ (parseInt(i) + 1) +". " + targetSentences[i] + " </div>")
    }
};

/// This function returns the lines that includes word parameter,
/// and converts the parameter text in red (can be case insensitive)
function searchWord(sentenceList, word){
    $("#search-result").empty()
    var result = []
    // for(i in sentenceList){
    for (var i =0; i < sentenceList.length; i ++){
        curSentence = sentenceList[i]
        if (curSentence.toLowerCase().includes(word.toLowerCase())){
            var regEx = new RegExp(word, "ig");
            var targetWord = curSentence.search(regEx);
            var replaceMask =  "<span style='color: #ff0000'>"+ curSentence.slice(targetWord, targetWord + (word.length)) +"</span>";
            curSentence = curSentence.replace(regEx,replaceMask )
            $("#search-result").append("<div class = 'sentences'> " + (parseInt(i)+1) + ". " + curSentence + " </div>")
        }
    }
};

/// This function draws the histogram of sentence length.
function drawSentenceLengthHistogram(sentenceList){
    //// Now we have List of sentences;
    //// For each sentence, we split and get the length.
    ////
    var count = 0
    var sentenceLengths = {}
    for (i in sentenceList){
        let before_filter = sentenceList[i].split(" ")
        let after_filter = before_filter.filter(function (text) { return (text != "")})
        
        let length = after_filter.length;

        if (sentenceLengths[length] != null){
            sentenceLengths[length] += 1
        }else{
            sentenceLengths[length] = 1
        }
    }
    $("#histogram_plots_sentence_length").append("<canvas id='histogramNSentence'></canvas>")
    var labelList = []
    var dataList = []
    for(i in sentenceLengths){
        labelList.push(i)
        dataList.push(sentenceLengths[i])
    }
    var ctx = document.getElementById('histogramNSentence').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelList,
            datasets: [{
                label: 'Length of Sentences',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 1, 0.2),
                borderColor: getColorScheme(labelList.length, 1, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
};


/// This function generates the list of sentences with length between x and y.
function GetLinesBetweenXY(sentenceList,x,y){
    $("#withLength").empty()
    result = sentenceList.filter(function (text) {
        var curSentence = text.split(" ")
        curSentence = curSentence.filter(function (text) { return (text != "")})
        // console.log(curSentence)
        return (curSentence.length >= x && curSentence.length <= y)
    })
    for (i in result){
        $("#withLength").append("<div class = 'sentences'> "+ (parseInt(i) + 1) + ". " + result[i] + " </div>")
    }
};

///////////////////////////////////////////////////////////////////////////////////
////////////////////////// Below uses wordlist

//////////////////TODO: compare amount of positive words vs negative words.
//////////////////TODO: ignore all the texts that is not in the "word" file.



/// This function generates the minimum, maximum and average length of the words.
function GetWords(wordlist){
    var sumLen = 0;
    var totLen = 0
    var minLen = -1;
    var maxLen = -1;
    // for (i in wordlist){


    ////////ATTEMPT TO USE WORD_DICT
    var minKey = -1
    var maxKey = -1
    var lengthCount = 0
    var wordCount = 0;
    for (key in word_dict){
        var keyLen = key.length ///// length of this word
        var keyCount = word_dict[key] //// number of appearance of this word
        lengthCount += keyLen * keyCount/// length of this key multiplied by total
        wordCount += keyCount//// wordcount counts number of words
        
        if (minKey < 0){
            minKey = keyLen
        }else{
            if (keyLen < minKey){
                minKey = keyLen
            }
        }

        if (maxKey < 0){
            // console.log("KEY: " + key)
            maxKey = keyLen
        }else{
            if (keyLen > maxKey){
                // console.log("KEY: " + key)
                maxKey = keyLen
            }
        }
    }

    var avgKey = lengthCount / wordCount
    $("#file-words-min").append("minimum: ", minKey)
    $("#file-words-max").append("maximum: ", maxKey)
    $("#file-words-avg").append("average: ", avgKey)
    ///////////////////////////

    // for (var i = 0; i < wordlist.length; i++){
    //     var curLen = wordlist[i].length
    //     sumLen += curLen
    //     totLen += 1
    //     if (minLen < 0){
    //         minLen = curLen
    //     }else{
    //         if( curLen < minLen){
    //             minLen = curLen
    //         }
    //     }

    //     if (maxLen < 0){
    //         // console.log("LIST: " + key)
    //         maxLen = curLen
    //     }else{
    //         if (curLen > maxLen){
    //             // console.log("LIST: " + wordlist[i])
    //             maxLen = curLen
    //         }
    //     }
    // }
    // var avgLen = sumLen / totLen
    // console.log(minLen + " vs " + minKey)
    // console.log(maxLen + " vs " + maxKey)
    // console.log(avgLen + " vs " + avgKey)
    // $("#file-words-min").append("minimum: ", minLen)
    // $("#file-words-max").append("maximum: ", maxLen)
    // $("#file-words-avg").append("average: ", avgLen)

    return wordCount;
};

/// This function draws the histogram of word length.
/// TODO: double check on which approach to word Lengths is correct (see cleaning methods)
function drawWordLengthHistogram(wordlist){
    // wordLengths = {}
    // // for (i in wordlist){
    // for (var i = 0; i < wordlist.length; i ++){
    //     let length = wordlist[i].length
    //     if (wordLengths[length] != null){
    //         wordLengths[length] += 1
    //     }else{
    //         wordLengths[length] = 1
    //     }
    // }

    var wordLengths = {}
    for (key in word_dict){
        let length = key.length //// get current key
        // console.log("key: ", key, " at", )
        if (wordLengths[length] != null){
            wordLengths[length] += word_dict[key]
        }else{
            wordLengths[length] = word_dict[key]
        }
    }

    // var failcount = 0
    // for (k in wordLengths){
    //     var a = wordLengths[k]
    //     var b = wordLengths2[k]
    //     if (a != b){
    //         console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    //         console.log(k, a, b)
    //         failcount += 1
    //     }
    // }





    $("#histogram_plots_word_length").append("<canvas id='histogramNword'></canvas>")
    var labelList = []
    var dataList = []
    for(i in wordLengths){
        labelList.push(i)
        dataList.push(wordLengths[i])
    }
    var ctx = document.getElementById('histogramNword').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelList,
            datasets: [{
                label: 'Length of Words',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 2, 0.2),
                borderColor: getColorScheme(labelList.length, 2, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
};

/// This function draws the histogram of top N most frequent words.
function drawHistogramNwords(wordlist, n){
    // var dict = {}
    // // for (word in wordlist){
    // console.time("drawHistogramNwords-firstLoop:")
    // for (var word =0; word < wordlist.length; word ++){
    //     if ([wordlist[word]] in dict){
    //         dict[wordlist[word]] += 1
    //     }else{
    //         dict[wordlist[word]] = 1
    //     }
    // }
    // console.log("====== resulting dict length")
    // var counter = 0
    // for (key in dict){
    //     counter += 1
    // }
    // console.log(counter)
    // console.log(dict)
    // console.timeEnd("drawHistogramNwords-firstLoop:")

    // var histogramList = []
    // console.time("drawHistogramNwords-Loop2:")
    // for (key in dict){
    // // for (var key=0; key < dict.length; key++){
    //     if (histogramList.length < n){
    //         histogramList.push([key,dict[key]])
    //     }else{
    //         let optNow = [key,dict[key]]
    //         let [minIndex, minValue] = findMin(histogramList)
    //         if (dict[key] >= minValue){
    //             histogramList[minIndex] = optNow
    //         }
    //     }
    // }

    var histogramList = []
    for (key in word_dict){
    // for (var key=0; key < dict.length; key++){
        if (histogramList.length < n){
            histogramList.push([key,word_dict[key]])
        }else{
            let optNow = [key,word_dict[key]]
            let [minIndex, minValue] = findMin(histogramList)
            if (word_dict[key] >= minValue){
                histogramList[minIndex] = optNow
            }
        }
    }
    histogramList.sort(function(a,b){
            val1 = a[1]
            val2 = b[1]

            return val2 - val1
    });
    /////// update histogram
    $("#histogram_N_word_graph").empty();
    $("#histogram_N_word_graph").append("<canvas id='histogram'></canvas>")
    var labelList = []
    var dataList = []
    // for(i in histogramList){

    for(var i = 0; i < histogramList.length; i++){
        labelList.push(histogramList[i][0])
        dataList.push(histogramList[i][1])
    }
    var ctx = document.getElementById('histogram').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelList,
            datasets: [{
                label: '# of Words',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 0, 0.2),
                borderColor: getColorScheme(labelList.length, 0, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
};

function drawHistogramPairwords(wordlist, n){

    var histogramList = []
    for (key in pair_dict){
    // for (var key=0; key < dict.length; key++){
        if (histogramList.length < n){
            histogramList.push([key,pair_dict[key]])
        }else{
            let optNow = [key,pair_dict[key]]
            let [minIndex, minValue] = findMin(histogramList)
            if (word_dict[key] >= minValue){
                histogramList[minIndex] = optNow
            }
        }
    }
    histogramList.sort(function(a,b){
            val1 = a[1]
            val2 = b[1]
            return val2 - val1
    });
    /////// update histogram
    $("#histogram_pair_word_graph").empty();
    $("#histogram_pair_word_graph").append("<canvas id='histogram-pair'></canvas>")
    var labelList = []
    var dataList = []
    // for(i in histogramList){

    for(var i = 0; i < histogramList.length; i++){
        labelList.push(histogramList[i][0])
        dataList.push(histogramList[i][1])
    }
    var ctx = document.getElementById('histogram-pair').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelList,
            datasets: [{
                label: '# of Pairs',
                data: dataList,
                backgroundColor: getColorScheme(labelList.length, 0, 0.2),
                borderColor: getColorScheme(labelList.length, 0, 1),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            legend: {
                display: false
            },
        }
    });
};

/// This function returns the top N most frequent words in word-cloud.
function drawWordCloud(wordlist, n){
    $("#word_cloud").empty();
    // var dict = {}
    // // for (word in wordlist){
    // for (var word = 0; word < wordlist.length; word ++){
    //     if ([wordlist[word]] in dict){
    //         dict[wordlist[word]] += 1
    //     }else{
    //         dict[wordlist[word]] = 1
    //     }
    // }
    // var histogramList = []
    // for (key in dict){
    // // for (var key = 0; key < dict.length; key ++){
    //     if (histogramList.length < n){
    //         histogramList.push([key,dict[key]])
    //     }else{
    //         let optNow = [key,dict[key]]
    //         let [minIndex, minValue] = findMin(histogramList)
    //         if (dict[key] >= minValue){
    //             histogramList[minIndex] = optNow
    //         }
    //     }
    // }

    var histogramList = []
    for (key in word_dict){
    // for (var key = 0; key < dict.length; key ++){
        if (histogramList.length < n){
            histogramList.push([key,word_dict[key]])
        }else{
            let optNow = [key,word_dict[key]]
            let [minIndex, minValue] = findMin(histogramList)
            if (word_dict[key] >= minValue){
                histogramList[minIndex] = optNow
            }
        }
    }

    histogramList.sort(function(a,b){
            val1 = a[1]
            val2 = b[1]

            return val2 - val1
    });
    var data = [];
    // for(i in histogramList){
    for(var i =0; i < histogramList.length; i++ ){
        data.push({"x": histogramList[i][0], "value": histogramList[i][1]})
    }

    var chart = anychart.tagCloud(data);
    chart.title("The " + n + " most frequent words" )
    chart.angles([0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 360]);
    chart.colorRange(true);
    chart.colorRange().length('50%');
    chart.container("word_cloud");
    chart.draw();
};

/// getColorScheme and getColor is a simple additional function to color the graphs on draw
function getColorScheme(n, x, o){
    let interval = (400/n)
    let colorList = []
    for (var i = 0; i < n; i++){
        colorList.push(getColor((x%3), o))
    }
    return colorList
};

function getColor(x, i){
    let colorList = [[255,0,0],[0,255,0],[0,0,255]]
    return "rgba(" + colorList[x][0] + "," + colorList[x][1] + "," + colorList[x][2] + "," + i + ")"
};