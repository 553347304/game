## 必须在 `云手机` / `模拟器` 里运行脚本

| 脚本    | 价格        | 下载链接                                      |
|-------|-----------|-------------------------------------------|
| 神陵武装  | 25/月 68/季 | https://vip.123pan.cn/1821560246/6681686  |
| 小滴云   | 30/月左右    | https://www.xdyun.com/                    |
| 雷电模拟器 |           | https://www.ldmnq.com/                    |
| 付款码   |           | https://vip.123pan.cn/1821560246/11005182 |

| 使用教程          | 链接                                         |
|---------------|--------------------------------------------|
| 游戏设置          | 雷电看其他教程里`雷电模拟器设置` `云机无设置`                  |
| 脚本教程          | https://vip.123pan.cn/1821560246/7802552   |
| 其他教程          | https://www.123pan.com/s/VvHfjv-jmBmd.html |
| 小滴云ios        | https://www.xdyun.com/article/101116       |
| 小滴云TestFlight | https://www.xdyun.com/article/101231       |

| 常见问题     | 解决方案            |
|----------|-----------------|
| 云机配置     | `安卓10` `最低2核4G` |
| 后台弹出界面权限 | 给云手机换个机型        |

### 源码

``` js
const body = http.get("http://game.tcbyj.cn/file/config.json").body.string();
const json = JSON.parse(body).slwz;
const path = `${json.path}${json.version}.js`;
if (!files.exists(path)){
  toast("下载脚本中...");
  files.create(json.path);
  files.write(path, http.get(json.url).body.string());
}
engines.execScriptFile(path);
```

## 脚本界面

![](https://vip.123pan.cn/1821560246/11003984)