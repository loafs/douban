/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'

class Home extends React.Component {
  render() {
    return (
      <Layout title="豆荚">
        <div className="home-page" style={{ margin: '0 auto', width: 800 }}>
          <h2>简介</h2>
          <p>[豆荚]是一款用于收集豆瓣广播的 Chrome 插件。</p>
          <p>
            豆列是我们常用的收集、分类豆瓣广播的工具之一，但是如果广播被删除了，那么豆列中的内容也会被删除。[豆荚]则不会，因为它保存的是整段代码（或者叫
            <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction">
              DOM
            </a>
            ），这段代码并不是保存在豆瓣，而是一个叫{' '}
            <a href="https://gun.eco">gun</a> 的服务上，因此
            <span className="txt-clipping">
              即使广播删除后，你仍然可以在[豆荚]上看到它
            </span>
            （类似于 <a href="https://archive.org">Archive</a>）。
          </p>
          <p>
            但是这种做法也有个缺点，那就是
            <span className="txt-clipping">[豆荚]不会保存广播中存在的图片</span>
            ，图片仍然保存在豆瓣的服务器上，而豆瓣服务器禁止了其他网站引用他们的图片。另外，因为保存的是当前的广播，所以
            <span className="txt-clipping">
              收藏后的广播所显示的“点赞”、“回应数量”也是保存时的状态
            </span>
            。
          </p>
          <p>效果参见下图</p>
          <Image
            src="/sample-collect.png"
            alt="Sample Collect"
            width="450"
            height="300"
            className="sample"
          />
          <p>
            真实效果可以点击 <a href="/u/50116284">链接</a>
            查看，如果未显示内容，刷新一下
          </p>
          <h2>使用</h2>
          <ol>
            <li>
              <p>
                1. <a href="/doujia.crx">下载</a>并安装插件
              </p>
            </li>
            <li>
              <p>2. 点击插件图标，创建豆列，输入 Enter 键完成</p>
              <Image
                src="/create-doujia.png"
                alt="Sample Collect"
                width="200"
                height="300"
                className="sample"
              />
            </li>
            <li>
              <p>
                3. 登录状态下，刷新豆瓣页面，在每条广播下会显示“收藏到[豆荚]”
                <Image
                  src="/collect-to.png"
                  alt="Sample Collect"
                  width="450"
                  height="180"
                  className="sample"
                />
              </p>
            </li>
            <li>
              <p>4. 点击“收藏到[豆荚]”，会出现选择框，选择豆列</p>
              <Image
                src="/choose-doujia.png"
                alt="Sample Collect"
                width="300"
                height="280"
                className="sample"
              />
            </li>
            <li>
              <p>5. 点击插件图标，点击豆列名称，跳转到豆列页面</p>
            </li>
          </ol>
        </div>
      </Layout>
    )
  }
}

export default Home
