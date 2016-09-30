/*  商品类别 type:1：生活类 ，2：工具类
*   积分:point
*   新品:new
*   爆款:hot
*   上架日期:date
*   销量：sold
* */
var goodsAll=[
    {"id":"001","name":"飞利浦电脑型电饭煲","point":3490,"l_src":"1","m_src":"1_2","s_src":"1_3","new":false,"hot":false,"type":"1","date":"2016-12-01","sold":12,"volume":3},
    {"id":"002","name":"Huawei/华为G7 Plus 移动/联通4G版","point":13880,"l_src":"2","m_src":"2_2","s_src":"2_3","new":true,"hot":false,"type":":1","date":"2016-05-01","sold":2,"volume":2},
    {"id":"003","name":"Huawei/华为G9 青春版 双卡双待 16GB","point":14650,"l_src":"3","m_src":"3_2","s_src":"3_3","new":false,"hot":false,"type":"1","date":"2016-05-01","sold":32,"volume":2},
    { "id": "004", "name": "小米 红米 Note3 手机 3GB＋32G高配版", "point": 11200, "l_src": "4", "m_src": "4_2", "s_src": "4_3", "new": false, "hot": true, "type": "1", "date": "2016-08-10", "sold": 6, "volume": 1 },
    {"id":"005","name":"小米小钢炮蓝牙音响","point":1990,"l_src":"5","m_src":"5_2","s_src":"5_3","new":false,"hot":false,"type":"2","date":"2016-09-01","sold":16,"volume":2},
    { "id": "006", "name": "飞利浦车载充电式吸尘器2", "point": 1990, "l_src": "6", "m_src": "6_2", "s_src": "6_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "007", "name": "SHELL壳牌劲霸R5E润滑油（精装)", "point": 5000, "l_src": "7", "m_src": "7_2", "s_src": "7_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 66, "volume": 2 },
    { "id": "008", "name": "SHELL壳牌劲霸R5E润滑油（桶装)", "point": 10000, "l_src": "8", "m_src": "8_2", "s_src": "8_3", "new": true, "hot": false, "type": "2", "date": "2016-09-01", "sold": 56, "volume": 2 },
    { "id": "009", "name": "SHELL壳牌劲霸R5NG润滑油（精装)", "point": 5000, "l_src": "9", "m_src": "9_2", "s_src": "9_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 56, "volume": 2 },
    { "id": "010", "name": "SHELL壳牌劲霸R5NG润滑油（桶装）", "point": 10000, "l_src": "10", "m_src": "10_2", "s_src": "10_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "011", "name": "SHELL壳牌劲霸R4X润滑油（精装）", "point": 5000, "l_src": "11", "m_src": "11_2", "s_src": "11_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 76, "volume": 2 },
    { "id": "012", "name": "SHELL壳牌劲霸R4X润滑油（桶装）", "point": 10000, "l_src": "12", "m_src": "12_2", "s_src": "12_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 36, "volume": 2 },
    { "id": "013", "name": "SHELL壳牌劲霸R4M润滑油（桶装）", "point": 10000, "l_src": "13", "m_src": "13_2", "s_src": "13_3", "new": true, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    {"id":"014","name":"馨亭生活方面浴巾三件套","point":1190,"l_src":"14","m_src":"14_2","s_src":"14_3","new":false,"hot":false,"type":"1","date":"2016-09-01","sold":16,"volume":2},
    { "id": "015", "name": "惠谊床单四件套", "point": 2330, "l_src": "15", "m_src": "15_2", "s_src": "15_3", "new": false, "hot": false, "type": "1", "date": "2016-08-01", "sold": 20, "volume": 2 },
    { "id": "016", "name": "馨亭高密法兰绒毯", "point": 1470, "l_src": "16", "m_src": "16_2", "s_src": "16_3", "new": false, "hot": true, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    {"id":"017","name":"安利丝婷™清屑调理洗发露+护发素280ml*2","point":1200,"l_src":"17","m_src":"17_2","s_src":"17_3","new":false,"hot":false,"type":"1","date":"2016-09-01","sold":76,"volume":2},
    { "id": "018", "name": "安利丝婷™润泽保湿洗发露+护发素280ml*2", "point": 1200, "l_src": "18", "m_src": "18_2", "s_src": "18_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "019", "name": "安利丝婷™夜间修护精华乳100g", "point": 1350, "l_src": "19", "m_src": "19_2", "s_src": "19_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 76, "volume": 2 },
    { "id": "020", "name": "安利雅蜜®润肤沐浴露750ml", "point": 900, "l_src": "20", "m_src": "20_2", "s_src": "20_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "021", "name": "安利雅蜜®润肤露400ml", "point": 86, "l_src": "21", "m_src": "21_2", "s_src": "21_3", "new": true, "hot": false, "type": "1", "date": "2116-09-01", "sold": 16, "volume": 2 },
    { "id": "022", "name": "荣事达车载净化器", "point": 1250, "l_src": "22", "m_src": "22_2", "s_src": "22_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "023", "name": "百得 球形无绳吸尘器", "point": 3500, "l_src": "23", "m_src": "23_2", "s_src": "23_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 76, "volume": 2 },
    { "id": "024", "name": "安利必速®抗菌洗手液250ml", "point": 420, "l_src": "24", "m_src": "24_2", "s_src": "24_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "025", "name": "安利丽齿健®多效白茶牙膏200g", "point": 400, "l_src": "25", "m_src": "25_2", "s_src": "25_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "026", "name": "安利丽齿健®浓缩漱口水50ml", "point": 1080, "l_src": "26", "m_src": "26_2", "s_src": "26_3", "new": false, "hot": true, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "027", "name": "惠谊床单四件套", "point": 2330, "l_src": "27", "m_src": "27_2", "s_src": "27_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 76, "volume": 2 },
    { "id": "028", "name": "荣事达车载净化器", "point": 1390, "l_src": "28", "m_src": "28_2", "s_src": "28_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "029", "name": "安利雅蜜®润肤蜜露香皂250g", "point": 640, "l_src": "29", "m_src": "29_2", "s_src": "29_3", "new": false, "hot": true, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "030", "name": "haier空气净化器", "point": 1670, "l_src": "30", "m_src": "30_2", "s_src": "30_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 76, "volume": 2 },
    { "id": "031", "name": "史丹利36件棘轮螺丝批组套", "point": 1590, "l_src": "31", "m_src": "31_2", "s_src": "31_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "032", "name": "百得500W手动工具+冲击钻套装", "point": 4060, "l_src": "32", "m_src": "32_2", "s_src": "32_3", "new": false, "hot": true, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "033", "name": "史丹利8合1多功能安全锤", "point": 940, "l_src": "33", "m_src": "33_2", "s_src": "33_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 56, "volume": 2 },
    { "id": "034", "name": "史丹利塑柄大型不锈钢多用钳", "point": 835, "l_src": "34", "m_src": "34_2", "s_src": "34_3", "new": true, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "035", "name": "百得500W手动工具+冲击钻套装", "point": 4060, "l_src": "35", "m_src": "35_2", "s_src": "35_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "036", "name": "史丹利30件家用工具套装", "point": 2380, "l_src": "36", "m_src": "36_2", "s_src": "36_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "037", "name": "飞利浦应急启动电源", "point": 5780, "l_src": "37", "m_src": "37_2", "s_src": "37_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 86, "volume": 2 },
    { "id": "038", "name": "飞利浦车载充电器+汽车支架+车载蓝牙耳机", "point": 2990, "l_src": "38", "m_src": "38_2", "s_src": "38_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "039", "name": "飞利浦车载充电器+汽车支架+车载蓝牙耳机", "point": 2990, "l_src": "39", "m_src": "39_2", "s_src": "39_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "040", "name": "飞利浦车载空净", "point": 6800, "l_src": "40", "m_src": "40_2", "s_src": "40_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 26, "volume": 2 },
    { "id": "041", "name": "百得12V 车载吸尘器", "point": 2450, "l_src": "41", "m_src": "41_2", "s_src": "41_3", "new": false, "hot": false, "type": "2", "date": "2116-09-01", "sold": 16, "volume": 2 },
    { "id": "042", "name": "飞利浦车载充电器+汽车支架+车载蓝牙耳机", "point": 2990, "l_src": "42", "m_src": "42_2", "s_src": "42_3", "new": false, "hot": false, "type": "2", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "043", "name": "飞利浦剃须刀", "point": 5400, "l_src": "43", "m_src": "43_2", "s_src": "43_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "044", "name": "飞利浦豆浆机", "point": 4660, "l_src": "44", "m_src": "44_2", "s_src": "44_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 46, "volume": 2 },
    { "id": "045", "name": "飞利浦 汽锅醇汤煲", "point": 6850, "l_src": "45", "m_src": "45_2", "s_src": "45_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "046", "name": "飞利浦电熨斗", "point": 2350, "l_src": "46", "m_src": "46_2", "s_src": "46_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "047", "name": "飞利浦不锈钢电水壶", "point": 1280, "l_src": "47", "m_src": "47_2", "s_src": "47_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 86, "volume": 2 },
    { "id": "048", "name": "魅族 MX6 全网通 手机 月光银", "point": 19500, "l_src": "48", "m_src": "48_2", "s_src": "48_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "049", "name": "魅族 魅蓝 note3", "point": 12250, "l_src": "49", "m_src": "49_2", "s_src": "49_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "050", "name": "飞利浦电压力煲( 5L)", "point": 3780, "l_src": "50", "m_src": "50_2", "s_src": "50_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 56, "volume": 2 },
    { "id": "051", "name": "史丹利15件家用工具套装", "point": 1380, "l_src": "51", "m_src": "51_2", "s_src": "51_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 },
    { "id": "052", "name": "飞利浦剃须刀", "point": 2520, "l_src": "52", "m_src": "52_2", "s_src": "52_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 2, "volume": 2 },
    { "id": "053", "name": "馨亭竹炭抑菌被", "point": 4580, "l_src": "53", "m_src": "53_2", "s_src": "53_3", "new": false, "hot": false, "type": "1", "date": "2016-09-01", "sold": 16, "volume": 2 }
   
];
