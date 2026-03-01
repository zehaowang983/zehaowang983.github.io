---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hey, I'm a third year Ph.D. student at [Trustworthy Autonomous Systems Laboratory](https://tasl.ucr.edu/), University of California, Riverside. It is my honor to be advised by Prof. [Jiachen Li](https://jiachenli94.github.io/).

My research interest lies in the confluence of autonomous agents and multiagent systems, focusing on leveraging efficient multi-agent communication to develop robust algorithms for collaboratively solving perception, prediction, and decision-making challenges in real-world scenarios.

<span class='anchor' id='research-interests'></span>

# 🔥 Research Interests

- Multi-Agent Systems
- Human-Robot Interaction
- Autonoumous Driving

<span class='anchor' id='projects'></span>


#  📝 Selected Publications

<style>
.publications {
  max-width: 1000px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.pub {
  padding: 1.2rem 1.4rem;
  margin-bottom: 1.6rem;
  border-left: 3px solid #2563eb;
  background: #f9fafb;
  border-radius: 6px;
}

.pub-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.pub-title a {
  text-decoration: none;
  color: #111827;
}

.pub-title a:hover {
  text-decoration: underline;
}

.pub-authors {
  font-size: 0.95rem;
  color: #374151;
  margin-bottom: 0.2rem;
}

.pub-venue {
  font-size: 1.0rem;
  font-style: italic;
  color:rgb(13, 13, 13);
  margin-bottom: 0.6rem;
}

.pub-links a {
  margin-right: 0.8rem;
  font-size: 0.9rem;
  text-decoration: none;
  color: #2563eb;
}

.pub-links a:hover {
  text-decoration: underline;
}

.pub ul {
  margin: 0.6rem 0 0 1.2rem;
}

.pub li {
  margin-bottom: 0.4rem;
}

.pub-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.pub-logo {
  height: 16px;
  width: auto;
}

.venue {
  display: inline-block;
  padding: 0.3em 0.65em;
  margin-right: 0.3em;
  border-radius: 1000px;      /* pill shape */
  font-size: 1.0rem;
  font-weight: 600;
  line-height: 1.6;
  background-color: #f1f5f9; /* light neutral */
  color: #334155;            /* slate */
}

</style>

<div class="publications">

  <div class="pub">
    <div class="pub-title">
      <img src="/assets/images/dmw_logo.png" class="pub-logo" alt="Drive My Way logo">
      <a href="#">Drive My Way: Preference Alignment of Vision–Language–Action Models for Personalized Driving</a>
    </div>

    <div class="pub-authors">
      <strong>Zehao Wang</strong>, Huaide Jiang, Shuaiwu Dong, Yuping Wang, Hang Qiu, Jiachen Li<sup>‡</sup>
    </div>
    <span class="venue">IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2026</span>
    <div class="pub-links">
      <a href="#">🌐 Project</a>
    </div>
    <ul>
      <li>A vision–language–action (VLA) model that aligns with both long-term driving patterns and real-time preference instructions.</li>
      <li>GRPO-based post-training of the VLA model using a residual decoder and adaptive style rewards.</li>
      <li>Comprehensive closed-loop evaluations and user studies.</li>
    </ul>

  </div>

  <div class="pub">
    <div class="pub-title">
      🚘 <a href="https://cmp-cooperative-prediction.github.io/">CMP: Cooperative Motion Prediction with Multi-Agent Communication</a>
    </div>

    <div class="pub-authors">
      <strong>Zehao Wang</strong><sup>*</sup>, Yuping Wang<sup>*</sup>, Zhuoyuan Wu<sup>*</sup>, Hengbo Ma,
      Zhaowei Li, Hang Qiu<sup>‡</sup>, Jiachen Li<sup>‡</sup>
    </div>

    <span class="venue">IEEE Robotics and Automation Letters (RA-L), 2025</span>

    <div class="pub-links">
      <a href="https://cmp-cooperative-prediction.github.io/">🌐 Project</a>
    </div>

    <ul>
      <li>A practical, latency-robust framework for cooperative motion prediction, which leverages the information shared by multiple CAVs to enhance perception and motion prediction performance.</li>
      <li>Address the unified problem where CAVs share information in both perception and prediction modules.</li>
      <li>Extensive experiments and ablation studies on the OPV2V and V2V4Real to demonstrate the effectiveness.</li>
    </ul>
  </div>

</div>

<span class='anchor' id='experiences'></span>

# 📝 Service

- CVPR / ICCV reviewer
- RA-L reviewer
- ICRA reviewer

<!-- # 💻 Past Experiences

- *2023.01 - 2023.06*,   **Research Assistant**, [NYU Multimedia and Visual Computing Lab](http://mmvc.engineering.nyu.edu/) at NYU,  Advisor: [Prof. Yi Fang](https://engineering.nyu.edu/faculty/yi-fang).
- *2022.06 - 2022.08,*   **Machine Learning Engineer Intern** at [Chatkick, Inc.](https://www.linkedin.com/in/daniel-j-b7037747/) New York, NY
- *2022.01 - 2022.05*,   **Teaching Assistant** for CS-GY 6573 at NYU
- *2020.12 - 2021.05*,   **Machine Learning Engineer** at [Pingan Technology Co., Ltd.](https://www.linkedin.com/company/ping-an-technology/) Beijing, China
- *2020.06 - 2020.10*,   **Golang R&D engineer** at [ByteDance Co., Ltd.](https://www.linkedin.com/company/bytedance/) Beijing, China ![img](https://zehaowang983.github.io/images/bytedance.png) -->

<span class='anchor' id='selected-awards'></span>

# 🎖 Selected Awards

- Dean's Distinguished Fellowship (2023)
- Merit Scholarship (2021)
- Outstanding Graduates (2020)
- National Scholarship (2019)

<span class='anchor' id='educations'></span>

# 📖 Educations

- *2023.09 - now*, Ph.D. in Computer Science, University of California, Riverside
- *2021.09 - 2023.05*, M.S. in Computer Science, New York University
- *2016.09 - 2020.06*, B.S. in Software Engineering, Sun Yat-sen University

<span class='anchor' id='skills'></span>
