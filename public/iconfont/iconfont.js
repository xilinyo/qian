!(function (c) {
  var t,
    h,
    e,
    l,
    i,
    n =
      '<svg><symbol id="icon-shanchu" viewBox="0 0 1024 1024"><path d="M106.666667 213.333333h810.666666v42.666667H106.666667z" fill="#3D3D3D" ></path><path d="M640 128v42.666667h42.666667V128c0-23.573333-19.093333-42.666667-42.538667-42.666667H383.872A42.496 42.496 0 0 0 341.333333 128v42.666667h42.666667V128h256z" fill="#3D3D3D" ></path><path d="M213.333333 896V256H170.666667v639.957333C170.666667 919.552 189.653333 938.666667 213.376 938.666667h597.248C834.218667 938.666667 853.333333 919.68 853.333333 895.957333V256h-42.666666v640H213.333333z" fill="#3D3D3D" ></path><path d="M320 341.333333h42.666667v384h-42.666667zM490.666667 341.333333h42.666666v384h-42.666666zM661.333333 341.333333h42.666667v384h-42.666667z" fill="#3D3D3D" ></path></symbol><symbol id="icon-tianjia" viewBox="0 0 1024 1024"><path d="M801.171 483.589H544V226.418c0-17.673-14.327-32-32-32s-32 14.327-32 32v257.171H222.83c-17.673 0-32 14.327-32 32s14.327 32 32 32H480v257.17c0 17.673 14.327 32 32 32s32-14.327 32-32v-257.17h257.171c17.673 0 32-14.327 32-32s-14.327-32-32-32z" fill="" ></path></symbol><symbol id="icon-taideng" viewBox="0 0 1024 1024"><path d="M844.885333 554.666667L776.32 177.706667c-0.533333-2.858667-5.525333-7.04-8.490667-7.04H277.482667c-3.029333 0-7.957333 4.096-8.490667 7.04L200.448 554.666667h644.437333zM227.029333 170.069333C231.232 146.816 253.824 128 277.482667 128h490.368c23.637333 0 46.272 18.986667 50.453333 42.069333l70.058667 385.194667c4.202667 23.253333-11.562667 42.069333-35.2 42.069333H192.170667c-23.637333 0-39.36-18.986667-35.178667-42.069333l70.058667-385.194667z" fill="#3D3D3D" ></path><path d="M490.666667 576l42.666666 0 0 341.333333-42.666666 0 0-341.333333Z" fill="#3D3D3D" ></path><path d="M661.333333 618.666667h42.666667v128h-42.666667zM256 896h512v42.666667H256z" fill="#3D3D3D" ></path></symbol><symbol id="icon-kongtiao-" viewBox="0 0 1024 1024"><path d="M918 681.6H106c-23.2 0-42-18.8-42-42V215.1c0-23.2 18.8-42 42-42h812c23.2 0 42 18.8 42 42v424.5c0 23.2-18.8 42-42 42zM106 197.3c-9.8 0-17.8 8-17.8 17.8v424.5c0 9.8 8 17.8 17.8 17.8h812c9.8 0 17.8-8 17.8-17.8V215.1c0-9.8-8-17.8-17.8-17.8H106z" fill="#A0A0A0" ></path><path d="M76.1 551.8h871.8V576H76.1z" fill="#9FA0A0" ></path><path d="M866.4 318.4H738.8c-0.4 0-0.8-0.3-0.8-0.8v-22.7c0-0.4 0.3-0.8 0.8-0.8h127.7c0.4 0 0.8 0.3 0.8 0.8v22.7c-0.1 0.4-0.5 0.8-0.9 0.8zM500 847.8v-79.2c0-0.4 0.3-0.8 0.7-0.8h22.7c0.4 0 0.8 0.3 0.8 0.8v79.2c0 0.4-0.3 0.8-0.8 0.8h-22.7c-0.4-0.1-0.7-0.4-0.7-0.8zM910.7 852.6l-67.4-67.4c-0.3-0.3-0.3-0.8 0-1.1l16.1-16.1c0.3-0.3 0.8-0.3 1.1 0l67.4 67.4c0.3 0.3 0.3 0.8 0 1.1l-16.1 16.1c-0.4 0.3-0.9 0.3-1.1 0zM294.4 843.8l43.6-75.6c0.2-0.4 0.7-0.5 1-0.3l19.7 11.4c0.4 0.2 0.5 0.7 0.3 1l-43.6 75.6c-0.2 0.4-0.7 0.5-1 0.3l-19.7-11.4c-0.3-0.2-0.5-0.7-0.3-1zM731.6 843.8L688 768.2c-0.2-0.4-0.7-0.5-1-0.3l-19.7 11.4c-0.4 0.2-0.5 0.7-0.3 1l43.6 75.6c0.2 0.4 0.7 0.5 1 0.3l19.7-11.4c0.3-0.2 0.5-0.7 0.3-1zM98.2 835.5l67.4-67.4c0.3-0.3 0.8-0.3 1.1 0l16.1 16.1c0.3 0.3 0.3 0.8 0 1.1l-67.4 67.4c-0.3 0.3-0.8 0.3-1.1 0l-16.1-16.1c-0.3-0.4-0.3-0.9 0-1.1z" fill="#A0A0A0" ></path></symbol><symbol id="icon-yushiyongpin" viewBox="0 0 1024 1024"><path d="M707 441.5H78.5c-8.8 0-16 7.2-16 16v3.3c0 8.8 7.2 16 16 16H707v-35.3zM945.5 441.5H852v35.3h93.5c8.8 0 16-7.2 16-16v-3.3c0-8.8-7.2-16-16-16z"  ></path><path d="M897.5 442H852v32h45.5v92.2c0 43.5-17.1 84.6-48.1 115.6s-72.1 48.1-115.6 48.1H293.3c-43.5 0-84.6-17.1-115.6-48.1s-48.1-72.1-48.1-115.6V474H707v-32H129.5c-17.7 0-32 14.3-32 32v92.2c0 107.7 88.1 195.8 195.8 195.8h440.5c107.7 0 195.8-88.1 195.8-195.8V474c-0.1-17.6-14.4-32-32.1-32zM129.5 474"  ></path><path d="M293.3 741.2H290c-8.8 0-16 7.2-16 16V778c0 8.8 7.2 16 16 16h3.3c8.8 0 16-7.2 16-16v-20.9c0-8.7-7.2-15.9-16-15.9z"  ></path><path d="M751.6 741.2h-3.3c-8.8 0-16 7.2-16 16V778c0 8.8 7.2 16 16 16h3.3c8.8 0 16-7.2 16-16v-20.9c0-8.7-7.2-15.9-16-15.9z"  ></path><path d="M168.3 475.1c-8.8 0-16-7.2-16-16v-228c0-9.4 7.7-17.1 17.1-17.1h43c33.1 0 60.1 27 60.1 60.1 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-15.5-12.6-28.1-28.1-28.1h-28.1v213.1c0 8.8-7.2 16-16 16zM848.4 618H706.6c-9.4 0-17.1-7.7-17.1-17.1V427.1c0-9.4 7.7-17.1 17.1-17.1h141.8c9.4 0 17.1 7.7 17.1 17.1v173.8c0 9.4-7.7 17.1-17.1 17.1z m-126.9-32h112V442h-112v144z"  ></path></symbol><symbol id="icon-yinshuiji-" viewBox="0 0 1024 1024"><path d="M860.671812 725.568541h-747.395811l-1.505328-2.634326c-39.891216-67.363469-61.342154-144.511577-61.342154-223.165013 0-55.320838 10.16097-109.136347 30.482911-160.31753l1.505329-3.38699H891.907387l1.505329 3.38699c19.945608 50.804851 30.482911 104.996692 30.482911 160.31753 0 78.653436-21.074605 155.801544-61.342154 223.165013l-1.881661 2.634326z m-740.62183-11.289967H854.274164c38.009555-64.729144 57.955164-138.866593 57.955163-214.509372 0-52.686512-9.408306-103.867696-28.224917-152.414553h-794.437339c-18.816612 48.546858-28.224917 99.728041-28.224917 152.414553 0.376332 75.642778 20.698273 149.780228 58.707828 214.509372z"  ></path><path d="M643.151782 716.160235v-7.526644c10.537302 0 19.192944-8.655641 19.192944-19.192944v-55.69717c0-10.537302-8.655641-19.192944-19.192944-19.192944h-312.355751c-10.537302 0-19.192944 8.655641-19.192944 19.192944v55.69717c0 10.537302 8.655641 19.192944 19.192944 19.192944v7.526644c-14.676957 0-26.719588-12.042631-26.719589-26.719588v-55.69717c0-14.676957 12.042631-26.719588 26.719589-26.719589h312.355751c14.676957 0 26.719588 12.042631 26.719589 26.719589v55.69717c0.376332 14.676957-11.666299 26.719588-26.719589 26.719588zM767.717751 479.07093c-17.311283 0-31.235575-13.924293-31.235575-31.235575 0-17.311283 13.924293-31.235575 31.235575-31.235576s31.235575 13.924293 31.235575 31.235576c0 17.311283-13.924293 31.235575-31.235575 31.235575z m0-54.944506c-13.171628 0-23.708931 10.537302-23.708931 23.708931s10.537302 23.708931 23.708931 23.70893 23.708931-10.537302 23.70893-23.70893-10.537302-23.708931-23.70893-23.708931z"  ></path></symbol><symbol id="icon-keting-1" viewBox="0 0 1024 1024"><path d="M869.2 392.5H960l-20.5-213.7H761.1l-20.5 213.7h90.9v240.6h-50.8v180.8h139.2V633.1h-50.8V392.5z m-56.7-157.2h75.7l9.7 100.7h-95.1l9.7-100.7z m50.9 522.1h-26.2v-67.8h26.2v67.8z"  ></path><path d="M721.5 565.3H699v-67.2c0-46.7-38-84.8-84.8-84.8H218.7c-46.7 0-84.8 38-84.8 84.8v67.2h-22.5c-26 0-47.1 21.1-47.1 47.1v156c0 26 21.1 47.1 47.1 47.1h610.1c26 0 47.1-21.1 47.1-47.1v-156c0-26-21.1-47.1-47.1-47.1z m-78.9-67.2v67.2H583v92.6H444.7v-188h169.6c15.6-0.1 28.3 12.6 28.3 28.2z m-452.1 0c0-15.6 12.7-28.3 28.3-28.3h169.5v188H250.1v-92.6h-59.6v-67.1z m521.6 260.8H120.9V621.8H134v0.1h59.6v92.6h445.9v-92.6h59.6v-0.1h13.1v137.1z"  ></path></symbol></svg>',
    o = (o = document.getElementsByTagName('script'))[
      o.length - 1
    ].getAttribute('data-injectcss'),
    v = function (c, t) {
      t.parentNode.insertBefore(c, t);
    };
  if (o && !c.__iconfont__svg__cssinject__) {
    c.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (c) {
      console && console.log(c);
    }
  }
  function a() {
    i || ((i = !0), e());
  }
  function d() {
    try {
      l.documentElement.doScroll('left');
    } catch (c) {
      return void setTimeout(d, 50);
    }
    a();
  }
  (t = function () {
    var c,
      t = document.createElement('div');
    (t.innerHTML = n),
      (n = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (t = t),
        (c = document.body).firstChild ? v(t, c.firstChild) : c.appendChild(t));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((h = function () {
            document.removeEventListener('DOMContentLoaded', h, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', h, !1))
      : document.attachEvent &&
        ((e = t),
        (l = c.document),
        (i = !1),
        d(),
        (l.onreadystatechange = function () {
          'complete' == l.readyState && ((l.onreadystatechange = null), a());
        }));
})(window);
