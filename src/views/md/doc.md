# shell命令进入文件极客管理器，不会自动跳到指定的文件夹

### 视频 https://vip.123pan.cn/1821560246/11663201

```yaml
这个一直都不行,我在模拟器里可以
我通过那个活动名调用文件极客只能打开
但是无法跳到指定文件夹
```

### 打开文件夹代码 Auto.js

``` javascript
let pack = "/sdcard/ScreenRecord/";
let activity = "com.google.android.apps.nbu.files/.home.HomeActivity";
let is = shell(`am start -a android.intent.action.VIEW -d file://${pack} -t "resource/folder"`, true);       // 雷电模拟器文件管理器
if (is.error !== "") shell(`am start -a android.intent.action.VIEW -d file://${pack} -n ${activity}`, true); // 文件极客
```

# 小滴云我在内部录屏，保存的视频看不了

### 视频 https://vip.123pan.cn/1821560246/11663178

``` yaml
我在模拟器里好使
并且在1-2月前云机是没问题的
不知道现在怎么不行了
之前好使的时候我启动他会提示我打开xx录制权限，现在也不会提示了
```

### 录屏代码 Auto.js

``` javascript
"ui";
const SYS = (() => {
    function _SYSTEM() {
        this.width = device.width;
        this.height = device.height;
        this._media = {
            path: "/sdcard/ScreenRecord/",
            run: false,
        }
    }

    _SYSTEM.prototype.REC = function () {
        if (!files.isDir(this._media.path)) files.create(this._media.path);
        return {
            Video: () => {
                toast("开始录屏");
                if (this._media.run) return toast("已经开启录屏了");
                this._media.run = true;
                runtime.requestPermissions(["SYSTEM_ALERT_WINDOW", "WRITE_EXTERNAL_STORAGE", "READ_EXTERNAL_STORAGE", "RECORD_AUDIO"]);    // 请求权限
                importClass(android.media.MediaRecorder);
                let media = new MediaRecorder();    // 实例对象
                let Service = context.getSystemService(android.content.Context.MEDIA_PROJECTION_SERVICE);
                activity.startActivityForResult(Service.createScreenCaptureIntent(), 666); // 获取屏幕截图
                let service, virtualDisplay;
                ui.emitter.on("activity_result", (requestCode, resultCode, data) => {
                    // 初始化
                    service = Service.getMediaProjection(resultCode, data);
                    media.setAudioSource(MediaRecorder.AudioSource.MIC);
                    media.setVideoSource(MediaRecorder.VideoSource.SURFACE);
                    media.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
                    media.setOutputFile(this._media.path + "1.mp4");
                    media.setVideoSize(this.width, this.height);
                    media.setVideoEncoder(MediaRecorder.VideoEncoder.H264);
                    media.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);
                    media.setVideoEncodingBitRate(5 * 1024 * 1024);
                    media.setVideoFrameRate(30);
                    media.prepare();
                    // 开始录制
                    virtualDisplay = service.createVirtualDisplay(
                        "BY", this.width, this.height, 1,  // DPI
                        android.hardware.display.DisplayManager.VIRTUAL_DISPLAY_FLAG_AUTO_MIRROR, media.getSurface(), null, null);
                    media.start();
                });
                // 音量+ 停止脚本并保存录制视频
                events.on("exit", function () {
                    media.stop();
                    media.reset();
                    virtualDisplay.release();
                    service.stop();
                    toast("录屏保存路径: " + this._media.path);
                });
            },
        };
    };
    return new _SYSTEM;
})();

SYS.REC().Video();
```