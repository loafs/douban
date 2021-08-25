/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'

const Usage = () => {
  return (
    <div>
      <h2>使用</h2>
      <ol>
        <li>
          <p>
            1.{' '}
            <a
              href="https://chrome.google.com/webstore/detail/%E8%B1%86%E8%8D%9A/jkhgjpbbfdgchmfhogeidbefbinialfp"
              target="_blank"
            >
              下载
            </a>
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
      <p>
        PS:
        该插件仍处于测试阶段，目前使用的去中心化数据库有可能会被懂技术的人滥用，接下来计划迁移到{' '}
        <a href="https://zh.wikipedia.org/wiki/%E6%98%9F%E9%99%85%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">
          IFPS
        </a>{' '}
        上
      </p>
      <p></p>
    </div>
  )
}
export default Usage
