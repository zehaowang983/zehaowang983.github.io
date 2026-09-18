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

Hey, I'm a Ph.D. student at the [Trustworthy Autonomous Systems Laboratory (TASL)](https://tasl-lab.github.io/), Georgia Institute of Technology. It is my honor to be advised by Prof. [Jiachen Li](https://jiachenli94.github.io/).

My research focuses on reliable, human-centered autonomy, with an emphasis on multi-agent learning and decision-making under uncertainty. Building on efficient multi-agent communication, I develop robust algorithms for collaborative perception, prediction, and planning, enabling autonomous systems to coordinate effectively and align with human intent and preferences in real-world environments.

<span class='anchor' id='news'></span>

# 🔥 News

<!-- Newest first.
     Older entries go inside the <details> block at the bottom. -->

<ul class="news">
  <li class="news-item">
    <span class="news-date">2026.09</span>
    <span class="news-body">We will host the <a class="news-paper" href="https://human-rli.github.io/">Human-Centered Robot Learning and Interaction (HumanRLI)</a> workshop at <span class="news-venue venue--corl">CoRL 2026</span> (Austin, TX, Nov 12)</span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.09</span>
    <span class="news-body">Moved to Georgia Tech with the TASL group.</span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.09</span>
    <span class="news-body"><a class="news-paper" href="#pub-coopuq">CoopUQ</a> and <a class="news-paper" href="#pub-hiremoma">HiRe-MoMa</a> accepted to <span class="news-venue venue--corl">CoRL 2026</span></span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.06</span>
    <span class="news-body">Started my research internship at <a class="news-org" href="https://www.linkedin.com/company/boschusa"><img class="news-logo" src="/assets/images/org/bosch-symbol.svg" alt="">Bosch USA</a>, working on Vision&#8211;Language&#8211;Action models for long-horizon navigation.</span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.06</span>
    <span class="news-body"><a class="news-paper" href="#pub-navtrust">NavTrust</a> accepted to <span class="news-venue venue--iros">IROS 2026</span></span>
  </li>
  <li class="news-item">
    <span class="news-date">2026.02</span>
    <span class="news-body"><a class="news-paper" href="#pub-dmw">Drive My Way</a> accepted to <span class="news-venue venue--cvpr">CVPR 2026</span></span>
  </li>
</ul>

<span class='anchor' id='research-interests'></span>

# 🎯 Research Interests

- **Multi-Agent Systems**: communication-efficient cooperative perception, motion prediction, and decision-making
- **Autonomous Driving**: Vision–Language–Action (VLA) models, RL post-training
- **Human-Robot Interaction**: human-guided policy learning, preference alignment, social navigation

<span class='anchor' id='publications'></span>

# 📝 Selected Publications

<div class="publications">

  <!-- Teaser figures live in assets/images/pub/ (downscaled from tasl-lab.github.io).
       Figures are never cropped; add class="pub-teaser pub-teaser--cover" if you
       want a wide banner cropped to a fixed height instead. -->

  <div class="pub" id="pub-coopuq">
    <div class="pub-teaser">
      <img src="/assets/images/pub/coopuq.png" alt="CoopUQ teaser figure">
    </div>
    <div class="pub-body">
      <div class="pub-title">
        CoopUQ: Robust Multi-Robot Social Navigation via Uncertainty-Aware Cooperative Forecasting
      </div>
      <div class="pub-authors">
        <strong>Zehao Wang</strong>, <a href="https://jianpengyao.github.io/">Jianpeng Yao</a>, <a href="https://scholar.google.com/citations?user=HqULCxoAAAAJ">Yuping Wang</a>, Yiping Li, <a href="https://songard.github.io/">Jiaqi Li</a>, <a href="https://www.cs.ucr.edu/~zli538/index.html">Zhixu Li</a>, <a href="https://scholar.google.com/citations?user=Jh_nS28AAAAJ">Kanghoon Lee</a>,
        Jinfeng Wang, <a href="https://intra.ece.ucr.edu/~cong/">Cong Liu</a>, <a href="https://cs.ucr.edu/~ztan/">Zhaowei Tan</a>, <a href="http://silab.kaist.ac.kr/">Jinkyoo Park</a>, <a href="https://jiachenli94.github.io/">Jiachen Li</a><sup>&#8225;</sup>
      </div>
      <div class="pub-meta">
        <span class="venue venue--corl">CoRL 2026</span>
        <span class="venue-full">Conference on Robot Learning</span>
      </div>
      <!-- No public arXiv / project link yet — add a .pub-links block when there is one. -->
      <ul class="pub-highlights">
        <li>Cooperative occupancy forecasting through cross-robot spatiotemporal feature fusion.</li>
        <li>Constrained multi-agent RL penalizes regions predicted occupied or highly uncertain, adapting risk sensitivity under distribution shift.</li>
        <li>Outperforms baselines in prediction accuracy and safety on in-distribution and OOD Unity3D scenes, and is validated on real robots.</li>
      </ul>
    </div>
  </div>

  <div class="pub" id="pub-hiremoma">
    <div class="pub-teaser">
      <img src="/assets/images/pub/hire-moma.png" alt="Hierarchical residual policy learning teaser figure">
    </div>
    <div class="pub-body">
      <div class="pub-title">
        Hierarchical Residual Policy Learning for Real-World Mobile Manipulation with Sparse Human Guidance
      </div>
      <div class="pub-authors">
        <a href="https://zhefeigong.github.io/">Zhefei Gong</a>, <a href="https://jianghefeifei.github.io/">Hefeifei Jiang</a>, <strong>Zehao Wang</strong>, <a href="https://jiachenli94.github.io/">Jiachen Li</a><sup>&#8225;</sup>
      </div>
      <div class="pub-meta">
        <span class="venue venue--corl">CoRL 2026</span>
        <span class="venue-full">Conference on Robot Learning</span>
      </div>
      <ul class="pub-highlights">
        <li>A policy-agnostic residual policy fine-tunes a frozen base policy for real-world mobile manipulation.</li>
        <li>The residual splits into base and arm heads with unidirectional conditioning, avoiding gradient interference.</li>
        <li>Expert-guided value alignment (under 20% intervention) lifts TIAGo++ performance in ~30 min of on-robot interaction.</li>
      </ul>
    </div>
  </div>

  <div class="pub" id="pub-dmw">
    <a class="pub-teaser" href="https://dmw-cvpr.github.io/">
      <img src="/assets/images/pub/dmw.png" alt="Drive My Way teaser figure">
    </a>
    <div class="pub-body">
      <div class="pub-title">
        <img src="/assets/images/dmw_logo.png" class="pub-logo" alt="Drive My Way logo">
        <a href="https://dmw-cvpr.github.io/">Drive My Way: Preference Alignment of Vision&#8211;Language&#8211;Action Models for Personalized Driving</a>
      </div>
      <div class="pub-authors">
        <strong>Zehao Wang</strong>, <a href="https://huaidejiang.github.io/">Huaide Jiang</a>, <a href="https://www.linkedin.com/in/shuaiwu-dong-5523542a1/">Shuaiwu Dong</a>, <a href="https://scholar.google.com/citations?user=HqULCxoAAAAJ">Yuping Wang</a>, <a href="https://hangqiu.github.io/">Hang Qiu</a>, <a href="https://jiachenli94.github.io/">Jiachen Li</a><sup>&#8225;</sup>
      </div>
      <div class="pub-meta">
        <span class="venue venue--cvpr">CVPR 2026</span>
        <span class="venue-full">IEEE/CVF Conference on Computer Vision and Pattern Recognition</span>
      </div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2603.25740">&#128196; arXiv</a>
        <a href="https://dmw-cvpr.github.io/">&#127760; Project</a>
        <a href="https://github.com/tasl-lab/DMW">&#128187; Code</a>
      </div>
      <ul class="pub-highlights">
        <li>A VLA model aligned to both long-term driving patterns and real-time preference instructions.</li>
        <li>GRPO post-training with a residual decoder and adaptive style rewards.</li>
        <li>Validated through closed-loop evaluations and user studies.</li>
      </ul>
    </div>
  </div>

  <div class="pub" id="pub-navtrust">
    <a class="pub-teaser" href="https://navtrust.github.io/">
      <img src="/assets/images/pub/navtrust.png" alt="NavTrust teaser figure">
    </a>
    <div class="pub-body">
      <div class="pub-title">
        <a href="https://navtrust.github.io/">NavTrust: Benchmarking Trustworthiness for Embodied Navigation</a>
      </div>
      <div class="pub-authors">
        <a href="https://huaidejiang.github.io/">Huaide Jiang</a><sup>*</sup>, <a href="https://www.linkedin.com/in/yash612/">Yash Chaudhary</a><sup>*</sup>, <a href="https://scholar.google.com/citations?user=HqULCxoAAAAJ">Yuping Wang</a>, <strong>Zehao Wang</strong>, <a href="https://www.linkedin.com/in/raghav103/">Raghav Sharma</a>,
        <a href="https://www.linkedin.com/in/manan-mehta-100379193/">Manan Mehta</a>, <a href="https://sites.google.com/view/yangzhouwebsite">Yang Zhou</a>, <a href="https://lichao-sun.github.io/">Lichao Sun</a>, <a href="https://zhiwenfan.github.io/">Zhiwen Fan</a>, <a href="https://vztu.github.io/">Zhengzhong Tu</a>, <a href="https://jiachenli94.github.io/">Jiachen Li</a><sup>&#8225;</sup>
      </div>
      <div class="pub-meta">
        <span class="venue venue--iros">IROS 2026</span>
        <span class="venue-full">IEEE/RSJ International Conference on Intelligent Robots and Systems</span>
      </div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2603.19229">&#128196; arXiv</a>
        <a href="https://navtrust.github.io/">&#127760; Project</a>
        <a href="https://github.com/tasl-lab/NavTrust">&#128187; Code</a>
      </div>
      <ul class="pub-highlights">
        <li>A benchmark for measuring the trustworthiness of embodied navigation agents.</li>
      </ul>
    </div>
  </div>

  <div class="pub" id="pub-cmp">
    <a class="pub-teaser" href="https://cmp-cooperative-prediction.github.io/">
      <img src="/assets/images/pub/wu2024cooperative.png" alt="CMP teaser figure">
    </a>
    <div class="pub-body">
      <div class="pub-title">
        <a href="https://cmp-cooperative-prediction.github.io/">CMP: Cooperative Motion Prediction with Multi-Agent Communication</a>
      </div>
      <div class="pub-authors">
        <strong>Zehao Wang</strong><sup>*</sup>, <a href="https://scholar.google.com/citations?user=HqULCxoAAAAJ">Yuping Wang</a><sup>*</sup>, Zhuoyuan Wu<sup>*</sup>, <a href="https://www.linkedin.com/in/hengboma/">Hengbo Ma</a>,
        <a href="https://scholar.google.com/citations?user=ZhrKffYAAAAJ">Zhaowei Li</a>, <a href="https://hangqiu.github.io/">Hang Qiu</a><sup>&#8225;</sup>, <a href="https://jiachenli94.github.io/">Jiachen Li</a><sup>&#8225;</sup>
      </div>
      <div class="pub-meta">
        <span class="venue venue--ral">RA-L 2025</span>
        <span class="venue-full">IEEE Robotics and Automation Letters</span>
      </div>
      <div class="pub-links">
        <a href="https://arxiv.org/abs/2403.17916">&#128196; arXiv</a>
        <a href="https://cmp-cooperative-prediction.github.io/">&#127760; Project</a>
        <a href="https://github.com/tasl-lab/CMP">&#128187; Code</a>
        <a href="https://youtu.be/o19j7g16Xx0">&#127909; Video</a>
      </div>
      <ul class="pub-highlights">
        <li>Latency-robust cooperative motion prediction from information shared across multiple CAVs.</li>
        <li>Unifies information sharing across both the perception and prediction modules.</li>
        <li>Extensive experiments and ablations on OPV2V and V2V4Real.</li>
      </ul>
    </div>
  </div>

</div>

<span class='anchor' id='service'></span>

# 🧑‍🏫 Academic Service

- **Workshop Organizer**: [Human-Centered Robot Learning and Interaction (HumanRLI)](https://human-rli.github.io/), CoRL 2026
- **Conference Reviewer**: CVPR, ICCV, CoRL, ICRA, IROS
- **Journal Reviewer**: RA-L

<span class='anchor' id='awards'></span>

# 🎖 Selected Awards

- Dean's Distinguished Fellowship, UC Riverside (2023)
- Merit Scholarship (2021)
- Outstanding Graduate (2020)
- National Scholarship (2019)

<span class='anchor' id='education'></span>

# 📖 Education

<ul class="edu-list">

  <li class="edu-item">
    <div class="edu-date">2026.09 &ndash; now</div>
    <div class="edu-body">
      <span class="edu-degree">Ph.D. in Machine Learning</span>
      <span class="edu-school">Georgia Institute of Technology</span>
    </div>
    <img class="edu-logo" src="/assets/images/edu/gatech-mark.png" alt="Georgia Tech logo">
  </li>

  <li class="edu-item">
    <div class="edu-date">2023.09 &ndash; 2026.08</div>
    <div class="edu-body">
      <span class="edu-degree">Ph.D. Candidate in Computer Science</span>
      <span class="edu-school">University of California, Riverside</span>
    </div>
    <img class="edu-logo" src="/assets/images/edu/ucr-mark.png" alt="UC Riverside logo">
  </li>

  <li class="edu-item">
    <div class="edu-date">2021.09 &ndash; 2023.05</div>
    <div class="edu-body">
      <span class="edu-degree">M.S. in Computer Science</span>
      <span class="edu-school">New York University</span>
    </div>
    <img class="edu-logo" src="/assets/images/edu/nyu-mark.png" alt="NYU logo">
  </li>

  <li class="edu-item">
    <div class="edu-date">2016.09 &ndash; 2020.06</div>
    <div class="edu-body">
      <span class="edu-degree">B.S. in Software Engineering</span>
      <span class="edu-school">Sun Yat-sen University</span>
    </div>
    <img class="edu-logo" src="/assets/images/edu/sysu-mark.png" alt="SYSU logo">
  </li>

</ul>

<!-- # 💻 Past Experiences

- *2023.01 - 2023.06*,   **Research Assistant**, [NYU Multimedia and Visual Computing Lab](http://mmvc.engineering.nyu.edu/) at NYU,  Advisor: [Prof. Yi Fang](https://engineering.nyu.edu/faculty/yi-fang).
- *2022.06 - 2022.08,*   **Machine Learning Engineer Intern** at [Chatkick, Inc.](https://www.linkedin.com/in/daniel-j-b7037747/) New York, NY
- *2022.01 - 2022.05*,   **Teaching Assistant** for CS-GY 6573 at NYU
- *2020.12 - 2021.05*,   **Machine Learning Engineer** at [Pingan Technology Co., Ltd.](https://www.linkedin.com/company/ping-an-technology/) Beijing, China
- *2020.06 - 2020.10*,   **Golang R&D engineer** at [ByteDance Co., Ltd.](https://www.linkedin.com/company/bytedance/) Beijing, China -->
