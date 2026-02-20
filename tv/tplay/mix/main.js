
        // Channel data with language information
        const channels = [
            { 
                name: "Star Sports 1", 
                sources: [
                    { name: "English 1", url: "go:S1" },
                    { name: "English 2", url: "go:S4" },
                    { name: "Hindi 1", url: "go:S5" },
                    { name: "Hindi 2", url: "go:S3" },
                    { name: "Tamil 1", url: "go:S6" },
                    { name: "Tamil 2", url: "go:S7" },
                    { name: "Khel", url: "go:S2" }
                ], 
                img: "https://i.postimg.cc/0Nf1hhL0/sst1.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English","Tamil"]
            },
            { 
                name: "Star Sports 2", 
                sources: [
                    { name: "English", url: "go:S13" },
                    { name: "Hindi 1", url: "go:S11" },
                    { name: "Hindi 2", url: "go:S14" },
                    { name: "Telugu", url: "go:S12" }
                ], 
                img: "https://i.postimg.cc/wxtTsjKK/sst2.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English","Kannada"]
            },
            { 
                name: "Star Sports Select", 
                sources: [
                    { name: "SSS 1 English", url: "go:S32" },
                    { name: "SSS 1 English", url: "go:S31" },
                    { name: "SSS 2 English", url: "go:S41" }
                ], 
                img: "https://i.postimg.cc/PfBCcpm1/Star-Sports-Select.jpg", 
                category: "Sports",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Sony Sports 1", 
                sources: [
                    { name: "Server 1", url: "go:S52" },
                    { name: "Server 2", url: "go:S51" },
                    { name: "Server 3", url: "go:S53" }
                ], 
                img: "https://i.postimg.cc/j2TN0dcf/ten1.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sony Sports 2", 
                sources: [
                    { name: "Server 1", url: "go:S62" },
                    { name: "Server 2", url: "go:S61" },
                    { name: "Server 3", url: "go:S63" }
                ], 
                img: "https://i.postimg.cc/L8W14Vv2/ten2.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sony Sports 3", 
                sources: [
                    { name: "Server 1", url: "go:S71" },
                    { name: "Server 2", url: "go:S72" }
                ], 
                img: "https://i.postimg.cc/HxdsTcGT/ten3.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sony Sports 4", 
                sources: [
                    { name: "Server 1", url: "go:S81" }
                ], 
                img: "https://i.postimg.cc/MGPqJsYm/ten4.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sony Sports 5", 
                sources: [
                    { name: "Server 1", url: "go:S92" },
                    { name: "Server 2", url: "go:S91" },
                    { name: "Server 3", url: "go:S93" }
                ], 
                img: "https://i.postimg.cc/gj3Cj435/ten5.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Willow", 
                sources: [
                    { name: "Server 1", url: "go:S341" },
                    { name: "Server 2", url: "go:S342" },
                    { name: "Server 3", url: "go:S343" }
                ], 
                img: "https://i.postimg.cc/L4b8S5Df/willow.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Astro Cricket", 
                sources: [
                    { name: "Server 1", url: "go:S521" },
                    { name: "Server 2", url: "go:S522" }
                ], 
                img: "https://i.postimg.cc/Nj8CM5M9/astro-c.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Astro Football", 
                sources: [
                    { name: "Server 1", url: "go:S511" }
                ], 
                img: "https://i.postimg.cc/dtkzqsrX/astro-f.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Sky Sport 1", 
                sources: [
                    { name: "Server 1", url: "go:S371" }
                ], 
                img: "https://i.postimg.cc/D0B4z0tk/sky-sport1.jpg", 
                category: "Sports",
                description: "New Zealand",
                languages: ["English"]
            },
            { 
                name: "Sky Sport 2", 
                sources: [
                    { name: "Server 1", url: "go:S381" }
                ], 
                img: "https://i.postimg.cc/sDHZdBYW/sky-sport2.jpg", 
                category: "Sports",
                description: "New Zealand",
                languages: ["English"]
            },
            { 
                name: "Sky Sport 3", 
                sources: [
                    { name: "Server 1", url: "go:S391" }
                ], 
                img: "https://i.postimg.cc/W1QFzQf5/sky-sport3.jpg", 
                category: "Sports",
                description: "New Zealand",
                languages: ["English"]
            },
            { 
                name: "Sky Sport 4", 
                sources: [
                    { name: "Server 1", url: "go:S401" }
                ], 
                img: "https://i.postimg.cc/Kz5R94cH/sky-sport4.jpg", 
                category: "Sports",
                description: "New Zealand",
                languages: ["English"]
            },
            { 
                name: "Sky Sports Cricket", 
                sources: [
                    { name: "Server 1", url: "go:S411" }
                ], 
                img: "https://i.postimg.cc/P5YhzxMD/sky-cric.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Sports Football", 
                sources: [
                    { name: "Server 1", url: "go:S441" }
                ], 
                img: "https://i.postimg.cc/cJdqRcCv/sky-foot.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Premier League", 
                sources: [
                    { name: "Server 1", url: "go:S181" }
                ], 
                img: "https://i.postimg.cc/nLLx8kJY/sky-prele.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Sports Tennis", 
                sources: [
                    { name: "Server 1", url: "go:S461" }
                ], 
                img: "https://i.postimg.cc/XYJ14Dr5/sky-tennis.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Sports Golf", 
                sources: [
                    { name: "Server 1", url: "go:S431" }
                ], 
                img: "https://i.postimg.cc/wTbccxBm/sky-golf.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Sports Mix", 
                sources: [
                    { name: "Server 1", url: "go:S451" }
                ], 
                img: "https://i.postimg.cc/6q8T9Kxz/sky-mix.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "Sky Main Event", 
                sources: [
                    { name: "Server 1", url: "go:S421" }
                ], 
                img: "https://i.postimg.cc/gJQLLjs9/sky-main-event.jpg", 
                category: "Sports",
                description: "Ireland",
                languages: ["English"]
            },
            { 
                name: "TNT Sports 1", 
                sources: [
                    { name: "Server 1", url: "go:S272" },
                    { name: "Server 2", url: "go:S271" }
                ], 
                img: "https://i.postimg.cc/fTDBcHMC/tnt1.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "TNT Sports 2", 
                sources: [
                    { name: "Server 1", url: "go:S282" },
                    { name: "Server 2", url: "go:S281" }
                ], 
                img: "https://i.postimg.cc/nzqG7m5N/tnt2.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "TNT Sports 3", 
                sources: [
                    { name: "Server 1", url: "go:S292" },
                    { name: "Server 2", url: "go:S291" }
                ], 
                img: "https://i.postimg.cc/Mp47FtJh/tnt3.jpg", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "T Sports", 
                sources: [
                    { name: "Server 1", url: "go:S151" },
                    { name: "Server 2", url: "go:S152" },
                    { name: "Server 3", url: "go:S153" }
                ], 
                img: "https://i.postimg.cc/DZbVq4jM/t-sports.jpg", 
                category: "Sports",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "DD Sports", 
                sources: [
                    { name: "Server 1", url: "go:S101" },
                    { name: "Server 2", url: "go:S102" }
                ], 
                img: "https://i.postimg.cc/WzT8m77f/dd-sports.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Ten Cricket", 
                sources: [
                    { name: "Server 1", url: "go:S122" },
                    { name: "Server 2", url: "go:S123" },
                ], 
                img: "https://i.postimg.cc/hP38hnNY/ten-cricket.jpg", 
                category: "Sports",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Ten Sports", 
                sources: [
                    { name: "Server 1", url: "go:S351" },
                    { name: "Server 2", url: "go:S352" }
                ], 
                img: "https://i.postimg.cc/Xvdsjr9v/ten-sports.jpg", 
                category: "Sports",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "Euro Sport", 
                sources: [
                    { name: "Server 1", url: "go:S141" },
                    { name: "Euro Sport 1", url: "go:S143" },
                    { name: "Euro Sport 2", url: "go:S144" }
                ], 
                img: "https://frontend-assets.clipsource.com/612dda2e469cb/dis-6130a93f81342/2021/09/23/614c5c44221ab_thumbnail.png", 
                category: "Sports",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Kantipur Max", 
                sources: [
                    { name: "Server 1", url: "go:S331" },
                    { name: "Server 2", url: "go:S332" }
                ], 
                img: "https://i.postimg.cc/wB1Hmg1s/knt-max.jpg", 
                category: "Sports",
                description: "Nepal",
                languages: ["English","Nepali"]
            },
            { 
                name: "Bein Sports Extra", 
                sources: [
                    { name: "Server 1", url: "go:S221" },
                    { name: "Server 2", url: "go:S222" }
                ], 
                img: "https://i.postimg.cc/02kQc74D/bein-extra.jpg", 
                category: "Sports",
                description: "Europe",
                languages: ["English"]
            },
            { 
                name: "Bein Sports", 
                sources: [
                    { name: "Server 1", url: "go:S471" }
                ], 
                img: "https://i.postimg.cc/pTQWBdYF/bein.jpg", 
                category: "Sports",
                description: "USA",
                languages: ["English"]
            },
            { 
                name: "Bein Sports 1", 
                sources: [
                    { name: "Server 1", url: "go:S481" }
                ], 
                img: "https://i.postimg.cc/dQBQkL01/bein1.jpg", 
                category: "Sports",
                description: "Qatar",
                languages: ["English"]
            },
            { 
                name: "Bein Sports 2", 
                sources: [
                    { name: "Server 1", url: "go:S491" }
                ], 
                img: "https://i.postimg.cc/RZjv5tgh/bein2.jpg", 
                category: "Sports",
                description: "Qatar",
                languages: ["English"]
            },
            { 
                name: "Bein Sports 3", 
                sources: [
                    { name: "Server 1", url: "go:S501" }
                ], 
                img: "https://i.postimg.cc/bJRPtBpR/bein3.jpg", 
                category: "Sports",
                description: "Qatar",
                languages: ["English"]
            },
            { 
                name: "Star Plus", 
                sources: [
                    { name: "Server 1", url: "go:S1001" },
                    { name: "Server 2", url: "go:S1002" },
                    { name: "Server 3", url: "go:S1003" }
                ], 
                img: "https://i.postimg.cc/htNZQ0x0/Star-Plus.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Bharat", 
                sources: [
                    { name: "Server 1", url: "go:S1011" },
                    { name: "Server 2", url: "go:S1012" }
                ], 
                img: "https://i.postimg.cc/W176T68d/Star-Bharat.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee TV", 
                sources: [
                    { name: "Server 1", url: "go:S1022" },
                    { name: "Server 2", url: "go:S1021" }
                ], 
                img: "https://yt3.googleusercontent.com/yawyROd5jQqRiXHdmttib1ZhZTZ_flA4ACjPpNNdrVFC_J8NWmrlI-Se97YMaCJSvId4s7eV=s900-c-k-c0x00ffffff-no-rj", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Anmol", 
                sources: [
                    { name: "Server 1", url: "go:S1031" }
                ], 
                img: "https://i.postimg.cc/ZnYw5P56/zee-anmol.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Colors", 
                sources: [
                    { name: "Server 1", url: "go:S1043" },
                    { name: "Server 2", url: "go:S1041" },
                    { name: "Server 3", url: "go:S1042" }
                ], 
                img: "https://i.postimg.cc/5tddWJPd/colors.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "MTV", 
                sources: [
                    { name: "Server 1", url: "go:S1392" },
                    { name: "Server 2", url: "go:S1391" }
                ], 
                img: "https://i.postimg.cc/3xmpdF5H/mtv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "& TV", 
                sources: [
                    { name: "SD", url: "go:S1053" },
                    { name: "HD", url: "go:S1054" },
                    { name: "World", url: "go:S1052" },
                    { name: "Backup", url: "go:S1051" }
                ], 
                img: "https://i.postimg.cc/MHqdfgbZ/tv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zing", 
                sources: [
                    { name: "Server 1", url: "go:S1641" }
                ], 
                img: "https://i.postimg.cc/C58CGqKG/zing.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Korean Drama Active", 
                sources: [
                    { name: "Server 1", url: "go:S1651" }
                ], 
                img: "https://i.postimg.cc/PrBz5K2V/kda.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Set", 
                sources: [
                    { name: "Server 1", url: "go:S1061" },
                    { name: "Server 2", url: "go:S1063" },
                    { name: "Server 3", url: "go:S1062" }
                ], 
                img: "https://i.postimg.cc/SRjjJD1p/set.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Sab", 
                sources: [
                    { name: "Server 1", url: "go:S1092" },
                    { name: "Server 2", url: "go:S1091" }
                ], 
                img: "https://i.postimg.cc/26k1fz4y/sab.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Pal", 
                sources: [
                    { name: "Server 1", url: "go:S1471" } ,
                    { name: "Server 2", url: "go:S1472" } 
                ], 
                img: "https://i.postimg.cc/9FxH1Qxp/sony-pal.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Shemaroo TV", 
                sources: [
                    { name: "Server 1", url: "go:S1422" },
                    { name: "Server 2", url: "go:S1421" }
                ], 
                img: "https://i.postimg.cc/D0Nw702z/shemaroo-tv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Dangal", 
                sources: [
                    { name: "Server 1", url: "go:S1401" }
                ], 
                img: "https://i.postimg.cc/Y2sZsCsG/dangal.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Dangal 2", 
                sources: [
                    { name: "Server 1", url: "go:S1411" }
                ], 
                img: "https://i.postimg.cc/Dz6YdvGz/dangal2.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Ishaara", 
                sources: [
                    { name: "Server 1", url: "go:S1431" }
                ], 
                img: "https://i.postimg.cc/N0xf6Hbr/ishara.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Nazara", 
                sources: [
                    { name: "Server 1", url: "go:S1441" }
                ], 
                img: "https://i.postimg.cc/85PWMDdN/nazara.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Manoranjan Prime", 
                sources: [
                    { name: "Server 1", url: "go:S1451" }
                ], 
                img: "https://i.postimg.cc/RZdbBC0z/mano-prime.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Manoranjan Grand", 
                sources: [
                    { name: "Server 1", url: "go:S1461" }
                ], 
                img: "https://i.postimg.cc/pLLJKfPg/mano-grand.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Pravah", 
                sources: [
                    { name: "Server 1", url: "go:S1081" },
                    { name: "Server 2", url: "go:S1082" }
                ], 
                img: "https://i.postimg.cc/sxncDbV2/star-prabha.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Zee Talkies", 
                sources: [
                    { name: "Server 1", url: "go:S1311" }
                ], 
                img: "https://i.postimg.cc/DZkp9VZk/z-talkies.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Zee Marathi", 
                sources: [
                    { name: "Server 1", url: "go:S1321" }
                ], 
                img: "https://i.postimg.cc/1t3Mh9Qd/z-marathi.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Colors Marathi", 
                sources: [
                    { name: "Server 1", url: "go:S1631" },
                    { name: "Server 2", url: "go:S1632" }
                ], 
                img: "https://i.postimg.cc/R0PJ5d59/colors-marathi.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Sun Marathi", 
                sources: [
                    { name: "Server 1", url: "go:S1671" },
                    { name: "Server 2", url: "go:S1672" }
                ], 
                img: "https://i.postimg.cc/zDnyj8t7/sun-marathi.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Star Jalsha", 
                sources: [
                    { name: "Server 1", url: "go:S1102" },
                    { name: "Server 2", url: "go:S1103" },
                    { name: "Server 3", url: "go:S1101" }
                ], 
                img: "https://i.postimg.cc/BQTwPFNn/star-jalsha.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Zee Bangla", 
                sources: [
                    { name: "Player 1", url: "go:S1113" },
                    { name: "Player 2", url: "go:S1112" },
                    { name: "Player 3", url: "go:S1111" }
                ], 
                img: "https://i.postimg.cc/wj9Q6Mj6/zee-bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Colors Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S1122" },
                    { name: "Server 2", url: "go:S1123" },
                    { name: "Server 3", url: "go:S1121" }
                ], 
                img: "https://i.postimg.cc/c4P4CVDF/Colors-Bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Sun Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S1131" },
                    { name: "Server 2", url: "go:S1132" }
                ], 
                img: "https://i.postimg.cc/Yqvwd2HC/sun-bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Enterr10 Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S1141" }
                ], 
                img: "https://i.postimg.cc/Kc6nLv8k/Enterr10-Bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Ruposhi Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S1151" },
                    { name: "Server 2", url: "go:S1152" }
                ], 
                img: "https://i.postimg.cc/Sxz3dK6Q/Ruposhi-Bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Khushboo Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S1161" },
                    { name: "Server 2", url: "go:S1162" }
                ], 
                img: "https://i.postimg.cc/brJdCXyf/khushboo-bangla.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Sony Aath", 
                sources: [
                    { name: "Server 1", url: "go:S1181" },
                    { name: "Server 2", url: "go:S1182" },
                    { name: "Server 3", url: "go:S1183" },
                    { name: "Server 4", url: "go:S1184" }
                ], 
                img: "https://i.postimg.cc/B6cXKsYx/Sony-Aath.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Akash Aath", 
                sources: [
                    { name: "Server 1", url: "go:S1171" },
                    { name: "Server 2", url: "go:S1172" }
                ], 
                img: "https://i.postimg.cc/WzkcbSSJ/akash-aath.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Zee Sarthak", 
                sources: [
                    { name: "Server 1", url: "go:S1341" }
                ], 
                img: "https://i.postimg.cc/SNh2JgXS/z-sarthak.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Alankar", 
                sources: [
                    { name: "Server 1", url: "go:S1211" }
                ], 
                img: "https://i.postimg.cc/Kjfyf4qh/alankar.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Tarang TV", 
                sources: [
                    { name: "Server 1", url: "go:S1221" }
                ], 
                img: "https://i.postimg.cc/j2py8dLv/tarang.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Rang TV", 
                sources: [
                    { name: "Server 1", url: "go:S1251" }
                ], 
                img: "https://i.postimg.cc/zfG0M7JQ/rang.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Rengoni", 
                sources: [
                    { name: "Server 1", url: "go:S1241" }
                ], 
                img: "https://i.postimg.cc/pdmKz6VP/rengoni.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Assamese"]
            },
            { 
                name: "Spondon TV", 
                sources: [
                    { name: "Server 1", url: "go:S1231" }
                ], 
                img: "https://i.postimg.cc/Y0dSXt8Z/spondon-1.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Assamese"]
            },
            { 
                name: "Jonack", 
                sources: [
                    { name: "Server 1", url: "go:S1261" }
                ], 
                img: "https://i.postimg.cc/bNG7szkJ/jonack.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Assamese"]
            },
            { 
                name: "Star Vijay", 
                sources: [
                    { name: "Server 1", url: "go:S1481" }
                ], 
                img: "https://i.postimg.cc/4yDVmXQV/star-vijay.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Zee Tamil", 
                sources: [
                    { name: "Server 1", url: "go:S1491" }
                ], 
                img: "https://i.postimg.cc/3w8pySmS/zee-tamil.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Colors Tamil", 
                sources: [
                    { name: "Server 1", url: "go:S1072" },
                    { name: "Server 2", url: "go:S1071" }
                ], 
                img: "https://i.postimg.cc/nV2zd4j7/colors-tamil-1.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "SUN TV", 
                sources: [
                    { name: "Server 1", url: "go:S1501" },
                ], 
                img: "https://i.postimg.cc/G3PrLGk2/suntv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "SUN Life", 
                sources: [
                    { name: "Server 1", url: "go:S1511" },
                ], 
                img: "https://i.postimg.cc/Wz8QMmnw/sun-life.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "KTV", 
                sources: [
                    { name: "Server 1", url: "go:S1521" },
                ], 
                img: "https://i.postimg.cc/T3VnQkmx/ktv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "MK TV", 
                sources: [
                    { name: "Player 1", url: "go:S1531" },
                    { name: "Player 2", url: "go:S1532" },
                ], 
                img: "https://i.postimg.cc/MG4PJPsL/mktv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "MK SIX", 
                sources: [
                    { name: "Player 1", url: "go:S1541" },
                    { name: "Player 2", url: "go:S1542" }
                ], 
                img: "https://i.postimg.cc/9FWBKHmM/mk-six-1.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Sirippoli TV", 
                sources: [
                    { name: "Server 1", url: "go:S1551" },
                ], 
                img: "https://i.postimg.cc/5NbMryQC/Sirippoli-TV.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Murasu TV", 
                sources: [
                    { name: "Server 1", url: "go:S1561" },
                ], 
                img: "https://i.postimg.cc/26k4J4Yt/murasu.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Raj TV", 
                sources: [
                    { name: "Server 1", url: "go:S1571" },
                ], 
                img: "https://i.postimg.cc/wMBn6yXf/raj-tv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Star Tamil", 
                sources: [
                    { name: "Server 1", url: "go:S1581" },
                ], 
                img: "https://i.postimg.cc/sgSfFqDB/star-tamil.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Ayush TV", 
                sources: [
                    { name: "Server 1", url: "go:S1591" },
                ], 
                img: "https://i.postimg.cc/Jzb8YXPZ/ayush-tv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Peppers TV", 
                sources: [
                    { name: "Server 1", url: "go:S1601" },
                ], 
                img: "https://i.postimg.cc/SxrSN8Cq/peppers-tv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Puthiya News", 
                sources: [
                    { name: "Server 1", url: "go:S6301" },
                ], 
                img: "https://i.postimg.cc/FRcsv6xC/Puthiya-News.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Zee Telugu", 
                sources: [
                    { name: "Server 1", url: "go:S1351" }
                ], 
                img: "https://i.postimg.cc/htjcZmzW/z-telugu.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "ETV", 
                sources: [
                    { name: "Server 1", url: "go:S1191" }
                ], 
                img: "https://i.postimg.cc/5tqn3827/etv.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "ETV Plus", 
                sources: [
                    { name: "Server 1", url: "go:S1201" }
                ], 
                img: "https://i.postimg.cc/gc5q3gKc/etv-plus.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Zee Kannada", 
                sources: [
                    { name: "Server 1", url: "go:S1361" }
                ], 
                img: "https://i.postimg.cc/hGWZQWqy/z-kannanda.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Kannada"]
            },
            { 
                name: "Hum TV", 
                sources: [
                    { name: "Server 1", url: "go:S1271" },
                    { name: "Server 2", url: "go:S1272" },
                    { name: "Server 2", url: "go:S1273" }
                ], 
                img: "https://i.postimg.cc/NMyGY6FT/hum.jpg", 
                category: "Entertainment",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "Geo Entertainment", 
                sources: [
                    { name: "Server 1", url: "go:S1281" },
                    { name: "Server 2", url: "go:S1282" }
                ], 
                img: "https://i.postimg.cc/GpLH0TvJ/geo-ent.jpg", 
                category: "Entertainment",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "Bol Entertainment", 
                sources: [
                    { name: "Server 1", url: "go:S1291" },
                    { name: "Server 2", url: "go:S1292" }
                ], 
                img: "https://i.postimg.cc/HstckCdt/bol-ent.jpg", 
                category: "Entertainment",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "ARY Zindagae", 
                sources: [
                    { name: "Server 1", url: "go:S1301" }
                ], 
                img: "https://i.postimg.cc/y6MtYwvW/ary-zindagi.jpg", 
                category: "Entertainment",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "BTV", 
                sources: [
                    { name: "Server 1", url: "go:S11091" }
                ], 
                img: "https://i.postimg.cc/nzQXt33R/btv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "BTV Chattogram", 
                sources: [
                    { name: "Server 1", url: "go:S11101" }
                ], 
                img: "https://i.postimg.cc/mgvdN3ZW/btv-cht.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali","English"]
            },
            { 
                name: "ATN Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S11111" },
                    { name: "Server 2", url: "go:S11112" }
                ], 
                img: "https://i.postimg.cc/BbLck5F4/atn-bangla.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Channel i", 
                sources: [
                    { name: "Server 1", url: "go:S11121" },
                    { name: "Server 2", url: "go:S11122" }
                ], 
                img: "https://i.postimg.cc/d1vSdxgp/channel-i.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Ekushe ETV", 
                sources: [
                    { name: "Server 1", url: "go:S11131" }
                ], 
                img: "https://i.postimg.cc/GttKxwK7/ekushe-etv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "NTV", 
                sources: [
                    { name: "Server 1", url: "go:S11141" }
                ], 
                img: "https://i.postimg.cc/zvYW3sMH/n-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "RTV", 
                sources: [
                    { name: "Server 1", url: "go:S11151" }
                ], 
                img: "https://i.postimg.cc/Qxh9wGTV/rtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Boishakhi TV", 
                sources: [
                    { name: "Server 1", url: "go:S11161" }
                ], 
                img: "https://i.postimg.cc/5NrJv8b1/boishakhi.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Banglavision", 
                sources: [
                    { name: "Server 1", url: "go:S11171" }
                ], 
                img: "https://i.postimg.cc/PJxGv57P/banglavision.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "My TV", 
                sources: [
                    { name: "Server 1", url: "go:S11181" }
                ], 
                img: "https://i.postimg.cc/W35CVP4j/mytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Mohona Television", 
                sources: [
                    { name: "Server 1", url: "go:S11191" }
                ], 
                img: "https://i.postimg.cc/vBTXWxQF/mohona.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Maasranga Television", 
                sources: [
                    { name: "Server 1", url: "go:S11201" }
                ], 
                img: "https://i.postimg.cc/SsG2Ng0m/maasranga.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "GTV", 
                sources: [
                    { name: "Server 1", url: "go:S11221" },
                    { name: "Server 2", url: "go:S11222" }
                ], 
                img: "https://i.postimg.cc/yNLC1Rfw/gtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Asian TV", 
                sources: [
                    { name: "Server 1", url: "go:S11231" },
                    { name: "Server 2", url: "go:S11232" }
                ], 
                img: "https://i.postimg.cc/Vvq8cV2F/asian.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "SATV", 
                sources: [
                    { name: "Server 1", url: "go:S11241" }
                ], 
                img: "https://i.postimg.cc/02nTdDvr/satv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Deepto TV", 
                sources: [
                    { name: "Server 1", url: "go:S11261" }
                ], 
                img: "https://i.postimg.cc/JnQxV3Pk/deepto.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Nagorik TV", 
                sources: [
                    { name: "Server 1", url: "go:S11281" }
                ], 
                img: "https://i.postimg.cc/Kz4rKKbK/nagorik.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Ananda TV", 
                sources: [
                    { name: "Server 1", url: "go:S11291" }
                ], 
                img: "https://i.postimg.cc/C5TBFdxp/ananda.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Global Television", 
                sources: [
                    { name: "Server 1", url: "go:S11301" }
                ], 
                img: "https://i.postimg.cc/9Xdzdmfz/global-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Channel 9", 
                sources: [
                    { name: "Server 1", url: "go:S11211" }
                ], 
                img: "https://i.postimg.cc/76Xhyb76/channel-9.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Channel S", 
                sources: [
                    { name: "Server 1", url: "go:S11321" }
                ], 
                img: "https://i.postimg.cc/cChsVJKm/channel-s.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Bangla TV", 
                sources: [
                    { name: "Server 1", url: "go:S11271" }
                ], 
                img: "https://i.postimg.cc/L4bfq0Ys/bangla-tv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Desh TV", 
                sources: [
                    { name: "Server 1", url: "go:S11331" },
                    { name: "Server 2", url: "go:S11332" }
                ], 
                img: "https://i.postimg.cc/QC8Dkr6W/deshtv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Nexus Television", 
                sources: [
                    { name: "Server 1", url: "go:S11341" },
                    { name: "Server 2", url: "go:S11342" }
                ], 
                img: "https://i.postimg.cc/501WbVWk/nexus.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "SRK TV", 
                sources: [
                    { name: "Server 1", url: "go:S11351" }
                ], 
                img: "https://i.postimg.cc/C1MrcLgY/srktv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Biswa Bangla TV", 
                sources: [
                    { name: "Server 1", url: "go:S11361" }
                ], 
                img: "https://i.postimg.cc/d10n8H2V/bisho-bangla24.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Me TV", 
                sources: [
                    { name: "Server 1", url: "go:S11371" }
                ], 
                img: "https://i.postimg.cc/L8RWJVbn/metv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Bijoy TV", 
                sources: [
                    { name: "Server 1", url: "go:S11251" }
                ], 
                img: "https://i.postimg.cc/DfdHnL85/bijoytv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Deshi TV", 
                sources: [
                    { name: "Server 1", url: "go:S11381" }
                ], 
                img: "https://i.postimg.cc/dtRHcyVv/deshitv.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "ATN Bangla UK", 
                sources: [
                    { name: "Server 1", url: "go:S11391" }
                ], 
                img: "https://i.postimg.cc/t4C50vct/atnbanglauk.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Channel S UK", 
                sources: [
                    { name: "Server 1", url: "go:S11401" }
                ], 
                img: "https://i.postimg.cc/y6mXDz4y/channelsuk.jpg", 
                category: "Mix-Entertainment",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Kantipur TV", 
                sources: [
                    { name: "Server 1", url: "go:S11001" }
                ], 
                img: "https://i.postimg.cc/2yF06LmF/kantipur.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali","English"]
            },
            { 
                name: "AP1 HD", 
                sources: [
                    { name: "Server 1", url: "go:S11011" }
                ], 
                img: "https://i.postimg.cc/jS83J74M/ap1.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Himalaya TV", 
                sources: [
                    { name: "Server 1", url: "go:S11021" }
                ], 
                img: "https://i.postimg.cc/d3rSkQqn/himalaya.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Prime Times", 
                sources: [
                    { name: "Server 1", url: "go:S11031" }
                ], 
                img: "https://i.postimg.cc/d39KGzXp/prime.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "NTV", 
                sources: [
                    { name: "Server 1", url: "go:S11041" }
                ], 
                img: "https://i.postimg.cc/vZwFYjvG/ntv.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "NTV Plus", 
                sources: [
                    { name: "Server 1", url: "go:S11051" }
                ], 
                img: "https://i.postimg.cc/263gW5sF/ntv-plus.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Janta TV", 
                sources: [
                    { name: "Server 1", url: "go:S11061" }
                ], 
                img: "https://i.postimg.cc/MKm3jjX1/janata.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Image", 
                sources: [
                    { name: "Server 1", url: "go:S11071" }
                ], 
                img: "https://i.postimg.cc/jSC90SdN/image.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "YohoTV", 
                sources: [
                    { name: "Server 1", url: "go:S11081" }
                ], 
                img: "https://i.postimg.cc/4xfqXLdY/yoho.jpg", 
                category: "Mix-Entertainment",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "PTC Punjabi", 
                sources: [
                    { name: "Server 1", url: "go:S11411" }
                ], 
                img: "https://i.postimg.cc/BbL2B1mQ/ptc-punjabi.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "PTC Punjabi Gold", 
                sources: [
                    { name: "Server 1", url: "go:S11421" }
                ], 
                img: "https://i.postimg.cc/nLXSMTmv/ptc-punjabi-gold.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "Pitaara Comedy", 
                sources: [
                    { name: "Server 1", url: "go:S11431" }
                ], 
                img: "https://i.postimg.cc/vBJLFR9h/pitaara-comedy.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "ETV Josh", 
                sources: [
                    { name: "Server 1", url: "go:S11441" }
                ], 
                img: "https://i.postimg.cc/9MsMLCT4/etv-main.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "ETV Comedy", 
                sources: [
                    { name: "Server 1", url: "go:S11451" }
                ], 
                img: "https://i.postimg.cc/9MsMLCT4/etv-main.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Z Dil Se", 
                sources: [
                    { name: "Server 1", url: "go:S11461" }
                ], 
                img: "https://i.postimg.cc/T2cFjCXH/z-dilse.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Comedy Nation", 
                sources: [
                    { name: "Server 1", url: "go:S11471" }
                ], 
                img: "https://i.postimg.cc/8kywP3GL/z-comedy-nation.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Horror Nights", 
                sources: [
                    { name: "Server 1", url: "go:S11481" }
                ], 
                img: "https://i.postimg.cc/qBYnFd01/z-horror-nights.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Atrangii", 
                sources: [
                    { name: "Server 1", url: "go:S11491" }
                ], 
                img: "https://i.postimg.cc/gjvhCNvq/atrangii.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Abzy Dhakad", 
                sources: [
                    { name: "Server 1", url: "go:S11521" }
                ], 
                img: "https://i.postimg.cc/BQFsGRPZ/abzy-dhadak.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Abzy Movies", 
                sources: [
                    { name: "Server 1", url: "go:S11531" }
                ], 
                img: "https://i.postimg.cc/tJTT5kBx/abzy-movies.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Comedy Tadka", 
                sources: [
                    { name: "Server 1", url: "go:S11501" }
                ], 
                img: "https://i.postimg.cc/MKTk6TP0/comedy-tadka.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Telugu One", 
                sources: [
                    { name: "Server 1", url: "go:S11511" }
                ], 
                img: "https://i.postimg.cc/rpvWmKNR/telugu-one.jpg", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Pocket Films", 
                sources: [
                    { name: "Server 1", url: "go:S11551" }
                ], 
                img: "https://i.postimg.cc/W1J7H2h4/pocket-films.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Runn Short Films", 
                sources: [
                    { name: "Server 1", url: "go:S11541" }
                ], 
                img: "https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/P_RUNSHF/TV/thumbnail/logo_web.png", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Runn Thrillers", 
                sources: [
                    { name: "Server 1", url: "go:S11561" }
                ], 
                img: "https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/P_RUNTHR/TV/thumbnail/logo_web.png", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Runn Action", 
                sources: [
                    { name: "Server 1", url: "go:S11591" }
                ], 
                img: "https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/P_RUNACT/TV/thumbnail/322dac70-d5c6-42fe-95fd-94e93cc5a8f6.png", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Cineshorts Premiere", 
                sources: [
                    { name: "Server 1", url: "go:S11571" }
                ], 
                img: "https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/P_CINSHF/TV/thumbnail/logo_tv.png", 
                category: "Mix-Entertainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Superfine Films", 
                sources: [
                    { name: "Server 1", url: "go:S11581" }
                ], 
                img: "https://dnuk7lvye3m03.cloudfront.net/runntv/platform/channels/P_SUPFLM/TV/thumbnail/logo_web.png", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Taiwan Plus", 
                sources: [
                    { name: "Server 1", url: "go:S11621" }
                ], 
                img: "https://i.postimg.cc/63nj9pKD/tw.jpg", 
                category: "Mix-Entertainment",
                description: "International",
                languages: ["English"]
            },
            { 
                name: "9XM", 
                sources: [
                    { name: "IN", url: "go:S2001" },
                    { name: "Asia", url: "go:S2002" }
                ], 
                img: "https://i.postimg.cc/vBqYcq9W/9xm.jpg", 
                category: "Music",
                description: "Bollywood",
                languages: ["Hindi"]
            },
            { 
                name: "9X Jalwa", 
                sources: [
                    { name: "IN", url: "go:S2011" },
                    { name: "Asia", url: "go:S2012" }
                ], 
                img: "https://i.postimg.cc/h4VgFtZS/9x-jalwa.jpg", 
                category: "Music",
                description: "Evergreen Bollywood",
                languages: ["Hindi"]
            },
            { 
                name: "B4U Music", 
                sources: [
                    { name: "Server 1", url: "go:S2051" },
                    { name: "Server 2", url: "go:S2052" },
                    { name: "Server 3", url: "go:S2053" },
                    { name: "Server 4", url: "go:S2054" }
                ], 
                img: "https://i.postimg.cc/Nj3pwBzK/b4u-music.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Mastiii", 
                sources: [
                    { name: "Server 1", url: "go:S2041" },
                    { name: "Server 2", url: "go:S2042" },
                    { name: "Server 3", url: "go:S2043" }
                ], 
                img: "https://i.postimg.cc/5yWXxkMw/mastiii.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Deewana", 
                sources: [
                    { name: "Player 1", url: "go:S0003" },
                    { name: "Player 2", url: "go:S003" },
                ], 
                img: "https://i.postimg.cc/J4BsDn66/deewana.png", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Saregama Music", 
                sources: [
                    { name: "Hindi", url: "go:S2361" },
                    { name: "Telugu", url: "go:S2362" },
                    { name: "Bhojpuri", url: "go:S2363" }
                ], 
                img: "https://i.postimg.cc/wvd2vd9S/saregana-music.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Hindi","Telugu","Bhojpuri"]
            },
            { 
                name: "Shemaroo Filmigaane", 
                sources: [
                    { name: "India", url: "go:S2091" },
                ], 
                img: "https://i.postimg.cc/nhhtDKYk/sfg.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "NH BollyRaga", 
                sources: [
                    { name: "Server 1", url: "go:S2081" },
                    { name: "Servwe 2", url: "go:S2082" }
                ], 
                img: "https://i.postimg.cc/RVV4z4g6/nhbr.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Yrf Music", 
                sources: [
                    { name: "Asia", url: "go:S2131" },
                    { name: "India", url: "go:S2132" }
                ], 
                img: "https://i.postimg.cc/RVngpWgd/yrf-music.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zoom Music", 
                sources: [
                    { name: "Asia", url: "go:S2101" },
                    { name: "India", url: "go:S2102" },
                    { name: "India", url: "go:S2103" }
                ], 
                img: "https://i.postimg.cc/D0GYG0Dr/zoom.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Music India", 
                sources: [
                    { name: "Server 1", url: "go:S2792" },
                    { name: "Server 2", url: "go:S2791" },
                    { name: "Server 3", url: "go:S2793" }
                ], 
                img: "https://i.postimg.cc/QNYG5Kz9/music-india.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Show Box", 
                sources: [
                    { name: "Asia", url: "go:S2141" }
                ], 
                img: "https://i.postimg.cc/CLNsQbjG/show-box.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "E 24", 
                sources: [
                    { name: "Asia", url: "go:S2151" }
                ], 
                img: "https://i.postimg.cc/wBKM5G7V/e-24.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Punjabi Hits", 
                sources: [
                    { name: "Server 1", url: "go:S2182" },
                    { name: "Server 2", url: "go:S2183" },
                    { name: "Server 3", url: "go:S2181" }
                    
                ], 
                img: "https://i.postimg.cc/h472GJVw/punjabi-hits.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi","Punjabi"]
            },
            { 
                name: "Tabbar Hits", 
                sources: [
                    { name: "Server 1", url: "go:S2171" },
                    { name: "Server 2", url: "go:S2172" }
                    
                ], 
                img: "https://i.postimg.cc/DfWzDhL6/tabbar-hits.jpg", 
                category: "Music",
                description: "India",
                languages: ["Hindi","Punjabi"]
            },
            { 
                name: "Brit Asia TV", 
                sources: [
                    { name: "Server 1", url: "go:S2751" }
                ], 
                img: "https://i.postimg.cc/BbM871q3/brit-asia.jpg", 
                category: "Music",
                description: "United Kingdom",
                languages: ["Punjabi"]
            },
            { 
                name: "Wah Punjabi", 
                sources: [
                    { name: "Server 1", url: "go:S2311" },
                ], 
                img: "https://i.postimg.cc/yN8rKKYn/wah-punjabi.jpg", 
                category: "Music",
                description: "Punjabi Music",
                languages: ["Punjabi"]
            },
            { 
                name: "PTC Music", 
                sources: [
                    { name: "Server 1", url: "go:S2701" },
                ], 
                img: "https://i.postimg.cc/zvj04hnW/ptc-music.jpg", 
                category: "Music",
                description: "Punjabi Music",
                languages: ["Punjabi"]
            },
            { 
                name: "PTC Chak De", 
                sources: [
                    { name: "Server 1", url: "go:S2711" },
                ], 
                img: "https://i.postimg.cc/G2BRLcM2/ptc-chakde.jpg", 
                category: "Music",
                description: "Punjabi Music",
                languages: ["Punjabi"]
            },
            { 
                name: "9X Tashan", 
                sources: [
                    { name: "IN", url: "go:S2021" },
                    { name: "Asia", url: "go:S2022" }
                ], 
                img: "https://i.postimg.cc/kMwkxRB1/9x-tashan.jpg", 
                category: "Music",
                description: "Punjabi Music",
                languages: ["Punjabi"]
            },
            { 
                name: "Balle Balle", 
                sources: [
                    { name: "Server 1", url: "go:S2162" },
                    { name: "Server 2", url: "go:S2163" },
                    { name: "Server 3", url: "go:S2161" },
                    
                ], 
                img: "https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/c4/63/c3/c463c3a1-ae70-af43-ddcb-98137c298989/AppIcon-0-0-1x_U007emarketing-0-0-0-8-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png", 
                category: "Music",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "Boogle Bollywood", 
                sources: [
                    { name: "India", url: "go:S2301" },
                ], 
                img: "https://i.postimg.cc/v8N2dkpt/boogle-bollywood.jpg", 
                category: "Music",
                description: "Hindi & Punjabi Music",
                languages: ["Hindi", "Punjabi"]
            },
            { 
                name: "Saga Music", 
                sources: [
                    { name: "India", url: "go:S2061" },
                ], 
                img: "https://i.postimg.cc/pLXwzmwP/saga-music.jpg", 
                category: "Music",
                description: "Punjabi Music",
                languages: ["Punjabi"]
            },
            { 
                name: "Saga Music Haryanvi", 
                sources: [
                    { name: "India", url: "go:S2071" },
                ], 
                img: "https://i.postimg.cc/P5RRD2bM/saga-har.jpg", 
                category: "Music",
                description: "Haryanvi Music",
                languages: ["Haryanvi"]
            },
            { 
                name: "Haryanvi Hits", 
                sources: [
                    { name: "Player 1", url: "go:S2291" }
                ], 
                img: "https://i.postimg.cc/fbJJyFWf/hh.jpg", 
                category: "Music",
                description: "Haryanvi Music",
                languages: ["Haryanvi"]
            },
            { 
                name: "Haryana Beat", 
                sources: [
                    { name: "Server 1", url: "go:S2761" },
                    { name: "Server 2", url: "go:S2762" }
                ], 
                img: "https://i.postimg.cc/d3JHmGx4/hb.jpg", 
                category: "Music",
                description: "India",
                languages: ["Haryanvi"]
            },
            { 
                name: "Dabangg", 
                sources: [
                    { name: "Player 1", url: "go:S2211" }
                ], 
                img: "https://i.postimg.cc/j21NsgJD/dabangg.jpg", 
                category: "Music",
                description: "Bhojpuri Music",
                languages: ["Bhojpuri"]
            },
            { 
                name: "Sangeet Bhojpuri", 
                sources: [
                    { name: "Player 1", url: "go:S2201" },
                    { name: "Player 2", url: "go:S2202" }
                ], 
                img: "https://i.postimg.cc/yYgHbgfn/sangeet-bhojpuri-1.jpg", 
                category: "Music",
                description: "Bhojpuri Music",
                languages: ["Bhojpuri"]
            },
            { 
                name: "Sangeet Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S2191" },
                    { name: "Server 2", url: "go:S2192" },
                    { name: "Server 3", url: "go:S2193" }
                ], 
                img: "https://i.postimg.cc/cH7qL5TD/sb.jpg", 
                category: "Music",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Bengali Beats", 
                sources: [
                    { name: "Player 1", url: "go:S0002" },
                    { name: "Player 2", url: "go:S002" },
                ], 
                img: "https://i.postimg.cc/G26Bbt7P/bb.jpg", 
                category: "Music",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Dhoom Music Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S2241" },
                    { name: "Server 2", url: "go:S2242" }
                ], 
                img: "https://i.postimg.cc/k4MQJtDt/dhoom-1.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Bengali"]
            },
            { 
                name: "Music Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S2381" }
                ], 
                img: "https://i.postimg.cc/Gh92ZkQT/music-bangla.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Bengali"]
            },
            { 
                name: "Music Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S2391" }
                ], 
                img: "https://i.postimg.cc/76s4VWjs/music-bangla-2.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Bengali"]
            },
            { 
                name: "Mon Music", 
                sources: [
                    { name: "Server 1", url: "go:S2401" }
                ], 
                img: "https://i.postimg.cc/KzHXLggC/mon.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Bengali"]
            },
            { 
                name: "Tarang Music", 
                sources: [
                    { name: "Server 1", url: "go:S2111" }
                ], 
                img: "https://i.postimg.cc/25rP5nCd/tarang-music.jpg", 
                category: "Music",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Ramdhenu", 
                sources: [
                    { name: "Server 1", url: "go:S2122" },
                    { name: "Server 2", url: "go:S2121" }
                ], 
                img: "https://i.postimg.cc/QC6KPQ0X/ramdhenu.jpg", 
                category: "Music",
                description: "India",
                languages: ["Assamese"]
            },
            { 
                name: "9X Jhakaas", 
                sources: [
                    { name: "IN", url: "go:S2031" },
                    { name: "Asia", url: "go:S2032" }
                ], 
                img: "https://i.postimg.cc/0jq4rTv0/9xs-jhakkas.jpg", 
                category: "Music",
                description: "Marathi Music",
                languages: ["Marathi"]
            },
            { 
                name: "Maiboli", 
                sources: [
                    { name: "Player 1", url: "go:S2221" }
                ], 
                img: "https://i.postimg.cc/50RjvH9G/maiboli.jpg", 
                category: "Music",
                description: "Marathi Music",
                languages: ["Marathi"]
            },
            { 
                name: "Sangeet Marathi", 
                sources: [
                    { name: "Server 1", url: "go:S2232" },
                    { name: "Server 2", url: "go:S2231" }
                ], 
                img: "https://i.postimg.cc/Z51s5jhv/sangeet-marathi.jpg", 
                category: "Music",
                description: "Marathi Music",
                languages: ["Marathi"]
            },
            { 
                name: "Kappa TV", 
                sources: [
                    { name: "Player 1", url: "go:S2251" }
                ], 
                img: "https://i.postimg.cc/QN15T3WM/kappa.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Malayalam"]
            },
            { 
                name: "Surya Music", 
                sources: [
                    { name: "Player 1", url: "go:S2351" },
                    { name: "Player 1", url: "go:S2352" }
                ], 
                img: "https://i.postimg.cc/BZBYjtLN/surya-music.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Malayalam"]
            },
            { 
                name: "Raj Musix", 
                sources: [
                    { name: "Player 1", url: "go:S2261" }
                ], 
                img: "https://i.postimg.cc/Ss0RSndf/raj-musix-telugu.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Telugu"]
            },
            { 
                name: "Gemini Music", 
                sources: [
                    { name: "Player 1", url: "go:S2331" },
                    { name: "Player 2", url: "go:S2332" }
                ], 
                img: "https://i.postimg.cc/9F1dh7R5/gemini-music.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Telugu"]
            },
            { 
                name: "Star Maa Music", 
                sources: [
                    { name: "Player 1", url: "go:S2801" }
                ], 
                img: "https://i.postimg.cc/kXHPtMPW/star-maa.jpg", 
                category: "Music",
                description: "Indian Music",
                languages: ["Telugu"]
            },
            { 
                name: "ETV Music", 
                sources: [
                    { name: "Player 1", url: "go:S2741" }
                ], 
                img: "https://i.postimg.cc/d3ndMCtN/etv-music.jpg", 
                category: "Music",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "MK Tunes", 
                sources: [
                    { name: "Player 1", url: "go:S2271" }
                ], 
                img: "https://i.postimg.cc/6qWmFTtz/mk-tunes.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Tamil"]
            },
            { 
                name: "MN Music", 
                sources: [
                    { name: "Player 1", url: "go:S2281" }
                ], 
                img: "https://i.postimg.cc/kMjQ9dzY/mn-music.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Tamil"]
            },
            { 
                name: "Isaiaruvi", 
                sources: [
                    { name: "Player 1", url: "go:S2371" }
                ], 
                img: "https://i.postimg.cc/L58zY9w0/isaiaruvi.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Tamil"]
            },
            { 
                name: "Sun Music", 
                sources: [
                    { name: "Player 1", url: "go:S2321" },
                    { name: "Player 2", url: "go:S2322" },
                ], 
                img: "https://i.postimg.cc/JhscKzhw/sun-music.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Tamil"]
            },
            { 
                name: "Udaya Music", 
                sources: [
                    { name: "Player 1", url: "go:S2341" },
                    { name: "Player 2", url: "go:S2342" },
                ], 
                img: "https://i.postimg.cc/QMK11Y6h/udaya-music.jpg", 
                category: "Music",
                description: "India Music",
                languages: ["Kannada"]
            },
            { 
                name: "Kashish", 
                sources: [
                    { name: "Server 1", url: "go:S2911" }
                ], 
                img: "https://i.postimg.cc/0ykyzN0s/kashish.jpg", 
                category: "Music",
                description: "Pakistan",
                languages: ["Sindhi","Urdu"]
            },
            { 
                name: "Joo Music", 
                sources: [
                    { name: "Server 1", url: "go:S2511" }
                ], 
                img: "https://i.postimg.cc/1535rD29/joo-music.jpg", 
                category: "Music",
                description: "Pakistan",
                languages: ["Hindi","Urdu"]
            },
            { 
                name: "Jalwa", 
                sources: [
                    { name: "Server 1", url: "go:S2771" }
                ], 
                img: "https://i.postimg.cc/pTGNr2Cw/jalwa.jpg", 
                category: "Music",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "8XM", 
                sources: [
                    { name: "Server 1", url: "go:S2901" }
                ], 
                img: "https://i.postimg.cc/Qd4nc618/8xm.jpg", 
                category: "Music",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "K Pop", 
                sources: [
                    { name: "Server 1", url: "go:S2881" }
                ], 
                img: "https://i.postimg.cc/CLFRqJwQ/kpop-tvplay.jpg", 
                category: "Music",
                description: "South Korea",
                languages: ["Korean"]
            },
            { 
                name: "24h KPOP", 
                sources: [
                    { name: "Server 1", url: "go:S2891" }
                ], 
                img: "https://i.postimg.cc/4NSw2Y26/24h-kpop.jpg", 
                category: "Music",
                description: "South Korea",
                languages: ["Korean"]
            },
            { 
                name: "K-POP by CJ ENM", 
                sources: [
                    { name: "Server 1", url: "go:S2731" }
                ], 
                img: "https://i.postimg.cc/sx6FN3qq/kpop-cj.jpg", 
                category: "Music",
                description: "South Korea",
                languages: ["Korean"]
            },
            { 
                name: "Oxygen Music", 
                sources: [
                    { name: "Player 1", url: "go:S0007" },
                    { name: "Player 2", url: "go:S007" },
                ], 
                img: "https://i.postimg.cc/Ls6v1QHC/om.jpg", 
                category: "Music",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Deluxe Music", 
                sources: [
                    { name: "Server 1", url: "go:S2481" }
                ], 
                img: "https://i.postimg.cc/B6nx0jt4/deluxe-music.jpg", 
                category: "Music",
                description: "Germany",
                languages: ["English"]
            },
            { 
                name: "Deluxe Rap", 
                sources: [
                    { name: "Server 1", url: "go:S2491" }
                ], 
                img: "https://i.postimg.cc/V6vbh2HN/dlx-rap.jpg", 
                category: "Music",
                description: "Germany",
                languages: ["English"]
            },
            { 
                name: "Deluxe Dance", 
                sources: [
                    { name: "Server 1", url: "go:S2501" }
                ], 
                img: "https://i.postimg.cc/DzMq72GG/dlx-dance.jpg", 
                category: "Music",
                description: "Germany",
                languages: ["English"]
            },
            { 
                name: "Kronehit TV", 
                sources: [
                    { name: "Server 1", url: "go:S2521" }
                ], 
                img: "https://i.postimg.cc/fW71krs0/kronehit.jpg", 
                category: "Music",
                description: "Austria",
                languages: ["English"]
            },
            { 
                name: "MTV Live", 
                sources: [
                    { name: "Server 1", url: "go:S2531" }
                ], 
                img: "https://i.postimg.cc/rmNgy74V/mtv-live-1.jpg", 
                category: "Music",
                description: "United Kingdom",
                languages: ["English"]
            },
            { 
                name: "MTV Classic", 
                sources: [
                    { name: "Server 1", url: "go:S2541" }
                ], 
                img: "https://i.postimg.cc/MKN0wzL0/mtv-classic.jpg", 
                category: "Music",
                description: "United Kingdom",
                languages: ["English"]
            },
            { 
                name: "Aghani", 
                sources: [
                    { name: "Server 1", url: "go:S2431" }
                ], 
                img: "https://i.postimg.cc/d1CJDBhB/aghani.jpg", 
                category: "Music",
                description: "Lebanon",
                languages: ["Arabic"]
            },
            { 
                name: "PMC Royale", 
                sources: [
                    { name: "Server 1", url: "go:S2851" }
                ], 
                img: "https://i.postimg.cc/wj9B16KB/pmc-royal.jpg", 
                category: "Music",
                description: "Asia",
                languages: ["Persian"]
            },
            { 
                name: "CMC", 
                sources: [
                    { name: "Server 1", url: "go:S2461" }
                ], 
                img: "https://i.postimg.cc/TwftW2w4/cmc-1.jpg", 
                category: "Music",
                description: "Palestine",
                languages: ["Arabic"]
            },
            { 
                name: "4 Fun TV", 
                sources: [
                    { name: "Server 1", url: "go:S2841" }
                ], 
                img: "https://i.postimg.cc/ryhRX071/4fun-tv.jpg", 
                category: "Music",
                description: "Poland",
                languages: ["Polish"]
            },
            { 
                name: "Schlager Deluxe", 
                sources: [
                    { name: "Server 1", url: "go:S2471" }
                ], 
                img: "https://i.postimg.cc/xT68w6MJ/schlager-deluxe.jpg", 
                category: "Music",
                description: "Germany",
                languages: ["English"]
            },
            { 
                name: "Muzzik", 
                sources: [
                    { name: "Server 1", url: "go:S2551" }
                ], 
                img: "https://i.postimg.cc/TYgjTzvZ/muzzik.jpg", 
                category: "Music",
                description: "Serbia",
                languages: ["English"]
            },
            { 
                name: "WWM", 
                sources: [
                    { name: "Server 1", url: "go:S2861" }
                ], 
                img: "https://i.postimg.cc/gJ5cxqkt/wwm.jpg", 
                category: "Music",
                description: "Serbia",
                languages: ["English"]
            },
            { 
                name: "Play TV", 
                sources: [
                    { name: "Server 1", url: "go:S2721" }
                ], 
                img: "https://i.postimg.cc/wTRvtsKD/play-tv.jpg", 
                category: "Music",
                description: "Brazil",
                languages: ["Portuguese"]
            },
            { 
                name: "Pop World TV", 
                sources: [
                    { name: "Server 1", url: "go:S2581" }
                ], 
                img: "https://i.postimg.cc/P52nFFJw/pop-world.jpg", 
                category: "Music",
                description: "United Kingdom",
                languages: ["English"]
            },
            { 
                name: "Nick Music", 
                sources: [
                    { name: "Server 1", url: "go:S2591" }
                ], 
                img: "https://i.postimg.cc/XJNG6Pk6/nick-music-1.jpg", 
                category: "Music",
                description: "United Kingdom",
                languages: ["English"]
            },
            { 
                name: "VEVO POP", 
                sources: [
                    { name: "Server 1", url: "go:S2651" }
                ], 
                img: "https://i.postimg.cc/MZ9ZvD1t/vivo-pop.jpg", 
                category: "Music",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "VEVO HIP HOP", 
                sources: [
                    { name: "Server 1", url: "go:S2661" }
                ], 
                img: "https://i.postimg.cc/vmvFCYzX/vevo-hip-hop.jpg", 
                category: "Music",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "VH1", 
                sources: [
                    { name: "Server 1", url: "go:S2671" }
                ], 
                img: "https://i.postimg.cc/wvBPPh3T/vh1.jpg", 
                category: "Music",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Dance TV", 
                sources: [
                    { name: "Server 1", url: "go:S2681" }
                ], 
                img: "https://i.postimg.cc/y6c5GY8R/dance-tv.jpg", 
                category: "Music",
                description: "Netherlands",
                languages: ["English"]
            },
            { 
                name: "Qello Concerts", 
                sources: [
                    { name: "Server 1", url: "go:S2691" }
                ], 
                img: "https://i.postimg.cc/2yrxMY0d/oello-concerts.jpg", 
                category: "Music",
                description: "Canada",
                languages: ["English"]
            },
            { 
                name: "Trace UK", 
                sources: [
                    { name: "Server 1", url: "go:S2621" }
                ], 
                img: "https://i.postimg.cc/0NDF1W2n/trace-uk.jpg", 
                category: "Music",
                description: "Uganda",
                languages: ["English"]
            },
            { 
                name: "Trace Urban", 
                sources: [
                    { name: "Server 1", url: "go:S2631" }
                ], 
                img: "https://i.postimg.cc/JnKTR9wN/trace-urban.jpg", 
                category: "Music",
                description: "France",
                languages: ["English"]
            },
            { 
                name: "CMC TV", 
                sources: [
                    { name: "Server 1", url: "go:S2811" }
                ], 
                img: "https://i.postimg.cc/tCj2SLdv/cmc-tv.jpg", 
                category: "Music",
                description: "France",
                languages: ["English"]
            },
            { 
                name: "Trace Latina", 
                sources: [
                    { name: "Server 1", url: "go:S2821" }
                ], 
                img: "https://i.postimg.cc/mZXg8sGG/trance-latina.jpg", 
                category: "Music",
                description: "France",
                languages: ["Spanish"]
            },
            { 
                name: "1Mus", 
                sources: [
                    { name: "Server 1", url: "go:S2831" }
                ], 
                img: "https://i.postimg.cc/pLtrnBHj/1mus.jpg", 
                category: "Music",
                description: "Russia",
                languages: ["Russian"]
            },
            { 
                name: "V2BEAT", 
                sources: [
                    { name: "Server 1", url: "go:S2641" }
                ], 
                img: "https://i.postimg.cc/pdRYyqJq/v-to-beat.jpg", 
                category: "Music",
                description: "Italy",
                languages: ["English"]
            },
            { 
                name: "Afrobeats", 
                sources: [
                    { name: "Server 1", url: "go:S2411" }
                ], 
                img: "https://i.postimg.cc/pXpnkN5c/afro-beats.jpg", 
                category: "Music",
                description: "Africa ",
                languages: ["English"]
            },
            { 
                name: "A Music Channel", 
                sources: [
                    { name: "Server 1", url: "go:S2421" }
                ], 
                img: "https://i.postimg.cc/Y0gjK7Nt/amusic-channel.jpg", 
                category: "Music",
                description: "Africa",
                languages: ["English"]
            },
            { 
                name: "Spirit TV", 
                sources: [
                    { name: "Server 1", url: "go:S2601" }
                ], 
                img: "https://i.postimg.cc/3Nv3sjVH/spirit-tv.jpg", 
                category: "Music",
                description: "Uganda",
                languages: ["English"]
            },
            { 
                name: "Stryk TV", 
                sources: [
                    { name: "Server 1", url: "go:S2611" }
                ], 
                img: "https://i.postimg.cc/y8bs8bKz/stryk-tv.jpg", 
                category: "Music",
                description: "Uganda",
                languages: ["English"]
            },
            { 
                name: "World Songs", 
                sources: [
                    { name: "Playlist 1", url: "go:S10081" },
                    { name: "Playlist 2", url: "go:S10082" },
                    { name: "Playlist 3", url: "go:S10083" },
                    { name: "Playlist 4", url: "go:S10084" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "Mixed Song",
                languages: ["24/7"]
            },
            { 
                name: "Indian Songs", 
                sources: [
                    { name: "Hindi 1", url: "go:S10091" },
                    { name: "Hindi 2", url: "go:S10092" },
                    { name: "Hindi 3", url: "go:S10093" },
                    { name: "Telugu", url: "go:S10191" }  
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "24/7 Music",
                languages: ["24/7"]
            },
            { 
                name: "Adnan Sami", 
                sources: [
                    { name: "Player 1", url: "go:S0019" },
                    { name: "Player 2", url: "go:S019" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "T Play",
                languages: ["24/7"]
            },
            { 
                name: "Coke Studio Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S024" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "T Play",
                languages: ["24/7"]
            },
            { 
                name: "Wind of Change", 
                sources: [
                    { name: "Server 1", url: "go:S0015" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "T Play",
                languages: ["24/7"]
            },
            { 
                name: "Bhojpuri Songs", 
                sources: [
                    { name: "Player 1", url: "go:S0020" },
                    { name: "Player 2", url: "go:S020" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "T Play",
                languages: ["24/7"]
            },
            { 
                name: "Dance Performance", 
                sources: [
                    { name: "Player 1", url: "go:S0001" },
                    { name: "Player 2", url: "go:S001" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Music",
                description: "T Play",
                languages: ["24/7"]
            },
            { 
                name: "Live Biggboss", 
                sources: [
                    { name: "Server 1", url: "go:S10041" },
                    { name: "Server 2", url: "go:S10042" }
                ], 
                img: "https://i.ibb.co/B5L1MVjX/biggboss-2025-08-22-08-35-54.webp", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "The Kapil Sharma Show", 
                sources: [
                    { name: "Server 1", url: "go:S10141" }
                ], 
                img: "https://cdn.dnaindia.com/sites/default/files/2022/03/25/1192555-tkss.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Crime Patrol", 
                sources: [
                    { name: "Hindi", url: "go:S10131" },
                    { name: "Bengali", url: "go:S026" }
                ], 
                img: "https://m.media-amazon.com/images/M/MV5BMWNkNDBmMWMtNzlmZC00NjcyLWFkNWYtOGY2ZGI3NDdlY2QwXkEyXkFqcGc@._V1_.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7","Bengali"]
            },
            { 
                name: "CID", 
                sources: [
                    { name: "Hindi", url: "go:S10121" },
                    { name: "Bengali", url: "go:S025" }
                ], 
                img: "https://i.postimg.cc/524dD8y0/cid-bengali2.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7","Bengali"]
            },
            { 
                name: "Aahat", 
                sources: [
                    { name: "Server 1", url: "go:S10171" }
                ], 
                img: "https://m.media-amazon.com/images/M/MV5BMzY1OWQ2ZmQtZmFiZC00M2I0LTkyYzctYmY4OTViZGI4N2Y0XkEyXkFqcGc@._V1_QL75_UY281_CR155,0,190,281_.jpg", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Super Dancer", 
                sources: [
                    { name: "Server 1", url: "go:S10161" }
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVpfpBk71bkzfWN9QhIhK_5uVJmP2CYFQhZh4GKqDz1nWk-eIL4yYNmHddkY8HNZRhiE&usqp=CAU", 
                category: "Entertainment",
                description: "India",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Idols", 
                sources: [
                    { name: "Indian", url: "go:S10151" },
                    { name: "American", url: "go:S10152" }
                ], 
                img: "https://i.postimg.cc/2SVvf9FW/idols.jpg", 
                category: "Entertainment",
                description: "World",
                languages: ["Hindi","English","24/7"]
            },
            { 
                name: "Got Talent", 
                sources: [
                    { name: "America", url: "go:S10181" }
                ], 
                img: "https://i.postimg.cc/TP54h9Gp/gt.jpg", 
                category: "Entertainment",
                description: "World",
                languages: ["English","24/7"]
            },
            { 
                name: "Bangla Drama", 
                sources: [
                    { name: "Asia", url: "go:S017" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Entertainment",
                description: "Bangladesh",
                languages: ["Bengali","24/7"]
            },
            { 
                name: "Humayun Ahmed", 
                sources: [
                    { name: "Asia", url: "go:S013" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Entertainment",
                description: "T Play",
                languages: ["Bengali","24/7"]
            },
            { 
                name: "Star Gold", 
                sources: [
                    { name: "SD", url: "go:S3001" },
                    { name: "HD", url: "go:S3002" },
                    { name: "Backup", url: "go:S3010" }
                ], 
                img: "https://i.postimg.cc/7YJXRsp7/gold.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Gold 2", 
                sources: [
                    { name: "SD", url: "go:S3003" },
                    { name: "HD", url: "go:S3004" }
                ], 
                img: "https://i.postimg.cc/rmbZdvvh/gold-2.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Gold Select", 
                sources: [
                    { name: "SD", url: "go:S3005" },
                    { name: "HD", url: "go:S3006" }
                ], 
                img: "https://i.postimg.cc/SNGL3Bgs/gold-select.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Gold Romance", 
                sources: [
                    { name: "Server 1", url: "go:S3007" }
                ], 
                img: "https://i.postimg.cc/zB1VJBf6/gold-romance.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Star Gold Thrills", 
                sources: [
                    { name: "Server 1", url: "go:S3008" }
                ], 
                img: "https://i.postimg.cc/RF9VkDsS/gold-thrills.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Utsav Gold", 
                sources: [
                    { name: "Server 1", url: "go:S3581" },
                    { name: "Server 2", url: "go:S3582" }
                ], 
                img: "https://i.postimg.cc/rwvbsQmJ/utsav-gold.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Max", 
                sources: [
                    { name: "Max SD", url: "go:S3031" },
                    { name: "Max HD", url: "go:S3032" },
                    { name: "Max USA", url: "go:S3033" }
                ], 
                img: "https://i.postimg.cc/yNPNjwwH/max.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Max 2", 
                sources: [
                    { name: "Server 1", url: "go:S3041" },
                    { name: "Server 2", url: "go:S3042" }
                ], 
                img: "https://i.postimg.cc/VvfXR8gx/sony-max2.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Sony Wah", 
                sources: [
                    { name: "Server 1", url: "go:S3051" },
                    { name: "Server 2", url: "go:S3052" },
                ], 
                img: "https://i.postimg.cc/hGm84Mh5/sony-wah.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Colors Cineplex", 
                sources: [
                    { name: "Cineplex", url: "go:S3121" },
                    { name: "Cineplex HD", url: "go:S3124" },
                    { name: "Superhit", url: "go:S3123" },
                    { name: "Bollywood", url: "go:S3122" }
                ], 
                img: "https://i.postimg.cc/bNcHkHDb/clc.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Miniplex", 
                sources: [
                    { name: "Cineplex", url: "go:S3571" }
                ], 
                img: "https://i.postimg.cc/cJkjR4Wr/miniplex.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "RDC Movies", 
                sources: [
                    { name: "Server 1", url: "go:S3231" }
                ], 
                img: "https://i.postimg.cc/TYM3Z6Dm/rdc.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Pitaara", 
                sources: [
                    { name: "Server 1", url: "go:S3451" }
                ], 
                img: "https://i.postimg.cc/L6Q1PKQT/Pitaara.png", 
                category: "Movies",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "MH1 DilSe", 
                sources: [
                    { name: "Server 1", url: "go:S3561" }
                ], 
                img: "https://i.postimg.cc/P5S5gyGj/mh1-dilse.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Punjabi","Hindi","Bhojpuri"]
            },
            { 
                name: "NH Bolly Flix", 
                sources: [
                    { name: "Server 1", url: "go:S3081" }
                ], 
                img: "https://i.postimg.cc/g2Hgmw4b/nh-bollyflix.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "NH Bolly Gold", 
                sources: [
                    { name: "Server 1", url: "go:S3082" }
                ], 
                img: "https://i.postimg.cc/pdDR2J40/nh-bollygold.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Shemaroo Bollywood", 
                sources: [
                    { name: "Server 1", url: "go:S3141" }
                ], 
                img: "https://i.postimg.cc/Wb9G2j94/shemaroo-bw.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Shemaroo Josh", 
                sources: [
                    { name: "Server 1", url: "go:S3601" }
                ], 
                img: "https://i.postimg.cc/pVJvTYkj/Shemaroo-josh.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Xumo Bollywood & Indian Cinema", 
                sources: [
                    { name: "Server 1", url: "go:S3611" }
                ], 
                img: "https://i.postimg.cc/5yDcc5Zf/Xumo.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Bollywood HD", 
                sources: [
                    { name: "Server 1", url: "go:S3151" }
                ], 
                img: "https://i.postimg.cc/xCNC6b26/Bollywood-HD.png", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Bollywood Classic", 
                sources: [
                    { name: "Server 1", url: "go:S3161" }
                ], 
                img: "https://i.postimg.cc/13Sq4MQs/Bollywood-Classic.png", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "South Station", 
                sources: [
                    { name: "Server 1", url: "go:S3391" }
                ], 
                img: "https://i.postimg.cc/MKcjnzZY/south-station.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "The Movie Club", 
                sources: [
                    { name: "Server 1", url: "go:S3461" }
                ], 
                img: "https://i.postimg.cc/y8WNCDPg/the-movie-club.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Goldmines Movies", 
                sources: [
                    { name: "Server 1", url: "go:S3401" }
                ], 
                img: "https://i.postimg.cc/jdNj7X99/goldmines.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Goldmines", 
                sources: [
                    { name: "Server 1", url: "go:S3411" }
                ], 
                img: "https://i.postimg.cc/jdNj7X99/goldmines.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Goldmines 2", 
                sources: [
                    { name: "Server 1", url: "go:S3421" }
                ], 
                img: "https://i.postimg.cc/jdNj7X99/goldmines.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "& Pictures", 
                sources: [
                    { name: "SD", url: "go:S3013" },
                    { name: "HD", url: "go:S3014" },
                    { name: "World", url: "go:S3012" },
                    { name: "Backup", url: "go:S3011" }
                ], 
                img: "https://i.postimg.cc/g22ZV7bZ/pictures.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Cinema", 
                sources: [
                    { name: "SD", url: "go:S3024" },
                    { name: "HD", url: "go:S3025" },
                    { name: "USA", url: "go:S3023" },
                    { name: "Backup 1", url: "go:S3022" },
                    { name: "Backup 2", url: "go:S3021" }
                ], 
                img: "https://i.postimg.cc/k47QtjRg/zc.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Anoml Cinema", 
                sources: [
                    { name: "Server 1", url: "go:S3591" }
                ], 
                img: "https://i.postimg.cc/3JKzqYtH/zee-anmol-cinema.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Bollywood", 
                sources: [
                    { name: "Server 1", url: "go:S3211" }
                ], 
                img: "https://i.postimg.cc/DzCBJpYs/z-bollywood.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Classic", 
                sources: [
                    { name: "Server 1", url: "go:S3471" },
                    { name: "Server 2", url: "go:S3472" }
                ], 
                img: "https://i.postimg.cc/ZqXbd2ns/Zee-classic.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Cine Classic", 
                sources: [
                    { name: "Server 1", url: "go:S3491" }
                ], 
                img: "https://i.postimg.cc/XY5T53N8/z-cine-classic.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee South Flix", 
                sources: [
                    { name: "Server 1", url: "go:S3481" }
                ], 
                img: "https://i.postimg.cc/2STXh6R6/z-south-flix.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Bangla Sonar", 
                sources: [
                    { name: "Server 1", url: "go:S3093" },
                    { name: "Server 2", url: "go:S3091" },
                    { name: "Server 3", url: "go:S3092" }
                ], 
                img: "https://i.postimg.cc/GmzS2s5Y/zbs.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Cine Jomjomat", 
                sources: [
                    { name: "Server 1", url: "go:S3501" },
                ], 
                img: "https://i.postimg.cc/QMdWH9Ns/cine-jomjomat.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Jalsha Movies", 
                sources: [
                    { name: "Server 1", url: "go:S3101" },
                    { name: "Server 2", url: "go:S3102" }
                ], 
                img: "https://i.postimg.cc/Kvx68F86/jm.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Tara Bangla Cinema", 
                sources: [
                    { name: "Server 1", url: "go:S3311" },
                ], 
                img: "https://i.postimg.cc/503Bkwmk/tarabanglacinema.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Movie Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S3321" },
                    { name: "Server 2", url: "go:S3322" }
                ], 
                img: "https://i.postimg.cc/vHRnL2MH/movie-bangla.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Sanonda", 
                sources: [
                    { name: "Server 1", url: "go:S3331" }
                ], 
                img: "https://i.postimg.cc/8zZs3Z8v/sananda.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Filmy Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S3341" }
                ], 
                img: "https://i.postimg.cc/43r4kMWY/filmi-bangla.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Colors Bangla Cinema", 
                sources: [
                    { name: "Server 1", url: "go:S3351" },
                    { name: "Server 2", url: "go:S3352" }
                ], 
                img: "https://i.postimg.cc/ydXMQrt4/colors-banglacinema.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Bangla+", 
                sources: [
                    { name: "Server 1", url: "go:S3361" }
                ], 
                img: "https://i.postimg.cc/GpSKcPD8/bangla.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Amar Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S3371" }
                ], 
                img: "https://i.postimg.cc/6qVCGC8h/amar-bangla.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Amar Digital", 
                sources: [
                    { name: "Server 1", url: "go:S3381" }
                ], 
                img: "https://i.postimg.cc/zf9htxWj/amar-digital.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Star Pravah Picture", 
                sources: [
                    { name: "Server 1", url: "go:S3071" },
                    { name: "Server 2", url: "go:S3072" }
                ], 
                img: "https://i.postimg.cc/rmsTS2zS/pravah-picture.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Fakt Marathi", 
                sources: [
                    { name: "Server 1", url: "go:S1691" }
                ], 
                img: "https://i.postimg.cc/KvHVGpFq/fakt-marathi.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Astro Thangathirai", 
                sources: [
                    { name: "Server 1", url: "go:S3242" },
                    { name: "Server 2", url: "go:S3241" }
                ], 
                img: "https://i.postimg.cc/9fTnghY0/astro-thanga.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Astro Vellithirai", 
                sources: [
                    { name: "Server 1", url: "go:S3541" }
                ], 
                img: "https://i.postimg.cc/44SJJynn/astro-vellithirai.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Astro Vinmeen", 
                sources: [
                    { name: "Server 1", url: "go:S3521" }
                ], 
                img: "https://i.postimg.cc/HsDh41hw/astro-vaanavil.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Astro Vaanavil", 
                sources: [
                    { name: "Server 1", url: "go:S3531" }
                ], 
                img: "https://i.postimg.cc/HsDh41hw/astro-vaanavil.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "ETV Cinema", 
                sources: [
                    { name: "Server 1", url: "go:S3131" }
                ], 
                img: "https://i.postimg.cc/6Qk4yPXF/etv-cinema.jpg", 
                category: "Movies",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Film Max", 
                sources: [
                    { name: "Server 1", url: "go:S3221" },
                    { name: "Server 2", url: "go:S3222" }
                ], 
                img: "https://i.postimg.cc/TP8mSJ9y/film-max.jpg", 
                category: "Movies",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "Star Movies", 
                sources: [
                    { name: "SD", url: "go:S3112" },
                    { name: "HD", url: "go:S3111" },
                    { name: "Select", url: "go:S3113" }
                ], 
                img: "https://i.postimg.cc/W4szmtTs/sm.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Sony Pix", 
                sources: [
                    { name: "Server 1", url: "go:S3061" },
                    { name: "Server 2", url: "go:S3062" },
                    { name: "Server 2", url: "go:S3063" }
                ], 
                img: "https://i.postimg.cc/j2GqCKJz/pix.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Romedy Now", 
                sources: [
                    { name: "Server 1", url: "go:S3201" }
                ], 
                img: "https://i.postimg.cc/Vkgr4Qvn/Romedy-now.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Movies Now", 
                sources: [
                    { name: "Server 1", url: "go:S3171" }
                ], 
                img: "https://i.postimg.cc/gjb2mNrG/movies-now.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "MNX", 
                sources: [
                    { name: "Server 1", url: "go:S3181" }
                ], 
                img: "https://i.postimg.cc/wvCQH8h3/mnx.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "MN+", 
                sources: [
                    { name: "Server 1", url: "go:S3191" }
                ], 
                img: "https://i.postimg.cc/9MrLCYKg/mn.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO", 
                sources: [
                    { name: "HBO", url: "go:S3251" }
                ], 
                img: "https://i.postimg.cc/PrWY7KPX/hbo-1.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO 2", 
                sources: [
                    { name: "HBO 2", url: "go:S3252" }
                ], 
                img: "https://i.postimg.cc/xCQcLV3L/hbo2-1.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO Comedy", 
                sources: [
                    { name: "HBO Comedy", url: "go:S3253" }
                ], 
                img: "https://i.postimg.cc/bwbygFJg/hbo-comedy-1.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO Family", 
                sources: [
                    { name: "HBO Family", url: "go:S3254" }
                ], 
                img: "https://i.postimg.cc/Jzwmscqk/hbo-family-1.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO Zone", 
                sources: [
                    { name: "HBO Zone", url: "go:S3255" }
                ], 
                img: "https://i.postimg.cc/N0DwPhw6/hbo-zone-1.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "HBO Signature", 
                sources: [
                    { name: "HBO Signature", url: "go:S3256" }
                ], 
                img: "https://i.postimg.cc/HnqG7dQg/hbo-signature.jpg", 
                category: "Movies",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Cinemax", 
                sources: [
                    { name: "server 1", url: "go:S3261" },
                ], 
                img: "https://i.postimg.cc/5t1PG6xG/cinemax.jpg", 
                category: "Movies",
                description: "American",
                languages: ["English"]
            },
            { 
                name: "More Max", 
                sources: [
                    { name: "server 1", url: "go:S3281" }
                ], 
                img: "https://i.postimg.cc/pTrBbj30/moremax.jpg", 
                category: "Movies",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "FX", 
                sources: [
                    { name: "server 1", url: "go:S3271" }
                ], 
                img: "https://i.postimg.cc/tJVwbw8m/fx.jpg", 
                category: "Movies",
                description: "American",
                languages: ["English"]
            },
            { 
                name: "FXX", 
                sources: [
                    { name: "server 1", url: "go:S3281" }
                ], 
                img: "https://i.postimg.cc/sDCsX4KZ/fxx.jpg", 
                category: "Movies",
                description: "American",
                languages: ["English"]
            },
            { 
                name: "AXN", 
                sources: [
                    { name: "server 1", url: "go:S3291" }
                ], 
                img: "https://i.postimg.cc/X74mmHQx/axn.jpg", 
                category: "Movies",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Lotus", 
                sources: [
                    { name: "server 1", url: "go:S3301" }
                ], 
                img: "https://i.postimg.cc/zG2Xkv3c/lotus.jpg", 
                category: "Movies",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "AVA Family", 
                sources: [
                    { name: "server 1", url: "go:S3441" }
                ], 
                img: "https://i.postimg.cc/90pNbFwC/ava-family.jpg", 
                category: "Movies",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "AVA Series", 
                sources: [
                    { name: "server 1", url: "go:S3431" }
                ], 
                img: "https://i.postimg.cc/jj2KJm9N/AVA-Series.jpg", 
                category: "Movies",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Bangla Movies", 
                sources: [
                    { name: "Server 1", url: "go:S005" },
                    { name: "Server 2", url: "go:S018" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["Bengali","24/7"]
            },
            { 
                name: "Dubbed Movies", 
                sources: [
                    { name: "Asia", url: "go:S012" },
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Hindi Movies", 
                sources: [
                    { name: "Server 1", url: "go:S016" },
                    { name: "Server 2", url: "go:S10102" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Telugu Movies", 
                sources: [
                    { name: "Server 1", url: "go:S10103" },
                    { name: "Server 2", url: "go:S10104" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["Telugu","24/7"]
            },
            { 
                name: "Cine Box", 
                sources: [
                    { name: "Animation", url: "go:S10011" },
                    { name: "Blockbusters", url: "go:S10012" },
                    { name: "Premiere", url: "go:S10013" },
                    { name: "Comedy", url: "go:S10014" },
                    { name: "Romance", url: "go:S10015" },
                    { name: "Family", url: "go:S10016" },
                    { name: "Thriller", url: "go:S10017" },
                    { name: "Sci-fi", url: "go:S10018" },
                    { name: "Historical", url: "go:S10019" },
                    { name: "Mystery", url: "go:S10020" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["English","24/7"]
            },
            { 
                name: "M4", 
                sources: [
                    { name: "Animation", url: "go:S10031" },
                    { name: "Avengers", url: "go:S10032" },
                    { name: "Batman", url: "go:S10033" },
                    { name: "Harry Potter", url: "go:S10034" },
                    { name: "John Wick", url: "go:S10035" },
                    { name: "Mad Max", url: "go:S10036" },
                    { name: "Spiderman", url: "go:S10037" },
                    { name: "Sci-fi", url: "go:S10038" },
                    { name: "Thriller", url: "go:S10039" },
                    { name: "Action", url: "go:S10040" },
                    { name: "Action", url: "go:S100000001" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Movies",
                description: "T Play",
                languages: ["English","24/7"]
            },
            { 
                name: "CN", 
                sources: [
                    { name: "Hindi", url: "go:S4001" },
                    { name: "Urdu", url: "go:S4002" },
                    { name: "Tamil", url: "go:S4005" },
                    { name: "Telugu", url: "go:S4006" },
                    { name: "English", url: "go:S4003" },
                    { name: "English", url: "go:S4004" },
                    { name: "CN HD+", url: "go:S4007" }
                ], 
                img: "https://i.postimg.cc/QtTxQDfY/cn.jpg", 
                category: "Kids",
                description: "World",
                languages: ["Hindi","Urdu","Tamil","Telugu","English"]
            },
            { 
                name: "Nick", 
                sources: [
                    { name: "Nick Hindi", url: "go:S4061" },
                    { name: "Nick Bengali", url: "go:S4062" },
                    { name: "Nick Tamil", url: "go:S4063" },
                    { name: "Nick Telugu", url: "go:S4064" },
                    { name: "Nick Marathi", url: "go:S4067" },
                    { name: "Nick kannada", url: "go:S4065" },
                    { name: "Nick HD+", url: "go:S4066" }
                ], 
                img: "https://i.postimg.cc/W1gnHqtC/nick.jpg", 
                category: "Kids",
                description: "World",
                languages: ["Hindi","Bengali","Tamil","Telugu","English"]
            },
            { 
                name: "Nick Jr", 
                sources: [
                    { name: "Hindi", url: "go:S4691" },
                    { name: "English", url: "go:S4692" }
                ], 
                img: "https://i.postimg.cc/BvP8G3sq/nickjr.jpg", 
                category: "Kids",
                description: "World",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sonic", 
                sources: [
                    { name: "Hindi", url: "go:S4671" },
                    { name: "Bengali", url: "go:S4672" }
                ], 
                img: "https://i.postimg.cc/RF77YXtj/sonic.jpg", 
                category: "Kids",
                description: "World",
                languages: ["Hindi","Bengali"]
            },
            { 
                name: "Disney Hindi", 
                sources: [
                    { name: "Server 1", url: "go:S4011" },
                    { name: "Server 2", url: "go:S4013" }
                ], 
                img: "https://i.postimg.cc/NFXDvKpR/Disney-Hindi.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Disney English", 
                sources: [
                    { name: "Server 1", url: "go:S4012" }
                ], 
                img: "https://i.postimg.cc/HnLmSC2B/Disney-English.jpg", 
                category: "Kids",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Disney Junior", 
                sources: [
                    { name: "Server 1", url: "go:S4021" }
                ], 
                img: "https://i.postimg.cc/rydMtqDd/Disney-Junior.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Disney XD", 
                sources: [
                    { name: "Server 1", url: "go:S4031" }
                ], 
                img: "https://i.postimg.cc/ZqJ0zbSg/disney.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sony Yay", 
                sources: [
                    { name: "Server 1", url: "go:S4102" },
                    { name: "Server 2", url: "go:S4101" },
                    { name: "Server 3", url: "go:S4103" }
                ], 
                img: "https://i.postimg.cc/1413YzhR/yay.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi","Bengali"]
            },
            { 
                name: "Hungama", 
                sources: [
                    { name: "Server 1", url: "go:S4731" },
                    { name: "Server 2", url: "go:S4732" }
                ], 
                img: "https://exchange4media.gumlet.io/news-photo/118684-Super-Hungama--Logo.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "D Kids", 
                sources: [
                    { name: "Server 1", url: "go:S4131" },
                    { name: "Server 2", url: "go:S4132" }
                ], 
                img: "https://i.postimg.cc/Gt38t22F/d-kids.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Pogo", 
                sources: [
                    { name: "Server 1", url: "go:S1662" },
                    { name: "Server 2", url: "go:S1661" }
                ], 
                img: "https://i.postimg.cc/pXy9hWKF/pogo.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "ETV Bal Bharat", 
                sources: [
                    { name: "Server 1", url: "go:S4721" }
                ], 
                img: "https://yt3.googleusercontent.com/NBgAvACr755c2gd5EK0lKKmeqEnMivDhF2FYd399NRfeZzosNkxsgkrjMOdfh5ZBqv2OTXviH3U=s900-c-k-c0x00ffffff-no-rj", 
                category: "Kids",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Green Gold TV", 
                sources: [
                    { name: "Server 1", url: "go:S4151" }
                ], 
                img: "https://i.postimg.cc/RhYVYqWt/green-gold.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Powerkids", 
                sources: [
                    { name: "Server 1", url: "go:S4681" },
                    { name: "Server 2", url: "go:S4682" }
                ], 
                img: "https://i.postimg.cc/gr9v9Tt9/pk.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "TP Toons+", 
                sources: [
                    { name: "Server 1", url: "go:S4711" }
                ], 
                img: "https://i.postimg.cc/rmQd6Mr0/tp-toons.jpg", 
                category: "Kids",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zoo Moo", 
                sources: [
                    { name: "Server 1", url: "go:S4051" }
                ], 
                img: "https://i.postimg.cc/3J0Thmrb/zoo-moo.jpg", 
                category: "Kids",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Animax", 
                sources: [
                    { name: "Server 1", url: "go:S4041" }
                ], 
                img: "https://i.postimg.cc/8PQrRLN8/Animax.png", 
                category: "Kids",
                description: "Korean",
                languages: ["English"]
            },
            { 
                name: "Anime X", 
                sources: [
                    { name: "Server 1", url: "go:S1621" }
                ], 
                img: "https://i.postimg.cc/jdMbr5cW/animeX.jpg", 
                category: "Kids",
                description: "Japanese",
                languages: ["English"]
            },
            { 
                name: "Minimax", 
                sources: [
                    { name: "Server 1", url: "go:S4121" },
                    { name: "Server 2", url: "go:S4122" }
                ], 
                img: "https://i.postimg.cc/xC2TbNWn/minimax.jpg", 
                category: "Kids",
                description: "Pakistan",
                languages: ["Urdu"]
            },
            { 
                name: "Rongeen TV", 
                sources: [
                    { name: "Server 1", url: "go:S4111" },
                    { name: "Server 2", url: "go:S4112" },
                    { name: "Server 3", url: "go:S4113" }
                ], 
                img: "https://i.postimg.cc/Z5bg3drK/rongeen.jpg", 
                category: "Kids",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Duronto", 
                sources: [
                    { name: "player 1", url: "go:S4142" },
                    { name: "player 2", url: "go:S4141" }
                ], 
                img: "https://i.postimg.cc/4xgPNDrf/duronto.jpg", 
                category: "Kids",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Gopal Bhar", 
                sources: [
                    { name: "India", url: "go:S006" },
                ], 
                img: "https://i.postimg.cc/9fYTHGdr/gopal-var.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Bengali","24/7"]
            },
            { 
                name: "Bantul The Great", 
                sources: [
                    { name: "India", url: "go:S008" },
                ], 
                img: "https://i.postimg.cc/kgHkCbcM/Bantul-The-Great.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Bengali","24/7"]
            },
            { 
                name: "Motu Patlu", 
                sources: [
                    { name: "India", url: "go:S004" },
                ], 
                img: "https://i.postimg.cc/B6m5WxT5/Motu-Patlu.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Ninja Hattori", 
                sources: [
                    { name: "India", url: "go:S014" },
                ], 
                img: "https://i.postimg.cc/yNk3Jwck/ninja-hattory.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Doraemon", 
                sources: [
                    { name: "India", url: "go:S010" },
                ], 
                img: "https://i.postimg.cc/kXLg1Bbd/Doraemon.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Oggy and the Cockroaches", 
                sources: [
                    { name: "India", url: "go:S023" },
                ], 
                img: "https://i.postimg.cc/rpm2QqXQ/oggy.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Jungle Book", 
                sources: [
                    { name: "India", url: "go:S4071" },
                ], 
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWHwxLoNifJmfg_l-i380r8xqKhPheAuYLQ&s", 
                category: "Kids",
                description: "24/7",
                languages: ["Hindi","24/7"]
            },
            { 
                name: "Masha and the Bear", 
                sources: [
                    { name: "Asia", url: "go:S4081" }
                ], 
                img: "https://i.ytimg.com/vi/Z4MlrXWrMZ8/maxresdefault.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["English","24/7"]
            },
            { 
                name: "Dragon Ball", 
                sources: [
                    { name: "Asia", url: "go:S1611" }
                ], 
                img: "https://clipart-library.com/8300/1931/free-vector-dragon-ball-z-0_037372_dragon-ball-z-0.png", 
                category: "Kids",
                description: "24/7",
                languages: ["24/7"]
            },
            { 
                name: "Tom And Jerry", 
                sources: [
                    { name: "Asia", url: "go:S4091" },
                ], 
                img: "https://i.postimg.cc/xd5gYkM8/tom-jerry.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["English","24/7"]
            },
            { 
                name: "PAW Patrol", 
                sources: [
                    { name: "Asia", url: "go:S10001" },
                ], 
                img: "https://i.postimg.cc/Qt2rgnCK/Raw-petrol.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["English","24/7"]
            },
            { 
                name: "Teen Titans Go", 
                sources: [
                    { name: "Asia", url: "go:S10021" },
                ], 
                img: "https://i.postimg.cc/HkNHsxmX/Teen-Titans-Go.jpg", 
                category: "Kids",
                description: "24/7",
                languages: ["English","24/7"]
            },
            { 
                name: "Sangsad TV", 
                sources: [
                    { name: "Server 1", url: "go:S6321" }
                ], 
                img: "https://i.postimg.cc/RVR9YF6Y/sangsad.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "BTV News", 
                sources: [
                    { name: "Server 1", url: "go:S6591" },
                    { name: "Server 2", url: "go:S6592" }
                ], 
                img: "https://i.postimg.cc/7hdvpw4F/btv-news.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Somoy TV", 
                sources: [
                    { name: "Server 1", url: "go:S6001" },
                    { name: "Server 2", url: "go:S6002" }
                ], 
                img: "https://i.postimg.cc/ZqJPnTLC/somoy-tv.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Jamuna TV", 
                sources: [
                    { name: "Server 1", url: "go:S6011" },
                    { name: "Server 2", url: "go:S6012" }
                ], 
                img: "https://i.postimg.cc/dtR7Gh4t/jamuna-tv.png", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Independent TV", 
                sources: [
                    { name: "Server 1", url: "go:S6021" },
                    { name: "Server 2", url: "go:S6022" }
                ], 
                img: "https://i.postimg.cc/qqcy4SCc/independent.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Channel 24", 
                sources: [
                    { name: "Server 1", url: "go:S6031" },
                    { name: "Server 2", url: "go:S6032" }
                ], 
                img: "https://i.postimg.cc/GmDrtRmg/channel-24.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "News 24", 
                sources: [
                    { name: "Server 1", url: "go:S6041" }
                ], 
                img: "https://i.postimg.cc/bNJny8Qw/news-24.png", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Ekattor TV", 
                sources: [
                    { name: "Server 1", url: "go:S6051" },
                    { name: "Server 2", url: "go:S6052" }
                ], 
                img: "https://i.postimg.cc/CKtQqBr5/ekattor-tv.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "ATN News", 
                sources: [
                    { name: "Server 1", url: "go:S6061" },
                    { name: "Server 2", url: "go:S6062" }
                ], 
                img: "https://i.postimg.cc/d1fwDVrB/atn-news.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "Ekhon", 
                sources: [
                    { name: "Server 1", url: "go:S6371" }
                ], 
                img: "https://i.postimg.cc/DZPzr6cm/ekhon.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "ABC News", 
                sources: [
                    { name: "Server 1", url: "go:S6231" }
                ], 
                img: "https://i.postimg.cc/9FfLHB9J/abc-news-nepali.jpg", 
                category: "News",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "DBC News", 
                sources: [
                    { name: "Server 1", url: "go:S6361" }
                ], 
                img: "https://i.postimg.cc/pTfm0RPW/dbc-news.jpg", 
                category: "News",
                description: "Bangladesh",
                languages: ["Bengali"]
            },
            { 
                name: "BBC News", 
                sources: [
                    { name: "USA", url: "go:S6071" },
                    { name: "Asia", url: "go:S6072" },
                    { name: "Arabic", url: "go:S6073" },
                    { name: "Persian", url: "go:S6074" }
                ], 
                img: "https://i.postimg.cc/B6F4LGp8/bbc-news.jpg", 
                category: "News",
                description: "London",
                languages: ["English","Arabic"]
            },
            { 
                name: "Al Jazeera", 
                sources: [
                    { name: "English", url: "go:S6081" },
                    { name: "Arabic", url: "go:S6082" },
                    { name: "Mubasher", url: "go:S6083" },
                    { name: "Mubasher24", url: "go:S6084" },
                    { name: "Mubasher24", url: "go:S6085" }
                ], 
                img: "https://landportal.org/sites/default/files/2023-05/Aljazeera-logo-English-1024x768.png", 
                category: "News",
                description: "Qatar",
                languages: ["English","Arabic"]
            },
            { 
                name: "CGTN", 
                sources: [
                    { name: "English", url: "go:S6091" },
                    { name: "Arabic", url: "go:S6092" },
                    { name: "Español", url: "go:S6093" },
                    { name: "Français", url: "go:S6094" },
                    { name: "Русский", url: "go:S6095" }
                ], 
                img: "https://web-summit-avenger.imgix.net/production/logos/original/c7b51ad526fe3d1f4f299f1d802383268c903106.png?ixlib=rb-3.4.0&auto=format&fit=fill&fill=solid&fill-color=white&w=600&h=600", 
                category: "News",
                description: "China",
                languages: ["English","Arabic"]
            },
            { 
                name: "DD News", 
                sources: [
                    { name: "English", url: "go:S6101" }
                ], 
                img: "https://i.postimg.cc/c4y3Vd73/dd.png", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Times Now", 
                sources: [
                    { name: "Mirror Now", url: "go:S6111" },
                    { name: "ET Now Swadesh", url: "go:S6112" },
                    { name: "Times Now Navbharat", url: "go:S6113" }
                ], 
                img: "https://i.postimg.cc/tJYXw89g/times-now.png", 
                category: "News",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "News18 India", 
                sources: [
                    { name: "Server 1", url: "go:S6121" }
                ], 
                img: "https://i.postimg.cc/CMtcbQn7/news18india.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "News18 Odia", 
                sources: [
                    { name: "Server 1", url: "go:S6122" }
                ], 
                img: "https://i.postimg.cc/d3Tp8PqN/news-18-odiya.jpg", 
                category: "News",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "News18 Urdu", 
                sources: [
                    { name: "Server 1", url: "go:S6123" }
                ], 
                img: "https://i.postimg.cc/nVRqmjgb/news-18-urdu.jpg", 
                category: "News",
                description: "India",
                languages: ["Urdu"]
            },
            { 
                name: "News18 Kerala", 
                sources: [
                    { name: "Server 1", url: "go:S6124" }
                ], 
                img: "https://i.postimg.cc/HL8T6KsB/news-18-kerala.jpg", 
                category: "News",
                description: "India",
                languages: ["Malayalam"]
            },
            { 
                name: "News18 Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S6125" }
                ], 
                img: "https://i.postimg.cc/Hnmcp1sq/news-18-bangla.jpg", 
                category: "News",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "News18 Lokmat", 
                sources: [
                    { name: "Server 1", url: "go:S6126" }
                ], 
                img: "https://i.postimg.cc/mZShQqrg/lokmat.jpg", 
                category: "News",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "News18 Gujarati", 
                sources: [
                    { name: "Server 1", url: "go:S6127" }
                ], 
                img: "https://i.postimg.cc/YqknP4k1/gujrati.jpg", 
                category: "News",
                description: "India",
                languages: ["Gujarati"]
            },
            { 
                name: "News18 Kannada", 
                sources: [
                    { name: "Server 1", url: "go:S6122" }
                ], 
                img: "https://i.postimg.cc/Bbv88cHw/kananda.jpg", 
                category: "News",
                description: "India",
                languages: ["Kannada"]
            },
            { 
                name: "News18 Rajasthan", 
                sources: [
                    { name: "Server 1", url: "go:S6129" }
                ], 
                img: "https://i.postimg.cc/1XydD43H/rajasthan-news-18.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "News18 Tamil Nadu", 
                sources: [
                    { name: "Server 1", url: "go:S6130" }
                ], 
                img: "https://i.postimg.cc/FRTynKxM/news-18-tamil.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "News18 Bihar Jharkhand", 
                sources: [
                    { name: "Server 1", url: "go:S6131" }
                ], 
                img: "https://i.postimg.cc/mZwLJHCT/news-18-bihar.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "News18 Assam Northeast", 
                sources: [
                    { name: "Server 1", url: "go:S6131" }
                ], 
                img: "https://i.postimg.cc/QtcQhbhj/southeast.jpg", 
                category: "News",
                description: "India",
                languages: ["Assamese","English"]
            },
            { 
                name: "News18 Punjab Haryana Himachal", 
                sources: [
                    { name: "Server 1", url: "go:S6133" }
                ], 
                img: "https://i.postimg.cc/9QbSJgVd/news-18-punjab-hariyana.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi","Punjabi"]
            },
            { 
                name: "News18 Uttar Pradesh Uttarakhand", 
                sources: [
                    { name: "Server 1", url: "go:S6134" }
                ], 
                img: "https://i.postimg.cc/rwTsSsFS/News18-Uttar-Pradesh-Uttarakhand.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "News18 Madhya Pradesh Chhattisgarh", 
                sources: [
                    { name: "Server 1", url: "go:S6135" }
                ], 
                img: "https://i.postimg.cc/fRYXN1k9/News18-Madhya-Pradesh-Chhattisgarh.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "CNBC TV18", 
                sources: [
                    { name: "Server 1", url: "go:S6136" }
                ], 
                img: "https://i.postimg.cc/sfZ0WDNt/CNBC-TV18.jpg", 
                category: "News",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "CNBC Awaaz", 
                sources: [
                    { name: "Server 1", url: "go:S6137" }
                ], 
                img: "https://i.postimg.cc/zv5t5TFM/CNBC-Awaaz.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "CNBC Bajar", 
                sources: [
                    { name: "Server 1", url: "go:S6138" }
                ], 
                img: "https://i.postimg.cc/PxdVnm44/CNBC-Bajar2.jpg", 
                category: "News",
                description: "India",
                languages: ["Gujarati"]
            },
            { 
                name: "CNN News18", 
                sources: [
                    { name: "Server 1", url: "go:S6139" }
                ], 
                img: "https://i.postimg.cc/rmKcx00z/CNN-News18.jpg", 
                category: "News",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "Zee News", 
                sources: [
                    { name: "Server 1", url: "go:S6141" }
                ], 
                img: "https://i.postimg.cc/BZ7pm88Z/Zee-News.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Bharat", 
                sources: [
                    { name: "Server 1", url: "go:S6142" }
                ], 
                img: "https://i.postimg.cc/15Hqv273/zee-varat.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee 24 Taas", 
                sources: [
                    { name: "Server 1", url: "go:S6143" }
                ], 
                img: "https://i.postimg.cc/Bv3RJ8B3/Zee-24-Taas.jpg", 
                category: "News",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "Zee 24 Kalak", 
                sources: [
                    { name: "Server 1", url: "go:S6144" }
                ], 
                img: "https://i.postimg.cc/HsRVvm0K/Zee-24-Kalak.jpg", 
                category: "News",
                description: "India",
                languages: ["Gujarati"]
            },
            { 
                name: "Zee 24 Ghanta", 
                sources: [
                    { name: "Server 1", url: "go:S6145" }
                ], 
                img: "https://i.postimg.cc/ZKV1JYD4/Zee-24-Ghanta.jpg", 
                category: "News",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Zee Rajasthan", 
                sources: [
                    { name: "Server 1", url: "go:S6146" }
                ], 
                img: "https://i.postimg.cc/cCX0qRnr/Zee-Rajasthan.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Tamil News", 
                sources: [
                    { name: "Server 1", url: "go:S6147" }
                ], 
                img: "https://i.postimg.cc/LXSJ2Vn2/Zee-Tamil-News-jpg2.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Zee Bihar Jharkhand", 
                sources: [
                    { name: "Server 1", url: "go:S6148" }
                ], 
                img: "https://i.postimg.cc/593sc76N/Zee-Bihar-Jharkhand.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Delhi NCR Haryana", 
                sources: [
                    { name: "Server 1", url: "go:S6149" }
                ], 
                img: "https://i.postimg.cc/59hLR8mC/Zee-Delhi-NCR-Haryana.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Punjabi HP Haryana", 
                sources: [
                    { name: "Server 1", url: "go:S6150" }
                ], 
                img: "https://i.postimg.cc/YSKP24kz/Zee-Punjabi-HP-Haryana.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi","Punjabi"]
            },
            { 
                name: "Zee News UP Uttarakhand", 
                sources: [
                    { name: "Server 1", url: "go:S6151" }
                ], 
                img: "https://i.postimg.cc/pVCM3gbJ/Zee-News-UP-Uttarakhand.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee News MP Chattisgarh", 
                sources: [
                    { name: "Server 1", url: "go:S6152" }
                ], 
                img: "https://i.postimg.cc/zvK7Ym3g/Zee-News-MP-Chattisgarh.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Business", 
                sources: [
                    { name: "Server 1", url: "go:S6153" }
                ], 
                img: "https://i.postimg.cc/wTSzkDYr/Zee-Business.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Zee Salaam", 
                sources: [
                    { name: "Server 1", url: "go:S6154" }
                ], 
                img: "https://i.postimg.cc/dtmMGp6g/Zee-Salaam.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi","Urdu"]
            },
            { 
                name: "Zee WION", 
                sources: [
                    { name: "Server 1", url: "go:S6155" }
                ], 
                img: "https://i.postimg.cc/j5sndG8K/zee-wion.jpg", 
                category: "News",
                description: "India",
                languages: ["English"]
            },
            { 
                name: "ABP News", 
                sources: [
                    { name: "Server 1", url: "go:S6161" }
                ], 
                img: "https://i.postimg.cc/W3kpVSV4/ABP-News.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "ABP Ananda", 
                sources: [
                    { name: "Server 1", url: "go:S6162" }
                ], 
                img: "https://i.postimg.cc/QtsYNdGc/ABP-Ananda.jpg", 
                category: "News",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "ABP Asmita", 
                sources: [
                    { name: "Server 1", url: "go:S6163" }
                ], 
                img: "https://i.postimg.cc/pL3X6gbX/ABP-Asmita.jpg", 
                category: "News",
                description: "India",
                languages: ["Gujarati"]
            },
            { 
                name: "ABP Ganga", 
                sources: [
                    { name: "Server 1", url: "go:S6164" }
                ], 
                img: "https://i.postimg.cc/8zRn26xp/ABP-Ganga.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "ABP Majha", 
                sources: [
                    { name: "Server 1", url: "go:S6165" }
                ], 
                img: "https://i.postimg.cc/pXtSqC18/ABP-Majha.jpg", 
                category: "News",
                description: "India",
                languages: ["Marathi"]
            },
            { 
                name: "ABP Sanjha", 
                sources: [
                    { name: "Server 1", url: "go:S6166" }
                ], 
                img: "https://i.postimg.cc/4y8h7BY0/ABP-Sanjha.jpg", 
                category: "News",
                description: "India",
                languages: ["Punjabi"]
            },
            { 
                name: "Aaj Tak", 
                sources: [
                    { name: "Aaj Tak", url: "go:S6351" },
                    { name: "Aaj Tak HD", url: "go:S6352" }
                ], 
                img: "https://i.postimg.cc/0jjjL9vR/aaj-tak.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "TV9 Bharatvarsh", 
                sources: [
                    { name: "Server 1", url: "go:S6341" }
                ], 
                img: "https://i.postimg.cc/BQZBnFS4/tv9-bharatbarsha.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Bharat Samachar", 
                sources: [
                    { name: "Server 1", url: "go:S6331" },
                    { name: "Server 2", url: "go:S6332" }
                ], 
                img: "https://i.postimg.cc/59D0V9p8/bharat-samachar.jpg", 
                category: "News",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Odisha TV", 
                sources: [
                    { name: "Server 1", url: "go:S6191" }
                ], 
                img: "https://i.postimg.cc/c4CCvNk5/odisha.jpg", 
                category: "News",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Kalinga TV", 
                sources: [
                    { name: "Server 1", url: "go:S6201" }
                ], 
                img: "https://i.postimg.cc/VksxfY7d/kalinga.jpg", 
                category: "News",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Nandighosha TV", 
                sources: [
                    { name: "Server 1", url: "go:S6211" }
                ], 
                img: "https://i.postimg.cc/d3xyhQ2w/nandughosha.jpg", 
                category: "News",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "Avenues TV", 
                sources: [
                    { name: "Server 1", url: "go:S6221" }
                ], 
                img: "https://i.postimg.cc/8CFJwHTt/avenues.jpg", 
                category: "News",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "NTV News", 
                sources: [
                    { name: "Server 1", url: "go:S6241" }
                ], 
                img: "https://i.postimg.cc/263gW5sF/ntv-plus.jpg", 
                category: "News",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Sagarmatha", 
                sources: [
                    { name: "Server 1", url: "go:S6251" }
                ], 
                img: "https://i.postimg.cc/kGZCvg8S/sagarmatha.jpg", 
                category: "News",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "Mountain", 
                sources: [
                    { name: "Server 1", url: "go:S6261" }
                ], 
                img: "https://i.postimg.cc/gJfcRTSt/mountain.jpg", 
                category: "News",
                description: "Nepal",
                languages: ["Nepali"]
            },
            { 
                name: "DD Tamil", 
                sources: [
                    { name: "Server 1", url: "go:S6271" }
                ], 
                img: "https://i.postimg.cc/pVDgHvDM/dd-tamil.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "News 7 Tamil", 
                sources: [
                    { name: "Server 1", url: "go:S6281" }
                ], 
                img: "https://i.postimg.cc/BbY50tpC/news7-tamil.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Polimer News", 
                sources: [
                    { name: "Server 1", url: "go:S6291" }
                ], 
                img: "https://i.postimg.cc/wvs3vM9V/polimer-news.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Puthiya News", 
                sources: [
                    { name: "Server 1", url: "go:S6301" }
                ], 
                img: "https://i.postimg.cc/FRcsv6xC/Puthiya-News.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Good News", 
                sources: [
                    { name: "Server 1", url: "go:S6311" }
                ], 
                img: "https://i.postimg.cc/HxGd62Cw/good-news-tamil.jpg", 
                category: "News",
                description: "India",
                languages: ["Tamil"]
            },
            { 
                name: "Safari TV", 
                sources: [
                    { name: "Server 1", url: "go:S7401" }
                ], 
                img: "https://i.postimg.cc/wvGnMgcC/safari.jpg", 
                category: "News",
                description: "India",
                languages: ["Malayalam"]
            },
            { 
                name: "ETV", 
                sources: [
                    { name: "Telangana", url: "go:S6171" },
                    { name: "Andhra Pradesh", url: "go:S6181" }
                ], 
                img: "https://i.postimg.cc/5tqn3827/etv.jpg", 
                category: "News",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Animal Planet", 
                sources: [
                    { name: "Hindi", url: "go:S7041" },
                    { name: "English", url: "go:S7043" },
                    { name: "English", url: "go:S7042" },
                ], 
                img: "https://i.postimg.cc/RFm9McDx/animal-planet.png", 
                category: "Infotainment",
                description: "World",
                languages: ["English","Hindi"]
            },
            { 
                name: "Discover Pakistan", 
                sources: [
                    { name: "Server 1", url: "go:S7121" }
                ], 
                img: "https://i.postimg.cc/cH9LLc8m/d-pak.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["Urdu"]
            },
            { 
                name: "Discovery Asia", 
                sources: [
                    { name: "Server 1", url: "go:S7111" }
                ], 
                img: "https://i.postimg.cc/7hkmbg85/d-asia.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Discovery", 
                sources: [
                    { name: "Server 1", url: "go:S7003" },
                    { name: "Server 2", url: "go:S7001" },
                    { name: "Server 3", url: "go:S7002" },
                    { name: "Server 4", url: "go:S7004" },
                    { name: "Server 5", url: "go:S7005" }
                ], 
                img: "https://i.postimg.cc/SjFpx6XX/discovery.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["Hindi","English","Bengali"]
            },
            { 
                name: "Discovery Science", 
                sources: [
                    { name: "Server 1", url: "go:S7101" },
                    { name: "Server 2", url: "go:S7102" },
                    { name: "Server 3", url: "go:S7103" }
                ], 
                img: "https://i.postimg.cc/vZMgj4YQ/d-sci.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Discovery Turbo", 
                sources: [
                    { name: "Server 1", url: "go:S7081" },
                    { name: "Server 2", url: "go:S7082" },
                    { name: "Server 3", url: "go:S7083" }
                ], 
                img: "https://i.postimg.cc/0ySHyHDk/d-turbo.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Investigation Discovery", 
                sources: [
                    { name: "Server 1", url: "go:S7091" },
                    { name: "Server 2", url: "go:S7092" },
                    { name: "Server 3", url: "go:S7093" },
                    { name: "Server 4", url: "go:S7094" }
                ], 
                img: "https://i.postimg.cc/cHKNTBPr/id.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["Hindi","English"]
            },
            { 
                name: "History TV", 
                sources: [
                    { name: "Hindi", url: "go:S7011" },
                    { name: "Hindi 4k", url: "go:S7012" },
                    { name: "18 Hindi", url: "go:S7013" },
                    { name: "18 English", url: "go:S7014" }
                ], 
                img: "https://i.postimg.cc/LsC3pgKH/history.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["Hindi","English"]
            },
            { 
                name: "National Geographic", 
                sources: [
                    { name: "English", url: "go:S7061" },
                    { name: "Bengali", url: "go:S7062" },
                    { name: "Hindi", url: "go:S7063" }
                ], 
                img: "https://i.postimg.cc/05pWTnLq/nat-geo.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["Bengali","English","Hindi"]
            },
            { 
                name: "National Geographic Wild", 
                sources: [
                    { name: "Hindi", url: "go:S7133" },
                    { name: "English IN", url: "go:S7131" },
                    { name: "English US", url: "go:S7132" }
                ], 
                img: "https://i.postimg.cc/9MHP15XD/nat-geo-wild.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English","Hindi"]
            },
            { 
                name: "Ancient Aliens", 
                sources: [
                    { name: "Hindi", url: "go:S7161" }
                ], 
                img: "https://i.postimg.cc/bvw9Zk8G/ancient-allien.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Travelxp", 
                sources: [
                    { name: "English", url: "go:S7032" },
                    { name: "Hindi", url: "go:S7031" },
                    { name: "German", url: "go:S7033" },
                    { name: "French", url: "go:S70314" }
                ], 
                img: "https://i.postimg.cc/zGdP4tPR/travelxp.png", 
                category: "Infotainment",
                description: "World",
                languages: ["English","Hindi"]
            },
            { 
                name: "TLC", 
                sources: [
                    { name: "Server 1", url: "go:S7071" },
                    { name: "Server 2", url: "go:S7072" },
                    { name: "Server 3", url: "go:S7073" }
                ], 
                img: "https://i.postimg.cc/63p7Yght/tlc-1.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "Sony BBC Earth", 
                sources: [
                    { name: "Server 1", url: "go:S7051" },
                    { name: "Server 2", url: "go:S7052" }
                ], 
                img: "https://i.postimg.cc/tgCZBZzq/sbe.jpg", 
                category: "Infotainment",
                description: "World",
                languages: ["English"]
            },
            { 
                name: "BBC Earth", 
                sources: [
                    { name: "Server 1", url: "go:S7181" }
                ], 
                img: "https://i.postimg.cc/HkdbcXH0/bbcearth.jpg", 
                category: "Infotainment",
                description: "UK",
                languages: ["English"]
            },
            { 
                name: "CGTN Documentary", 
                sources: [
                    { name: "Server 1", url: "go:S7191" }
                ], 
                img: "https://i.postimg.cc/7ZKXqmzp/cgtn-docu.jpg", 
                category: "Infotainment",
                description: "China",
                languages: ["English"]
            },
            { 
                name: "HGTV", 
                sources: [
                    { name: "Server 1", url: "go:S7231" }
                ], 
                img: "https://i.postimg.cc/tCVphVLB/hgtv.jpg", 
                category: "Infotainment",
                description: "China",
                languages: ["English"]
            },
            { 
                name: "House of Crime", 
                sources: [
                    { name: "Server 1", url: "go:S7261" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN4600004HW_20250416T005413SQUARE.png", 
                category: "Infotainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "XXTreme Jobs", 
                sources: [
                    { name: "Server 1", url: "go:S7561" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN46000011Q_20250205T004626SQUARE.png", 
                category: "Infotainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Wild Flix", 
                sources: [
                    { name: "Server 1", url: "go:S7551" }
                ], 
                img: "https://tvpnlogopus.samsungcloud.tv/platform/image/sourcelogo/vc/00/02/34/IN460000585_20250416T020413SQUARE.png", 
                category: "Infotainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "60 Days In by A&E", 
                sources: [
                    { name: "Server 1", url: "go:S7151" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Choppertown", 
                sources: [
                    { name: "Server 1", url: "go:S7201" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Deadly Women", 
                sources: [
                    { name: "Server 1", url: "go:S7221" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Crime & Justice", 
                sources: [
                    { name: "Server 1", url: "go:S7211" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "Kenya",
                languages: ["English","Swahili"]
            },
            { 
                name: "Law & Crime", 
                sources: [
                    { name: "Server 1", url: "go:S7301" }
                ], 
                img: "https://i.postimg.cc/4yrp094k/law-and-crime.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Military Times", 
                sources: [
                    { name: "Server 1", url: "go:S7331" }
                ], 
                img: "https://i.postimg.cc/zvBVkXT0/military-time.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Mysteries Xplored", 
                sources: [
                    { name: "Server 1", url: "go:S7341" }
                ], 
                img: "https://i.postimg.cc/k4kgWFXC/myster.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },{ 
                name: "Mystery TV", 
                sources: [
                    { name: "Server 1", url: "go:S7351" }
                ], 
                img: "https://i.postimg.cc/3xPf5kR1/mystery-tv.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Mythbusters", 
                sources: [
                    { name: "Server 1", url: "go:S7361" }
                ], 
                img: "https://i.postimg.cc/CLtVvC3G/my-hub.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Popular Science", 
                sources: [
                    { name: "Server 1", url: "go:S7381" }
                ], 
                img: "https://i.postimg.cc/FzhNb9Jj/popular.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Robot Wars by Mech+", 
                sources: [
                    { name: "Server 1", url: "go:S7391" }
                ], 
                img: "https://i.postimg.cc/FzhNb9Jj/popular.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Love the Planet", 
                sources: [
                    { name: "Server 1", url: "go:S7311" }
                ], 
                img: "https://i.postimg.cc/VLJ8Bbbc/love-the-planet.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Survivor", 
                sources: [
                    { name: "Server 1", url: "go:S7411" }
                ], 
                img: "https://i.postimg.cc/X7GBpL3z/survivor.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Highway Thru Hell", 
                sources: [
                    { name: "Server 1", url: "go:S7241" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "Canada",
                languages: ["English"]
            },
            { 
                name: "Outer Sphere", 
                sources: [
                    { name: "Server 1", url: "go:S7371" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "Canada",
                languages: ["English"]
            },
            { 
                name: "Mayday: Air Disaster", 
                sources: [
                    { name: "Server 1", url: "go:S7321" }
                ], 
                img: "https://i.postimg.cc/Jzqh6SSX/tplay.jpg", 
                category: "Infotainment",
                description: "Canada",
                languages: ["English"]
            },
            { 
                name: "INFAST", 
                sources: [
                    { name: "Server 1", url: "go:S7271" }
                ], 
                img: "https://i.postimg.cc/tCHDqKtW/infast.jpg", 
                category: "Infotainment",
                description: "Netherlands",
                languages: ["English"]
            },
            { 
                name: "INWILD", 
                sources: [
                    { name: "Server 1", url: "go:S7281" }
                ], 
                img: "https://i.postimg.cc/Wp9bTVPn/inwild.jpg", 
                category: "Infotainment",
                description: "Netherlands",
                languages: ["English"]
            },
            { 
                name: "Inside Crime", 
                sources: [
                    { name: "Server 1", url: "go:S7291" }
                ], 
                img: "https://i.postimg.cc/ZKtZT5M7/inside-crimr.jpg", 
                category: "Infotainment",
                description: "Australia",
                languages: ["English"]
            },
            { 
                name: "History Hit", 
                sources: [
                    { name: "Server 1", url: "go:S7251" }
                ], 
                img: "https://i.postimg.cc/dVLH78XH/history.jpg", 
                category: "Infotainment",
                description: "United Kingdom",
                languages: ["English"]
            },
            { 
                name: "Ax Men", 
                sources: [
                    { name: "Server 1", url: "go:S7171" }
                ], 
                img: "https://i.postimg.cc/wTPk17MH/axmen.jpg", 
                category: "Infotainment",
                description: "United States",
                languages: ["English"]
            },
            { 
                name: "Robot Wars by Mech+", 
                sources: [
                    { name: "Server 1", url: "go:S7391" }
                ], 
                img: "https://i.postimg.cc/Jhc1sDGg/mech.jpg", 
                category: "Infotainment",
                description: "UK",
                languages: ["English"]
            },
            { 
                name: "Epic", 
                sources: [
                    { name: "Server 1", url: "go:S7141" }
                ], 
                img: "https://i.postimg.cc/c1X91C4M/epic.jpg", 
                category: "Infotainment",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "ETV Abhiruchi", 
                sources: [
                    { name: "India", url: "go:S7021" }
                ], 
                img: "https://i.postimg.cc/6QMwP2Hc/etv-abhiruchi.jpg", 
                category: "Infotainment",
                description: "India",
                languages: ["Telugu"]
            },
            { 
                name: "Om Bangla", 
                sources: [
                    { name: "Server 1", url: "go:S022" }
                ], 
                img: "https://i.postimg.cc/x1SbvnBv/om-bangla-1.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Bengali"]
            },
            { 
                name: "Aastha", 
                sources: [
                    { name: "Aastha TV", url: "go:S8051" },
                    { name: "Aastha Tamil", url: "go:S8052" },
                    { name: "Aastha Telugu", url: "go:S8053" },
                    { name: "Aastha Kannada", url: "go:S8054" },
                    { name: "Aastha Gujarati", url: "go:S8055" },
                    { name: "Aastha UK", url: "go:S8056" },
                    { name: "Aastha USA", url: "go:S8057" },
                    { name: "Aastha Prime", url: "go:S8058" },
                    { name: "Aastha Bhajan", url: "go:S8059" }
                ], 
                img: "https://i.postimg.cc/yd6Jr1tK/aastha.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Sanskar", 
                sources: [
                    { name: "Sanskar TV", url: "go:S8011" },
                    { name: "Sanskar Digital", url: "go:S8012" },
                    { name: "Sanskar UK", url: "go:S8013" },
                    { name: "Sanskar USA", url: "go:S8014" }
                ], 
                img: "https://i.postimg.cc/Zn0jFRnC/sanskar.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi","English"]
            },
            { 
                name: "Satsang", 
                sources: [
                    { name: "Satsang TV", url: "go:S8021" },
                    { name: "Satsang Digital", url: "go:S8012" }
                ], 
                img: "https://i.postimg.cc/rsDF4K0h/satsang.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Subh", 
                sources: [
                    { name: "Subh", url: "go:S8031" },
                    { name: "Subh Cinema", url: "go:S8032" }
                ], 
                img: "https://i.postimg.cc/CKvRfyrx/subh.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Total Bhakti", 
                sources: [
                    { name: "Server 1", url: "go:S8041" }
                ], 
                img: "https://i.postimg.cc/6pygNCsb/total-bhakti.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Dharm Sandesh", 
                sources: [
                    { name: "Server 1", url: "go:S8061" }
                ], 
                img: "https://i.postimg.cc/zBwjTGW1/ds.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Vedic", 
                sources: [
                    { name: "Server 1", url: "go:S8071" }
                ], 
                img: "https://i.postimg.cc/fRBQfMcm/vedic.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Hindi"]
            },
            { 
                name: "Prarthana TV", 
                sources: [
                    { name: "Server 1", url: "go:S8081" }
                ], 
                img: "https://i.postimg.cc/MG8Q2ZJ4/parthana.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Odia"]
            },
            { 
                name: "ETV Life", 
                sources: [
                    { name: "Server 1", url: "go:S8001" }
                ], 
                img: "https://i.postimg.cc/FszPbfcm/etv-life.jpg", 
                category: "Religious",
                description: "India",
                languages: ["Telugu"]
            }
            
            ];

        // Variables for keyboard navigation
        let currentFocusIndex = -1;
        let focusableElements = [];
        const focusIndicator = document.getElementById('focusIndicator');
        
        // Variables for filtering
        let currentCategory = 'all';
        let currentLanguage = 'all';
        
        // 18+ Content Toggle
        let showAdultContent = false;

        // Sidebar functionality
        const menuToggle = document.getElementById('menuToggle');
        const closeSidebar = document.getElementById('closeSidebar');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebarOverlay');

        function toggleSidebar() {
            sidebar.classList.toggle('open');
            sidebarOverlay.classList.toggle('open');
        }

        menuToggle.addEventListener('click', toggleSidebar);
        closeSidebar.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
        
        // 18+ Toggle Functions
function toggleAdultContent() {
    showAdultContent = !showAdultContent;
    updateAdultToggle();
    updateCategoryBar();
}

function updateAdultToggle() {
    const toggleText = document.getElementById('adultToggleText');
    const toggleIcon = document.querySelector('#toggleAdultContent i');
    
    if (showAdultContent) {
        toggleText.textContent = 'Hide 18+';
        toggleIcon.className = 'fas fa-eye';
    } else {
        toggleText.textContent = 'Show 18+';
        toggleIcon.className = 'fas fa-eye-slash';
    }
}

function updateCategoryBar() {
    const categoryBar = document.getElementById('categoryBar');
    const adultButton = categoryBar.querySelector('[data-category="18+"]');
    
    if (adultButton) {
        if (showAdultContent) {
            adultButton.style.display = 'block';
        } else {
            adultButton.style.display = 'none';
            // If 18+ is currently active, switch to All
            if (currentCategory === '18+') {
                document.querySelector('[data-category="all"]').click();
            }
        }
    }
}

        // Initialize the channel list
        function initChannelList() {
            const channelList = document.getElementById('channelList');
            const channelSearch = document.getElementById('channelSearch');
            const categoryButtons = document.querySelectorAll('#categoryBar .filter-btn');
            const languageBar = document.getElementById('languageBar');
            
            // Initialize language buttons
            updateLanguageButtons();
            
            // Initialize 18+ toggle
    document.getElementById('toggleAdultContent').addEventListener('click', function(e) {
        e.preventDefault();
        toggleAdultContent();
    });
    updateAdultToggle();
    updateCategoryBar();
            
            // Render all channels initially
            renderChannels(filterChannels());
            initKeyboardNavigation();
            
            // Search functionality
            channelSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const filteredChannels = filterChannels().filter(channel => 
                    channel.name.toLowerCase().includes(searchTerm) || 
                    channel.category.toLowerCase().includes(searchTerm) ||
                    channel.description.toLowerCase().includes(searchTerm)
                );
                renderChannels(filteredChannels);
                initKeyboardNavigation();
            });
            
            // Category filter functionality
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    currentCategory = this.getAttribute('data-category');
                    // 18+ category redirect
                    if (currentCategory === '18+') {
                        window.location.href = "go:S0909090";
                        return; // Stop further execution
                    }
                    
                    renderChannels(filterChannels());
                    initKeyboardNavigation();
                });
            });

            // Close overlay button
            document.getElementById('closeOverlayBtn').addEventListener('click', closeOverlay);

            // Add event listener for keyboard navigation
            document.addEventListener('keydown', handleKeyNavigation);
        }
        
        // Update language buttons based on available languages in the current category
        function updateLanguageButtons() {
            const languageBar = document.getElementById('languageBar');
            
            // Get all unique languages from channels in the current category
            const availableLanguages = new Set();
            
             channels.forEach(channel => {
        if (channel.languages) {
            channel.languages.forEach(lang => availableLanguages.add(lang));
        }
    });
            
            // Create language buttons HTML
            let languageButtonsHTML = '<button class="filter-btn active" data-language="all">All</button>';
            
            // Convert Set to Array and sort alphabetically
            const sortedLanguages = Array.from(availableLanguages).sort();
            
            sortedLanguages.forEach(language => {
                languageButtonsHTML += `<button class="filter-btn" data-language="${language}">${language}</button>`;
            });
            
            // Update language bar
            languageBar.innerHTML = languageButtonsHTML;
            
            // Add event listeners to language buttons
            const languageButtons = document.querySelectorAll('#languageBar .filter-btn');
            languageButtons.forEach(button => {
                button.addEventListener('click', function() {
                    languageButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    currentLanguage = this.getAttribute('data-language');
                    renderChannels(filterChannels());
                    initKeyboardNavigation();
                });
            });
        }
        
        // Filter channels based on current category and language
        function filterChannels() {
            return channels.filter(channel => {
                const categoryMatch = currentCategory === 'all' || channel.category === currentCategory;
                const languageMatch = currentLanguage === 'all' || 
                    (channel.languages && channel.languages.includes(currentLanguage));
                return categoryMatch && languageMatch;
            });
        }
        
        // Initialize keyboard navigation
        function initKeyboardNavigation() {
            focusableElements = Array.from(document.querySelectorAll('.channel-item, .filter-btn, .source-btn, .close-btn'));
            updateFocusIndicator();
        }
        
        // Handle keyboard navigation
        function handleKeyNavigation(e) {
            if (document.getElementById('overlay').style.display === 'flex') {
                // Handle navigation in overlay
                handleOverlayNavigation(e);
                return;
            }
            
            switch(e.key) {
                case 'ArrowRight':
                    e.preventDefault();
                    navigateFocus(1);
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    navigateFocus(-1);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    navigateFocus(getGridColumnCount());
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    navigateFocus(-getGridColumnCount());
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (currentFocusIndex >= 0) {
                        focusableElements[currentFocusIndex].click();
                    }
                    break;
                case 'Escape':
                    closeOverlay();
                    break;
            }
        }
        
        // Handle navigation in overlay
        function handleOverlayNavigation(e) {
            const overlayFocusable = Array.from(document.querySelectorAll('.source-btn, .close-btn'));
            const currentOverlayFocus = document.activeElement;
            let currentIndex = overlayFocusable.indexOf(currentOverlayFocus);
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    currentIndex = (currentIndex + 1) % overlayFocusable.length;
                    overlayFocusable[currentIndex].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    currentIndex = (currentIndex - 1 + overlayFocusable.length) % overlayFocusable.length;
                    overlayFocusable[currentIndex].focus();
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeOverlay();
                    break;
            }
        }
        
        // Navigate focus
        function navigateFocus(direction) {
            if (focusableElements.length === 0) return;
            
            currentFocusIndex = (currentFocusIndex + direction + focusableElements.length) % focusableElements.length;
            focusableElements[currentFocusIndex].focus();
            updateFocusIndicator();
        }
        
        // Update focus indicator position
        function updateFocusIndicator() {
            if (currentFocusIndex >= 0 && currentFocusIndex < focusableElements.length) {
                const focusedElement = focusableElements[currentFocusIndex];
                const rect = focusedElement.getBoundingClientRect();
                
                focusIndicator.style.display = 'block';
                focusIndicator.style.width = `${rect.width + 8}px`;
                focusIndicator.style.height = `${rect.height + 8}px`;
                focusIndicator.style.top = `${rect.top + window.scrollY - 4}px`;
                focusIndicator.style.left = `${rect.left + window.scrollX - 4}px`;
            } else {
                focusIndicator.style.display = 'none';
            }
        }
        
        // Get grid column count for keyboard navigation
        function getGridColumnCount() {
            const channelList = document.getElementById('channelList');
            const computedStyle = window.getComputedStyle(channelList);
            return parseInt(computedStyle.gridTemplateColumns.split(' ').length);
        }
        
        // Render channels to the list
        function renderChannels(channelsToRender) {
            const channelList = document.getElementById('channelList');
            const channelCount = document.getElementById('channelCount');
            
            channelList.innerHTML = '';
            channelCount.textContent = `${channelsToRender.length} channels available`;
            
            channelsToRender.forEach(channel => {
                const channelItem = document.createElement('div');
                channelItem.className = 'channel-item';
                channelItem.tabIndex = 0;
                
                const sourceCount = channel.sources.length;
                const sourceText = sourceCount === 1 ? '1 Source' : `${sourceCount} Sources`;
                
                channelItem.innerHTML = `
                    <div class="channel-img">
                        <img src="${channel.img}" alt="${channel.name}" loading="lazy">
                        <div class="source-badge">
                            <i class="fas fa-satellite-dish"></i> ${sourceCount}
                        </div>
                    </div>
                    <div class="channel-info">
                        <div class="channel-name-container">
                            <div class="channel-name">${channel.name}</div>
                        </div>
                        <div class="channel-category">${channel.category} • ${channel.description}</div>
                    </div>
                `;
                 // Category click event
        channelItem.addEventListener("click", () => {
            if (channel.category === "18+") {
                window.location.href = "go:S0909090"; 
            } else {
                showOverlay(channel);
            }
        });
        
                channelList.appendChild(channelItem);
            });
        }
        
        // Show overlay with channel sources
        function showOverlay(channel) {
            const overlay = document.getElementById('overlay');
            const overlayLogo = document.getElementById('overlayLogo');
            const overlayTitle = document.getElementById('overlayTitle');
            const overlaySubtitle = document.getElementById('overlaySubtitle');
            const overlaySources = document.getElementById('overlaySources');
            
            overlayLogo.src = channel.img;
            overlayTitle.textContent = channel.name;
            overlaySubtitle.textContent = `${channel.category} • ${channel.description}`;
            
            overlaySources.innerHTML = '';
            
            channel.sources.forEach(source => {
                const sourceBtn = document.createElement('a');
                sourceBtn.className = 'source-btn';
                sourceBtn.href = source.url;
                sourceBtn.target = '_blank';
                sourceBtn.tabIndex = 0;
                
                sourceBtn.innerHTML = `
                    <div class="source-name">${source.name}</div>
                    <div class="source-action">
                        <span>Play</span>
                        <i class="fas fa-play-circle"></i>
                    </div>
                `;
                
                overlaySources.appendChild(sourceBtn);
            });
            
            overlay.style.display = 'flex';
            
            // Focus on the first source button
            setTimeout(() => {
                const firstSourceBtn = document.querySelector('.source-btn');
                if (firstSourceBtn) {
                    firstSourceBtn.focus();
                }
            }, 100);
        }
        
        // Close overlay
        function closeOverlay() {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'none';
            
            // Return focus to the last focused element
            if (currentFocusIndex >= 0 && currentFocusIndex < focusableElements.length) {
                focusableElements[currentFocusIndex].focus();
            }
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', initChannelList);
