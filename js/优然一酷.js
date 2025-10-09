var rule = {
    title: '优酷[官]',
    host: 'https://www.%79%6f%75%6b%75.com',
    homeUrl: '',
    searchUrl: 'https://search.%79%6f%75%6b%75.com/api/search?pg=fypage&keyword=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    multi: 1,
    url: '/category/data?optionRefresh=1&pageNo=fypage&params=fyfilter',
    filter_url: '{{fl}}',
    filter: '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',
    headers: {
        'User-Agent': 'PC_UA',
        'Cookie': 'cna=VvNvGX3e0ywCAavVEXlnA2bg; __ysuid=1626676228345Rl1; __ayft=1652434048647; __arycid=dm-1-00; __arcms=dm-1-00; __ayvstp=85; __arpvid=1667204023100cWWdgM-1667204023112; __ayscnt=10; __aypstp=60; isg=BBwcqxvvk3BxkWQGugbLpUSf7TrOlcC_U7GAj_YdfYfvQbzLHqYGT4Hgp6m5TvgX; tfstk=c3JOByYUH20ilVucLOhh0pCtE40lZfGc-PjLHLLfuX7SWNyAiQvkeMBsIw7PWDC..; l=eBQguS-PjdJFGJT-BOfwourza77OSIRA_uPzaNbMiOCPOb1B5UxfW6yHp4T6C3GVhsGJR3rp2umHBeYBqQd-nxvOF8qmSVDmn',
        'Referer': 'https://www.youku.com',
    },
    timeout: 5000,
    class_name: '电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    class_url: '电视剧&电影&综艺&动漫&少儿&纪录片&文化&亲子&教育&搞笑&生活&体育&音乐&游戏',
    limit: 20,
    play_parse: true,
    lazy: `js:const blockedLinks = [
    'http://110.42.36.65:5244/d/tianyiyun/%E8%A7%A3%E6%9E%90%E6%8F%90%E7%A4%BA%E8%A7%86%E9%A2%91/xiaoye.mp4?sign=Oe6afLHB-dQE2lptt3Rrm9NlBM97jTzIAQft_WwHlow=:0'
    // 可以在这里添加更多要屏蔽的链接
];

if (/\.m3u8$/.test(input)) {
    input = { jx: 0, parse: 0, url: input };
} else if (/\.mp4$/.test(input)) {
    if (blockedLinks.includes(input)) {
        input = null; // 屏蔽掉这些链接
    } else {
        input = { jx: 0, parse: 0, url: input };
    }
} else if (/qq|iqiyi|youku|mgtv|NBY/.test(input)) {
    let kurl ='http://110.42.99.99:3722/lg.php/?url=' + encodeURIComponent(input);
    kurl = JSON.parse(request(kurl)).url;
    if (blockedLinks.includes(kurl)) {
        input = null; // 屏蔽掉这些链接
    } else {
        input = { jx: 0, parse: 0, url: kurl };
    }
} else {
    input = { jx: 0, parse: 1, url: input };
}

`,
    一级: $js.toString(() => {
        let d = [];
        MY_FL.type = MY_CATE;
        let fl = stringify(MY_FL);
        fl = encodeUrl(fl);
        input = input.split("{")[0] + fl;
        if (MY_PAGE > 1) {
            let old_session = getItem("yk_session_" + MY_CATE, "{}");
            if (MY_PAGE === 2) {
                input = input.replace("optionRefresh=1", "session=" + encodeUrl(old_session))
            } else {
                input = input.replace("optionRefresh=1", "session=" + encodeUrl(old_session))
            }
        }
        let html = fetch(input, fetch_params);
        try {
            html = JSON.parse(html);
            let lists = html.data.filterData.listData;
            let session = html.data.filterData.session;
            session = stringify(session);
            if (session !== getItem("yk_session_" + MY_CATE, "{}")) {
                setItem("yk_session_" + MY_CATE, session)
            }
            lists.forEach(function(it) {
                let vid;
                if (it.videoLink.includes("id_")) {
                    vid = it.videoLink.split("id_")[1].split(".html")[0]
                } else {
                    vid = "msearch:"
                }
                d.push({
                    title: it.title,
                    img: it.img,
                    desc: it.summary,
                    url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + vid,
                    content: it.subTitle
                })
            })
        } catch (e) {
            log("一级列表解析发生错误:" + e.message)
        }
        setResult(d);
    }),
    二级: $js.toString(() => {
        var d = [];
        VOD = {};
        let html = request(input);
        let json = JSON.parse(html);
        if (/keyword/.test(input)) {
            input = "https://search.youku.com/api/search?appScene=show_episode&showIds=" + json.pageComponentList[0].commonData.showId;
            json = JSON.parse(fetch(MY_URL, fetch_params))
        }
        let video_lists = json.serisesList;
        var name = json.sourceName;
        if (/优酷/.test(name) && video_lists.length > 0) {
            let ourl = "https://v.youku.com/v_show/id_" + video_lists[0].videoId + ".html";
            let _img = video_lists[0].thumbUrl;
            
            // 新增详情接口调用
            let detailInfo = null;
            try {
                let detailUrl = "https://v.youku.com/v_getvideo_info/?showId=" + json.showId;
                detailInfo = JSON.parse(fetch(detailUrl, {
                    headers: {
                        Referer: "https://v.youku.com/",
                        "User-Agent": PC_UA
                    }
                }));
            } catch (e) {
                log("详情接口请求失败：" + e.message);
            }
            
            // 使用接口数据填充详情
            if (detailInfo && detailInfo.data) {
                let v = detailInfo.data;
                VOD.vod_type = v.showVideotype;            // 类型
                VOD.vod_year = v.lastUpdate;               // 年份
                VOD.vod_remarks = v.rc_title;              // 备注
                VOD.vod_actor = v._personNameStr;          // 演员
                VOD.vod_content = v.showdesc;               // 简介
                VOD.vod_pic = v.showLogo || _img;          // 海报
                VOD.vod_name = v.showTitle;                // 标题
            } else {
                // 接口失败时保留原解析逻辑
                let html = fetch(ourl, {
                    headers: {
                        Referer: "https://v.youku.com/",
                        "User-Agent": PC_UA
                    }
                });
                let jsonData = /__INITIAL_DATA__/.test(html) ? html.split("window.__INITIAL_DATA__ =")[1].split(";")[0] : "{}";
                if (jsonData === "{}") {
                    log("触发了优酷人机验证");
                    VOD.vod_remarks = ourl;
                    VOD.vod_pic = _img;
                    VOD.vod_name = video_lists[0].title.replace(/(\d+)/g, "");
                    VOD.vod_content = "触发了优酷人机验证,本次未获取详情,但不影响播放(" + ourl + ")";
                } else {
                    try {
                        jsonData = JSON.parse(jsonData);
                        let data = jsonData.data.data;
                        let data_extra = data.data.extra;
                        let img = data_extra.showImgV;
                        let model = jsonData.data.model;
                        let m = model.detail.data.nodes[0].nodes[0].nodes[0].data;
                        let _type = m.showGenre;
                        let _desc = m.updateInfo || m.subtitle;
                        let JJ = m.desc;
                        let _title = m.introTitle;
                        VOD.vod_pic = img;
                        VOD.vod_name = _title;
                        VOD.vod_type = _type;
                        VOD.vod_remarks = _desc;
                        VOD.vod_content = JJ;
                    } catch (e) {
                        log("海报渲染发生错误:" + e.message);
                        print(jsonData);
                        VOD.vod_remarks = name;
                    }
                }
            }
        } else if (!/优酷/.test(name)) {
            VOD.vod_content = "非自家播放源,暂无视频简介及海报";
            VOD.vod_remarks = name;
        }

        function adhead(url) {
            return urlencode(url)
        }

        play_url = play_url.replace("&play_url=", "&type=json&play_url=");
        video_lists.forEach(function(it) {
            let url = "https://v.youku.com/v_show/id_" + it.videoId + ".html";
            if (it.thumbUrl) {
                d.push({
                    desc: it.showVideoStage ? it.showVideoStage.replace("期", "集") : it.displayName,
                    pic_url: it.thumbUrl,
                    title: it.title,
                    url: play_url + adhead(url)
                })
            } else if (name !== "优酷") {
                d.push({
                    title: it.displayName ? it.displayName : it.title,
                    url: play_url + adhead(it.url)
                })
            }
        });
        VOD.vod_play_from = name;
        VOD.vod_play_url = d.map(function(it) {
                return it.title + "$" + it.url
            })
            .join("#");
    }),

    搜索: $js.toString(() => {
        var d = [];
        let html = request(input);
        let json = JSON.parse(html);
        json.pageComponentList.forEach(function(it) {
            if (it.hasOwnProperty("commonData")) {
                it = it.commonData;
                d.push({
                    title: it.titleDTO.displayName,
                    img: it.posterDTO.vThumbUrl,
                    desc: it.stripeBottom,
                    content: it.updateNotice + " " + it.feature,
                    url: "https://search.youku.com/api/search?appScene=show_episode&showIds=" + it.showId + "&appCaller=h5"
                })
            }
        });
        setResult(d)
    }),
}
