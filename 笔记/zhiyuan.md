<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>视频播放页面</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .video-container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    <div class="video-container">
        <video controls preload="metadata" width="100%" height="500"
               poster="https://www.zhiyuan-robot.com/file/ueditor/php/upload/video/20251110/x2-7.mov?x-oss-process=video/snapshot,t_1000,f_jpg,w_400,h_350">
            <source src="https://www.zhiyuan-robot.com/file/ueditor/php/upload/video/20251110/x2-7.mov" type="video/quicktime">
            <source src="https://www.zhiyuan-robot.com/file/ueditor/php/upload/video/20251110/x2-7.mov" type="video/mp4">
            <source src="https://www.zhiyuan-robot.com/file/ueditor/php/upload/video/20251110/x2-7.mov" type="video/mov">
            您的浏览器不支持视频播放。
        </video>
    </div>
</body>
</html>
