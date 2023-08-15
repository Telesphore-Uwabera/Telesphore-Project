!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).spacetime = t()
}(this, (function() {
    "use strict";
    const e = (e,t,n)=>{
        const [a,r] = e.split("/")
          , [o,i] = r.split(":");
        return Date.UTC(n, a - 1, o, i) - 36e5 * t
    }
    ;
    var t = (t,n,a,r,o)=>{
        const i = new Date(t).getUTCFullYear()
          , s = e(n, o, i)
          , u = e(a, r, i);
        return t >= s && t < u
    }
    ;
    var n = e=>{
        let n = e.timezones[e.tz];
        if (void 0 === n)
            return console.warn("Warning: couldn't find timezone " + e.tz),
            0;
        if (void 0 === n.dst)
            return n.offset;
        let a = n.offset
          , r = n.offset + 1;
        "n" === n.hem && (r = a - 1);
        let o = n.dst.split("->");
        return !0 === t(e.epoch, o[0], o[1], a, r) ? a : r
    }
      , a = {
        "9|s": "2/dili,2/jayapura",
        "9|n": "2/chita,2/khandyga,2/pyongyang,2/seoul,2/tokyo,2/yakutsk,11/palau,japan,rok",
        "9.5|s|04/02:03->10/01:02": "4/adelaide,4/broken_hill,4/south,4/yancowinna",
        "9.5|s": "4/darwin,4/north",
        "8|s|03/13:01->10/02:00": "12/casey",
        "8|s": "2/kuala_lumpur,2/makassar,2/singapore,4/perth,2/ujung_pandang,4/west,singapore",
        "8|n": "2/brunei,2/choibalsan,2/hong_kong,2/irkutsk,2/kuching,2/macau,2/manila,2/shanghai,2/taipei,2/ulaanbaatar,2/chongqing,2/chungking,2/harbin,2/macao,2/ulan_bator,hongkong,prc,roc",
        "8.75|s": "4/eucla",
        "7|s": "12/davis,2/jakarta,9/christmas",
        "7|n": "2/bangkok,2/barnaul,2/hovd,2/krasnoyarsk,2/novokuznetsk,2/novosibirsk,2/phnom_penh,2/pontianak,2/ho_chi_minh,2/tomsk,2/vientiane,2/saigon",
        "6|s": "12/vostok",
        "6|n": "2/almaty,2/bishkek,2/dhaka,2/omsk,2/qyzylorda,2/qostanay,2/thimphu,2/urumqi,9/chagos,2/dacca,2/kashgar,2/thimbu",
        "6.5|n": "2/yangon,9/cocos,2/rangoon",
        "5|s": "12/mawson,9/kerguelen",
        "5|n": "2/aqtau,2/aqtobe,2/ashgabat,2/atyrau,2/dushanbe,2/karachi,2/oral,2/samarkand,2/tashkent,2/yekaterinburg,9/maldives,2/ashkhabad",
        "5.75|n": "2/kathmandu,2/katmandu",
        "5.5|n": "2/kolkata,2/colombo,2/calcutta",
        "4|s": "9/reunion",
        "4|n": "2/baku,2/dubai,2/muscat,2/tbilisi,2/yerevan,8/astrakhan,8/samara,8/saratov,8/ulyanovsk,8/volgograd,9/mahe,9/mauritius,2/volgograd",
        "4.5|n": "2/kabul",
        "3|s": "12/syowa,9/antananarivo",
        "3|n|04/29:02->10/28:02": "2/gaza,2/hebron",
        "3|n|03/26:03->10/29:04": "2/famagusta,2/nicosia,8/athens,8/bucharest,8/helsinki,8/kyiv,8/mariehamn,8/riga,8/sofia,8/tallinn,8/uzhgorod,8/vilnius,8/zaporozhye,8/nicosia,8/kiev",
        "3|n|03/26:02->10/29:03": "8/chisinau,8/tiraspol",
        "3|n|03/26:00->10/28:24": "2/beirut",
        "3|n|03/24:02->10/29:02": "2/jerusalem,2/tel_aviv,israel",
        "3|n": "0/addis_ababa,0/asmara,0/asmera,0/dar_es_salaam,0/djibouti,0/juba,0/kampala,0/mogadishu,0/nairobi,2/aden,2/amman,2/baghdad,2/bahrain,2/damascus,2/kuwait,2/qatar,2/riyadh,8/istanbul,8/kirov,8/minsk,8/moscow,8/simferopol,9/comoro,9/mayotte,2/istanbul,turkey,w-su",
        "3.5|n": "2/tehran,iran",
        "2|s|03/26:02->10/29:02": "12/troll",
        "2|s": "0/gaborone,0/harare,0/johannesburg,0/lubumbashi,0/lusaka,0/maputo,0/maseru,0/mbabane",
        "2|n|04/28:00->10/26:24": "0/cairo,egypt",
        "2|n|03/26:02->10/29:03": "0/ceuta,arctic/longyearbyen,8/amsterdam,8/andorra,8/belgrade,8/berlin,8/bratislava,8/brussels,8/budapest,8/busingen,8/copenhagen,8/gibraltar,8/ljubljana,8/luxembourg,8/madrid,8/malta,8/monaco,8/oslo,8/paris,8/podgorica,8/prague,8/rome,8/san_marino,8/sarajevo,8/skopje,8/stockholm,8/tirane,8/vaduz,8/vatican,8/vienna,8/warsaw,8/zagreb,8/zurich,3/jan_mayen,poland",
        "2|n": "0/blantyre,0/bujumbura,0/khartoum,0/kigali,0/tripoli,8/kaliningrad,libya",
        "1|s": "0/brazzaville,0/kinshasa,0/luanda,0/windhoek",
        "1|n|03/26:01->10/29:02": "3/canary,3/faroe,3/madeira,8/dublin,8/guernsey,8/isle_of_man,8/jersey,8/lisbon,8/london,3/faeroe,eire,8/belfast,gb-eire,gb,portugal",
        "1|n|03/19:03->04/23:02": "0/casablanca,0/el_aaiun",
        "1|n": "0/algiers,0/bangui,0/douala,0/lagos,0/libreville,0/malabo,0/ndjamena,0/niamey,0/porto-novo,0/tunis",
        "14|n": "11/kiritimati",
        "13|s": "11/apia,11/tongatapu",
        "13|n": "11/enderbury,11/kanton,11/fakaofo",
        "12|s|04/02:03->09/24:02": "12/mcmurdo,11/auckland,12/south_pole,nz",
        "12|s": "11/fiji",
        "12|n": "2/anadyr,2/kamchatka,2/srednekolymsk,11/funafuti,11/kwajalein,11/majuro,11/nauru,11/tarawa,11/wake,11/wallis,kwajalein",
        "12.75|s|04/02:03->04/02:02": "11/chatham,nz-chat",
        "11|s|04/02:03->10/01:02": "12/macquarie",
        "11|s": "11/bougainville",
        "11|n": "2/magadan,2/sakhalin,11/efate,11/guadalcanal,11/kosrae,11/noumea,11/pohnpei,11/ponape",
        "11.5|n|04/02:03->10/01:02": "11/norfolk",
        "10|s|04/02:03->10/01:02": "4/currie,4/hobart,4/melbourne,4/sydney,4/act,4/canberra,4/nsw,4/tasmania,4/victoria",
        "10|s": "12/dumontdurville,4/brisbane,4/lindeman,11/port_moresby,4/queensland",
        "10|n": "2/ust-nera,2/vladivostok,11/guam,11/saipan,11/chuuk,11/truk,11/yap",
        "10.5|s|04/02:01->10/01:02": "4/lord_howe,4/lhi",
        "0|n|03/26:00->10/29:01": "1/scoresbysund,3/azores",
        "0|n": "0/abidjan,0/accra,0/bamako,0/banjul,0/bissau,0/conakry,0/dakar,0/freetown,0/lome,0/monrovia,0/nouakchott,0/ouagadougou,0/sao_tome,1/danmarkshavn,3/reykjavik,3/st_helena,13/gmt,13/utc,0/timbuktu,13/greenwich,13/uct,13/universal,13/zulu,gmt-0,gmt+0,gmt0,greenwich,iceland,uct,universal,utc,zulu,13/unknown",
        "-9|n|03/12:02->11/05:02": "1/adak,1/atka,us/aleutian",
        "-9|n": "11/gambier",
        "-9.5|n": "11/marquesas",
        "-8|n|03/12:02->11/05:02": "1/anchorage,1/juneau,1/metlakatla,1/nome,1/sitka,1/yakutat,us/alaska",
        "-8|n": "11/pitcairn",
        "-7|n|03/12:02->11/05:02": "1/los_angeles,1/santa_isabel,1/tijuana,1/vancouver,1/ensenada,6/pacific,10/bajanorte,us/pacific-new,us/pacific",
        "-7|n": "1/creston,1/dawson,1/dawson_creek,1/fort_nelson,1/hermosillo,1/mazatlan,1/phoenix,1/whitehorse,6/yukon,10/bajasur,us/arizona",
        "-6|s|04/01:22->09/02:22": "11/easter,7/easterisland",
        "-6|n|03/12:02->11/05:02": "1/boise,1/cambridge_bay,1/denver,1/edmonton,1/inuvik,1/north_dakota,1/ojinaga,1/ciudad_juarez,1/yellowknife,1/shiprock,6/mountain,navajo,us/mountain",
        "-6|n": "1/bahia_banderas,1/belize,1/chihuahua,1/costa_rica,1/el_salvador,1/guatemala,1/managua,1/merida,1/mexico_city,1/monterrey,1/regina,1/swift_current,1/tegucigalpa,11/galapagos,6/east-saskatchewan,6/saskatchewan,10/general",
        "-5|s": "1/lima,1/rio_branco,1/porto_acre,5/acre",
        "-5|n|03/12:02->11/05:02": "1/chicago,1/matamoros,1/menominee,1/rainy_river,1/rankin_inlet,1/resolute,1/winnipeg,1/indiana/knox,1/indiana/tell_city,1/north_dakota/beulah,1/north_dakota/center,1/north_dakota/new_salem,1/knox_in,6/central,us/central,us/indiana-starke",
        "-5|n": "1/bogota,1/cancun,1/cayman,1/coral_harbour,1/eirunepe,1/guayaquil,1/jamaica,1/panama,1/atikokan,jamaica",
        "-4|s|04/01:24->09/03:00": "1/santiago,7/continental",
        "-4|s|03/25:24->10/01:00": "1/asuncion",
        "-4|s": "1/campo_grande,1/cuiaba,1/la_paz,1/manaus,5/west",
        "-4|n|03/12:02->11/05:02": "1/detroit,1/grand_turk,1/indiana,1/indianapolis,1/iqaluit,1/kentucky,1/louisville,1/montreal,1/nassau,1/new_york,1/nipigon,1/pangnirtung,1/port-au-prince,1/thunder_bay,1/toronto,1/indiana/marengo,1/indiana/petersburg,1/indiana/vevay,1/indiana/vincennes,1/indiana/winamac,1/kentucky/monticello,1/fort_wayne,1/indiana/indianapolis,1/kentucky/louisville,6/eastern,us/east-indiana,us/eastern,us/michigan",
        "-4|n|03/12:00->11/05:01": "1/havana,cuba",
        "-4|n": "1/anguilla,1/antigua,1/aruba,1/barbados,1/blanc-sablon,1/boa_vista,1/caracas,1/curacao,1/dominica,1/grenada,1/guadeloupe,1/guyana,1/kralendijk,1/lower_princes,1/marigot,1/martinique,1/montserrat,1/port_of_spain,1/porto_velho,1/puerto_rico,1/santo_domingo,1/st_barthelemy,1/st_kitts,1/st_lucia,1/st_thomas,1/st_vincent,1/tortola,1/virgin",
        "-3|s": "1/argentina,1/buenos_aires,1/catamarca,1/cordoba,1/fortaleza,1/jujuy,1/mendoza,1/montevideo,1/punta_arenas,1/sao_paulo,12/palmer,12/rothera,3/stanley,1/argentina/la_rioja,1/argentina/rio_gallegos,1/argentina/salta,1/argentina/san_juan,1/argentina/san_luis,1/argentina/tucuman,1/argentina/ushuaia,1/argentina/comodrivadavia,1/argentina/buenos_aires,1/argentina/catamarca,1/argentina/cordoba,1/argentina/jujuy,1/argentina/mendoza,1/argentina/rosario,1/rosario,5/east",
        "-3|n|03/12:02->11/05:02": "1/glace_bay,1/goose_bay,1/halifax,1/moncton,1/thule,3/bermuda,6/atlantic",
        "-3|n": "1/araguaina,1/bahia,1/belem,1/cayenne,1/maceio,1/paramaribo,1/recife,1/santarem",
        "-2|n|03/25:22->10/28:24": "1/nuuk,1/godthab",
        "-2|n|03/12:02->11/05:02": "1/miquelon",
        "-2|n": "1/noronha,3/south_georgia,5/denoronha",
        "-2.5|n|03/12:02->11/05:02": "1/st_johns,6/newfoundland",
        "-1|n": "3/cape_verde",
        "-11|n": "11/midway,11/niue,11/pago_pago,11/samoa,us/samoa",
        "-10|n": "11/honolulu,11/johnston,11/rarotonga,11/tahiti,us/hawaii"
    }
      , r = ["africa", "america", "asia", "atlantic", "australia", "brazil", "canada", "chile", "europe", "indian", "mexico", "pacific", "antarctica", "etc"];
    let o = {};
    Object.keys(a).forEach((e=>{
        let t = e.split("|")
          , n = {
            offset: Number(t[0]),
            hem: t[1]
        };
        t[2] && (n.dst = t[2]),
        a[e].split(",").forEach((e=>{
            e = e.replace(/(^[0-9]+)\//, ((e,t)=>(t = Number(t),
            r[t] + "/"))),
            o[e] = n
        }
        ))
    }
    )),
    o.utc = {
        offset: 0,
        hem: "n"
    };
    for (let e = -14; e <= 14; e += .5) {
        let t = e;
        t > 0 && (t = "+" + t);
        let n = "etc/gmt" + t;
        o[n] = {
            offset: -1 * e,
            hem: "n"
        },
        n = "utc/gmt" + t,
        o[n] = {
            offset: -1 * e,
            hem: "n"
        }
    }
    var i = o;
    var s = ()=>{
        let e = (()=>{
            if ("undefined" == typeof Intl || void 0 === Intl.DateTimeFormat)
                return null;
            let e = Intl.DateTimeFormat();
            if (void 0 === e || void 0 === e.resolvedOptions)
                return null;
            let t = e.resolvedOptions().timeZone;
            return t ? t.toLowerCase() : null
        }
        )();
        return null === e ? "utc" : e
    }
    ;
    const u = /(\-?[0-9]+)h(rs)?/i
      , l = /(\-?[0-9]+)/
      , c = /utc([\-+]?[0-9]+)/i
      , h = /gmt([\-+]?[0-9]+)/i
      , d = function(e) {
        return (e = Number(e)) >= -13 && e <= 13 ? "etc/gmt" + (e = ((e *= -1) > 0 ? "+" : "") + e) : null
    };
    var m = function(e) {
        let t = e.match(u);
        if (null !== t)
            return d(t[1]);
        if (t = e.match(c),
        null !== t)
            return d(t[1]);
        if (t = e.match(h),
        null !== t) {
            let e = -1 * Number(t[1]);
            return d(e)
        }
        return t = e.match(l),
        null !== t ? d(t[1]) : null
    };
    const f = s()
      , p = Object.keys(i).reduce(((e,t)=>{
        let n = t.split("/")[1] || "";
        return n = n.replace(/_/g, " "),
        e[n] = t,
        e
    }
    ), {});
    var y = (e,t)=>{
        if (!e)
            return f;
        "string" != typeof e && console.error("Timezone must be a string - recieved: '", e, "'\n");
        let n = e.trim();
        if (n = n.toLowerCase(),
        !0 === t.hasOwnProperty(n))
            return n;
        if (n = (e=>(e = (e = (e = (e = (e = e.replace(/ time/g, "")).replace(/ (standard|daylight|summer)/g, "")).replace(/\b(east|west|north|south)ern/g, "$1")).replace(/\b(africa|america|australia)n/g, "$1")).replace(/\beuropean/g, "europe")).replace(/\islands/g, "island"))(n),
        !0 === t.hasOwnProperty(n))
            return n;
        if (!0 === p.hasOwnProperty(n))
            return p[n];
        if (!0 === /[0-9]/.test(n)) {
            let e = m(n);
            if (e)
                return e
        }
        throw new Error("Spacetime: Cannot find timezone named: '" + e + "'. Please enter an IANA timezone id.")
    }
    ;
    function g(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function b(e) {
        return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.valueOf())
    }
    function k(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function w(e, t=2) {
        return (e += "").length >= t ? e : new Array(t - e.length + 1).join("0") + e
    }
    function v(e) {
        let t = e % 10
          , n = e % 100;
        return 1 === t && 11 !== n ? e + "st" : 2 === t && 12 !== n ? e + "nd" : 3 === t && 13 !== n ? e + "rd" : e + "th"
    }
    function _(e) {
        return e = (e = String(e)).replace(/([0-9])(st|nd|rd|th)$/i, "$1"),
        parseInt(e, 10)
    }
    function j(e="") {
        return "day" === (e = (e = (e = (e = e.toLowerCase().trim()).replace(/ies$/, "y")).replace(/s$/, "")).replace(/-/g, "")) || "days" === e ? "date" : "min" === e || "mins" === e ? "minute" : e
    }
    function $(e) {
        return "number" == typeof e ? e : b(e) ? e.getTime() : e.epoch ? e.epoch : null
    }
    function z(e, t) {
        return !1 === k(e) ? t.clone().set(e) : e
    }
    function O(e, t="") {
        const n = e > 0 ? "+" : "-"
          , a = Math.abs(e);
        return `${n}${w(parseInt("" + a, 10))}${t}${w(a % 1 * 60)}`
    }
    const D = {
        year: (new Date).getFullYear(),
        month: 0,
        date: 1
    };
    var M = {
        parseArray: (e,t,n)=>{
            if (0 === t.length)
                return e;
            let a = ["year", "month", "date", "hour", "minute", "second", "millisecond"];
            for (let r = 0; r < a.length; r++) {
                let o = t[r] || n[a[r]] || D[a[r]] || 0;
                e = e[a[r]](o)
            }
            return e
        }
        ,
        parseObject: (e,t,n)=>{
            if (0 === Object.keys(t).length)
                return e;
            t = Object.assign({}, D, n, t);
            let a = Object.keys(t);
            for (let r = 0; r < a.length; r++) {
                let o = a[r];
                if (void 0 === e[o] || "function" != typeof e[o])
                    continue;
                if (null === t[o] || void 0 === t[o] || "" === t[o])
                    continue;
                let i = t[o] || n[o] || D[o] || 0;
                e = e[o](i)
            }
            return e
        }
        ,
        parseNumber: function(e, t) {
            return t > 0 && t < 25e8 && !1 === e.silent && (console.warn("  - Warning: You are setting the date to January 1970."),
            console.warn("       -   did input seconds instead of milliseconds?")),
            e.epoch = t,
            e
        }
    };
    const S = function(e) {
        return e.epoch = Date.now(),
        Object.keys(e._today || {}).forEach((t=>{
            "function" == typeof e[t] && (e = e[t](e._today[t]))
        }
        )),
        e
    }
      , q = {
        now: e=>S(e),
        today: e=>S(e),
        tonight: e=>e = (e = S(e)).hour(18),
        tomorrow: e=>e = (e = (e = S(e)).add(1, "day")).startOf("day"),
        yesterday: e=>e = (e = (e = S(e)).subtract(1, "day")).startOf("day"),
        christmas: e=>{
            let t = S(e).year();
            return e = e.set([t, 11, 25, 18, 0, 0])
        }
        ,
        "new years": e=>{
            let t = S(e).year();
            return e = e.set([t, 11, 31, 18, 0, 0])
        }
    };
    q["new years eve"] = q["new years"];
    var N = q;
    var I = function(e) {
        return e = (e = (e = (e = e.replace(/\b(mon|tues?|wed|wednes|thur?s?|fri|sat|satur|sun)(day)?\b/i, "")).replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/,/g, "")).replace(/ +/g, " ").trim()
    };
    let T = {
        millisecond: 1,
        second: 1e3,
        minute: 6e4,
        hour: 36e5,
        day: 864e5
    };
    T.date = T.day,
    T.month = 25488e5,
    T.week = 6048e5,
    T.year = 3154e7,
    Object.keys(T).forEach((e=>{
        T[e + "s"] = T[e]
    }
    ));
    var E = T;
    const C = (e,t,n,a,r)=>{
        let o = e.d[n]();
        if (o === t)
            return;
        let i = null === r ? null : e.d[r]()
          , s = e.epoch
          , u = t - o;
        e.epoch += E[a] * u,
        "day" === a && Math.abs(u) > 28 && t < 28 && (e.epoch += E.hour),
        null !== r && i !== e.d[r]() && (e.epoch = s);
        const l = E[a] / 2;
        for (; e.d[n]() < t; )
            e.epoch += l;
        for (; e.d[n]() > t; )
            e.epoch -= l;
        null !== r && i !== e.d[r]() && (e.epoch = s)
    }
      , x = {
        year: {
            valid: e=>e > -4e3 && e < 4e3,
            walkTo: (e,t)=>C(e, t, "getFullYear", "year", null)
        },
        month: {
            valid: e=>e >= 0 && e <= 11,
            walkTo: (e,t)=>{
                let n = e.d
                  , a = n.getMonth()
                  , r = e.epoch
                  , o = n.getFullYear();
                if (a === t)
                    return;
                let i = t - a;
                for (e.epoch += E.day * (28 * i),
                o !== e.d.getFullYear() && (e.epoch = r); e.d.getMonth() < t; )
                    e.epoch += E.day;
                for (; e.d.getMonth() > t; )
                    e.epoch -= E.day
            }
        },
        date: {
            valid: e=>e > 0 && e <= 31,
            walkTo: (e,t)=>C(e, t, "getDate", "day", "getMonth")
        },
        hour: {
            valid: e=>e >= 0 && e < 24,
            walkTo: (e,t)=>C(e, t, "getHours", "hour", "getDate")
        },
        minute: {
            valid: e=>e >= 0 && e < 60,
            walkTo: (e,t)=>C(e, t, "getMinutes", "minute", "getHours")
        },
        second: {
            valid: e=>e >= 0 && e < 60,
            walkTo: (e,t)=>{
                e.epoch = e.seconds(t).epoch
            }
        },
        millisecond: {
            valid: e=>e >= 0 && e < 1e3,
            walkTo: (e,t)=>{
                e.epoch = e.milliseconds(t).epoch
            }
        }
    };
    var Y = (e,t)=>{
        let n = Object.keys(x)
          , a = e.clone();
        for (let r = 0; r < n.length; r++) {
            let o = n[r]
              , i = t[o];
            if (void 0 === i && (i = a[o]()),
            "string" == typeof i && (i = parseInt(i, 10)),
            !x[o].valid(i))
                return e.epoch = null,
                void (!1 === e.silent && console.warn("invalid " + o + ": " + i));
            x[o].walkTo(e, i)
        }
    }
    ;
    var A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let F = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
      , P = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    function L() {
        return F
    }
    function B() {
        return function() {
            const e = {
                sep: 8
            };
            for (let t = 0; t < F.length; t++)
                e[F[t]] = t;
            for (let t = 0; t < P.length; t++)
                e[P[t]] = t;
            return e
        }()
    }
    var H = (e,t)=>{
        if (!t)
            return e;
        let n = 0;
        if (/^[\+-]?[0-9]{2}:[0-9]{2}$/.test(t) && (!0 === /:00/.test(t) && (t = t.replace(/:00/, "")),
        !0 === /:30/.test(t) && (t = t.replace(/:30/, ".5"))),
        /^[\+-]?[0-9]{4}$/.test(t) && (t = t.replace(/30$/, ".5")),
        n = parseFloat(t),
        Math.abs(n) > 100 && (n /= 100),
        0 === n || "Z" === t || "z" === t)
            return e.tz = "etc/gmt",
            e;
        n *= -1,
        n >= 0 && (n = "+" + n);
        let a = "etc/gmt" + n;
        return e.timezones[a] && (e.tz = a),
        e
    }
    ;
    var Z = (e,t="")=>{
        let n = (t = t.replace(/^\s+/, "").toLowerCase()).match(/([0-9]{1,2}):([0-9]{1,2}):?([0-9]{1,2})?[:\.]?([0-9]{1,4})?/);
        if (null !== n) {
            let a = Number(n[1]);
            if (a < 0 || a > 24)
                return e.startOf("day");
            let r = Number(n[2]);
            if (n[2].length < 2 || r < 0 || r > 59)
                return e.startOf("day");
            e = (e = (e = (e = e.hour(a)).minute(r)).seconds(n[3] || 0)).millisecond(function(e="") {
                return (e = String(e)).length > 3 ? e = e.substr(0, 3) : 1 === e.length ? e += "00" : 2 === e.length && (e += "0"),
                Number(e) || 0
            }(n[4]));
            let o = t.match(/[\b0-9] ?(am|pm)\b/);
            return null !== o && o[1] && (e = e.ampm(o[1])),
            e
        }
        if (n = t.match(/([0-9]+) ?(am|pm)/),
        null !== n && n[1]) {
            let t = Number(n[1]);
            return t > 12 || t < 1 ? e.startOf("day") : e = (e = (e = e.hour(n[1] || 0)).ampm(n[2])).startOf("hour")
        }
        return e = e.startOf("day")
    }
    ;
    let Q = B();
    const G = e=>{
        if (!0 !== A.hasOwnProperty(e.month))
            return !1;
        if (1 === e.month)
            return !!(g(e.year) && e.date <= 29) || e.date <= 28;
        let t = A[e.month] || 0;
        return e.date <= t
    }
      , U = (e="",t)=>{
        if (e = e.trim(),
        !0 === /^'[0-9][0-9]$/.test(e)) {
            let t = Number(e.replace(/'/, ""));
            return t > 50 ? 1900 + t : 2e3 + t
        }
        let n = parseInt(e, 10);
        return !n && t && (n = t.year),
        n = n || (new Date).getFullYear(),
        n
    }
      , V = function(e) {
        return "sept" === (e = e.toLowerCase().trim()) ? Q.sep : Q[e]
    };
    var W = [{
        reg: /^([0-9]{1,2})[\-\/.]([0-9]{1,2})[\-\/.]?([0-9]{4})?( [0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
        parse: (e,t)=>{
            let n = parseInt(t[1], 10) - 1
              , a = parseInt(t[2], 10);
            (e.british || n >= 12) && (a = parseInt(t[1], 10),
            n = parseInt(t[2], 10) - 1);
            let r = {
                date: a,
                month: n,
                year: U(t[3], e._today) || (new Date).getFullYear()
            };
            return !1 === G(r) ? (e.epoch = null,
            e) : (Y(e, r),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([a-z]+)[\-\/\. ]([0-9]{1,2})[\-\/\. ]?([0-9]{4}|'[0-9]{2})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[3], e._today),
                month: V(t[1]),
                date: _(t[2] || "")
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([a-z]+) ([0-9]{1,2})( [0-9]{4})?( ([0-9:]+( ?am| ?pm| ?gmt)?))?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[3], e._today),
                month: V(t[1]),
                date: _(t[2] || "")
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([a-z]+) ([0-9]{1,2})( [0-9:]+)?( \+[0-9]{4})?( [0-9]{4})?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[5], e._today),
                month: V(t[1]),
                date: _(t[2] || "")
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[3]))
        }
    }]
      , J = [{
        reg: /^([0-9]{4})[\-\/]([0-9]{2})$/i,
        parse: (e,t)=>{
            let n = {
                year: t[1],
                month: parseInt(t[2], 10) - 1,
                date: 1
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([a-z]+) ([0-9]{4})$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[2], e._today),
                month: V(t[1]),
                date: e._today.date || 1
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^(q[0-9])( of)?( [0-9]{4})?/i,
        parse: (e,t)=>{
            let n = t[1] || "";
            e = e.quarter(n);
            let a = t[3] || "";
            return a && (a = a.trim(),
            e = e.year(a)),
            e
        }
    }, {
        reg: /^(spring|summer|winter|fall|autumn)( of)?( [0-9]{4})?/i,
        parse: (e,t)=>{
            let n = t[1] || "";
            e = e.season(n);
            let a = t[3] || "";
            return a && (a = a.trim(),
            e = e.year(a)),
            e
        }
    }, {
        reg: /^[0-9,]+ ?b\.?c\.?$/i,
        parse: (e,t)=>{
            let n = t[0] || "";
            n = n.replace(/^([0-9,]+) ?b\.?c\.?$/i, "-$1");
            let a = new Date
              , r = {
                year: parseInt(n.trim(), 10),
                month: a.getMonth(),
                date: a.getDate()
            };
            return !1 === G(r) ? (e.epoch = null,
            e) : (Y(e, r),
            e = Z(e))
        }
    }, {
        reg: /^[0-9,]+ ?(a\.?d\.?|c\.?e\.?)$/i,
        parse: (e,t)=>{
            let n = t[0] || "";
            n = n.replace(/,/g, "");
            let a = new Date
              , r = {
                year: parseInt(n.trim(), 10),
                month: a.getMonth(),
                date: a.getDate()
            };
            return !1 === G(r) ? (e.epoch = null,
            e) : (Y(e, r),
            e = Z(e))
        }
    }, {
        reg: /^[0-9]{4}( ?a\.?d\.?)?$/i,
        parse: (e,t)=>{
            let n = e._today;
            n.month && !n.date && (n.date = 1);
            let a = new Date
              , r = {
                year: U(t[0], n),
                month: n.month || a.getMonth(),
                date: n.date || a.getDate()
            };
            return !1 === G(r) ? (e.epoch = null,
            e) : (Y(e, r),
            e = Z(e))
        }
    }]
      , K = [].concat([{
        reg: /^(\-?0?0?[0-9]{3,4})-([0-9]{1,2})-([0-9]{1,2})[T| ]([0-9.:]+)(Z|[0-9\-\+:]+)?$/i,
        parse: (e,t)=>{
            let n = {
                year: t[1],
                month: parseInt(t[2], 10) - 1,
                date: t[3]
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (H(e, t[5]),
            Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([0-9]{4})[\-\/\. ]([0-9]{1,2})[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
        parse: (e,t)=>{
            let n = {
                year: t[1],
                month: parseInt(t[2], 10) - 1,
                date: parseInt(t[3], 10)
            };
            return n.month >= 12 && (n.date = parseInt(t[2], 10),
            n.month = parseInt(t[3], 10) - 1),
            !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([0-9]{4})[\-\/\. ]([a-z]+)[\-\/\. ]([0-9]{1,2})( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[1], e._today),
                month: V(t[2]),
                date: _(t[3] || "")
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }], W, [{
        reg: /^([0-9]{1,2})[\-\/]([a-z]+)[\-\/]?([0-9]{4})?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[3], e._today),
                month: V(t[2]),
                date: _(t[1] || "")
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = Z(e, t[4]))
        }
    }, {
        reg: /^([0-9]{1,2})( [a-z]+)( [0-9]{4}| '[0-9]{2})? ?([0-9]{1,2}:[0-9]{2}:?[0-9]{0,2}? ?(am|pm|gmt))?$/i,
        parse: (e,t)=>{
            let n = {
                year: U(t[3], e._today),
                month: V(t[2]),
                date: _(t[1])
            };
            return n.month && !1 !== G(n) ? (Y(e, n),
            e = Z(e, t[4])) : (e.epoch = null,
            e)
        }
    }, {
        reg: /^([0-9]{1,2})[\. -/]([a-z]+)[\. -/]([0-9]{4})?( [0-9]{1,2}(:[0-9]{0,2})?(:[0-9]{0,3})? ?(am|pm)?)?$/i,
        parse: (e,t)=>{
            let n = {
                date: Number(t[1]),
                month: V(t[2]),
                year: Number(t[3])
            };
            return !1 === G(n) ? (e.epoch = null,
            e) : (Y(e, n),
            e = e.startOf("day"),
            e = Z(e, t[4]))
        }
    }], J);
    var R = function(e, t, n) {
        for (let a = 0; a < K.length; a++) {
            let r = t.match(K[a].reg);
            if (r) {
                let t = K[a].parse(e, r, n);
                if (null !== t && t.isValid())
                    return t
            }
        }
        return !1 === e.silent && console.warn("Warning: couldn't parse date-string: '" + t + "'"),
        e.epoch = null,
        e
    };
    const {parseArray: X, parseObject: ee, parseNumber: te} = M
      , ne = {
        year: (new Date).getFullYear(),
        month: 0,
        date: 1
    };
    var ae = (e,t)=>{
        let n = e._today || ne;
        if ("number" == typeof t)
            return te(e, t);
        if (e.epoch = Date.now(),
        e._today && k(e._today) && Object.keys(e._today).length > 0) {
            let t = ee(e, n, ne);
            t.isValid() && (e.epoch = t.epoch)
        }
        return null == t || "" === t ? e : !0 === b(t) ? (e.epoch = t.getTime(),
        e) : !0 === function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }(t) ? e = X(e, t, n) : !0 === k(t) ? t.epoch ? (e.epoch = t.epoch,
        e.tz = t.tz,
        e) : e = ee(e, t, n) : "string" != typeof t ? e : (t = I(t),
        !0 === N.hasOwnProperty(t) ? e = N[t](e) : R(e, t))
    }
    ;
    let re = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
      , oe = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    function ie() {
        return re
    }
    function se() {
        return oe
    }
    const ue = {
        mo: 1,
        tu: 2,
        we: 3,
        th: 4,
        fr: 5,
        sa: 6,
        su: 7,
        tues: 2,
        weds: 3,
        wedn: 3,
        thur: 4,
        thurs: 4
    };
    let le = !0;
    var ce = e=>{
        let t = e.timezone().current.offset;
        return t ? O(t, ":") : "Z"
    }
    ;
    const he = e=>le ? function(e) {
        return e ? e[0].toUpperCase() + e.substr(1) : ""
    }(e) : e
      , de = {
        day: e=>he(e.dayName()),
        "day-short": e=>he(ie()[e.day()]),
        "day-number": e=>e.day(),
        "day-ordinal": e=>v(e.day()),
        "day-pad": e=>w(e.day()),
        date: e=>e.date(),
        "date-ordinal": e=>v(e.date()),
        "date-pad": e=>w(e.date()),
        month: e=>he(e.monthName()),
        "month-short": e=>he(L()[e.month()]),
        "month-number": e=>e.month(),
        "month-ordinal": e=>v(e.month()),
        "month-pad": e=>w(e.month()),
        "iso-month": e=>w(e.month() + 1),
        year: e=>{
            let t = e.year();
            return t > 0 ? t : (t = Math.abs(t),
            t + " BC")
        }
        ,
        "year-short": e=>{
            let t = e.year();
            return t > 0 ? `'${String(e.year()).substr(2, 4)}` : (t = Math.abs(t),
            t + " BC")
        }
        ,
        "iso-year": e=>{
            let t = e.year()
              , n = t < 0
              , a = w(Math.abs(t), 4);
            return n && (a = w(a, 6),
            a = "-" + a),
            a
        }
        ,
        time: e=>e.time(),
        "time-24": e=>`${e.hour24()}:${w(e.minute())}`,
        hour: e=>e.hour12(),
        "hour-pad": e=>w(e.hour12()),
        "hour-24": e=>e.hour24(),
        "hour-24-pad": e=>w(e.hour24()),
        minute: e=>e.minute(),
        "minute-pad": e=>w(e.minute()),
        second: e=>e.second(),
        "second-pad": e=>w(e.second()),
        millisecond: e=>e.millisecond(),
        "millisecond-pad": e=>w(e.millisecond(), 3),
        ampm: e=>e.ampm(),
        AMPM: e=>e.ampm().toUpperCase(),
        quarter: e=>"Q" + e.quarter(),
        season: e=>e.season(),
        era: e=>e.era(),
        json: e=>e.json(),
        timezone: e=>e.timezone().name,
        offset: e=>ce(e),
        numeric: e=>`${e.year()}/${w(e.month() + 1)}/${w(e.date())}`,
        "numeric-us": e=>`${w(e.month() + 1)}/${w(e.date())}/${e.year()}`,
        "numeric-uk": e=>`${w(e.date())}/${w(e.month() + 1)}/${e.year()}`,
        "mm/dd": e=>`${w(e.month() + 1)}/${w(e.date())}`,
        iso: e=>`${e.format("iso-year")}-${w(e.month() + 1)}-${w(e.date())}T ${w(e.h24())}:${w(e.minute())}:${w(e.second())}.${w(e.millisecond(), 3)}${ce(e)}`,
        "iso-short": e=>{
            let t = w(e.month() + 1)
              , n = w(e.date());
            var a;
            return `${(a = e.year()) >= 0 ? w(a, 4) : "-" + w(a = Math.abs(a), 4)}-${t}-${n}`
        }
        ,
        "iso-utc": e=>new Date(e.epoch).toISOString(),
        nice: e=>`${L()[e.month()]} ${v(e.date())}, ${e.time()}`,
        "nice-24": e=>`${L()[e.month()]} ${v(e.date())}, ${e.hour24()}:${w(e.minute())}`,
        "nice-year": e=>`${L()[e.month()]} ${v(e.date())}, ${e.year()}`,
        "nice-day": e=>`${ie()[e.day()]} ${he(L()[e.month()])} ${v(e.date())}`,
        "nice-full": e=>`${e.dayName()} ${he(e.monthName())} ${v(e.date())}, ${e.time()}`,
        "nice-full-24": e=>`${e.dayName()} ${he(e.monthName())} ${v(e.date())}, ${e.hour24()}:${w(e.minute())}`
    }
      , me = {
        "day-name": "day",
        "month-name": "month",
        "iso 8601": "iso",
        "time-h24": "time-24",
        "time-12": "time",
        "time-h12": "time",
        tz: "timezone",
        "day-num": "day-number",
        "month-num": "month-number",
        "month-iso": "iso-month",
        "year-iso": "iso-year",
        "nice-short": "nice",
        "nice-short-24": "nice-24",
        mdy: "numeric-us",
        dmy: "numeric-uk",
        ymd: "numeric",
        "yyyy/mm/dd": "numeric",
        "mm/dd/yyyy": "numeric-us",
        "dd/mm/yyyy": "numeric-us",
        "little-endian": "numeric-uk",
        "big-endian": "numeric",
        "day-nice": "nice-day"
    };
    Object.keys(me).forEach((e=>de[e] = de[me[e]]));
    var fe = (e,t="")=>{
        if (!0 !== e.isValid())
            return "";
        if (de.hasOwnProperty(t)) {
            let n = de[t](e) || "";
            return "json" !== t && (n = String(n),
            "ampm" !== t.toLowerCase() && (n = he(n))),
            n
        }
        if (-1 !== t.indexOf("{")) {
            let n = /\{(.+?)\}/g;
            return t = t.replace(n, ((t,n)=>{
                if (n = n.toLowerCase().trim(),
                de.hasOwnProperty(n)) {
                    let t = String(de[n](e));
                    return "ampm" !== n.toLowerCase() ? he(t) : t
                }
                return ""
            }
            )),
            t
        }
        return e.format("iso-short")
    }
    ;
    const pe = {
        G: e=>e.era(),
        GG: e=>e.era(),
        GGG: e=>e.era(),
        GGGG: e=>"AD" === e.era() ? "Anno Domini" : "Before Christ",
        y: e=>e.year(),
        yy: e=>w(Number(String(e.year()).substr(2, 4))),
        yyy: e=>e.year(),
        yyyy: e=>e.year(),
        yyyyy: e=>"0" + e.year(),
        Q: e=>e.quarter(),
        QQ: e=>e.quarter(),
        QQQ: e=>e.quarter(),
        QQQQ: e=>e.quarter(),
        M: e=>e.month() + 1,
        MM: e=>w(e.month() + 1),
        MMM: e=>e.format("month-short"),
        MMMM: e=>e.format("month"),
        w: e=>e.week(),
        ww: e=>w(e.week()),
        d: e=>e.date(),
        dd: e=>w(e.date()),
        D: e=>e.dayOfYear(),
        DD: e=>w(e.dayOfYear()),
        DDD: e=>w(e.dayOfYear(), 3),
        E: e=>e.format("day-short"),
        EE: e=>e.format("day-short"),
        EEE: e=>e.format("day-short"),
        EEEE: e=>e.format("day"),
        EEEEE: e=>e.format("day")[0],
        e: e=>e.day(),
        ee: e=>e.day(),
        eee: e=>e.format("day-short"),
        eeee: e=>e.format("day"),
        eeeee: e=>e.format("day")[0],
        a: e=>e.ampm().toUpperCase(),
        aa: e=>e.ampm().toUpperCase(),
        aaa: e=>e.ampm().toUpperCase(),
        aaaa: e=>e.ampm().toUpperCase(),
        h: e=>e.h12(),
        hh: e=>w(e.h12()),
        H: e=>e.hour(),
        HH: e=>w(e.hour()),
        m: e=>e.minute(),
        mm: e=>w(e.minute()),
        s: e=>e.second(),
        ss: e=>w(e.second()),
        SSS: e=>w(e.millisecond(), 3),
        A: e=>e.epoch - e.startOf("day").epoch,
        z: e=>e.timezone().name,
        zz: e=>e.timezone().name,
        zzz: e=>e.timezone().name,
        zzzz: e=>e.timezone().name,
        Z: e=>O(e.timezone().current.offset),
        ZZ: e=>O(e.timezone().current.offset),
        ZZZ: e=>O(e.timezone().current.offset),
        ZZZZ: e=>O(e.timezone().current.offset, ":")
    }
      , ye = (e,t,n)=>{
        let a = e
          , r = t;
        for (let o = 0; o < n; o += 1)
            pe[a] = pe[r],
            a += e,
            r += t
    }
    ;
    ye("q", "Q", 4),
    ye("L", "M", 4),
    ye("Y", "y", 4),
    ye("c", "e", 4),
    ye("k", "H", 2),
    ye("K", "h", 2),
    ye("S", "s", 2),
    ye("v", "z", 4),
    ye("V", "Z", 4);
    var ge = (e,t)=>{
        let n = t.split("");
        return n = function(e) {
            for (let t = 0; t < e.length; t += 1)
                if ("'" === e[t])
                    for (let n = t + 1; n < e.length; n += 1) {
                        if (e[n] && (e[t] += e[n]),
                        "'" === e[n]) {
                            e[n] = null;
                            break
                        }
                        e[n] = null
                    }
            return e.filter((e=>e))
        }(n),
        n = function(e) {
            for (let t = 0; t < e.length; t += 1) {
                let n = e[t];
                for (let a = t + 1; a < e.length && e[a] === n; a += 1)
                    e[t] += e[a],
                    e[a] = null
            }
            return (e = e.filter((e=>e))).map((e=>("''" === e && (e = "'"),
            e)))
        }(n),
        n.reduce(((t,n)=>(void 0 !== pe[n] ? t += pe[n](e) || "" : (/^'.{1,}'$/.test(n) && (n = n.replace(/'/g, "")),
        t += n),
        t)), "")
    }
    ;
    const be = ["year", "season", "quarter", "month", "week", "day", "quarterHour", "hour", "minute"]
      , ke = function(e, t) {
        let n = e.clone().startOf(t)
          , a = e.clone().endOf(t).epoch - n.epoch
          , r = (e.epoch - n.epoch) / a;
        return parseFloat(r.toFixed(2))
    };
    var we = (e,t)=>{
        if (t)
            return t = j(t),
            ke(e, t);
        let n = {};
        return be.forEach((t=>{
            n[t] = ke(e, t)
        }
        )),
        n
    }
    ;
    var ve = (e,t)=>{
        let n = e.progress();
        return "quarterhour" === (t = j(t)) && (t = "quarterHour"),
        void 0 !== n[t] ? (n[t] > .5 && (e = e.add(1, t)),
        e = e.startOf(t)) : !1 === e.silent && console.warn("no known unit '" + t + "'"),
        e
    }
    ;
    const _e = (e,t,n)=>{
        let a = 0;
        for (e = e.clone(); e.isBefore(t); )
            e = e.add(1, n),
            a += 1;
        return e.isAfter(t, n) && (a -= 1),
        a
    }
    ;
    var je = (e,t,n)=>e.isBefore(t) ? _e(e, t, n) : -1 * _e(t, e, n);
    var $e = function(e, t) {
        let n = t.epoch - e.epoch
          , a = {
            milliseconds: n,
            seconds: parseInt(n / 1e3, 10)
        };
        a.minutes = parseInt(a.seconds / 60, 10),
        a.hours = parseInt(a.minutes / 60, 10);
        let r = e.clone();
        return a.years = ((e,t)=>{
            let n = t.year() - e.year();
            return (e = e.year(t.year())).isAfter(t) && (n -= 1),
            n
        }
        )(r, t),
        r = e.add(a.years, "year"),
        a.months = 12 * a.years,
        r = e.add(a.months, "month"),
        a.months += je(r, t, "month"),
        a.quarters = 4 * a.years,
        a.quarters += parseInt(a.months % 12 / 3, 10),
        a.weeks = 52 * a.years,
        r = e.add(a.weeks, "week"),
        a.weeks += je(r, t, "week"),
        a.days = 7 * a.weeks,
        r = e.add(a.days, "day"),
        a.days += je(r, t, "day"),
        a
    };
    var ze = function(e, t, n) {
        t = z(t, e);
        let a = !1;
        if (e.isAfter(t)) {
            let n = e;
            e = t,
            t = n,
            a = !0
        }
        let r = $e(e, t);
        return a && (r = function(e) {
            return Object.keys(e).forEach((t=>{
                e[t] *= -1
            }
            )),
            e
        }(r)),
        n ? (n = j(n),
        !0 !== /s$/.test(n) && (n += "s"),
        "dates" === n && (n = "days"),
        r[n]) : r
    };
    const Oe = e=>Math.abs(e) || 0;
    var De = function(e) {
        let t = "P";
        return t += Oe(e.years) + "Y",
        t += Oe(e.months) + "M",
        t += Oe(e.days) + "DT",
        t += Oe(e.hours) + "H",
        t += Oe(e.minutes) + "M",
        t += Oe(e.seconds) + "S",
        t
    };
    const Me = {
        months: {
            almost: 10,
            over: 4
        },
        days: {
            almost: 25,
            over: 10
        },
        hours: {
            almost: 20,
            over: 8
        },
        minutes: {
            almost: 50,
            over: 20
        },
        seconds: {
            almost: 50,
            over: 20
        }
    };
    function Se(e, t) {
        return 1 === e && (t = t.slice(0, -1)),
        e + " " + t
    }
    var qe = function(e) {
        let t = null
          , n = null
          , a = []
          , r = [];
        return Object.keys(e).forEach(((o,i,s)=>{
            const u = Math.abs(e[o]);
            if (0 === u)
                return;
            a.push(u + o[0]);
            const l = Se(u, o);
            if (r.push(l),
            !t) {
                if (t = n = l,
                i > 4)
                    return;
                const a = s[i + 1]
                  , r = Math.abs(e[a]);
                r > Me[a].almost ? (t = Se(u + 1, o),
                n = "almost " + t) : r > Me[a].over && (n = "over " + l)
            }
        }
        )),
        {
            qualified: n,
            rounded: t,
            abbreviated: a,
            englishValues: r
        }
    };
    var Ne = (e,t)=>{
        const n = function(e, t) {
            const n = e.isBefore(t)
              , a = n ? t : e;
            let r = n ? e : t;
            r = r.clone();
            const o = {
                years: 0,
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
            return Object.keys(o).forEach((e=>{
                if (r.isSame(a, e))
                    return;
                let t = r.diff(a, e);
                r = r.add(t, e),
                o[e] = t
            }
            )),
            n && Object.keys(o).forEach((e=>{
                0 !== o[e] && (o[e] *= -1)
            }
            )),
            o
        }(e, t = z(t, e));
        if (!0 === Object.keys(n).every((e=>!n[e])))
            return {
                diff: n,
                rounded: "now",
                qualified: "now",
                precise: "now",
                abbreviated: [],
                iso: "P0Y0M0DT0H0M0S",
                direction: "present"
            };
        let a, r = "future", {rounded: o, qualified: i, englishValues: s, abbreviated: u} = qe(n);
        a = s.splice(0, 2).join(", "),
        !0 === e.isAfter(t) ? (o += " ago",
        i += " ago",
        a += " ago",
        r = "past") : (o = "in " + o,
        i = "in " + i,
        a = "in " + a);
        let l = De(n);
        return {
            diff: n,
            rounded: o,
            qualified: i,
            precise: a,
            abbreviated: u,
            iso: l,
            direction: r
        }
    }
    ;
    var Ie = {
        north: [["spring", 2, 1], ["summer", 5, 1], ["fall", 8, 1], ["autumn", 8, 1], ["winter", 11, 1]],
        south: [["fall", 2, 1], ["autumn", 2, 1], ["winter", 5, 1], ["spring", 8, 1], ["summer", 11, 1]]
    }
      , Te = [null, [0, 1], [3, 1], [6, 1], [9, 1]];
    const Ee = {
        second: e=>(Y(e, {
            millisecond: 0
        }),
        e),
        minute: e=>(Y(e, {
            second: 0,
            millisecond: 0
        }),
        e),
        quarterhour: e=>{
            let t = e.minutes();
            return e = t >= 45 ? e.minutes(45) : t >= 30 ? e.minutes(30) : t >= 15 ? e.minutes(15) : e.minutes(0),
            Y(e, {
                second: 0,
                millisecond: 0
            }),
            e
        }
        ,
        hour: e=>(Y(e, {
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        e),
        day: e=>(Y(e, {
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        e),
        week: e=>{
            let t = e.clone();
            return (e = e.day(e._weekStart)).isAfter(t) && (e = e.subtract(1, "week")),
            Y(e, {
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            }),
            e
        }
        ,
        month: e=>(Y(e, {
            date: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        e),
        quarter: e=>{
            let t = e.quarter();
            return Te[t] && Y(e, {
                month: Te[t][0],
                date: Te[t][1],
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0
            }),
            e
        }
        ,
        season: e=>{
            let t = e.season()
              , n = "north";
            "South" === e.hemisphere() && (n = "south");
            for (let a = 0; a < Ie[n].length; a++)
                if (Ie[n][a][0] === t) {
                    let r = e.year();
                    return "winter" === t && e.month() < 3 && (r -= 1),
                    Y(e, {
                        year: r,
                        month: Ie[n][a][1],
                        date: Ie[n][a][2],
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    }),
                    e
                }
            return e
        }
        ,
        year: e=>(Y(e, {
            month: 0,
            date: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        e),
        decade: e=>{
            let t = (e = e.startOf("year")).year()
              , n = 10 * parseInt(t / 10, 10);
            return e = e.year(n)
        }
        ,
        century: e=>{
            let t = (e = e.startOf("year")).year()
              , n = 100 * parseInt(t / 100, 10);
            return e = e.year(n)
        }
    };
    Ee.date = Ee.day;
    var Ce = function(e, t, n) {
        if (!t || !n)
            return [];
        if (t = j(t),
        n = e.clone().set(n),
        e.isAfter(n)) {
            let t = e;
            e = n,
            n = t
        }
        let a = e.clone();
        if (function(e) {
            return !!ie().find((t=>t === e)) || !!se().find((t=>t === e))
        }(t))
            a = a.next(t),
            t = "week";
        else {
            a.startOf(t).isBefore(e) && (a = a.next(t))
        }
        let r = [];
        for (; a.isBefore(n); )
            r.push(a),
            a = a.add(1, t);
        return r
    };
    var xe = e=>{
        let n = e.timezones
          , a = e.tz;
        if (!1 === n.hasOwnProperty(a) && (a = y(e.tz, n)),
        null === a)
            return !1 === e.silent && console.warn("Warn: could not find given or local timezone - '" + e.tz + "'"),
            {
                current: {
                    epochShift: 0
                }
            };
        let r = n[a]
          , o = {
            name: (i = a,
            i = (i = (i = (i = (i = (i = (i = i[0].toUpperCase() + i.substr(1)).replace(/[\/_-]([a-z])/gi, (e=>e.toUpperCase()))).replace(/_(of|es)_/i, (e=>e.toLowerCase()))).replace(/\/gmt/i, "/GMT")).replace(/\/Dumontdurville$/i, "/DumontDUrville")).replace(/\/Mcmurdo$/i, "/McMurdo")).replace(/\/Port-au-prince$/i, "/Port-au-Prince")),
            hasDst: Boolean(r.dst),
            default_offset: r.offset,
            hemisphere: "s" === r.hem ? "South" : "North",
            current: {}
        };
        var i, s;
        if (o.hasDst) {
            let e = (s = r.dst) ? s.split("->") : [];
            o.change = {
                start: e[0],
                back: e[1]
            }
        }
        let u = r.offset
          , l = u;
        return !0 === o.hasDst && (l = "North" === o.hemisphere ? u - 1 : r.offset + 1),
        !1 === o.hasDst ? (o.current.offset = u,
        o.current.isDST = !1) : !0 === t(e.epoch, o.change.start, o.change.back, u, l) ? (o.current.offset = u,
        o.current.isDST = "North" === o.hemisphere) : (o.current.offset = l,
        o.current.isDST = "South" === o.hemisphere),
        o
    }
    ;
    const Ye = ["century", "decade", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"]
      , Ae = {
        set: function(e, t) {
            let n = this.clone();
            return n = ae(n, e),
            t && (this.tz = y(t)),
            n
        },
        timezone: function() {
            return xe(this)
        },
        isDST: function() {
            return xe(this).current.isDST
        },
        hasDST: function() {
            return xe(this).hasDst
        },
        offset: function() {
            return 60 * xe(this).current.offset
        },
        hemisphere: function() {
            return xe(this).hemisphere
        },
        format: function(e) {
            return fe(this, e)
        },
        unixFmt: function(e) {
            return ge(this, e)
        },
        startOf: function(e) {
            return ((e,t)=>{
                let n = e.clone();
                return t = j(t),
                Ee[t] ? Ee[t](n) : "summer" === t || "winter" === t ? (n = n.season(t),
                Ee.season(n)) : n
            }
            )(this, e)
        },
        endOf: function(e) {
            return ((e,t)=>{
                let n = e.clone();
                return t = j(t),
                Ee[t] ? (n = Ee[t](n),
                n = n.add(1, t),
                n = n.subtract(1, "millisecond"),
                n) : n
            }
            )(this, e)
        },
        leapYear: function() {
            return g(this.year())
        },
        progress: function(e) {
            return we(this, e)
        },
        nearest: function(e) {
            return ve(this, e)
        },
        diff: function(e, t) {
            return ze(this, e, t)
        },
        since: function(e) {
            return e || (e = this.clone().set()),
            Ne(this, e)
        },
        next: function(e) {
            return this.add(1, e).startOf(e)
        },
        last: function(e) {
            return this.subtract(1, e).startOf(e)
        },
        isValid: function() {
            return !(!this.epoch && 0 !== this.epoch) && !isNaN(this.d.getTime())
        },
        goto: function(e) {
            let t = this.clone();
            return t.tz = y(e, t.timezones),
            t
        },
        every: function(e, t) {
            if ("object" == typeof e && "string" == typeof t) {
                let n = t;
                t = e,
                e = n
            }
            return Ce(this, e, t)
        },
        isAwake: function() {
            let e = this.hour();
            return !(e < 8 || e > 22)
        },
        isAsleep: function() {
            return !this.isAwake()
        },
        daysInMonth: function() {
            switch (this.month()) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                return 31;
            case 1:
                return this.leapYear() ? 29 : 28;
            case 3:
            case 5:
            case 8:
            case 10:
                return 30;
            default:
                throw new Error("Invalid Month state.")
            }
        },
        log: function() {
            return console.log(""),
            console.log(fe(this, "nice-short")),
            this
        },
        logYear: function() {
            return console.log(""),
            console.log(fe(this, "full-short")),
            this
        },
        json: function() {
            return Ye.reduce(((e,t)=>(e[t] = this[t](),
            e)), {})
        },
        debug: function() {
            let e = this.timezone()
              , t = this.format("MM") + " " + this.format("date-ordinal") + " " + this.year();
            return t += "\n     - " + this.format("time"),
            console.log("\n\n", t + "\n     - " + e.name + " (" + e.current.offset + ")"),
            this
        },
        from: function(e) {
            return (e = this.clone().set(e)).since(this)
        },
        fromNow: function() {
            return this.clone().set(Date.now()).since(this)
        },
        weekStart: function(e) {
            if ("number" == typeof e)
                return this._weekStart = e,
                this;
            if ("string" == typeof e) {
                e = e.toLowerCase().trim();
                let t = ie().indexOf(e);
                -1 === t && (t = se().indexOf(e)),
                -1 === t && (t = 1),
                this._weekStart = t
            } else
                console.warn("Spacetime Error: Cannot understand .weekStart() input:", e);
            return this
        }
    };
    Ae.inDST = Ae.isDST,
    Ae.round = Ae.nearest,
    Ae.each = Ae.every;
    var Fe = Ae;
    const Pe = e=>("string" == typeof e && (e = parseInt(e, 10)),
    e)
      , Le = ["year", "month", "date", "hour", "minute", "second", "millisecond"]
      , Be = (e,t,n)=>{
        let a = Le.indexOf(n)
          , r = Le.slice(a, Le.length);
        for (let n = 0; n < r.length; n++) {
            let a = t[r[n]]();
            e[r[n]](a)
        }
        return e
    }
      , He = function(e, t, n, a) {
        return !0 === n && e.isBefore(t) ? e = e.add(1, a) : !1 === n && e.isAfter(t) && (e = e.minus(1, a)),
        e
    }
      , Ze = function(e, t, n) {
        t = Pe(t);
        let a = e.clone()
          , r = (e.minute() - t) * E.minute;
        return e.epoch -= r,
        Be(e, a, "second"),
        (e = He(e, a, n, "hour")).epoch
    }
      , Qe = function(e, t, n) {
        (t = Pe(t)) >= 24 ? t = 24 : t < 0 && (t = 0);
        let a = e.clone()
          , r = e.hour() - t
          , o = r * E.hour;
        return e.epoch -= o,
        e.date() !== a.date() && (e = a.clone(),
        r > 1 && (r -= 1),
        r < 1 && (r += 1),
        o = r * E.hour,
        e.epoch -= o),
        Y(e, {
            hour: t
        }),
        Be(e, a, "minute"),
        (e = He(e, a, n, "day")).epoch
    }
      , Ge = function(e, t) {
        return "string" == typeof t && /^'[0-9]{2}$/.test(t) && (t = t.replace(/'/, "").trim(),
        t = (t = Number(t)) > 30 ? 1900 + t : 2e3 + t),
        t = Pe(t),
        Y(e, {
            year: t
        }),
        e.epoch
    };
    let Ue = "am"
      , Ve = "pm";
    const We = {
        millisecond: function(e) {
            if (void 0 !== e) {
                let t = this.clone();
                return t.epoch = function(e, t) {
                    t = Pe(t);
                    let n = e.millisecond() - t;
                    return e.epoch - n
                }(t, e),
                t
            }
            return this.d.getMilliseconds()
        },
        second: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = function(e, t, n) {
                    t = Pe(t);
                    let a = e.clone()
                      , r = (e.second() - t) * E.second;
                    return e.epoch = e.epoch - r,
                    (e = He(e, a, n, "minute")).epoch
                }(n, e, t),
                n
            }
            return this.d.getSeconds()
        },
        minute: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = Ze(n, e, t),
                n
            }
            return this.d.getMinutes()
        },
        hour: function(e, t) {
            let n = this.d;
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = Qe(n, e, t),
                n
            }
            return n.getHours()
        },
        hourFloat: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone()
                  , a = e % 1;
                a *= 60;
                let r = parseInt(e, 10);
                return n.epoch = Qe(n, r, t),
                n.epoch = Ze(n, a, t),
                n
            }
            let n = this.d
              , a = n.getHours()
              , r = n.getMinutes();
            return r /= 60,
            a + r
        },
        hour12: function(e, t) {
            let n = this.d;
            if (void 0 !== e) {
                let n = this.clone()
                  , a = (e = "" + e).match(/^([0-9]+)(am|pm)$/);
                if (a) {
                    let e = parseInt(a[1], 10);
                    "pm" === a[2] && (e += 12),
                    n.epoch = Qe(n, e, t)
                }
                return n
            }
            let a = n.getHours();
            return a > 12 && (a -= 12),
            0 === a && (a = 12),
            a
        },
        time: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return e = e.toLowerCase().trim(),
                n.epoch = function(e, t, n) {
                    let a = t.match(/([0-9]{1,2})[:h]([0-9]{1,2})(:[0-9]{1,2})? ?(am|pm)?/);
                    if (!a) {
                        if (a = t.match(/([0-9]{1,2}) ?(am|pm)/),
                        !a)
                            return e.epoch;
                        a.splice(2, 0, "0"),
                        a.splice(3, 0, "")
                    }
                    let r = !1
                      , o = parseInt(a[1], 10)
                      , i = parseInt(a[2], 10);
                    i >= 60 && (i = 59),
                    o > 12 && (r = !0),
                    !1 === r && ("am" === a[4] && 12 === o && (o = 0),
                    "pm" === a[4] && o < 12 && (o += 12)),
                    a[3] = a[3] || "",
                    a[3] = a[3].replace(/:/, "");
                    let s = parseInt(a[3], 10) || 0
                      , u = e.clone();
                    return e = (e = (e = (e = e.hour(o)).minute(i)).second(s)).millisecond(0),
                    (e = He(e, u, n, "day")).epoch
                }(n, e, t),
                n
            }
            return `${this.h12()}:${w(this.minute())}${this.ampm()}`
        },
        ampm: function(e, t) {
            let n = Ue
              , a = this.hour();
            if (a >= 12 && (n = Ve),
            "string" != typeof e)
                return n;
            let r = this.clone();
            return e = e.toLowerCase().trim(),
            a >= 12 && "am" === e ? (a -= 12,
            r.hour(a, t)) : a < 12 && "pm" === e ? (a += 12,
            r.hour(a, t)) : r
        },
        dayTime: function(e, t) {
            if (void 0 !== e) {
                const n = {
                    morning: "7:00",
                    breakfast: "7:00",
                    noon: "12:00",
                    lunch: "12:00",
                    afternoon: "14:00",
                    evening: "18:00",
                    dinner: "18:00",
                    night: "23:00",
                    midnight: "00:00"
                };
                let a = this.clone();
                return e = (e = e || "").toLowerCase(),
                !0 === n.hasOwnProperty(e) && (a = a.time(n[e], t)),
                a
            }
            let n = this.hour();
            return n < 6 ? "night" : n < 12 ? "morning" : n < 17 ? "afternoon" : n < 22 ? "evening" : "night"
        },
        iso: function(e) {
            return void 0 !== e ? this.set(e) : this.format("iso")
        }
    };
    var Je = We;
    const Ke = {
        date: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return (e = parseInt(e, 10)) && (n.epoch = function(e, t, n) {
                    if ((t = Pe(t)) > 28) {
                        let n = e.month()
                          , a = A[n];
                        1 === n && 29 === t && g(e.year()) && (a = 29),
                        t > a && (t = a)
                    }
                    t <= 0 && (t = 1);
                    let a = e.clone();
                    return Y(e, {
                        date: t
                    }),
                    (e = He(e, a, n, "month")).epoch
                }(n, e, t)),
                n
            }
            return this.d.getDate()
        },
        day: function(e, t) {
            if (void 0 === e)
                return this.d.getDay();
            let n = this.clone()
              , a = e;
            "string" == typeof e && (e = e.toLowerCase(),
            ue.hasOwnProperty(e) ? a = ue[e] : (a = ie().indexOf(e),
            -1 === a && (a = se().indexOf(e))));
            let r = this.d.getDay() - a;
            !0 === t && r > 0 && (r -= 7),
            !1 === t && r < 0 && (r += 7);
            let o = this.subtract(r, "days");
            return Y(o, {
                hour: n.hour(),
                minute: n.minute(),
                second: n.second()
            }),
            o
        },
        dayName: function(e, t) {
            if (void 0 === e)
                return se()[this.day()];
            let n = this.clone();
            return n = n.day(e, t),
            n
        }
    };
    var Re = Ke;
    const Xe = e=>e = (e = (e = e.minute(0)).second(0)).millisecond(1)
      , et = {
        dayOfYear: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = function(e, t, n) {
                    t = Pe(t);
                    let a = e.clone();
                    return (t -= 1) <= 0 ? t = 0 : t >= 365 && (t = g(e.year()) ? 365 : 364),
                    e = (e = e.startOf("year")).add(t, "day"),
                    Be(e, a, "hour"),
                    (e = He(e, a, n, "year")).epoch
                }(n, e, t),
                n
            }
            let n, a = 0, r = this.d.getMonth();
            for (let e = 1; e <= r; e++)
                n = new Date,
                n.setDate(1),
                n.setFullYear(this.d.getFullYear()),
                n.setHours(1),
                n.setMinutes(1),
                n.setMonth(e),
                n.setHours(-2),
                a += n.getDate();
            return a + this.d.getDate()
        },
        week: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = function(e, t, n) {
                    let a = e.clone();
                    return t = Pe(t),
                    "december" === (e = (e = (e = e.month(0)).date(1)).day("monday")).monthName() && e.date() >= 28 && (e = e.add(1, "week")),
                    t -= 1,
                    e = e.add(t, "weeks"),
                    (e = He(e, a, n, "year")).epoch
                }(this, e, t),
                n = Xe(n),
                n
            }
            let n = this.clone();
            n = n.month(0),
            n = n.date(1),
            n = Xe(n),
            n = n.day("monday"),
            11 === n.month() && n.date() >= 25 && (n = n.add(1, "week"));
            let a = 1;
            1 === n.date() && (a = 0),
            n = n.minus(1, "second");
            const r = this.epoch;
            if (n.epoch > r)
                return 1;
            let o = 0
              , i = 4 * this.month();
            for (n.epoch += E.week * i,
            o += i; o <= 52; o++) {
                if (n.epoch > r)
                    return o + a;
                n = n.add(1, "week")
            }
            return 52
        },
        month: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n.epoch = function(e, t, n) {
                    "string" == typeof t && ("sept" === t && (t = "sep"),
                    t = B()[t.toLowerCase()]),
                    (t = Pe(t)) >= 12 && (t = 11),
                    t <= 0 && (t = 0);
                    let a = e.date();
                    a > A[t] && (a = A[t]);
                    let r = e.clone();
                    return Y(e, {
                        month: t,
                        d: a
                    }),
                    (e = He(e, r, n, "year")).epoch
                }(n, e, t),
                n
            }
            return this.d.getMonth()
        },
        monthName: function(e, t) {
            if (void 0 !== e) {
                let n = this.clone();
                return n = n.month(e, t),
                n
            }
            return P[this.month()]
        },
        quarter: function(e, t) {
            if (void 0 !== e && ("string" == typeof e && (e = e.replace(/^q/i, ""),
            e = parseInt(e, 10)),
            Te[e])) {
                let n = this.clone()
                  , a = Te[e][0];
                return n = n.month(a, t),
                n = n.date(1, t),
                n = n.startOf("day"),
                n
            }
            let n = this.d.getMonth();
            for (let e = 1; e < Te.length; e++)
                if (n < Te[e][0])
                    return e - 1;
            return 4
        },
        season: function(e, t) {
            let n = "north";
            if ("South" === this.hemisphere() && (n = "south"),
            void 0 !== e) {
                let a = this.clone();
                for (let r = 0; r < Ie[n].length; r++)
                    e === Ie[n][r][0] && (a = a.month(Ie[n][r][1], t),
                    a = a.date(1),
                    a = a.startOf("day"));
                return a
            }
            let a = this.d.getMonth();
            for (let e = 0; e < Ie[n].length - 1; e++)
                if (a >= Ie[n][e][1] && a < Ie[n][e + 1][1])
                    return Ie[n][e][0];
            return "north" === n ? "winter" : "summer"
        },
        year: function(e) {
            if (void 0 !== e) {
                let t = this.clone();
                return t.epoch = Ge(t, e),
                t
            }
            return this.d.getFullYear()
        },
        era: function(e) {
            if (void 0 !== e) {
                let t = this.clone();
                e = e.toLowerCase();
                let n = t.d.getFullYear();
                return "bc" === e && n > 0 && (t.epoch = Ge(t, -1 * n)),
                "ad" === e && n < 0 && (t.epoch = Ge(t, -1 * n)),
                t
            }
            return this.d.getFullYear() < 0 ? "BC" : "AD"
        },
        decade: function(e) {
            if (void 0 !== e) {
                if (!(e = (e = (e = String(e)).replace(/([0-9])'?s$/, "$1")).replace(/([0-9])(th|rd|st|nd)/, "$1")))
                    return console.warn("Spacetime: Invalid decade input"),
                    this;
                2 === e.length && /[0-9][0-9]/.test(e) && (e = "19" + e);
                let t = Number(e);
                return isNaN(t) ? this : (t = 10 * Math.floor(t / 10),
                this.year(t))
            }
            return this.startOf("decade").year()
        },
        century: function(e) {
            if (void 0 !== e) {
                "string" == typeof e && (e = (e = (e = e.replace(/([0-9])(th|rd|st|nd)/, "$1")).replace(/([0-9]+) ?(b\.?c\.?|a\.?d\.?)/i, ((e,t,n)=>(n.match(/b\.?c\.?/i) && (t = "-" + t),
                t)))).replace(/c$/, ""));
                let t = Number(e);
                return isNaN(e) ? (console.warn("Spacetime: Invalid century input"),
                this) : (0 === t && (t = 1),
                t = t >= 0 ? 100 * (t - 1) : 100 * (t + 1),
                this.year(t))
            }
            let t = this.startOf("century").year();
            return t = Math.floor(t / 100),
            t < 0 ? t - 1 : t + 1
        },
        millenium: function(e) {
            if (void 0 !== e) {
                if ("string" == typeof e && (e = e.replace(/([0-9])(th|rd|st|nd)/, "$1"),
                e = Number(e),
                isNaN(e)))
                    return console.warn("Spacetime: Invalid millenium input"),
                    this;
                e > 0 && (e -= 1);
                let t = 1e3 * e;
                return 0 === t && (t = 1),
                this.year(t)
            }
            let t = Math.floor(this.year() / 1e3);
            return t >= 0 && (t += 1),
            t
        }
    };
    var tt = et;
    const nt = Object.assign({}, Je, Re, tt);
    nt.milliseconds = nt.millisecond,
    nt.seconds = nt.second,
    nt.minutes = nt.minute,
    nt.hours = nt.hour,
    nt.hour24 = nt.hour,
    nt.h12 = nt.hour12,
    nt.h24 = nt.hour24,
    nt.days = nt.day;
    var at = e=>{
        Object.keys(nt).forEach((t=>{
            e.prototype[t] = nt[t]
        }
        ))
    }
    ;
    const rt = function(e, t) {
        return 1 === e && g(t) ? 29 : A[e]
    }
      , ot = (e,t)=>{
        if (e.month > 0) {
            let n = parseInt(e.month / 12, 10);
            e.year = t.year() + n,
            e.month = e.month % 12
        } else if (e.month < 0) {
            let n = Math.abs(e.month)
              , a = parseInt(n / 12, 10);
            n % 12 != 0 && (a += 1),
            e.year = t.year() - a,
            e.month = e.month % 12,
            e.month = e.month + 12,
            12 === e.month && (e.month = 0)
        }
        return e
    }
      , it = (e,t,n)=>{
        let a = t.year()
          , r = t.month()
          , o = rt(r, a);
        for (; n > o; )
            n -= o,
            r += 1,
            r >= 12 && (r -= 12,
            a += 1),
            o = rt(r, a);
        return e.month = r,
        e.date = n,
        e
    }
      , st = (e,t,n)=>{
        e.year = t.year(),
        e.month = t.month();
        let a = t.date();
        for (e.date = a - Math.abs(n); e.date < 1; ) {
            e.month -= 1,
            e.month < 0 && (e.month = 11,
            e.year -= 1);
            let t = rt(e.month, e.year);
            e.date += t
        }
        return e
    }
      , ut = ["millisecond", "second", "minute", "hour", "date", "month"];
    let lt = {
        second: ut.slice(0, 1),
        minute: ut.slice(0, 2),
        quarterhour: ut.slice(0, 2),
        hour: ut.slice(0, 3),
        date: ut.slice(0, 4),
        month: ut.slice(0, 4),
        quarter: ut.slice(0, 4),
        season: ut.slice(0, 4),
        year: ut,
        decade: ut,
        century: ut
    };
    lt.week = lt.hour,
    lt.season = lt.date,
    lt.quarter = lt.date;
    const ct = {
        year: !0,
        quarter: !0,
        season: !0,
        month: !0,
        week: !0,
        date: !0
    }
      , ht = {
        month: !0,
        quarter: !0,
        season: !0,
        year: !0
    };
    var dt = e=>{
        e.prototype.add = function(e, t) {
            let n = this.clone();
            if (!t || 0 === e)
                return n;
            let a = this.clone();
            if ("millisecond" === (t = j(t)))
                return n.epoch += e,
                n;
            "fortnight" === t && (e *= 2,
            t = "week"),
            E[t] ? n.epoch += E[t] * e : "week" === t || "weekend" === t ? n.epoch += E.day * (7 * e) : "quarter" === t || "season" === t ? n.epoch += E.month * (3 * e) : "quarterhour" === t && (n.epoch += 15 * E.minute * e);
            let r = {};
            if (lt[t] && lt[t].forEach((e=>{
                r[e] = a[e]()
            }
            )),
            ct[t]) {
                const e = a.timezone().current.offset - n.timezone().current.offset;
                n.epoch += 3600 * e * 1e3
            }
            if ("month" === t && (r.month = a.month() + e,
            r = ot(r, a)),
            "week" === t) {
                let t = a.date() + 7 * e;
                t <= 28 && t > 1 && (r.date = t)
            }
            if ("weekend" === t && "saturday" !== n.dayName())
                n = n.day("saturday", !0);
            else if ("date" === t) {
                if (e < 0)
                    r = st(r, a, e);
                else {
                    let t = a.date() + e;
                    r = it(r, a, t)
                }
                0 !== e && a.isSame(n, "day") && (r.date = a.date() + e)
            } else if ("quarter" === t) {
                if (r.month = a.month() + 3 * e,
                r.year = a.year(),
                r.month < 0) {
                    let e = Math.floor(r.month / 12)
                      , t = r.month + 12 * Math.abs(e);
                    r.month = t,
                    r.year += e
                } else if (r.month >= 12) {
                    let e = Math.floor(r.month / 12);
                    r.month = r.month % 12,
                    r.year += e
                }
                r.date = a.date()
            } else if ("year" === t) {
                let t = a.year() + e
                  , r = n.year();
                if (r < t) {
                    let t = Math.floor(e / 4) || 1;
                    n.epoch += Math.abs(E.day * t)
                } else if (r > t) {
                    let t = Math.floor(e / 4) || 1;
                    n.epoch += E.day * t
                }
            } else
                "decade" === t ? r.year = n.year() + 10 : "century" === t && (r.year = n.year() + 100);
            if (ht[t]) {
                let e = A[r.month];
                r.date = a.date(),
                r.date > e && (r.date = e)
            }
            return Object.keys(r).length > 1 && Y(n, r),
            n
        }
        ,
        e.prototype.subtract = function(e, t) {
            return this.clone().add(-1 * e, t)
        }
        ,
        e.prototype.minus = e.prototype.subtract,
        e.prototype.plus = e.prototype.add
    }
    ;
    const mt = {
        millisecond: e=>e.epoch,
        second: e=>[e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second()].join("-"),
        minute: e=>[e.year(), e.month(), e.date(), e.hour(), e.minute()].join("-"),
        hour: e=>[e.year(), e.month(), e.date(), e.hour()].join("-"),
        day: e=>[e.year(), e.month(), e.date()].join("-"),
        week: e=>[e.year(), e.week()].join("-"),
        month: e=>[e.year(), e.month()].join("-"),
        quarter: e=>[e.year(), e.quarter()].join("-"),
        year: e=>e.year()
    };
    mt.date = mt.day;
    var ft = e=>{
        e.prototype.isSame = function(t, n, a=!0) {
            let r = this;
            if (!n)
                return null;
            if ("string" == typeof t && "object" == typeof n) {
                let e = t;
                t = n,
                n = e
            }
            return "string" != typeof t && "number" != typeof t || (t = new e(t,this.timezone.name)),
            n = n.replace(/s$/, ""),
            !0 === a && r.tz !== t.tz && ((t = t.clone()).tz = r.tz),
            mt[n] ? mt[n](r) === mt[n](t) : null
        }
    }
    ;
    var pt = e=>{
        const t = {
            isAfter: function(e) {
                let t = $(e = z(e, this));
                return null === t ? null : this.epoch > t
            },
            isBefore: function(e) {
                let t = $(e = z(e, this));
                return null === t ? null : this.epoch < t
            },
            isEqual: function(e) {
                let t = $(e = z(e, this));
                return null === t ? null : this.epoch === t
            },
            isBetween: function(e, t, n=!1) {
                e = z(e, this),
                t = z(t, this);
                let a = $(e);
                if (null === a)
                    return null;
                let r = $(t);
                return null === r ? null : n ? this.isBetween(e, t) || this.isEqual(e) || this.isEqual(t) : a < this.epoch && this.epoch < r
            }
        };
        Object.keys(t).forEach((n=>{
            e.prototype[n] = t[n]
        }
        ))
    }
    ;
    var yt = e=>{
        const t = {
            i18n: function(e) {
                var t, n, a;
                return k(e.days) && (t = e.days,
                re = t.short || re,
                oe = t.long || oe),
                k(e.months) && function(e) {
                    F = e.short || F,
                    P = e.long || P
                }(e.months),
                a = e.useTitleCase,
                "[object Boolean]" === Object.prototype.toString.call(a) && (n = e.useTitleCase,
                le = n),
                k(e.ampm) && function(e) {
                    Ue = e.am || Ue,
                    Ve = e.pm || Ve
                }(e.ampm),
                this
            }
        };
        Object.keys(t).forEach((n=>{
            e.prototype[n] = t[n]
        }
        ))
    }
    ;
    let gt = i;
    const bt = function(e, t, a={}) {
        this.epoch = null,
        this.tz = y(t, gt),
        this.silent = void 0 === a.silent || a.silent,
        this.british = a.dmy || a.british,
        this._weekStart = 1,
        void 0 !== a.weekStart && (this._weekStart = a.weekStart),
        this._today = {},
        void 0 !== a.today && (this._today = a.today),
        Object.defineProperty(this, "d", {
            get: function() {
                let e = n(this)
                  , t = (new Date(this.epoch).getTimezoneOffset() || 0) + 60 * e;
                t = 60 * t * 1e3;
                let a = this.epoch + t;
                return new Date(a)
            }
        }),
        Object.defineProperty(this, "timezones", {
            get: ()=>gt,
            set: e=>(gt = e,
            e)
        });
        let r = ae(this, e);
        this.epoch = r.epoch
    };
    Object.keys(Fe).forEach((e=>{
        bt.prototype[e] = Fe[e]
    }
    )),
    bt.prototype.clone = function() {
        return new bt(this.epoch,this.tz,{
            silent: this.silent,
            weekStart: this._weekStart,
            today: this._today,
            parsers: this.parsers
        })
    }
    ,
    bt.prototype.toLocalDate = function() {
        return this.toNativeDate()
    }
    ,
    bt.prototype.toNativeDate = function() {
        return new Date(this.epoch)
    }
    ,
    at(bt),
    dt(bt),
    ft(bt),
    pt(bt),
    yt(bt);
    var kt = bt;
    var wt = (e,t)=>{
        let n = new kt(null)
          , a = new kt(null);
        n = n.time(e),
        a = t ? a.time(t) : n.add(59, "minutes");
        let r = n.hour()
          , o = a.hour();
        return Object.keys(n.timezones).filter((e=>{
            if (-1 === e.indexOf("/"))
                return !1;
            let t = new kt(null,e)
              , i = t.hour();
            return i >= r && i <= o && (!(i === r && t.minute() < n.minute()) && !(i === o && t.minute() > a.minute()))
        }
        ))
    }
    ;
    const vt = (e,t,n)=>new kt(e,t,n)
      , _t = function(e) {
        let t = e._today || {};
        return Object.keys(t).forEach((n=>{
            e = e[n](t[n])
        }
        )),
        e
    };
    return vt.now = (e,t)=>{
        let n = new kt((new Date).getTime(),e,t);
        return n = _t(n),
        n
    }
    ,
    vt.today = (e,t)=>{
        let n = new kt((new Date).getTime(),e,t);
        return n = _t(n),
        n.startOf("day")
    }
    ,
    vt.tomorrow = (e,t)=>{
        let n = new kt((new Date).getTime(),e,t);
        return n = _t(n),
        n.add(1, "day").startOf("day")
    }
    ,
    vt.yesterday = (e,t)=>{
        let n = new kt((new Date).getTime(),e,t);
        return n = _t(n),
        n.subtract(1, "day").startOf("day")
    }
    ,
    vt.extend = function(e={}) {
        return Object.keys(e).forEach((t=>{
            kt.prototype[t] = e[t]
        }
        )),
        this
    }
    ,
    vt.timezones = function() {
        return (new kt).timezones
    }
    ,
    vt.max = function(e, t) {
        let n = new kt(null,e,t);
        return n.epoch = 864e13,
        n
    }
    ,
    vt.min = function(e, t) {
        let n = new kt(null,e,t);
        return n.epoch = -864e13,
        n
    }
    ,
    vt.whereIts = wt,
    vt.version = "7.4.6",
    vt.plugin = vt.extend,
    vt
}
));
