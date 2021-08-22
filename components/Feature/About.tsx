/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <h2>简介</h2>
      <p>[豆荚]是一款用于收集豆瓣广播的 Chrome 插件。</p>
      <p>
        豆列是我们常用的收集、分类豆瓣广播的工具之一，但是如果广播被删除了，那么豆列中的内容也会被删除。[豆荚]则不会，因为它保存的是整段代码（或者叫
        <a
          target="_blank"
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction"
        >
          DOM
        </a>
        ），这段代码并不是保存在豆瓣，而是一个叫
        <a href="https://gun.eco" target="_blank">
          gun
        </a>{' '}
        的服务上，因此
        <span className="txt-clipping">
          即使广播删除后，你仍然可以在[豆荚]上看到它
        </span>
        （类似于{' '}
        <a href="https://archive.org" target="_blank">
          Archive
        </a>
        ）。
      </p>
      <p>
        但是这种做法也有个缺点，那就是
        <span className="txt-clipping">[豆荚]不会保存广播中存在的图片</span>
        ，图片仍然保存在豆瓣的服务器上。另外，因为保存的是当前的广播，所以
        <span className="txt-clipping">
          收藏后的广播所显示的“点赞”、“回应数量”也是保存时的状态
        </span>
        。
      </p>
      <p>
        点击
        <a target="_blank" href="/u/50116284">
          链接
        </a>
        查看效果
      </p>
      <p>
        如果你有任何使用问题，<a href="mailto:chezhe@hey.com">写邮件</a>给我
      </p>
    </div>
  )
}

export default About
