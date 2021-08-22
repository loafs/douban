/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'

const Usage = () => {
  return (
    <div>
      <h2>使用</h2>
      <ol>
        <li>
          <p>
            1. <a href="/jkhgjpbbfdgchmfhogeidbefbinialfp_main.crx">下载</a>
            并安装插件
          </p>
        </li>
        <li>
          <p>2. 点击插件图标，创建豆荚（这一步很重要）</p>
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
          <p>
            5. 点击插件图标，点击豆列名称，跳转到豆列页面(
            <a href="/u/50116284" target="_blank">
              示例链接
            </a>
            )
          </p>
        </li>
      </ol>
      <p>
        如果你有任何使用问题，<a href="mailto:chezhe@hey.com">写邮件</a>给我
      </p>
    </div>
  )
}
export default Usage
