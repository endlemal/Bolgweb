
# 一、准备一个conda环境（因为conda自带jupyter）
安装Anaconda或者Miniconda什么的就不用多说了，之所以要安装这个是因为提供了很好的环境与包管理工具的同时，还配备了IPython[ shell交互工具 ]、Jupyter Lab[ "notebook plus" , 全能在线IDE ]等许多功能强大的生产工具。在这里我们需要使用的就是Anaconda自带的Jupyter service

# 二、生成notebook初始的配置文件
我们先从Windows系统说起，Win+R打开`cmd`输入：

```bash
jupyter notebook --generate-config
```

命令行将会输出`Writing default config to: C:\Users\"your_user name"\.jupyter\ jupyter_notebo ok_config.py`这告诉你，生成的默认配置文件路径在主文件夹中下的`/.jupyter/`里面，文件名是`jupyt er_notebook_config.py`。

# 三、设置密码
Windows系统里接着对命令行输入：
```bash
IPthon 
```

进入Python编辑，后输入Python代码：
```python
from jupyter_server.auth import passwd      //旧版可能是notbook.auth
passwd()
```

弹出设置密码，按照要求验证输入，最后会弹出一段你看不懂的字符，实际上是哈希密码
```Bash
Enter password:             //在这里输入密码
Verify password:             //验证你输入密码

Out[2]:'argon2:$argon2id$v=19$m=10240,t=10,p=8$pR5Xay9DBZWMrixu+LcGLw$bQovFhBJRnhsoWv+UsSfnV3asqRqT974R2YQ3iw9QjE'                        //这里是哈希密码，将这里的内容复制一下
```


# 四、修改配置文件
复制好输入`exit()`退出Python编辑，复制好内容进入`jupyter_notebook_config.py`中(可以用记事本打开)。`Ctrl+F`搜索找到下列内容 。
```python
# c.ServerApp.ip = 'localhost'
# c.ServerApp.password = ''
# c.ServerApp.port = 0
# c.ExtensionApp.open_browser = False
# c.ServerApp.allow_remote_access = True
```
将这些内容取消注释（删掉`#`）。
- `localhost`这里更改为你的IPv4地址(可以在cmd中输入`ipconfig`查看)
- `password`的位置上<span style="font-weight: bold; font-style: italic;">粘贴刚刚复制的</span>那串哈希密码。
- `port`这个更换为你比较喜欢且没有被占用的端口号，端口号范围_为0到65535。
- `open_browser = False`取消注释表示的是客户端打开服务器使用jupyter notebook或者lab的适合不会打开服务器端的窗口
- `allow_remote_access`指的是被允许远程访问

# 五、启动远程服务器
Windows记得把服务器的防火墙和实时保护关闭，在`cmd`中运行