(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(s,a,t){"use strict";t.r(a);var n=t(41),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql部署"}},[s._v("#")]),s._v(" MySQL部署")]),s._v(" "),t("p",[s._v("首先 先下载"),t("a",{attrs:{href:"https://gitee.com/himitzh0730/hoj-deploy/tree/master",target:"_blank",rel:"noopener noreferrer"}},[s._v("hoj-deploy"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/himitzh0730/hoj-deploy.git "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hoj-deploy/src/mysql\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("当前文件夹为打包"),t("code",[s._v("hoj-mysql")]),s._v("镜像的相关文件，只需将这些文件复制到同一个文件夹内，之后执行以下命令进行打包成镜像。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker build -t hoj-mysql "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("docker run启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -d --name hoj-mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v ./hoj/data/mysql/data:/var/lib/mysql "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hoj123456"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Asia/Shanghai"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NACOS_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NACOS_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hoj123456 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nhoj-mysql\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#registry.cn-shenzhen.aliyuncs.com/hcode/hoj_database")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("docker-compose 启动")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("version: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\nservices:\n  hoj-mysql:\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#image: registry.cn-shenzhen.aliyuncs.com/hcode/hoj_database")]),s._v("\n    image: hoj-mysql\n    container_name: hoj-mysql\n    restart: always\n    volumes:\n      - ./hoj/data/mysql/data:/var/lib/mysql\n    environment:\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hoj123456 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root账号的密码")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Asia/Shanghai\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NACOS_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要初始化nacos数据库的管理员账号")]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NACOS_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hoj123456 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nacos管理员账号的密码")]),s._v("\n    ports:\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3306:3306"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如果有自定义网络可以类似添加如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    networks:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      hoj-network:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        ipv4_address: 172.20.0.3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"文件介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件介绍"}},[s._v("#")]),s._v(" 文件介绍")]),s._v(" "),t("h3",{attrs:{id:"_1-bcrypt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-bcrypt"}},[s._v("#")]),s._v(" 1. bcrypt")]),s._v(" "),t("p",[s._v("此文件为go打包的可执行文件，作用是生成经过bcrypt加密的对应"),t("strong",[s._v("nacos管理员账号的密码")]),s._v("，然后生成对应的插入sql语句，代码内容如下：")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"flag"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"golang.org/x/crypto/bcrypt"')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"os"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加密密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("HashAndSalt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\thash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" bcrypt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("GenerateFromPassword")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pwd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bcrypt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MinCost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hash"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" username "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" filePath "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\n\tflag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("StringVar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos登录账号"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tflag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("StringVar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nacos登录密码"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tflag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("StringVar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("filePath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"filepath"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./nacos-data.sql"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sql脚本的文件夹路径"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//解析命令行参数")]),s._v("\n\tflag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Parse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tbcrtpyPassword "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("HashAndSalt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("byte")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tsql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"use `nacos`;\\nINSERT INTO users (username, password, enabled) VALUES ('%s', '%s', TRUE);\\nINSERT INTO roles (username, role) VALUES ('%s', 'ROLE_ADMIN');\"")]),s._v("\n\tformatSql "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Sprintf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bcrtpyPassword"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tfileObj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("OpenFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filePath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("O_APPEND"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("O_CREATE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("O_WRONLY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0111")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"err:"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("defer")]),s._v(" fileObj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfileObj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("WriteString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formatSql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("h3",{attrs:{id:"_2-hoj-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-hoj-sql"}},[s._v("#")]),s._v(" 2. hoj.sql")]),s._v(" "),t("p",[s._v("此文件为hoj数据库的生成脚本及相关表数据的初始化")]),s._v(" "),t("h3",{attrs:{id:"_3-nacos-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-nacos-sql"}},[s._v("#")]),s._v(" 3. nacos.sql")]),s._v(" "),t("p",[s._v("此文件为nacos数据库的生成脚本及相关表数据的初始化")]),s._v(" "),t("h3",{attrs:{id:"_4-run-sh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-run-sh"}},[s._v("#")]),s._v(" 4. run.sh")]),s._v(" "),t("p",[s._v("此文件为shell脚本，用于执行sql脚本文件的执行，生成hoj，nacos数据库及插入相关数据")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORK_PATH")]),s._v("/bcrypt --username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NACOS_USERNAME")]),s._v(" --password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NACOS_PASSWORD")]),s._v(" --filepath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORK_PATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE_2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmysql -uroot -p"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_ROOT_PASSWORD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\nsystem echo '================Start create database hoj====================';\nsource "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORK_PATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE_0")]),s._v(";\nsystem echo '================Start create database nacos==================';\nsource "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORK_PATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE_1")]),s._v(";\nsystem echo '================Start insert user into nacos=================';\nsource "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORK_PATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FILE_2")]),s._v(";\nsystem echo '=====================Everything is ok!=======================';\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h3",{attrs:{id:"_5-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-dockerfile"}},[s._v("#")]),s._v(" 5. Dockerfile")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义工作目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" WORK_PATH /usr/local/work\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义会被容器自动执行的目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" AUTO_RUN_DIR /docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("entrypoint"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("initdb.d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义sql文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FILE_0 hoj.sql\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FILE_1 nacos.sql\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" FILE_2 nacos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data.sql\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义shell文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" INSTALL_DATA_SHELL run.sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义生成nacos-data.sql的文件名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" NACOS_DATA_SHELL bcrypt\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" NACOS_USERNAME=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("NACOS_USERNAME"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" NACOS_PASSWORD=$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("NACOS_PASSWORD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./$FILE_0 $WORK_PATH/\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./$FILE_1 $WORK_PATH/\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./$INSTALL_DATA_SHELL $AUTO_RUN_DIR/\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./bcrypt  $WORK_PATH/\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod a+x $WORK_PATH/bcrypt\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" $WORK_PATH/$FILE_2\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod +777 $WORK_PATH/$FILE_2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给执行文件增加可执行权限")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" chmod a+x $AUTO_RUN_DIR/$INSTALL_DATA_SHELL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);