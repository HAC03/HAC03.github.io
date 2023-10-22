var posts=["2023/03/25/主谓一致/","2023/04/10/泰勒公式/","2023/10/22/结构体/","2023/01/20/前端笔记/","2023/03/01/非谓语难点/","2023/01/20/魔改/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-cn/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网志框架","siteshot":"https://source.fomal.cc/siteshot/hexo.io.jpg"},{"name":"zero617","link":"https://zero617.top/","avatar":"https://zero617-tuchuang-1301981509.cos.ap-shanghai.myqcloud.com/%E5%9B%BE%E5%BA%8A/LKtONr.jpg","descr":"探索科技与二次元的一切"},{"name":"lmx0","link":"https://blog.mxne.cn/","avatar":"https://cdn.staticaly.com/gh/lmx0/markdown_pic@main/img/touxiang.jpg","descr":"学如逆水行舟，不进则退。","siteshot":"https://s1.vika.cn/space/2022/12/29/feddffe929fc40d795b2be689b6e6da6"},{"name":"Fomalhaut🥝","link":"https://fomal.cc/","avatar":"/assets/head.jpg","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg"},{"name":"轻笑Chuckle","link":"https://www.chuckle.top","avatar":"https://cdn1.tianli0.top/npm/chuckle-js-css/chuckle/head.webp","descr":"宁静致远,倾尘轻笑","siteshot":"https://cdn1.tianli0.top/npm/chuckle-js-css/link/chuckle1.webp"},{"name":"HCLonely","link":"https://blog.hclonely.com/","avatar":"https://cdn.jsdelivr.net/gh/HCLonely/blog.hclonely.com@latest/img/avatar.jpg","descr":"一个懒人的博客"},{"name":"Ethan.Tzy","link":"https://tzy1997.com/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志","screenshot":"https://bu.dusays.com/2022/06/01/6296ceb2e4935.jpg"},{"name":"维基萌","link":"http://www.wikimoe.com/","avatar":"https://www.gravatar.com/avatar/fbb31d99a24cf9a56c48b44dd0797d22?s=400&d=mm&r=g","descr":"萌即是正义！一名热爱acg的前端设计师的小站！"},{"name":"米米的博客","link":"https://zhangshuqiao.org","avatar":"https://gravatar.loli.net/avatar/f56980e9dc026727282a04eea02b4f4d?s=512","descr":"米米的博客！！"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img.zhheo.com/i/2022/08/19/62ff32fa28da1.png","descr":"分享设计与科技生活"},{"name":"Harris's Blog","link":"https://hassanwong.top","avatar":"https://cdn.jsdelivr.net/npm/hassan-assets/img/avatar_blog.jpg","descr":"时不我待，只争朝夕","siteshot":"https://cdn.jsdelivr.net/npm/hassan-assets/img/siteshot.jpg"},{"name":"百里飞洋の博客","link":"https://blog.meta-code.top/","avatar":"https://avatars.githubusercontent.com/u/81922999?v=4","descr":"星河滚烫，无问西东。","mail":"2158469373@qq.com"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=553344777&s=5","descr":"进一寸有进一寸的欢喜。","rss":"/atom.xml"},{"name":"海拥","link":"https://haiyong.site","avatar":"https://haiyong.site/img/favicon.png","descr":"一个乐于分享技术与快乐的博主"},{"name":"安知鱼`Blog","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"怕冷爱上雪","link":"https://blog.4t.pw/","avatar":"https://blog.4t.pw/img/favicon.webp","descr":"千里之行，始于足下"},{"name":"蝉時雨","link":"https://chanshiyu.com","avatar":"https://raw.githubusercontent.com/chanshiyucx/yoi/master/blog/iavatar.jpg","descr":"蝉鸣如雨，花宵道中"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };