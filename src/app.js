'use strict';

const e = React.createElement;
const domContainer = document.querySelector('#root_container');
const avg_temps = { "0": { "high": 38, "count": 20, "avg": 29, "low": 19 }, "1": { "high": 36, "count": 20, "avg": 27, "low": 19 }, "2": { "high": 35, "count": 20, "avg": 27, "low": 18 }, "3": { "high": 37, "count": 20, "avg": 29, "low": 21 }, "4": { "high": 35, "count": 20, "avg": 27, "low": 19 }, "5": { "high": 34, "count": 20, "avg": 26, "low": 18 }, "6": { "high": 33, "count": 20, "avg": 25, "low": 17 }, "7": { "high": 35, "count": 20, "avg": 27, "low": 19 }, "8": { "high": 37, "count": 20, "avg": 28, "low": 18 }, "9": { "high": 36, "count": 20, "avg": 27, "low": 19 }, "10": { "high": 39, "count": 20, "avg": 31, "low": 23 }, "11": { "high": 40, "count": 20, "avg": 32, "low": 24 }, "12": { "high": 37, "count": 20, "avg": 28, "low": 20 }, "13": { "high": 34, "count": 20, "avg": 24, "low": 15 }, "14": { "high": 31, "count": 20, "avg": 24, "low": 16 }, "15": { "high": 31, "count": 20, "avg": 23, "low": 15 }, "16": { "high": 33, "count": 20, "avg": 24, "low": 14 }, "17": { "high": 32, "count": 20, "avg": 24, "low": 16 }, "18": { "high": 33, "count": 20, "avg": 25, "low": 17 }, "19": { "high": 30, "count": 20, "avg": 22, "low": 13 }, "20": { "high": 29, "count": 20, "avg": 19, "low": 10 }, "21": { "high": 31, "count": 20, "avg": 21, "low": 12 }, "22": { "high": 33, "count": 20, "avg": 24, "low": 16 }, "23": { "high": 32, "count": 20, "avg": 23, "low": 15 }, "24": { "high": 32, "count": 20, "avg": 23, "low": 15 }, "25": { "high": 33, "count": 20, "avg": 24, "low": 15 }, "26": { "high": 32, "count": 20, "avg": 24, "low": 16 }, "27": { "high": 35, "count": 20, "avg": 24, "low": 13 }, "28": { "high": 35, "count": 20, "avg": 26, "low": 17 }, "29": { "high": 34, "count": 20, "avg": 24, "low": 15 }, "30": { "high": 34, "count": 20, "avg": 24, "low": 14 }, "31": { "high": 36, "count": 20, "avg": 27, "low": 18 }, "32": { "high": 33, "count": 20, "avg": 24, "low": 16 }, "33": { "high": 35, "count": 20, "avg": 25, "low": 15 }, "34": { "high": 35, "count": 20, "avg": 25, "low": 16 }, "35": { "high": 33, "count": 20, "avg": 23, "low": 13 }, "36": { "high": 34, "count": 20, "avg": 24, "low": 14 }, "37": { "high": 37, "count": 20, "avg": 28, "low": 20 }, "38": { "high": 37, "count": 20, "avg": 27, "low": 16 }, "39": { "high": 34, "count": 20, "avg": 25, "low": 16 }, "40": { "high": 35, "count": 20, "avg": 25, "low": 15 }, "41": { "high": 32, "count": 20, "avg": 23, "low": 15 }, "42": { "high": 35, "count": 20, "avg": 25, "low": 15 }, "43": { "high": 33, "count": 20, "avg": 24, "low": 15 }, "44": { "high": 37, "count": 20, "avg": 28, "low": 19 }, "45": { "high": 36, "count": 20, "avg": 27, "low": 18 }, "46": { "high": 34, "count": 20, "avg": 26, "low": 17 }, "47": { "high": 36, "count": 20, "avg": 26, "low": 15 }, "48": { "high": 37, "count": 20, "avg": 28, "low": 18 }, "49": { "high": 41, "count": 20, "avg": 29, "low": 18 }, "50": { "high": 40, "count": 20, "avg": 31, "low": 22 }, "51": { "high": 42, "count": 20, "avg": 32, "low": 23 }, "52": { "high": 39, "count": 20, "avg": 31, "low": 23 }, "53": { "high": 40, "count": 20, "avg": 30, "low": 20 }, "54": { "high": 39, "count": 20, "avg": 30, "low": 20 }, "55": { "high": 41, "count": 20, "avg": 31, "low": 21 }, "56": { "high": 38, "count": 20, "avg": 29, "low": 20 }, "57": { "high": 39, "count": 20, "avg": 29, "low": 20 }, "58": { "high": 39, "count": 20, "avg": 28, "low": 16 }, "59": { "high": 42, "count": 20, "avg": 32, "low": 21 }, "60": { "high": 39, "count": 20, "avg": 31, "low": 23 }, "61": { "high": 35, "count": 20, "avg": 26, "low": 17 }, "62": { "high": 39, "count": 20, "avg": 28, "low": 17 }, "63": { "high": 40, "count": 20, "avg": 29, "low": 18 }, "64": { "high": 42, "count": 20, "avg": 31, "low": 21 }, "65": { "high": 45, "count": 20, "avg": 34, "low": 22 }, "66": { "high": 48, "count": 20, "avg": 36, "low": 25 }, "67": { "high": 48, "count": 20, "avg": 37, "low": 26 }, "68": { "high": 48, "count": 20, "avg": 37, "low": 27 }, "69": { "high": 48, "count": 20, "avg": 37, "low": 26 }, "70": { "high": 47, "count": 20, "avg": 36, "low": 26 }, "71": { "high": 47, "count": 20, "avg": 36, "low": 26 }, "72": { "high": 49, "count": 20, "avg": 38, "low": 28 }, "73": { "high": 53, "count": 20, "avg": 41, "low": 29 }, "74": { "high": 51, "count": 20, "avg": 40, "low": 29 }, "75": { "high": 50, "count": 20, "avg": 38, "low": 27 }, "76": { "high": 50, "count": 20, "avg": 39, "low": 28 }, "77": { "high": 50, "count": 20, "avg": 39, "low": 28 }, "78": { "high": 49, "count": 20, "avg": 39, "low": 29 }, "79": { "high": 51, "count": 20, "avg": 40, "low": 29 }, "80": { "high": 49, "count": 20, "avg": 39, "low": 29 }, "81": { "high": 48, "count": 20, "avg": 37, "low": 26 }, "82": { "high": 53, "count": 20, "avg": 40, "low": 27 }, "83": { "high": 50, "count": 20, "avg": 40, "low": 30 }, "84": { "high": 52, "count": 20, "avg": 40, "low": 29 }, "85": { "high": 53, "count": 20, "avg": 41, "low": 29 }, "86": { "high": 55, "count": 20, "avg": 43, "low": 32 }, "87": { "high": 54, "count": 20, "avg": 43, "low": 32 }, "88": { "high": 54, "count": 20, "avg": 42, "low": 30 }, "89": { "high": 54, "count": 20, "avg": 43, "low": 31 }, "90": { "high": 59, "count": 20, "avg": 46, "low": 34 }, "91": { "high": 58, "count": 20, "avg": 46, "low": 34 }, "92": { "high": 55, "count": 20, "avg": 45, "low": 35 }, "93": { "high": 56, "count": 20, "avg": 44, "low": 31 }, "94": { "high": 54, "count": 20, "avg": 43, "low": 32 }, "95": { "high": 54, "count": 20, "avg": 42, "low": 30 }, "96": { "high": 56, "count": 20, "avg": 45, "low": 34 }, "97": { "high": 57, "count": 20, "avg": 46, "low": 34 }, "98": { "high": 57, "count": 20, "avg": 46, "low": 34 }, "99": { "high": 60, "count": 20, "avg": 47, "low": 34 }, "100": { "high": 59, "count": 20, "avg": 47, "low": 35 }, "101": { "high": 61, "count": 20, "avg": 49, "low": 37 }, "102": { "high": 60, "count": 20, "avg": 48, "low": 36 }, "103": { "high": 61, "count": 20, "avg": 48, "low": 36 }, "104": { "high": 65, "count": 20, "avg": 51, "low": 37 }, "105": { "high": 67, "count": 20, "avg": 54, "low": 40 }, "106": { "high": 65, "count": 20, "avg": 52, "low": 39 }, "107": { "high": 67, "count": 20, "avg": 53, "low": 40 }, "108": { "high": 68, "count": 20, "avg": 54, "low": 40 }, "109": { "high": 66, "count": 20, "avg": 53, "low": 41 }, "110": { "high": 65, "count": 20, "avg": 52, "low": 39 }, "111": { "high": 63, "count": 20, "avg": 51, "low": 39 }, "112": { "high": 64, "count": 20, "avg": 51, "low": 39 }, "113": { "high": 64, "count": 20, "avg": 51, "low": 38 }, "114": { "high": 64, "count": 20, "avg": 52, "low": 40 }, "115": { "high": 67, "count": 20, "avg": 53, "low": 39 }, "116": { "high": 66, "count": 20, "avg": 53, "low": 41 }, "117": { "high": 63, "count": 20, "avg": 50, "low": 37 }, "118": { "high": 64, "count": 20, "avg": 51, "low": 38 }, "119": { "high": 66, "count": 20, "avg": 54, "low": 42 }, "120": { "high": 69, "count": 20, "avg": 57, "low": 44 }, "121": { "high": 67, "count": 20, "avg": 57, "low": 46 }, "122": { "high": 68, "count": 20, "avg": 56, "low": 44 }, "123": { "high": 69, "count": 20, "avg": 57, "low": 45 }, "124": { "high": 70, "count": 20, "avg": 57, "low": 44 }, "125": { "high": 70, "count": 20, "avg": 58, "low": 45 }, "126": { "high": 73, "count": 20, "avg": 58, "low": 44 }, "127": { "high": 74, "count": 20, "avg": 60, "low": 45 }, "128": { "high": 74, "count": 20, "avg": 61, "low": 48 }, "129": { "high": 73, "count": 20, "avg": 61, "low": 48 }, "130": { "high": 70, "count": 20, "avg": 58, "low": 46 }, "131": { "high": 65, "count": 20, "avg": 55, "low": 44 }, "132": { "high": 70, "count": 20, "avg": 57, "low": 45 }, "133": { "high": 73, "count": 20, "avg": 59, "low": 46 }, "134": { "high": 70, "count": 20, "avg": 59, "low": 47 }, "135": { "high": 69, "count": 20, "avg": 57, "low": 45 }, "136": { "high": 70, "count": 20, "avg": 59, "low": 47 }, "137": { "high": 71, "count": 20, "avg": 59, "low": 47 }, "138": { "high": 73, "count": 20, "avg": 60, "low": 47 }, "139": { "high": 72, "count": 20, "avg": 59, "low": 46 }, "140": { "high": 73, "count": 20, "avg": 60, "low": 47 }, "141": { "high": 74, "count": 20, "avg": 62, "low": 49 }, "142": { "high": 75, "count": 20, "avg": 61, "low": 48 }, "143": { "high": 74, "count": 20, "avg": 62, "low": 49 }, "144": { "high": 77, "count": 20, "avg": 63, "low": 49 }, "145": { "high": 76, "count": 20, "avg": 64, "low": 52 }, "146": { "high": 77, "count": 20, "avg": 65, "low": 53 }, "147": { "high": 79, "count": 20, "avg": 66, "low": 53 }, "148": { "high": 80, "count": 20, "avg": 67, "low": 54 }, "149": { "high": 81, "count": 20, "avg": 67, "low": 54 }, "150": { "high": 80, "count": 20, "avg": 67, "low": 54 }, "151": { "high": 79, "count": 20, "avg": 67, "low": 55 }, "152": { "high": 77, "count": 20, "avg": 65, "low": 53 }, "153": { "high": 75, "count": 20, "avg": 64, "low": 52 }, "154": { "high": 77, "count": 20, "avg": 64, "low": 52 }, "155": { "high": 77, "count": 20, "avg": 65, "low": 52 }, "156": { "high": 76, "count": 20, "avg": 64, "low": 52 }, "157": { "high": 81, "count": 20, "avg": 67, "low": 53 }, "158": { "high": 82, "count": 20, "avg": 69, "low": 56 }, "159": { "high": 82, "count": 20, "avg": 70, "low": 57 }, "160": { "high": 82, "count": 20, "avg": 69, "low": 57 }, "161": { "high": 83, "count": 20, "avg": 71, "low": 58 }, "162": { "high": 82, "count": 20, "avg": 71, "low": 60 }, "163": { "high": 81, "count": 20, "avg": 70, "low": 59 }, "164": { "high": 82, "count": 20, "avg": 69, "low": 56 }, "165": { "high": 82, "count": 20, "avg": 70, "low": 57 }, "166": { "high": 82, "count": 20, "avg": 70, "low": 59 }, "167": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "168": { "high": 84, "count": 20, "avg": 72, "low": 61 }, "169": { "high": 82, "count": 20, "avg": 70, "low": 58 }, "170": { "high": 81, "count": 20, "avg": 69, "low": 56 }, "171": { "high": 83, "count": 20, "avg": 70, "low": 57 }, "172": { "high": 84, "count": 20, "avg": 72, "low": 60 }, "173": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "174": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "175": { "high": 85, "count": 20, "avg": 72, "low": 59 }, "176": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "177": { "high": 84, "count": 20, "avg": 72, "low": 60 }, "178": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "179": { "high": 84, "count": 20, "avg": 72, "low": 60 }, "180": { "high": 84, "count": 20, "avg": 72, "low": 59 }, "181": { "high": 84, "count": 20, "avg": 71, "low": 59 }, "182": { "high": 84, "count": 20, "avg": 71, "low": 58 }, "183": { "high": 85, "count": 20, "avg": 71, "low": 58 }, "184": { "high": 86, "count": 20, "avg": 73, "low": 61 }, "185": { "high": 86, "count": 20, "avg": 73, "low": 60 }, "186": { "high": 86, "count": 20, "avg": 73, "low": 60 }, "187": { "high": 86, "count": 20, "avg": 73, "low": 60 }, "188": { "high": 86, "count": 20, "avg": 74, "low": 61 }, "189": { "high": 85, "count": 20, "avg": 73, "low": 62 }, "190": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "191": { "high": 85, "count": 20, "avg": 73, "low": 60 }, "192": { "high": 84, "count": 20, "avg": 72, "low": 59 }, "193": { "high": 85, "count": 20, "avg": 72, "low": 59 }, "194": { "high": 86, "count": 20, "avg": 73, "low": 60 }, "195": { "high": 87, "count": 20, "avg": 74, "low": 61 }, "196": { "high": 86, "count": 20, "avg": 73, "low": 61 }, "197": { "high": 87, "count": 20, "avg": 75, "low": 63 }, "198": { "high": 88, "count": 20, "avg": 75, "low": 63 }, "199": { "high": 87, "count": 20, "avg": 75, "low": 64 }, "200": { "high": 86, "count": 20, "avg": 74, "low": 61 }, "201": { "high": 86, "count": 20, "avg": 74, "low": 63 }, "202": { "high": 85, "count": 20, "avg": 74, "low": 62 }, "203": { "high": 86, "count": 20, "avg": 73, "low": 61 }, "204": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "205": { "high": 84, "count": 20, "avg": 72, "low": 60 }, "206": { "high": 84, "count": 20, "avg": 72, "low": 60 }, "207": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "208": { "high": 84, "count": 20, "avg": 72, "low": 61 }, "209": { "high": 85, "count": 20, "avg": 73, "low": 60 }, "210": { "high": 85, "count": 20, "avg": 72, "low": 58 }, "211": { "high": 86, "count": 20, "avg": 73, "low": 61 }, "212": { "high": 87, "count": 20, "avg": 75, "low": 63 }, "213": { "high": 87, "count": 20, "avg": 74, "low": 62 }, "214": { "high": 87, "count": 20, "avg": 75, "low": 62 }, "215": { "high": 87, "count": 20, "avg": 74, "low": 61 }, "216": { "high": 85, "count": 20, "avg": 72, "low": 60 }, "217": { "high": 84, "count": 20, "avg": 73, "low": 61 }, "218": { "high": 85, "count": 20, "avg": 72, "low": 59 }, "219": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "220": { "high": 85, "count": 20, "avg": 73, "low": 60 }, "221": { "high": 85, "count": 20, "avg": 73, "low": 61 }, "222": { "high": 83, "count": 20, "avg": 71, "low": 60 }, "223": { "high": 83, "count": 20, "avg": 72, "low": 61 }, "224": { "high": 84, "count": 20, "avg": 71, "low": 59 }, "225": { "high": 82, "count": 20, "avg": 70, "low": 59 }, "226": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "227": { "high": 84, "count": 20, "avg": 72, "low": 59 }, "228": { "high": 83, "count": 20, "avg": 72, "low": 60 }, "229": { "high": 82, "count": 20, "avg": 71, "low": 60 }, "230": { "high": 82, "count": 20, "avg": 71, "low": 60 }, "231": { "high": 82, "count": 20, "avg": 70, "low": 59 }, "232": { "high": 82, "count": 20, "avg": 70, "low": 58 }, "233": { "high": 81, "count": 20, "avg": 70, "low": 59 }, "234": { "high": 81, "count": 20, "avg": 69, "low": 57 }, "235": { "high": 82, "count": 20, "avg": 69, "low": 57 }, "236": { "high": 83, "count": 20, "avg": 71, "low": 58 }, "237": { "high": 83, "count": 20, "avg": 71, "low": 60 }, "238": { "high": 82, "count": 20, "avg": 71, "low": 59 }, "239": { "high": 82, "count": 20, "avg": 70, "low": 59 }, "240": { "high": 82, "count": 20, "avg": 71, "low": 60 }, "241": { "high": 82, "count": 20, "avg": 71, "low": 59 }, "242": { "high": 81, "count": 20, "avg": 70, "low": 58 }, "243": { "high": 82, "count": 20, "avg": 69, "low": 57 }, "244": { "high": 82, "count": 20, "avg": 70, "low": 58 }, "245": { "high": 83, "count": 20, "avg": 71, "low": 59 }, "246": { "high": 83, "count": 20, "avg": 70, "low": 57 }, "247": { "high": 81, "count": 20, "avg": 68, "low": 55 }, "248": { "high": 80, "count": 20, "avg": 67, "low": 54 }, "249": { "high": 82, "count": 20, "avg": 70, "low": 57 }, "250": { "high": 80, "count": 20, "avg": 69, "low": 58 }, "251": { "high": 79, "count": 20, "avg": 67, "low": 56 }, "252": { "high": 78, "count": 20, "avg": 66, "low": 55 }, "253": { "high": 78, "count": 20, "avg": 66, "low": 53 }, "254": { "high": 77, "count": 20, "avg": 65, "low": 52 }, "255": { "high": 78, "count": 20, "avg": 66, "low": 53 }, "256": { "high": 78, "count": 20, "avg": 65, "low": 52 }, "257": { "high": 75, "count": 20, "avg": 63, "low": 52 }, "258": { "high": 74, "count": 20, "avg": 62, "low": 50 }, "259": { "high": 76, "count": 20, "avg": 62, "low": 49 }, "260": { "high": 78, "count": 20, "avg": 65, "low": 52 }, "261": { "high": 76, "count": 20, "avg": 65, "low": 53 }, "262": { "high": 77, "count": 20, "avg": 65, "low": 52 }, "263": { "high": 80, "count": 20, "avg": 67, "low": 54 }, "264": { "high": 76, "count": 20, "avg": 64, "low": 53 }, "265": { "high": 75, "count": 20, "avg": 63, "low": 50 }, "266": { "high": 76, "count": 20, "avg": 63, "low": 50 }, "267": { "high": 75, "count": 20, "avg": 62, "low": 50 }, "268": { "high": 73, "count": 20, "avg": 61, "low": 50 }, "269": { "high": 72, "count": 20, "avg": 60, "low": 49 }, "270": { "high": 71, "count": 20, "avg": 60, "low": 48 }, "271": { "high": 69, "count": 20, "avg": 57, "low": 45 }, "272": { "high": 69, "count": 20, "avg": 58, "low": 46 }, "273": { "high": 70, "count": 20, "avg": 58, "low": 46 }, "274": { "high": 71, "count": 20, "avg": 59, "low": 46 }, "275": { "high": 72, "count": 20, "avg": 61, "low": 50 }, "276": { "high": 70, "count": 20, "avg": 59, "low": 49 }, "277": { "high": 68, "count": 20, "avg": 57, "low": 45 }, "278": { "high": 69, "count": 20, "avg": 57, "low": 45 }, "279": { "high": 69, "count": 20, "avg": 57, "low": 45 }, "280": { "high": 71, "count": 20, "avg": 57, "low": 43 }, "281": { "high": 70, "count": 20, "avg": 58, "low": 45 }, "282": { "high": 69, "count": 20, "avg": 56, "low": 44 }, "283": { "high": 68, "count": 20, "avg": 55, "low": 43 }, "284": { "high": 65, "count": 20, "avg": 53, "low": 41 }, "285": { "high": 67, "count": 20, "avg": 55, "low": 43 }, "286": { "high": 64, "count": 20, "avg": 53, "low": 42 }, "287": { "high": 64, "count": 20, "avg": 53, "low": 42 }, "288": { "high": 62, "count": 20, "avg": 52, "low": 41 }, "289": { "high": 59, "count": 20, "avg": 50, "low": 40 }, "290": { "high": 62, "count": 20, "avg": 51, "low": 40 }, "291": { "high": 63, "count": 20, "avg": 52, "low": 41 }, "292": { "high": 64, "count": 20, "avg": 52, "low": 40 }, "293": { "high": 64, "count": 20, "avg": 53, "low": 43 }, "294": { "high": 62, "count": 20, "avg": 51, "low": 40 }, "295": { "high": 59, "count": 20, "avg": 49, "low": 38 }, "296": { "high": 61, "count": 20, "avg": 51, "low": 41 }, "297": { "high": 60, "count": 20, "avg": 50, "low": 41 }, "298": { "high": 58, "count": 20, "avg": 49, "low": 39 }, "299": { "high": 58, "count": 20, "avg": 49, "low": 40 }, "300": { "high": 57, "count": 20, "avg": 47, "low": 38 }, "301": { "high": 55, "count": 20, "avg": 45, "low": 35 }, "302": { "high": 59, "count": 20, "avg": 47, "low": 36 }, "303": { "high": 60, "count": 20, "avg": 50, "low": 40 }, "304": { "high": 56, "count": 20, "avg": 46, "low": 37 }, "305": { "high": 57, "count": 20, "avg": 46, "low": 34 }, "306": { "high": 57, "count": 20, "avg": 46, "low": 36 }, "307": { "high": 58, "count": 20, "avg": 47, "low": 37 }, "308": { "high": 57, "count": 20, "avg": 47, "low": 37 }, "309": { "high": 56, "count": 20, "avg": 45, "low": 34 }, "310": { "high": 56, "count": 20, "avg": 45, "low": 35 }, "311": { "high": 56, "count": 20, "avg": 45, "low": 35 }, "312": { "high": 55, "count": 20, "avg": 44, "low": 34 }, "313": { "high": 52, "count": 20, "avg": 43, "low": 34 }, "314": { "high": 53, "count": 20, "avg": 43, "low": 33 }, "315": { "high": 52, "count": 20, "avg": 42, "low": 32 }, "316": { "high": 51, "count": 20, "avg": 40, "low": 30 }, "317": { "high": 50, "count": 20, "avg": 41, "low": 32 }, "318": { "high": 51, "count": 20, "avg": 42, "low": 33 }, "319": { "high": 49, "count": 20, "avg": 40, "low": 31 }, "320": { "high": 47, "count": 20, "avg": 39, "low": 31 }, "321": { "high": 49, "count": 20, "avg": 40, "low": 32 }, "322": { "high": 50, "count": 20, "avg": 41, "low": 32 }, "323": { "high": 49, "count": 20, "avg": 40, "low": 31 }, "324": { "high": 48, "count": 20, "avg": 40, "low": 32 }, "325": { "high": 46, "count": 20, "avg": 37, "low": 28 }, "326": { "high": 46, "count": 20, "avg": 36, "low": 26 }, "327": { "high": 47, "count": 20, "avg": 37, "low": 26 }, "328": { "high": 47, "count": 20, "avg": 38, "low": 30 }, "329": { "high": 45, "count": 20, "avg": 38, "low": 30 }, "330": { "high": 46, "count": 20, "avg": 38, "low": 30 }, "331": { "high": 45, "count": 20, "avg": 36, "low": 28 }, "332": { "high": 47, "count": 20, "avg": 38, "low": 29 }, "333": { "high": 48, "count": 20, "avg": 39, "low": 30 }, "334": { "high": 44, "count": 20, "avg": 35, "low": 27 }, "335": { "high": 43, "count": 20, "avg": 35, "low": 27 }, "336": { "high": 41, "count": 20, "avg": 34, "low": 26 }, "337": { "high": 41, "count": 20, "avg": 34, "low": 26 }, "338": { "high": 42, "count": 20, "avg": 34, "low": 26 }, "339": { "high": 38, "count": 20, "avg": 31, "low": 23 }, "340": { "high": 36, "count": 20, "avg": 28, "low": 20 }, "341": { "high": 37, "count": 20, "avg": 29, "low": 21 }, "342": { "high": 38, "count": 20, "avg": 31, "low": 24 }, "343": { "high": 38, "count": 20, "avg": 30, "low": 22 }, "344": { "high": 39, "count": 20, "avg": 31, "low": 22 }, "345": { "high": 38, "count": 20, "avg": 29, "low": 20 }, "346": { "high": 39, "count": 20, "avg": 31, "low": 23 }, "347": { "high": 40, "count": 20, "avg": 32, "low": 23 }, "348": { "high": 39, "count": 20, "avg": 32, "low": 25 }, "349": { "high": 38, "count": 20, "avg": 29, "low": 21 }, "350": { "high": 37, "count": 20, "avg": 30, "low": 22 }, "351": { "high": 37, "count": 20, "avg": 29, "low": 21 }, "352": { "high": 37, "count": 20, "avg": 29, "low": 22 }, "353": { "high": 37, "count": 20, "avg": 27, "low": 18 }, "354": { "high": 37, "count": 20, "avg": 29, "low": 22 }, "355": { "high": 41, "count": 20, "avg": 33, "low": 25 }, "356": { "high": 41, "count": 20, "avg": 32, "low": 24 }, "357": { "high": 36, "count": 20, "avg": 29, "low": 21 }, "358": { "high": 36, "count": 20, "avg": 29, "low": 23 }, "359": { "high": 36, "count": 20, "avg": 28, "low": 21 }, "360": { "high": 37, "count": 20, "avg": 29, "low": 21 }, "361": { "high": 39, "count": 20, "avg": 31, "low": 22 }, "362": { "high": 38, "count": 20, "avg": 30, "low": 21 }, "363": { "high": 37, "count": 20, "avg": 29, "low": 22 }, "364": { "high": 37, "count": 20, "avg": 30, "low": 24 }, "365": { "high": 41, "count": 5, "avg": 32, "low": 23 } };





class Day extends React.Component {
    constructor(props) {
        super(props);
        this.getDate = this.getDate.bind(this)
    }

    getDate(str) {
        let date = str.split("T")
        let parsedate = date[0].split("-")
        return parsedate[1] + "/" + parsedate[2] + "/" + parsedate[0]
    }

    render() {
        if (this.props.data.length === 1) {
            return (
                <div>
                    <p>{this.props.data[0].name}</p>
                    <p>{this.getDate(this.props.data[0].startTime)}</p>
                    <img src={this.props.data[0].icon}></img>
                    <p>Current: {this.props.unitconvert(this.props.data[0].temperature)}{this.props.unit}</p>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>{this.props.data[0].name}</p>
                    <p>{this.getDate(this.props.data[0].startTime)}</p>
                    <img src={this.props.data[0].icon}></img>
                    <p id="hightext">High: {this.props.unitconvert(this.props.data[0].temperature)}{this.props.unit}</p>
                    <p id="lowtext">Low: {this.props.unitconvert(this.props.data[1].temperature)}{this.props.unit}</p>
                </div>
            );

        }
        return (<div></div>);

    }

}

class Forcast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
        this.displayData = this.displayData.bind(this);
    }
    componentDidMount() {
        fetch("https://api.weather.gov/gridpoints/DTX/42,30/forecast?units=us", {
            method: 'get',
            headers: new Headers({
                'User-Agent': '(joke-weather.com, mcrwong@umich.edu)',
                'Accept': 'application/geo+json'
            })
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    results: data.properties.periods
                })
            })
            .catch(error => console.log(error));
    }

    displayData(results) {
        if (results.length > 0) {
            if (results[0].isDaytime) {
                return (
                    <div className="row forcast" id="forcast">
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(0, 2)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(2, 4)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(4, 6)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(6, 8)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(8, 10)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(10, 12)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(12)} /></div>
                    </div>
                );
            }
            else {
                return (
                    <div className="row forcast" id="forcast">
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={[results[0]]} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(1, 3)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(3, 5)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(5, 7)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(7, 9)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(9, 11)} /></div>
                        <div className="col day"><Day unitconvert={this.props.unitconvert} unit={this.props.unit} data={results.slice(11, 13)} /></div>
                    </div>
                );
            }
        }
        else {
            return (
                <div>Loading</div>
            );
        }
    }

    render() {
        return (
            <div className="container">{this.displayData(this.state.results)}</div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input_temp: 60,
            input_unit: 'F',
            today: Date.prototype.getDOY(),
            info: avg_temps,
            results: [],
            extension: []
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleUnit = this.handleUnit.bind(this);
        this.unitconvert = this.unitconvert.bind(this);
        this.createPeriods = this.createPeriods.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(index, event){
        event.preventDefault();
        const period = this.state.results[index]
        this.setState({ extension: period })
    }

    handleInput = (event) => {
        if (event.target.value <= 500 && event.target.value >= -100) {
            this.setState({ input_temp: event.target.value }, this.createPeriods);
        }
        else if (event.target.value > 500) {
            this.setState({ input_temp: 500 }, this.createPeriods);
        }
        else if (event.target.value < -100) {
            this.setState({ input_temp: -100 }, this.createPeriods);
        }
    }

    handleUnit = (event) => {
        this.setState({ input_unit: event.target.value }, this.createPeriods);
    }


    unitconvert(number) {
        if (this.state.input_unit != 'F') {
            if (this.state.input_unit === 'C') {
                return Math.round((number - 32) * (5.0 / 9.0))
            }
            else {
                return Math.round((number - 32) * (5.0 / 9.0) + 273.15)
            }
        }
        else {
            return number
        }
    }

    createPeriods() {
        console.log("changing periods")
        var daysAfterToday = [];
        for (var key in this.state.info) {
            if (parseInt(key) > this.state.today)
                daysAfterToday.push(this.state.info[key].avg);
        }
        // create periods
        var todayNum = this.state.today;
        var newResults = [];
        var i = 0;
        while (i < daysAfterToday.length) {
            var period = []
            if (this.unitconvert(daysAfterToday[i]) > this.state.input_temp) {
                while (this.unitconvert(daysAfterToday[i]) > this.state.input_temp) {
                    var day = todayNum + i;
                    period.push({ day: (todayNum + i), temperature: daysAfterToday[i] });
                    i++;
                }
                newResults.push(period);
            }
            else
                i++;
        }

        this.setState({
            results: newResults,
            extension: []
        });
    }

    render() {
        return (
            <div>
                <div id="title-container" className="center">
                    <h2 className="aligncenter" id="title">When is it Warm <img src="titleicon.png" id="titlepic"></img></h2>
                    <p id="annarbor">...in Ann Arbor?</p>
                </div>
                <div><Forcast unitconvert={this.unitconvert} unit={this.state.input_unit} /></div>
                <div className="center">
                    <p className="aligncenter">I think <input autoFocus type="number" id="temperature" value={this.state.input_temp} onChange={this.handleInput} />
                        <select value={this.state.input_unit} onChange={this.handleUnit}>
                            <option value="F">F</option>
                            <option value="C">C</option>
                            <option value="K">K</option>
                        </select> is warm.</p>
                </div>
                <div><Periods extension={this.state.extension} unitconvert={this.unitconvert} unit={this.state.input_unit} input_temp={this.state.input_temp} createPeriods={this.createPeriods} today={this.state.today} info={this.state.info} results={this.state.results} handleClick={this.handleClick}/></div>
            </div>
        );
    }
}


// credit for date fns as a base: https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366/26426761#26426761, Joe Orost
Date.prototype.isLeapYear = function () {
    var today = new Date();
    var year = today.getFullYear();
    if ((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};
// Get Day of Year
Date.prototype.getDOY = function () {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var today = new Date();
    var mn = today.getMonth();
    var dn = today.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if (mn > 1 && today.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

class ExtendedPeriod extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col day scroll-block">
                {this.props.day}
                <br></br>
                {this.props.temperature}
            </div>
        )
    }
}

class Period extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return(
            <div className="col day" onClick={this.props.handleClick.bind(this, this.props.index)}>
                <p>{this.props.doyToDate(this.props.data[0]["day"])}</p>
                <p>Average temp: <b>{this.props.unitconvert(this.props.sum)}{this.props.unit}</b></p>
                <p>Period Length: {this.props.length}</p>
            </div> 
        )
    }
}


class Periods extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.createPeriods()
    }

    doyToDate(doy) {
        var d = new Date();
        d.setMonth(0);
        d.setDate(1);
        d.setDate(doy);
        var months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
        return (months[d.getMonth()].concat(d.getDate().toString(), " ", d.getFullYear().toString()));
    }

    displayData(iresults, index) {
        var sum = 0;
        if (iresults.length > 0)
        {
            for (var i = 0; i < iresults.length; i++)
            {
                sum += iresults[i].temperature;
            }
            sum = Math.round(sum / iresults.length);

            return(
                <Period key={index} length={iresults.length} sum={sum} data={iresults} index={index} unitconvert={this.props.unitconvert} unit={this.props.unit} handleClick={this.props.handleClick} doyToDate={this.doyToDate}/>
            );
        }

        return(<p>No information found</p>)
    }

    displayDay(day) {
        return(
            <ExtendedPeriod key={day["day"]} day={this.doyToDate(day["day"])} temperature={this.props.unitconvert(day.temperature)}/>
        )
    }

    render() {
        console.log("rerendering periods")
        if(this.props.results.length <= 0){
            return(
                <p>No results found. Try a different temperature.</p>
            )
        }
        else{
        const periods = this.props.results.map((period, index) =>
        this.displayData(period, index)
        )
        if(Array.isArray(this.props.extension) && this.props.extension.length > 0){
            console.log(this.props.extension.length)
            const extperiod = this.props.extension.map((day) => 
            this.displayDay(day)
            )
            return (
                <div>
                    <div className="container">
                        <div className  ="row forcast">
                            {periods}    
                        </div>
                    </div>
                    <div className="container">
                        <div className  ="row scroll">
                            {extperiod}    
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="container">
                    <div className  ="row forcast">
                        {periods}    
                    </div>
                </div>
            )
        }
    }
}
}

ReactDOM.render(e(App), domContainer);

